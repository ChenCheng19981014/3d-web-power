import {
    MachineWidthMap,
    MachineNameMap,
    mechineTypeStyle,
    machineReverseMapFn,
} from "./const";
import * as THREE from "three";
import Engine from "run-scene-v2";
const { RunScene, Utils } = Engine;

// 声明变量
let camera, scene, controls, renderer, dom, t, modelEx;

// 存取资源
const setAssets = (assets) => {
    camera = assets.camera;
    scene = assets.scene;
    controls = assets.controls;
    renderer = assets.renderer;
    dom = assets.engineDom;
    t = assets.t;
};

// 整体场景事件
function Change(runScene, onDone) {
    /* 拿资源 分解资源 
          this挂载至t上 
          runScene上的其他Api可以直接runScene.直接使用
      */

    setAssets({ ...runScene.assetsEx.get(), t: this, runScene });
    // 挂载runScene
    t.runScene = runScene;

    modelEx = runScene.modelEx;

    // 解析数据
    this.resolveJson = new ResolveJson();

    // 动画
    this.cameraAnima = new CameraAnima();

    // 设置事件
    this.events = new Events();

    // 添加精灵图
    this.addSprite = new AddSprite();

    this.addSprite.init();

    // 测试孪生
    // this.twin = new Twin();

    // 加载结束
    runScene.on("complete", () => {
        // 基本的场景配置
        controls.maxPolarAngle = Math.PI / 2 - 0.1;
        // 最大缩放值
        controls.maxDistance = 1000;

        controls.screenSpacePanning = false;
        // 回调加载结束
        onDone();
    });
    // 销毁
    this.dispose = () => runScene.dispose();
}

// 解析 数据
class ResolveJson {
    // glb加载器
    loader = t.runScene.loaderer.gltf;
    // 电池模组 电池数量
    batteryGroupInfo = {
        // 0.5c
        "Gsy_Battery_HJESLFP-38240": {
            num: 19,
            name: "05C",
        },
        // 1C
        "Gsy_Battery_HJESLFP-76120": {
            num: 9,
            name: "1C",
        },
    };
    // 设置 模型的位置信息配置
    machinePointX = {};
    JZX_Position = {
        x: 0,
        z: 0,
        baseZ: 5,
        baseX: 0,
    };
    // 模型数组
    showMachineList = [];
    // 基本 模型
    baseMachineMap = {};
    // 其他 模型
    otherMachineMap = {};
    // 机器映射表
    MachineNameMap = MachineNameMap;
    // 原始数据
    sceneJson = [];
    // 模型存放位置
    isPushLeft = false;

    // 初始化
    init(json) {
        // 无数据则不执行
        if (!json) return;

        // 预处理json
        this.beforeDealWithJson(json);

        // 解析初始数据
        this.dealWithJson();

        // 添加模型
        this.addModel();
    }

    //  1.0 预处理json---取初始的数据 form_Json 表单数据
    beforeDealWithJson(json) {
        // console.log('一手最新的数据:', JSON.stringify(json), json);
        // Object.keys(json).map((str) => console.log(JSON.stringify(json[str])));
        // 清空场景
        this.clearScene(json);
    }

    // 1.1 重置所有的数据--- 先进行清空场景
    clearScene(json) {
        // 删除之前的模型 清空后再进行加载放置
        this.showMachineList &&
            this.showMachineList.map((mode) => modelEx.remove(mode.model));
        // 添加场景前先置空數組
        this.showMachineList = [];
        // 清空之前的所有 应该显示的模型信息---基础
        this.baseMachineMap = {};
        // 清空之前的所有 应该显示的模型信息---其他
        this.otherMachineMap = {};
        // 重置位置
        this.machinePointX = {
            js: 0,
            os: 0,
            baseWidth: 1,
        };
        this.JZX_Position = {
            x: 0,
            z: 0,
            baseZ: 5,
            baseX: 0,
        };

        // 数量字符串转number 数据处理
        json.filter((m) => (m.num = Number(m.num)));
        // 转移数据
        this.sceneJson = json;
        // 查看清空了那些数据
        // this.sceneJson.map(m => {
        //     console.log(m.name, m.num, m, 'm.name');
        // });
    }

    // 2.0 处理 存储 基础的模型baseMap  其他的模型otherMap
    dealWithJson() {
        // 取名称和数量进行    存储处理
        this.sceneJson.map((i) => {
            const { name, num } = i;
            /*  
                      取出映射表中对应的机器 名称 和 宽度
                        有对应名称的即需要进行展示的基础机器模型 
                            (新建表baseMap 存放 name名称、width宽度、num数量、formName原表单名称 )
                              无对应的名称other机器则不展示  即存储即可
                                最后进行计算电池模型存放的支架个数 以及每台支架上电池数量
                  */
            const newName = MachineNameMap[name];
            if (newName && newName !== "BMS" && newName !== "EMS") {
                const { width, len, height, power, type } =
                    MachineWidthMap[newName] || {};
                this.baseMachineMap[newName] = {
                    name: newName,
                    width,
                    length: len,
                    num: num || 1,
                    formName: name,
                    power: power || null,
                    type: type || null,
                    height,
                };
            } else {
                this.otherMachineMap[name] = { name, num: num || 1 };
            }
        });
        // 计算商用 0.5C 1C 支架上存放多少
        this.computeNum(this.baseMachineMap, this.otherMachineMap);
    }

    // 2.1 计算 电池模组 支架上摆放个数
    computeNum(baseMap, otherMap) {
        const isHas = Object.keys(otherMap).includes("支架", "高压盒");
        const zJ_num = otherMap["支架"].num;
        const gYH_num = otherMap["高压盒"].num;
        if (!(isHas && zJ_num === gYH_num)) return;
        /**
         *  特殊处理电池模组的
         *    针对基本数据中的电池模组处理(且只有一种的)
         *      根据支架数量得出并替换原电池模组的数量
         *        计算出每个支架可存放多少个 (隐藏多少个)
         */
        Object.values(baseMap).map((item) => {
            // 电池模组的数量 和 对应的名称
            const { formName, num } = item;
            if (formName.indexOf("电池模组") === -1) return;
            // 电池总数
            item["battery_Total_Num"] = num;
            // 设置电池支架数量
            item.num = gYH_num;
            // 模组电池型号
            const { name, battery_Total_Num, num: machineNum } = item;
            // 支架上最多可以放多少个--- 去除对应的 1C-(9) 或 0.5C-(19)
            const count = t.resolveJson.batteryGroupInfo[name].num;
            // 每个支架上存放几个  电池总数 / 支架总数
            const everyOne = parseInt(battery_Total_Num / machineNum);
            // 隐藏数
            const hide_num = count - everyOne;
            // 每个支架隐藏多少个
            item["battery_Hide_Num"] = hide_num < 0 ? count : hide_num;
        });

        /**
         * 基本和其他设备
         */
        console.log("基本的模型数据:", this.baseMachineMap);
        console.log("其他的模型数据:", this.otherMachineMap);
    }

    // 3.0 遍历添加---模型(依次添加)
    addModel() {
        const names = Object.keys(this.baseMachineMap);

        const fn = async (index) => {
            const name = names[index];
            // 模型添加完毕后 相机开始聚焦事件
            if (!name) {
                // t.cameraAnima.adjustPosition();
                return;
            } else {
                // 存储对应的模型----glb
                // console.log(name, "name");
                this.baseMachineMap[name]["model"] = await this.getModel(name);
                // 添加至场景  (包含克隆)
                this.modelToScene(name);
                await fn(++index);
            }
            return 0;
        };
        fn(0).then();


    }

    // 3.1 解析模型放入组中
    async getModel(name) {
        const loaderModel = await this.loader.load(
            // `https://test2-1303915342.cos.ap-shanghai.myqcloud.com/guang_fu/${name}.glb`,
            './assets/LFP_9kWhHV.lt',
            {
                addToScene: false,
            }
        );
        const { models } = loaderModel;
        // console.log("models", loaderModel, models);
        const model = this._getModel(models);
        model.visible = false;
        model.name = `${name}`;
        return model;
    }

    // 获取 模型
    _getModel(models) {
        if (models.length === 1) return models[0];
        const group = new THREE.Group();
        group.add(...models);
        return group;
    }

    // 添加至场景
    modelToScene(name) {
        // 进行配置基础的模型信息(模型数量、电池隐藏数量、克隆模型等)
        const item = this.baseMachineMap[name];
        const { num, model, battery_Hide_Num, length } = item;

        // 克隆模型组
        let cloneModelArr = [];
        new Array(num || 1).fill("").map((_, index) => {
            const m = modelEx.clone(model);
            const map = { model: m, width: item.width, length };
            // 存储显示模型的列表
            this.showMachineList.push(map);
            // 添加模型
            modelEx.add(m);
            // 克隆的模型数组
            cloneModelArr.push(map);

            console.log('克隆的模型有哪一些:', m.name, m);
            // 有隐藏电池数量字段的---- 隐藏显示 电池数量
            if (!battery_Hide_Num) return;
            // 基本的电池信息以及对应的模型
            const batteryGroupInfo = {
                modes: m,
                battery_Hide_Num,
                name,
            };
            // 隐藏显示电池数量
            this.hideBattery(batteryGroupInfo);

        });



        // 遍历设置位置
        cloneModelArr.map((mode) => t.resolveJson.setPosition(mode));

        // 添加顶部标牌
        t.addSprite.addTipsSprite(cloneModelArr, item);
        // 换左右位置
        // t.resolveJson.isPushLeft = !t.resolveJson.isPushLeft;
    }

    // 隐藏显示 电池数量
    hideBattery(batteryGroupInfo) {
        const { modes, battery_Hide_Num } = batteryGroupInfo;
        // 电池----隐藏
        modes.children.map((mode) => {
            const { name } = mode;
            const num1 = name.lastIndexOf("电池") + 1;
            const num2 = name.slice(num1 + 1, num1 + 3);
            const num3 = num2.replace("_", "");
            const num4 = Number(num3);
            if (!(num4 <= battery_Hide_Num) || !num4) return;
            mode.visible = false;
        });
    }

    // 设置位置 cc 总
    setPosition(mode) {
        const { model } = mode;
        const { name } = model;
        // 集装箱的特殊处理
        if (name.indexOf("container") !== -1) this.setJzxPosition(mode);
        else this.setNormal(mode);
    }

    //  普通模型设置位置
    setNormal(mode) {
        const { model, width } = mode;
        // 位置的左右累计添加
        let p =
            (this.isPushLeft ? -1 : 1) * (width / 2 + this.machinePointX.baseWidth) +
            this.machinePointX[this.isPushLeft ? "os" : "js"];
        this.machinePointX[this.isPushLeft ? "os" : "js"] =
            p + (width / 2) * (this.isPushLeft ? -1 : 1);
        // 设置位置并显示
        model.position.x = p;
        // 所有的模型向前一步
        model.position.z += 8;
        // 显示出来
        model.visible = true;
    }

    //  特殊处理(集装箱)位置
    setJzxPosition(mode) {
        const { model, width, length } = mode;
        // 每个都旋转-90度
        model.rotation.set(0, (-90 / 180) * Math.PI, 0);
        // 平移的
        let positionZ = -1 * (width / 2) + this.JZX_Position.z;
        // 累加平移
        this.JZX_Position.z += -1 * (width + this.JZX_Position.baseZ);
        // 设置点位
        model.position.z = positionZ;
        model.position.x = length / 2;
        model.visible = true;
        // 并列显示
        // model.position.z = -1 * this.JZX_Position.baseZ;
        // this.JZX_Position.x += length + this.JZX_Position.baseX;
        // this.JZX_Position.z += width + this.JZX_Position.baseZ;
    }
}

// 添加精灵图
class AddSprite {
    overallDom;
    reversMachineMap = {};
    borderNameMap = {
        逆变器: { name: "逆变器", flag: " ", info: "power" },
        变压器: { name: "隔离变压器", flag: " *", info: "num" },
        集装箱: { name: "集装箱", flag: " ", info: "type" },
        汇流: { name: "控制汇流箱", flag: " *", info: "num" },
        电池: { name: "电池簇", flag: " *", info: "num" },
    };

    init() {
        this.overallDom = document.querySelector(".three-scene");
        // 翻转设备映射表
        this.reversMachineMap = machineReverseMapFn(MachineNameMap);
    }

    addTipsSprite(modelGroup, item) {
        const { height, formName } = item;
        if (formName.includes("操作系统")) return;
        // 位置获取
        let x = 0,
            y = 0,
            z = 0;
        modelGroup.map((i) => {
            x = x + i.model.position.x;
            y = y + i.model.position.y;
            z = z + i.model.position.z;
        });
        let dom = document.querySelector(".watch-cards").cloneNode(true);
        this.overallDom.appendChild(dom);
        // 修改样式
        Object.keys(mechineTypeStyle).map((i) => {
            if (item.formName.indexOf(i) !== -1) {
                const icon = dom.childNodes[0].childNodes[0].childNodes[0];
                icon.classList.add(mechineTypeStyle[i]);
                const txt = dom.childNodes[0].childNodes[1].childNodes[0];
                txt.innerHTML = `[ ${this.borderNameMap[i].name} ]${this.borderNameMap[i].flag
                    }${item[`${this.borderNameMap[i].info}`]}`;
            }
        });
        // 看板框
        dom.classList.add("tips-sprite");
        let sprite = Utils.domTo3DSprite(dom);
        sprite.scale.set(0.08, 0.08, 0.08);
        sprite.position.set(
            x / modelGroup.length,
            y / modelGroup.length + height * 12,
            z / modelGroup.length
        );
        t.runScene.modelEx.add(sprite);
    }
}

// 动画
class CameraAnima {
    // 存储数据
    positionX = {};
    // 调整视角
    adjustPosition() {
        // 清空上次位置
        this.positionX = {
            min: 0,
            max: 0,
        };
        let machinePositionXArr = [];
        if (!Object.values(t.resolveJson.showMachineList)) return;
        Object.values(t.resolveJson.showMachineList).map((mode) => {
            const { model } = mode;
            const { position } = model;
            const { x } = position;
            machinePositionXArr.push(x);
        });
        // 取最大 最小值进行计算中心点
        this.positionX.min = Math.min(...machinePositionXArr);
        this.positionX.max = Math.max(...machinePositionXArr);
        // 相机移动
        this.moveCamera();
    }

    // 相机移动
    moveCamera() {
        // 取中心点
        const { min, max } = this.positionX;
        // 长度
        const length = Math.abs(min) + Math.abs(max);
        // 视角动态基数
        const base = (length - 80) / 110;
        // 中心
        const center = (min + max) / (3 + base);

        // const center = (min + max) / 3;
        // 相机位置(原本)
        // const cameraP = {
        //   x: min - max * 1.2,
        //   y: length - length * 0.2,
        //   z: 150,
        // };

        // 写死
        const cameraP = {
            x: -40,
            y: 100,
            z: 100,
        };

        const ty = 10;

        // 动画
        Utils.anima(
            {
                ...camera.position,
                tx: t.runScene.assetsEx.controls.target.x,
                ty: t.runScene.assetsEx.controls.target.y,
            },
            {
                ...cameraP,
                tx: center,
                ty: ty,
            },
            1.5,
            (data) => {
                t.runScene.assetsEx.camera.position.set(data.x, data.y, data.z);
                t.runScene.assetsEx.controls.target.set(data.tx, data.ty, 0);
                t.runScene.assetsEx.controls.update();
            }
        );
    }
}

// 基本事件
class Events {
    constructor() {
        controls.addEventListener("start", this.controlStart);
        t.runScene.cb.events.pointer.down.add("pointerDown", this.mouseDown);
        t.runScene.cb.events.pointer.up.add("pointerUp", this.mouseUp);
        t.runScene.cb.events.mouse.up.add("mouseUp", this.mouseUp);
        t.runScene.cb.events.mouse.move.add("mouseMove", () => { });
    }
    downPosition = { x: 0, y: 0 };
    closeAnimaAtStart = {};

    mouseDown = (event) => {
        this.downPosition = {
            x: event.offsetX,
            y: event.offsetY,
        };
    };

    mouseUp = (event) => {
        if (event.button === 2) return;
        const ux = event.offsetX;
        const uy = event.offsetY;
        const { x, y } = this.downPosition;
        // 当点击的位置和点击后的位置一致时就会触发
        ux === x && uy === y && this.triggerClick(event);
    };

    triggerClick = (e) => {
        const model = modelEx.select;
        if (!model) return;
        // console.log("点击到的模型:", model, model.name);
        // const { intersects, obj } = modelEx.getClickObj(e, scene.children, true)
        // console.log(obj, 'obj');
        console.log(
            `cx:${camera.position.x},cy:${camera.position.y},cz:${camera.position.z},tx:${controls.target.x},ty:${controls.target.y},tz:${controls.target.z}`,
            "位置"
        );
    };

    controlStart = () => {
        // 清除动画
        Object.values(this.closeAnimaAtStart).map((i) => {
            i && i.kill();
        });
    };

    closeAnime() {
        Object.values(this.closeAnimaAtStart).map(
            (
                item // 暂停动画 并清空内容 item就是那个动画
            ) => item && item.kill()
        );
    }

    dispose() {
        dom.removeEventListener("pointerdown", this.mouseDown);
        dom.removeEventListener("pointerup", this.mouseUp);
        controls.removeEventListener("start", this.controlStart);
    }
}

export default Change;

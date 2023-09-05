/**
 * 机器的宽度比例表
 */
export const MachineWidthMap = {
    /**
     * 单相用户逆变器
     */
    "Dxyh_Nby_SUN-5K-SG04LP3-EU": {
        width: 4.22,
        len: 0,
        height: 7.02,
    },

    "Dxyh_Nby_SUN-6K-SG04LP3-EU": {
        width: 4.22,
        len: 0,
        height: 7.02
    },

    "Dxyh_Nby_SUN-8K-SG04LP3-EU": {
        width: 4.22,
        len: 0,
        height: 7.02
    },

    "Dxyh_Nby_SUN-10K-SG04LP3-EU": {
        width: 4.22,
        len: 0,
        height: 7.02
    },

    "Dxyh_Nby_SUN-12K-SG04LP3-EU": {
        width: 4.22,
        len: 0,
        height: 7.02
    },

    /**
     * 三相用户逆变器
     */

    "Sxyh_Nby_MHT-10K-40": {
        width: 5.34, len: 0,
        height: 4.18
    },
    "Sxyh_Nby_MHT-12K-40": {
        width: 5.34, len: 0,
        height: 4.18
    },
    "Sxyh_Nby_MHT-15K-40": {
        width: 5.34, len: 0,
        height: 4.18
    },
    "Sxyh_Nby_MHT-20K-40": {
        width: 5.34, len: 0,
        height: 4.18
    },

    /**
     * 光储一体机
     */

    "Gc_Ytj_GSE0050-PV": { width: 10, len: 0, height: 2.25, power: '50kw' },
    "Gc_Ytj_GSE0100-PV": { width: 12, len: 0, height: 2.25, power: '100kw' }, // 没有
    "Gc_Ytj_GSE0150-PV": { width: 12, len: 0, height: 2.25, power: '150kw' },

    /**
     * 储能逆变器
     */
    Cn_Nbq_GSE0050T: { width: 7.5, len: 0, height: 2.25,power:'50kw' },
    Cn_Nbq_GSE0100T: { width: 8, len: 0, height: 2.25,power:'100kw' }, // 没有
    Cn_Nbq_GSE0150T: { width: 8, len: 0, height: 2.25,power:'150kw'},
    Cn_Nbq_GSE0250T: { width: 12, len: 0, height: 2.25,power:'250kw' },
    Cn_Nbq_GSE0500T: { width: 16, len: 0, height: 2.25,power:'500kw' },

    /**
     *  电池模组 海基 零探  户用  工商业
     */
    "Hy_Battery_LFP-5KWH": { width: 4.9, len: 0, height: 2.25, },
    "Hy_Battery_LFP-10KWH": { width: 5.8, len: 0, height: 2.25, },
    Hy_Battery_LFP48100: { width: 4.53, len: 0, height: 2.25, },

    // 0.5c 
    "Gsy_Battery_HJESLFP-38240": { width: 10.5, len: 0, height: 2.25, },
    // 1 C
    "Gsy_Battery_HJESLFP-76120": { width: 5.27, len: 0, height: 2.25, },

    /**
     * 汇流柜
     */
    'Hui_Liu_Gui': { width: 8, len: 0, height: 2.2 },

    /**
     * 隔离变压器 盛弘 目前使用这种(默认一种)
     */
    'Gei_Li_Byq_': { width: 5, len: 0, height: 2.16 },
    "Gei_Li_Byq_PWS1-500K": { width: 22, len: 0, height: 2.16 },

    /**
     * 操作系统
     */
    EMS: { width: 2.758, len: 0, height: 1 },
    BMS: { width: 2.758, len: 0, height: 1 },

    /**
     * 集装箱
     */
    container_10: { width: 24.38, len: 30.48, height: 2.896 ,type:'10尺'},
    container_20: { width: 24.38, len: 60.58, height: 2.896 ,type:'20尺' },
    container_30: { width: 24.38, len: 91.44, height: 2.896 ,type:'30尺' },
    container_40: { width: 24.38, len: 121.92, height: 2.896 ,type:'40尺' },
    container_45: { width: 24.38, len: 137.16, height: 2.896 ,type:'45尺' },

    container_10_top: { width: 24.38, len: 30.48, height: 2.896 ,type:'10尺' },
    container_20_top: { width: 24.38, len: 60.58 + 2.02, height: 2.896 ,type:'20尺' },
    container_30_top: { width: 24.38, len: 91.44, height: 2.896 ,type:'30尺' },
    container_40_top: { width: 24.38, len: 121.92 + 2.02, height: 2.896 ,type:'40尺' },
    container_45_top: { width: 24.38, len: 137.16 + 2.02, height: 2.896 ,type:'45尺' },
};

/**
 * 机器映射表(逆变器名称)
 */
export const MachineNameMap = {
    "单相用户逆变器SUN-5K-SG04LP3-EU": "Dxyh_Nby_SUN-5K-SG04LP3-EU",
    "单相用户逆变器SUN-6K-SG04LP3-EU": "Dxyh_Nby_SUN-6K-SG04LP3-EU",
    "单相用户逆变器SUN-8K-SG04LP3-EU": "Dxyh_Nby_SUN-8K-SG04LP3-EU",
    "单相用户逆变器SUN-10K-SG04LP3-EU": "Dxyh_Nby_SUN-10K-SG04LP3-EU",
    "单相用户逆变器SUN-12K-SG04LP3-EU": "Dxyh_Nby_SUN-12K-SG04LP3-EU",

    "三相用户逆变器MHT-10K-40": "Sxyh_Nby_MHT-10K-40",
    "三相用户逆变器MHT-12K-40": "Sxyh_Nby_MHT-12K-40",
    "三相用户逆变器MHT-15K-40": "Sxyh_Nby_MHT-15K-40",
    "三相用户逆变器MHT-20K-40": "Sxyh_Nby_MHT-20K-40",

    "光储一体机GSE0050-PV": "Gc_Ytj_GSE0050-PV",
    "光储一体机GSE0150-PV": "Gc_Ytj_GSE0150-PV",
    "光储一体机GSE0100-PV": "Gc_Ytj_GSE0100-PV",

    逆变器GSE0050T: "Cn_Nbq_GSE0050T",
    逆变器GSE0100T: "Cn_Nbq_GSE0100T",
    逆变器GSE0150T: "Cn_Nbq_GSE0150T",
    逆变器GSE0250T: "Cn_Nbq_GSE0250T",
    逆变器GSE0500T: "Cn_Nbq_GSE0500T",

    "户用电池LFP-5KWH": "Hy_Battery_LFP-5KWH",
    "户用电池LFP-10KWH": "Hy_Battery_LFP-10KWH",
    户用电池LFP48100: "Hy_Battery_LFP48100",

    "电池模组 0.5C": "Gsy_Battery_HJESLFP-38240",
    "电池模组 1C": "Gsy_Battery_HJESLFP-76120",

    "工商业电池HJESLFP-38240": "Gsy_Battery_HJESLFP-38240",
    "工商业电池HJESLFP-76120": "Gsy_Battery_HJESLFP-76120",

    汇流柜: "Hui_Liu_Gui",

    隔离变压器: "Gei_Li_Byq_PWS1-500K",
    "隔离变压器PWS1-500K": "Gei_Li_Byq_PWS1-500K",

    BMS操作系统: "BMS",
    EMS操作系统: "EMS",

    "20尺集装箱": "container_20_top",
    "40尺集装箱": "container_40_top",
    "45尺集装箱": "container_45_top",

    // "10尺集装箱": "container_10",
    // "20尺集装箱": "container_20",
    // "30尺集装箱": "container_30", 
    // "40尺集装箱": "container_40",
    // "45尺集装箱": "container_45",

    // "10尺集装箱_高": "container_10_top",
    // "20尺集装箱_高": "container_20_top",
    // "30尺集装箱_高": "container_30_top",
    // "40尺集装箱_高": "container_40_top",
    // "45尺集装箱_高": "container_45_top",
};

//标牌样式映射
export const mechineTypeStyle = {
    '逆变器': 'icon-dingpaiicon_nibianqi',
    '变压器': 'icon-dingpaiicon_gelibianyaqi',
    '集装箱': 'icon-dingpaiicon_jizhuangxiang',
    '汇流': 'icon-dingpaiicon_kongzhihuiliuxiang',
    '电池': 'icon-dingpaiicon_dianchicu'
}
//对象反转
export const machineReverseMapFn = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        return acc;
    }, {});
}


export const MachineReverseMapFn = (obj) =>
    Object.keys(obj).reduce((acc, key) => {
        acc[obj[key]] = key;
        console.log(acc, "acc");
        return acc;
    }, {});


// 获取模型
// console.log(t.runScene.modelEx.getModel('GSE0150T'), t.runScene.uniqueEx.model.nameMap, 't.runScene-----');
// console.log(t.runScene.uniqueEx.model.nameMap, 't.runScene-----');
// let id = t.runScene.uniqueEx.model.nameMap['GSE0150T']
// let a = t.runScene.uniqueEx.model.get(id);
// console.log(a, 'model');
// t.runScene.sceneEx.clean();
// const light = t.runScene.lightEx.get("AmbientLight");
// light.intensity = 5;

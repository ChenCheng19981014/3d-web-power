<style lang="scss" scoped>
.classify {
  width: 100%;
  border-top: 1px solid #e4e7ed;
  .classify-header {
    margin-bottom: 14px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    .classify-line {
      height: 16px;
      background: #165dff;
      border-radius: 3px;
      margin-right: 5px;
      width: 3px;
    }
    .classify-name {
      font-size: 16px;
      color: rgba(29, 33, 41, 1);
      font-weight: bold;
    }
  }
}

.classify:nth-child(1) {
  border-top: none;
}

.custom-input-number {
  width: 88px;
}

.custom-translate-dialog {
  .dialog-base-info {
    color: rgba(78, 89, 105, 1);
    font-size: 14px;
    overflow: hidden;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(229, 230, 235, 1);
    margin-bottom: 24px;
    .name {
      margin-right: 16px;
    }
    .value {
      color: #1d2129;
      position: relative;
      font-weight: bold;
      font-size: 22px;
    }
    .unit {
      margin-left: 8px;
    }
  }
  .dialog-card-container {
    display: flex;
    justify-content: space-between;
    .dialog-card-item {
      width: 278px;
      flex-shrink: 0;
      margin-right: 8px;
      .name {
        font-size: 16px;
        color: rgba(29, 33, 41, 1);
        margin-bottom: 4px;
        display: flex;
        align-items: center;
      }
      .info {
        margin-bottom: 8px;
        display: flex;
        width: 100%;
        height: 20px;
        align-items: center;
        overflow: hidden;
        .info-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #86909c;
          display: flex;
          align-items: center;
          svg {
            margin-right: 5px;
          }
        }
      }
      .card {
        width: 100%;
        height: 86px;
        background: rgb(247, 248, 250);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        padding-right: 17px;
        padding-top: 16px;
        padding-bottom: 16px;
        overflow: hidden;
        padding-left: 20px;
        border: 1px solid transparent;
        .suggest {
          position: absolute;
          width: 18px;
          right: 9px;
          top: 0;
        }
        .card-left {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .name {
            font-size: 14px;
            color: rgba(78, 89, 105, 1);
          }
          .value {
            .number {
              font-size: 22px;
              font-weight: bold;
              color: #1d2129;

              margin-right: 8px;
            }
            .unit {
              font-size: 14px;
            }
          }
        }
        .dian {
          height: 59px;
        }
        &:hover {
          border: 1px solid rgba(22, 93, 255, 1);
        }
        &.active {
          border: 1px solid rgba(22, 93, 255, 1);
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <!-- drawer -->
    <el-drawer
      class="custom-drawer"
      :title="type === 'edit' ? '修改方案' : '新建方案'"
      :visible.sync="visible"
      direction="rtl"
      size="362px"
    >
      <el-form
        v-if="visible"
        ref="form"
        :model="project"
        :rules="isBusiness ? formBusiness : formUnBusiness"
        label-width="80px"
      >
        <div class="classify">
          <div class="classify-header">
            <div class="classify-line"></div>
            <div class="classify-name">基础属性</div>
          </div>
          <el-form-item label="方案:" prop="programme_name">
            <el-input
              class="custom-input"
              placeholder="请输入方案名称 (20字内)"
              :maxlength="20"
              v-model="project.programme_name"
              clearable
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用途:" prop="programme_purpose">
            <el-radio-group v-model="project.programme_purpose">
              <el-radio class="custom-radio" label="1">工商</el-radio>
              <el-radio disabled class="custom-radio" label="2">户用</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="负载:"> 三相负载 </el-form-item>
        </div>
        <div class="classify">
          <div class="classify-header">
            <div class="classify-line"></div>
            <div class="classify-name">电芯</div>
          </div>
          <el-form-item label="标称容量:" prop="cell_nominal_capacity">
            <el-select
              class="custom-input"
              clearable
              placeholder="请选择"
              v-model="project.cell_nominal_capacity"
            >
              <el-option
                v-for="(item, index) of getBc"
                :key="index"
                :label="item.label"
                :value="item.value"
                >{{ item.value }}</el-option
              >
            </el-select>
          </el-form-item>
        </div>

        <div class="classify">
          <div class="classify-header">
            <div class="classify-line"></div>
            <div class="classify-name">逆变器</div>
          </div>
          <el-form-item label="品牌:" prop="inverter_brand">
            <el-select
              class="custom-input"
              clearable
              placeholder="请选择"
              v-model="project.inverter_brand"
            >
              <el-option
                v-for="(item, index) of getBrand"
                :key="index"
                :label="item.label"
                :value="item.value"
                >{{ item.value }}</el-option
              >
            </el-select>
          </el-form-item>
          <el-form-item label="类型:">
            <el-radio-group
              v-model="project.inverter_type"
              :disabled="project.inverter_brand == null"
              @change="project.inverter_id = null"
            >
              <el-radio class="custom-radio" label="1">储能逆变器</el-radio>
              <el-radio class="custom-radio" label="2">光储一体机</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="功率 (KW):" prop="inverter_id">
            <el-select
              :disabled="project.inverter_brand == null"
              class="custom-input"
              placeholder="请选择"
              clearable
              v-model="project.inverter_id">
              <el-option
                v-for="(item, index) of getInverters"
                :key="index"
                :label="item.inverter_output_power + 'KW'"
                :value="item.inverter_id">
                {{ item.inverter_output_power }}KW
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            :disabled="project.inverter_brand == null"
            label="数量 (个):"
            prop="inverter_num"
          >
            <!-- <el-input
              type="number"
              class="custom-input custom-input-number"
              :min="1"
              :max="99"
              :step="1"
              @blur="inputFunc"
              v-model="project.inverter_num"
            ></el-input> -->
            <el-input-number
              @blur="inputFunc"
              v-model="project.inverter_num"
              :min="1"
              class="custom-input custom-input-number"
              controls-position="right"
              :max="99"
              :disabled="project.inverter_brand == null"
              :step="1"
              label="label"
            ></el-input-number>
          </el-form-item>
        </div>

        <div class="classify">
          <div class="classify-header">
            <div class="classify-line"></div>
            <div class="classify-name">电量</div>
          </div>
          <el-form-item label="需求电量:" prop="demand_capacity">
            <el-input
              class="custom-input"
              placeholder="请输入"
              autocomplete="off"
              clearable
              v-model="project.demand_capacity"
            >
            <template slot="append">kWh</template></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="el-drawer__footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" :disabled="isDisabled" @click="commit">{{
            type === "edit" ? "保存方案" : "生成方案"
          }}
        </el-button>
      </div>
    </el-drawer>

    <!-- dialog -->
    <el-dialog
      title="方案选择"
      class="custom-dialog custom-translate-dialog"
      :visible.sync="dialogVisible"
    >
      <div class="dialog-base-info">
        <span class="name">需求电量：</span>
        <span class="value numberf">{{ project.demand_capacity }}</span>
        <span class="unit">KWh</span>
      </div>
      <div class="dialog-card-container">
        <div
          class="dialog-card-item"
          v-for="(item, index) in translates"
          :key="item.name"
        >
          <div class="name">方案{{ index + 1 }}</div>
          <div class="info">
            <div class="info-text" v-if="item.errmsg">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.333496 7.00004C0.333496 3.31814 3.31826 0.333374 7.00016 0.333374C10.6821 0.333374 13.6668 3.31814 13.6668 7.00004C13.6668 10.6819 10.6821 13.6667 7.00016 13.6667C3.31826 13.6667 0.333496 10.6819 0.333496 7.00004ZM6.3335 9.00004V10.3334H7.66683V9.00004H6.3335ZM7.66683 8.33337L7.66683 3.66671H6.3335L6.3335 8.33337H7.66683Z"
                  fill="#4E5969"
                />
              </svg>
              {{ item.errmsg }}
            </div>
          </div>
          <div
            class="card"
            @click="translatesNow = index"
            :class="index === translatesNow ? 'active' : ''"
          >
            <img
              v-show="index === 0"
              src="@/assets/images/workspace/suggest.png"
              alt=""
              class="suggest"
            />
            <div class="card-left">
              <div class="name">实际电量</div>
              <div class="value">
                <span class="number">{{ item.actual_capacity }}</span>
                <span class="unit">KWh</span>
              </div>
            </div>
            <img class="dian" src="@/assets/images/workspace/dian.png" alt="" />
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="commitData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import bus from "@/bus";
import {create, update, inverterGetAll, chooseForm, getOutPowerMin} from "@/api/programme.js";
export default {
  data() {
    return {
      inverters: [], //所有逆变器
      project: {}, //项目
      projectTmpl: {}, //项目结果
      visible: false, //显示隐藏
      type: null, //类型
      //功率选择
      powers: [],
      //表单1规则
      formBusiness: {
        programme_name: [
          {
            required: true,
            message: "请输入方案名称 (20字内),",
            trigger: "blur",
          },
        ],
        demand_capacity: [
          {
            required: true,
            message: "请输入发电量",
            trigger: "blur",
          },
        ],
      },
      //表单2规则
      formUnBusiness: {
        programme_name: [
          {
            required: true,
            message: "请输入方案名称 (20字内)",
            trigger: "blur",
          },
        ],
        programme_purpose: [
          {
            required: true,
            message: "请选择方案用途",
            trigger: "blur",
          },
        ],
        inverter_brand: [
          {
            required: true,
            message: "请选择逆变器品牌",
            trigger: "blur",
          },
        ],
        demand_capacity: [
          {
            required: true,
            message: "请输入需求发电量",
            trigger: "blur",
          },
        ],
        inverter_num: [
          {
            required: true,
            message: "请输入逆变器数量",
            trigger: "blur",
          },
        ],
        inverter_id: [
          {
            required: true,
            message: "请选择逆变器",
            trigger: "blur",
          },
        ],
      },
      //显示隐藏dialog
      dialogVisible: false,
      //方案选择
      translates: [
        {
          name: "方案1",
        },
        {
          name: "方案2",
          info: "逆变器电压超出范围逆变器电压超出范围逆变器电压超出范围逆变器电压超出范围(400-850v) 下限超出64v",
        },
      ],
      //当前方案
      translatesNow: 0,
      isDisabled: true,
    };
  },
  watch: {
    "project.inverter_brand"() {
      this.project.inverter_id = null;
    },
    "project.inverter_type"() {},
    "project.inverter_id"() {
      if (this.project.inverter_id) {
        this.project.inverter_id *= 1;
      }
    },
    project: {
      deep: true,
      handler() {
        for (let name in this.formUnBusiness) {
          if (
            this.project[name] === null ||
            this.project[name] === undefined ||
            this.project[name] === ""
          ) {
            this.isDisabled = true;
            return;
          }
        }
        this.isDisabled = false;
      },
    },
  },
  computed: {
    getBc() {
      return [
         {
          label: "120Ah",
          value: "120Ah",
        },
        {
          label: "280Ah",
          value: "280Ah",
        },
      ];
    },
    getBrand() {
      return [
        {
          label: "时代能创",
          value: "时代能创",
        },
        // {
        //   label: "德业",
        //   value: "德业",
        // },
        {
          label: "科士达",
          value: "科士达",
        },
        {
          label: "斯坦艾德",
          value: "斯坦艾德",
        },
      ];
    },
    getInverters() {
      return this.inverters.filter((e) => {
        return e.inverter_type === this.project.inverter_type && e.inverter_brand === this.project.inverter_brand
      });
    },

    isBusiness() {
      //判断是否是工商
      if (this.project.use) {
      }

      this.$refs.form && this.$refs.form.clearValidate();

      return this.project.use === "1";
    },
  },
  methods: {
    inputFunc() {
      if (this.project.inverter_num < 1) {
        this.project.inverter_num = 1;
      }
      if (this.project.inverter_num > 99) {
        this.project.inverter_num = 99;
      }
    },
    //获取所有逆变器
    async inverterGetAll() {
      let { data } = await inverterGetAll();
      this.inverters = data;
    },
    //显示隐藏
    showTranslate() {
      this.dialogVisible = true;
    },
    // 获取最小输出电量
    async getOutPowerMinWhenSelected() {
      let { data } = await getOutPowerMin({
        inverter_id: this.project.inverter_id,
        cell_nominal_capacity: this.project.cell_nominal_capacity,
      });
      this.project.min_capacity = "0.5C:" + data['BM05C'] + "kWh, 1.0C:" + data['BM10C'] + "kWh";
    },
    //确定上传
    async commit() {
      await this.formValid();
      let httpMethods = this.type === "edit" ? update : create;
      let {data} = await httpMethods(this.project);
      this.translates = data;
      // console.log(this.project, '发送数据');
      // console.log(data, '接收数据');
      //默认选择方案1
      this.translatesNow = 0;
      if (this.translates.length > 1) {
        this.showTranslate();
        return;
      }
      this.commitData().then();
    },
    //数据上传
    async commitData() {
      await chooseForm({
        form_id: this.translates[this.translatesNow]?.form_id,
      });
      this.$message.success("保存成功!");
      this.visible = false;
      this.dialogVisible = false;
      if (this.type === "create") {
        this.$parent.$refs.workSpaceMain.$refs.routeri.$children[0].loadData(true);
      } else {
        this.$emit("update", { name: 123 });
      }
      bus.$emit("loadTableData");
    },
    //表单校验
    formValid() {
      return new Promise((resolve) => {
        this.$refs.form &&
          this.$refs.form.validate((valid) => {
            if (valid) {
              resolve();
            }
            setTimeout(() => {
              this.$refs.form && this.$refs.form.clearValidate();
            }, 1000);
          });
      });
    },
    open(data) {
      this.visible = true;
      if (data) {
        this.project = JSON.parse(JSON.stringify(data));
        this.type = "edit";
      } else {
        this.createFormData();
        this.type = "create";
      }
    },
    createFormData() {
      this.project = {
        programme_name: "",
        programme_purpose: "1",
        inverter_id: null,
        inverter_num: 1,
        inverter_type: "1",
        demand_capacity: null,
      };
    },
  },
  created() {
    this.inverterGetAll();
  },
};
</script>

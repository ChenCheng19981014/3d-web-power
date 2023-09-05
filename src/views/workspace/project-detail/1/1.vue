<style lang="scss">
.delete-button {
  width: 24px;
  height: 24px;
  position: absolute;
  right: -32px;
  background-image: url("../../../../assets/icon/Button.png");
  background-size: cover;
  cursor: pointer;
}
.right-input {
  width: 100%;
  text-align: right;
  text-overflow: ellipsis;
  // overflow: hidden;
  input {
  }
}

// .el-table td, .el-table th{
//   position:-ms-page;
// }
.page-1-1 {
  width: 100%;
}
.main {
  width: 100%;
  overflow: visible !important;
  .main-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 36px;
    margin-bottom: 32px;
    border-bottom: 1px solid rgba(229, 230, 235, 1);
    .info-item {
      .info-name {
        font-size: 14px;
        color: rgba(78, 89, 105, 1);
      }

      .info-value {
        font-size: 32px;
        color: #1d2129;
        font-weight: bold;
        margin-left: 16px;
      }

      .info-unit {
        font-size: 14px;
        color: rgba(78, 89, 105, 1);
      }
    }
  }
  .main-tip {
    font-size: 14px;
    color: rgba(78, 89, 105, 1);
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    .tip-point {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(78, 89, 105, 1);
      margin-right: 8px;
    }
  }
}

.price-input .el-input__inner {
  height: 28px;
  width: 100%;
  background: rgba(242, 243, 245, 1) !important;
  text-indent: 12px !important;
  // margin-top: 6px;
}

.custom-table {
  .custom-input {
    height: 100%;
    background: none;
    .el-input__inner {
      background: none;
      padding-left: 0;
    }
  }
  .custom-table-add {
    height: 44px;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 105px;
    font-size: 14px;

    color: rgba(201, 205, 212, 1);
    cursor: pointer;
    .text {
      margin-right: 8px;
      color: rgba(22, 93, 255, 1);
    }
  }

  .custom-table-footer {
    height: 44px;
    background: white;
    border-top: 1px solid rgba(201, 205, 212, 1);
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 16px;
    font-size: 14px;
    color: rgba(201, 205, 212, 1);
    .total-price-title {
      color: rgba(78, 89, 105, 1);
      margin-right: 8px;
    }
    .total-price-value {
      color: rgba(29, 33, 41, 1);
      font-weight: bold;
    }
    .custom-button {
      height: 28px;
      padding-top: 0;
      padding-bottom: 0;
      margin-left: 16px;
    }
  }
}

.price-change {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.changeText {
  color: #86909c;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  color: #86909c;
  border-radius: 4px;
  margin-left: 8px;
  &:hover {
    color: #4e5969;
    background: #e5e6eb;
  }
}

.page-child-classify {
  overflow: visible;
}
</style>

<template>
  <div class="page-1-1 page-child-classify">
    <div class="page-child-classify-title">1.1 报价单</div>
    <div class="main">
      <div class="main-header">
        <div class="info-item">
          <span class="info-name">需求电量：</span>
          <span class="info-value number"
            >{{ programme.demand_capacity }}
          </span>
          <span class="info-unit">KWh</span>
        </div>
        <div class="info-item">
          <span class="info-name">实际电量：</span>
          <span class="info-value number"
            >{{ programme.actual_capacity }}
          </span>
          <span class="info-unit">KWh</span>
        </div>
        <div class="info-item">
          <span class="info-name"> 功率：</span>
          <span class="info-value number"
            >{{ detail.inverter.inverter_output_power }}
          </span>
          <span class="info-unit">KWh</span>
        </div>
      </div>

      <div class="main-tip">
        <div class="tip-point"></div>
        具体清单如下：
      </div>

      <!-- 自定义表格 -->
      <div class="custom-table">
        <!-- 头部 -->
        <div class="custom-table-header">
          <div class="name">*表单已自动生成，请根据以下信息填写价格</div>
          <div class="button" v-show="false">
            <div>详细参数</div>
            <el-icon class="el-icon-arrow-right"></el-icon>
          </div>
        </div>
        <!-- 表格 -->
        <el-table
          ref="dataTable"
          @selection-change="selectionChange"
          :data="gettableData"
          :span-method="arraySpanMethod"
          border
          style="width: 100%"
        >
          <el-table-column
            :resizable="false"
            width="40"
            v-if="!isShare"
            :selectable="checkboxSelect"
            type="selection"
            :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column prop="id" :resizable="false" label="序号" width="52">
          </el-table-column>
          <el-table-column label="品名/型号" :resizable="false" width="150">
            <template slot-scope="scope">
              <!-- 选择框 -->
              <el-select
                class="custom-input"
                :disabled="isShare"
                v-model="scope.row.name"
                placeholder=""
                v-if="scope.row.options"
                @change="confirm(true)"
              >
                <el-option
                  v-for="item of scope.row.options"
                  :key="item"
                  :value="item"
                  :label="item"
                ></el-option>
              </el-select>

              <!-- 输入框 -->
              <el-input
                v-else
                @change="confirm"
                class="custom-input"
                :disabled="scope.$index <= 10 || isShare"
                v-model="scope.row.name"
                placeholder=""
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" label="数量" width="55">
            <template slot-scope="scope">
              <!-- 无用的 -->
              <el-input
                v-if="scope.row.num === undefined"
                class="custom-input right-input right-input1"
                :min="1"
                value="-"
                disabled
                placeholder=""
              ></el-input>

              <!-- 输入，部分禁用 -->
              <el-input
                v-else
                @change="confirm"
                class="custom-input right-input right-input1"
                :min="1"
                v-model="scope.row.num"
                :disabled="scope.row.required_input_num === false || isShare"
                placeholder=""
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" prop="remark" label="备注">
            <template slot-scope="scope">
              <el-input
                class="custom-input"
                v-model="scope.row.remake"
                placeholder=""
                @change="confirm"
                :disabled="isShare"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column :resizable="false" width="112">
            <template #header>
              <div class="price-change">
                <div>单价({{ getUnit }})</div>
                <el-dropdown v-if="!isShare">
                  <div class="changeText">切换</div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="(item, index) of units"
                      @click.native="changeUnit(item)"
                      :key="index"
                    >
                      <div style="width: 100px; text-align: center">
                        {{ item.name }}（{{ item.text }}）
                      </div>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </template>
            <template slot-scope="scope">
              <el-input
                class="custom-input price-input right-input"
                v-model="scope.row.price"
                @change="confirm"
                :disabled="isShare"
                :placeholder="isShare ? '暂无' : '请输入'"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            prop="remark"
            label="总价"
            width="91"
          >
            <template slot-scope="scope">
              <div
                class="delete-button"
                @click="deleteRow(scope.$index)"
                v-if="!isShare && scope.$index > 10"
              ></div>
              <!-- <div style="position:absolute;right:100px">操作</div> -->
              <div
                class="right-input overhidden"
                :title="getUnit + GetPriceRow(scope.row)"
              >
                <!-- {{ getUnit }} -->
                {{ GetPriceRow(scope.row) }}
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="custom-table-add" @click="addTableColumn">
          <span class="text">+添加列</span><span>（例：辅料/施工等）</span>
        </div>
        <div class="custom-table-footer">
          <div class="total-price-title">共计：</div>
          <div class="total-price-value">{{ getUnit }}{{ getTotalPrice | getQian }}</div>
          <!-- <el-button type="primary" class="custom-button" @click="confirm"
            >确定</el-button
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "@/bus";
import { updateForm, updatePriceUnit } from "@/api/programme.js";
export default {
  props: {
    programme: Object,
    detail: Object,
    isShare: Boolean,
  },
  filters: {
    getQian(value) {
      if (!value) return 0;
      // 获取整数部分
      const intPart = Math.trunc(value);
      // 整数部分处理，增加,
      const intPartFormat = intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
      // 预定义小数部分
      let floatPart = "";
      // 将数值截取为小数部分和整数部分
      const valueArray = value.toString().split(".");
      if (valueArray.length === 2) {
        // 有小数部分
        floatPart = valueArray[1].toString(); // 取得小数部分
        return intPartFormat + "." + floatPart;
      }
      return intPartFormat + floatPart;
    },
  },
  computed: {
    getUnit() {
      return this.programme.priceUnit;
    },
    gettableData() {
      // console.log(this.tableData)
      return this.tableData;
    },
    getTotalPrice() {
      let price = 0;
      this.tableData.map((item) => {
        if (item.pid) {
          this.tableData.map((e) => {
            if (e.id == item.pid) {
              if (e.select == true) {
                price += this.GetPriceRow(item);
              }
            }
          });
        } else {
          if (item.select == true) {
            price += this.GetPriceRow(item);
          }
        }
      });

      return price;
    },
    GetPriceRow() {
      return function (row) {
        let price = 0;
        if (row.pid) {
          this.tableData.map((e) => {
            if (row.pid == e.id) {
              price = row.price ? row.price * e.num : 0;
            }
          });
        } else {
          if (row.num === "-") {
            price = row.price ? row.price * 1 : 0;
          } else {
            price = row.price ? row.price * row.num : 0;
          }
        }

        return price;
      };
    },
  },
  data() {
    return {
      unit: 0,
      tableData: [],
      units: [
        {
          name: "￥",
          text: "人民币",
        },
        {
          name: "$",
          text: "美元",
        },
        {
          name: "￡",
          text: "英镑",
        },
        {
          name: "€",
          text: "欧元",
        },
      ],
    };
  },

  watch: {
    detail() {
      this.loadTableData();
    },
  },

  created() {
    bus.$on("loadTableData", () => {
      this.loadTableData();
    });
    this.loadTableData();
  },
  destroyed() {
    bus.$off("loadTableData");
  },
  mounted() {},
  methods: {
    async changeUnit(item) {
      await updatePriceUnit({
        programme_id: this.detail.form.programme_id,
        priceUnit: item.name,
      });
      this.programme.priceUnit = item.name;
      this.$message.success("设置单价单位成功!");
    },
    checkboxSelect(row, rowIndex) {
      return !this.isShare && row.required_select !== false;
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex !== 0) {
        return;
      }
      if (row.pid && this.tableData[rowIndex].pid) {
        if (!this.tableData[rowIndex + 1]) {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
        if (row.pid === this.tableData[rowIndex + 1].pid) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },

    async loadTableData() {
      if (this.isShare == true) {
        this.tableData = JSON.parse(this.detail.form.form_json).filter((e) => {
          if (e.pid) {
            for (let i of JSON.parse(this.detail.form.form_json)) {
              if (i.id == e.pid) {
                if (i.select == true) {
                  return true;
                }
              }
            }

            return false;
          } else {
            if (e.select === true) {
              return true;
            } else {
              return false;
            }
          }
        });
        return;
      }
      // console.log(this.detail)
      this.tableData = JSON.parse(this.detail.form.form_json).map((e) => {
        return e;
      });
      this.autoSelectTableData();
      // setTimeout(() => {
      //   // this.$parent.$refs["page2"][0]?.loadData(
      //   //   JSON.parse(JSON.stringify(this.tableData))
      //   // );
      // }, 2000);
      // setInterval(() => {
      //    this.tableData = JSON.parse(this.detail.form.form_json).map((e) => {
      //   return e;
      // });
      // this.autoSelectTableData();
      // }, 1000);
    },

    autoSelectTableData() {
      this.tableData.map((row) => {
        if (row.select === true) {
          setTimeout(() => {
            this.$refs.dataTable.toggleRowSelection(row, true);
          }, 100);
        }
      });
    },
    selectionChange(values, bool = true) {
      if (bool) {
        this.tableData.map((e) => {
          if (e.select === undefined) {
            return;
          } else {
            e.select = false;
          }
        });
      }

      values.map((row) => {
        if (row.select === false) {
          // console.log(this.tableData,row);
          this.tableData.filter((e) => {
            if (e.id === row.id) {
              e.select = true;
            }
          });
        }
      });

      this.confirm();

      if (window.intv1) {
        clearInterval(window.intv1);
      }
      this.selectChange()
      // this.confirm()
    },
    selectChange(){
      
      if (window.intv1) {
        clearInterval(window.intv1);
      }
       window.intv1 = setTimeout(() => {
        this.$parent.$refs["page2"][0].loadData(
          JSON.parse(JSON.stringify(this.tableData))
        );
      }, 200); 
    },
    async confirm(bol) {
      if (this.intv) {
        clearInterval(this.intv);
      }

      let filter = this.tableData.some((e) => e.select);
      if (!filter) {
        // this.$message.error("请选择!");
        return;
      }

      this.intv = setTimeout(async () => {
        // this.$parent.$refs["page2"][0].loadData(
        //   JSON.parse(JSON.stringify(this.tableData))
        // );
        let data = await updateForm({
          // form_id:this.detail.
          chose: 1,
          form_id: this.detail.form.form_id,
          programme_id: this.detail.form.programme_id,
          form_json: JSON.stringify(this.tableData),
        });
        // this.$message.success("提交成功");
      }, 100);
      // this.$message.success("提交成功");

      if(bol){
        this.selectChange()
      }
    },
    addTableColumn() {
      this.tableData.push({
        id: parseInt(this.tableData[this.tableData.length - 1].id + 1),
        name: "",
        num: "-",
        remark: "",
        price: null,
        select: false,
        required_select: true,
      });
      this.confirm();
    },
    deleteRow(index) {
      this.tableData.splice(index, 1);
      this.confirm();
    },
  },
};
</script>

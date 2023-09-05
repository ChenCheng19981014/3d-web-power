<style lang="scss">
@function pvw($px) {
  @return $px/365 * 100 + vw;
}

.project-name {
  margin-bottom: pvw(20);
  font-size: pvw(16);
  color: #ffffff;
  padding-left: pvw(16);
  padding-right: pvw(21);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.main-headers {
  width: 100%;
  padding-left: pvw(20);
  padding-right: pvw(20);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: pvw(32);
  .line {
    width: 1px;
    height: pvw(28);
    background: rgba(255, 255, 255, 0.3);
  }
  .info-items {
    display: block;
    flex-shrink: 0;
    .info-names {
      display: block;
      font-size: pvw(14);
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: pvw(10);
    }
    .info-values {
      display: block;
      white-space: nowrap;
      font-size: pvw(24);
      color: rgba(255, 255, 255);
      .info-units {
        font-size: pvw(14);
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

.page-child-classify {
  position: relative;
}

.custom-table-m {
  margin-left: pvw(20);
  margin-right: pvw(20);
}

.custom-table-m-item {
  .td:nth-child(1) {
    width: pvw(163);
  }

  .td:nth-child(2) {
    width: pvw(48);
  }

  .td:nth-child(3) {
    flex-grow: 1;
  }
}

.padding{
  height: pvw(12);
  border-bottom: 1px solid #E5E6EB;
  border-right: 1px solid #E5E6EB;
}
</style>

<template>
  <div class="page-child-classify">
    <div class="project-name">{{ programme.programme_name }}</div>
    <div class="main-headers">
      <div class="info-items">
        <span class="info-names">需求电量：</span>
        <span class="info-values number"
          >{{ programme.demand_capacity }}
          <span class="info-units">KWh</span>
        </span>
      </div>
      <div class="line"></div>
      <div class="info-items">
        <span class="info-names">实际电量：</span>
        <span class="info-values number"
          >{{ programme.actual_capacity }}
          <span class="info-units">KWh</span>
        </span>
      </div>
      <div class="line"></div>
      <div class="info-items">
        <span class="info-names"> 功率：</span>
        <span class="info-values number"
          >{{ detail.inverter.inverter_output_power }}
          <span class="info-units">KWh</span>
        </span>
      </div>
    </div>
    <div class="table mi">
      <div class="mi-title">
        <div class="mi-title-icon"></div>
        <div class="mi-title-name">报价清单</div>
      </div>

      <div class="custom-table-m">
        <div class="custom-table-m-item header">
          <div class="td">品类/型号</div>
          <div class="td">数量</div>
          <div class="td">
            <div style="text-align: right; width: 100%">总价</div>
          </div>
        </div>
        <div v-for="(item, index) of gettableData" :key="index">
          <div class="padding" v-if="index==6"></div>
          <div class="custom-table-m-item">
            <div class="td">{{ item.name }}</div>
            <div class="td">
              <div style="text-align: right; width: 100%">
                {{ item.num ? item.num : "-" }}
              </div>
            </div>
            <div class="td">
              <div style="text-align: right; width: 100%">
                {{ item.price && item.num ? item.price * item.num : "0" }}
              </div>
            </div>
          </div>
          <div class="padding" v-if="index==8"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateForm } from "@/api/programme.js";
export default {
  props: {
    programme: Object,
    detail: Object,
    isShare: Boolean,
  },
  computed: {
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
          price = row.price ? row.price * row.num : 0;
        }

        return price;
      };
    },
  },
  data() {
    return {
      tableData: [],
    };
  },

  watch: {
    detail() {
      // this.loadTableData();
    },
  },
  created() {
    this.loadTableData();
  },
  mounted() {},
  methods: {
    checkboxSelect(row, rowIndex) {
      return !this.isShare;
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
      // console.log(this.detail)
      this.tableData = JSON.parse(this.detail.form.form_json).map((e) => {
        return e;
      });
      this.autoSelectTableData();
      setTimeout(() => {
        // this.$parent.$refs["page2"][0]?.loadData(
        //   JSON.parse(JSON.stringify(this.tableData))
        // );
      }, 1000);
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
          this.tableData[this.tableData.indexOf(row)].select = true;
        }
      });

      this.comfirm();
      // this.comfirm()
    },
    async comfirm() {
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
      }, 1000);
    },
    addTableColunm() {
      this.tableData.push({
        id: parseInt(this.tableData[this.tableData.length - 1].id + 1),
        name: "",
        num: null,
        remark: "",
        price: null,
        select: false,
      });
      this.comfirm();
    },
  },
};
</script>

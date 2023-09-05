<style lang="scss" scoped>
// 去除页面滚动条
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
//动态决定显示的数量
.d-point {
  height: 16px;
  width: 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  top: -5px;
  &:hover {
    background: #f2f3f5;
  }
}
.project-list {
  position: relative;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  // min-width: 1200px;
  // overflow-x: auto;
  .project-list-search {
    width: 220px;
    flex-shrink: 0;
    height: 40px;
  }
  .filter-container {
    display: flex;
    flex-shrink: 0;

    align-items: center;
    justify-content: space-between;
    .filter-left {
      display: flex;
      align-items: center;
      .title {
        color: rgba(27, 35, 96, 1);
        font-size: 20px;
        font-weight: bold;
      }
      .line {
        margin-left: 16px;
        margin-right: 16px;
        height: 16px;
        background: rgba(201, 205, 212, 1);
        width: 1px;
      }
      .custom-dropdown {
        cursor: pointer;

        margin-right: 18.5px;
      }
    }
    .filter-right {
      display: flex;
      align-items: center;
      .list-type-container {
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        .list-type {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          cursor: pointer;
          svg {
            width: 9.5px;
            fill: rgba(134, 144, 156, 1);
          }
          &:hover {
            background: rgba(190, 218, 255, 0.3);
            svg {
              fill: rgba(22, 93, 255, 1);
            }
          }
        }
        .active {
          background: rgba(190, 218, 255, 0.3);
          svg {
            fill: rgba(22, 93, 255, 1);
          }
        }
      }
    }
  }
}

.list-card {
  padding-top: 22px;
  width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  .list-card-item {
    position: relative;
    border-radius: 8px;
    background: white;
    transition: 0.5s all;
    min-height: 180px;

    cursor: pointer;
    .list-card-header {
      width: 100%;
      height: 22px;
      padding-right: 12px;
      margin-top: 8px;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .list-card-status-add {
        margin-left: 12px;
        color: #86909c;
        font-size: 12px;
        cursor: pointer;
        visibility: hidden;
      }
      .list-card-status-1 {
        padding-left: 12px;
        padding-right: 18px;
        display: flex;
        align-items: center;
        height: 22px;
        font-size: 12px;
        color: 12px;
        color: white;
        position: relative;
        top: -9px;
        border-radius: 8px 0 8px 0;
      }
      .tools {
        visibility: hidden;

        cursor: pointer;
      }
    }
    .list-card-name {
      margin-bottom: 12px;
      height: 48px;
      font-weight: bold;
      padding-left: 20px;
      padding-right: 20px;
      line-height: 24px;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 16px;
      color: rgba(29, 33, 41, 1);
      div {
        display: inline-block;
        margin-top: 1px;
      }
      &:hover {
        div {
          opacity: 1;
        }
      }
    }
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0px 4px 10px #e3ebfe;
      .list-card-header {
        .list-card-status-add {
          visibility: inherit;
        }

        .tools {
          visibility: inherit;
        }
      }
      .collection-button {
        opacity: 1;
      }
    }
    &.create {
      transition: 0s;
      background: rgba(190, 218, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      flex-direction: column;
      img {
        width: 20px;
        height: 20px;
        margin-bottom: 8px;
      }
      .text {
        font-size: 14px;
        color: rgba(22, 93, 255, 1);
      }
      &:hover {
        transform: translateY(0);
        box-shadow: none;
        background: rgba(190, 218, 255, 0.6);
      }
    }
  }
  .list-card-info {
    display: flex;
    align-items: center;
    margin-left: 20px;
    .list-card-info-title {
      font-size: 12px;
      color: #86909c;
      margin-bottom: 4px;
    }
    .list-card-info-value {
      font-size: 20px;
      font-weight: bold;
      color: rgba(78, 89, 105, 1);
      .number {
        color: #1d2129;
      }
      .unit {
        font-size: 12px;
        color: rgba(78, 89, 105, 1);
        font-weight: 100;
        margin-left: 4px;
      }
    }
    .list-card-info-line {
      height: 32px;
      width: 1px;
      margin-left: 28px;
      margin-right: 28px;
      color: rgba(229, 230, 235, 1);
      background: rgba(229, 230, 235, 1);
    }
  }
  .time-info {
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: right;
    padding-right: 12px;
    color: rgba(134, 144, 156, 1);
    font-size: 12px;
  }
  .collection-button {
    position: absolute;
    opacity: 1;
    right: 37px;
    top: 11px;
  }
  .un-collection {
    opacity: 0;
  }
}

.list-line {
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  padding-top: 22px;

  .create {
    width: 100%;
    height: 80px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: rgba(22, 93, 255, 1);
    background: rgba(190, 218, 255, 0.3);
    margin-bottom: 24px;
    overflow: hidden;
    img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
    .text {
      margin-top: 2px;
    }
    &:hover {
      background: rgba(190, 218, 255, 0.6);
      box-shadow: none;
    }
  }

  .list-row {
    height: 54px;
    background: white;
    border-radius: 8px;
  }

  .list-item {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    .row:nth-child(1) {
      width: 460px !important;
    }
    .row {
      width: calc((100% - 460px) / 4);
      flex-shrink: 0;
      font-size: 14px;
      padding-left: 20px;
      padding-right: 20px;
      color: rgba(78, 89, 105, 1);
      font-size: 14px;
    }
    .utils {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .row-name {
      display: flex;
      align-items: center;
      .text {
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 4px;
        font-size: 14px;
        color: rgba(29, 33, 41, 1);
        font-weight: bold;
      }
      .collection-button {
        flex-shrink: 0;
      }
    }

    .list-card-status-add {
      display: none;
    }
    .tools {
      display: none;
    }

    &:hover {
      .collection-button {
        opacity: 1;
      }
      .list-card-status-empty {
        display: none;
      }
      .list-card-status-add {
        display: block;
      }
      box-shadow: 0px 0px 10px #e3ebfe;

      .tools {
        display: block;
      }
    }
  }

  .list-item-header {
    margin-bottom: 12px;
    color: rgba(134, 144, 156, 1);
    .row {
      color: #86909c;
    }
    &:hover {
      box-shadow: none;
      cursor: default;
    }
  }
}

.collection-button {
  width: 15px;
  height: 15px;
  background-size: cover;
  cursor: pointer;
  &.collection {
    background-image: url("../../../assets/images/workspace/collection.png");

    &:hover {
      // background-image: url('../../../assets/images/workspace/un-collection.png');
    }
  }

  &.un-collection {
    background-image: url("../../../assets/images/workspace/un-collection.png");
    &:hover {
      // background-image: url("../../../assets/images/workspace/collection.png");
    }
  }
}

.empty {
  width: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90px;
  height: 134px;
  margin-left: -49px;
  margin-top: -67px;
  background-image: url("../../../assets/icon/e.png");
  background-size: cover;
}

@media screen and (min-width: 500px) {
  .list-card {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 690px) {
  .list-card {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1440px) {
  .list-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1920px) {
  .list-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 2560px) {
  .list-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 3840lx) {
  .list-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

.custom-input {
  height: 32px !important;
  input {
  }
}

.collection-button {
  opacity: 1;
}

.un-collection {
  opacity: 0;
}

.list-card-status-add:hover {
  color: #165dff !important;
}

// 修改悬浮窗状态样式
.all_item {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  left: 20px;
}

.modi_menu_item {
  display: flex;
  align-items: center;
  border-radius: 4px;
  width: 96px;
}

.d {
  position: relative;
}

// 自定义颜色样式
// .colorStyle{
//   margin-top: 30px;
// }

.define,
.cancel {
  font-size: 12px;
  width: 48px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
</style>



<template>
  <div class="project-list">
    <!-- 搜索区域 -->
    <div class="project-list-search" id="no-auto">
      <el-input
        class="custom-input"
        v-model="filterText"
        placeholder="搜索方案"
        clearable
      >
        <!-- <img
          slot="suffix"
          src="@/assets/addAfter.png"
          @click="filterText = inputText"
          alt=""
        /> -->
      </el-input>
    </div>

    <!-- 过滤区域 -->
    <div class="filter-container">
      <div class="filter-left">
        <div class="title">
          {{ { 1: "我的方案", 2: "收藏", "3": "回收站" }[type] }}
        </div>
        <div class="line"></div>

        <el-dropdown class="custom-dropdown">
          <span class="el-dropdown-link">
            {{ filterInfo.timeType == 1 ? "创建时间" : "更新时间"
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="filterInfo.timeType = 1">
              <div class="d">创建时间</div>
            </el-dropdown-item>
            <el-dropdown-item @click.native="filterInfo.timeType = 2">
              <div class="d">更新时间</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown>
          <span class="el-dropdown-link">
            {{ filterInfo.statusType
            }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu style="color: red" slot="dropdown">
            <el-dropdown-item
              @click.native="
                setStatus({ state_name: '所有状态', state_value: '' })
              "
            >
              <!-- 所有状态位置 -->
              <div class="d" style="margin-left: 10px">所有状态</div>
            </el-dropdown-item>
            <el-dropdown-item
              class="modi_menu_item"
              @click.native="
                setStatus({
                  state_name: item.state_name,
                  state_value: item.state_name,
                })
              "
              v-for="item of status"
              :key="item.stata_name"
            >
              <!-- 小圆点 -->
              <div class="circle">
                <div
                  class="all_item"
                  :style="`background:${item.state_color}`"
                ></div>
                <div class="d">
                  {{ item.state_name }}
                </div>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="filter-right">
        <div class="list-type-container">
          <div
            class="list-type"
            @click="listType = 1"
            :class="listType == 1 ? 'active' : ''"
          >
            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.75 0.25C0.473858 0.25 0.25 0.473858 0.25 0.75V4C0.25 4.27614 0.473858 4.5 0.75 4.5H4C4.27614 4.5 4.5 4.27614 4.5 4V0.75C4.5 0.473858 4.27614 0.25 4 0.25H0.75ZM1.25 3.5V1.25H3.5V3.5H1.25ZM6 0.25C5.72386 0.25 5.5 0.473858 5.5 0.75V4C5.5 4.27614 5.72386 4.5 6 4.5H9.25C9.52614 4.5 9.75 4.27614 9.75 4V0.75C9.75 0.473858 9.52614 0.25 9.25 0.25H6ZM6.5 3.5V1.25H8.75V3.5H6.5ZM0.25 6C0.25 5.72386 0.473858 5.5 0.75 5.5H4C4.27614 5.5 4.5 5.72386 4.5 6V9.25C4.5 9.52614 4.27614 9.75 4 9.75H0.75C0.473858 9.75 0.25 9.52614 0.25 9.25V6ZM1.25 6.5V8.75H3.5V6.5H1.25ZM6 5.5C5.72386 5.5 5.5 5.72386 5.5 6V9.25C5.5 9.52614 5.72386 9.75 6 9.75H9.25C9.52614 9.75 9.75 9.52614 9.75 9.25V6C9.75 5.72386 9.52614 5.5 9.25 5.5H6ZM6.5 8.75V6.5H8.75V8.75H6.5Z"
              />
            </svg>
          </div>
          <div
            class="list-type"
            @click="listType = 2"
            :class="listType == 2 ? 'active' : ''"
          >
            <svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.25 1.5H0.25V0.5H1.25V1.5ZM9.75 1.5H2.25V0.5H9.75V1.5ZM1.25 4.5H0.25V3.5H1.25V4.5ZM9.75 4.5H2.25V3.5H9.75V4.5ZM1.25 7.5H0.25V6.5H1.25V7.5ZM9.75 7.5H2.25V6.5H9.75V7.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="empty" v-if="projectList.length == 0"></div>

    <!-- 列表类型1 -->
    <div class="list-card" v-if="listType == 1">
      <div
        class="list-card-item create"
        @click="create"
        v-if="type == 1 && filterText == ''"
      >
        <img src="@/assets/images/workspace/add.png" alt="" />
        <div class="text">新建方案</div>
      </div>
      <div
        class="list-card-item"
        v-for="(item, index) of projectList"
        :key="'list-card' + index"
        @click="toDetail(item)"
      >
        <!-- 状态 -->
        <div class="list-card-header" @click.stop>
          <!-- 新建状态 -->
          <div>
            <el-dropdown>
              <!-- 已经有 -->
              <div
                class="list-card-status-1"
                v-if="item.state"
                :style="item.state.state_css"
              >
                {{ item.state.state_name }}
              </div>
              <!-- 没有 -->
              <div v-else class="list-card-status-add">+添加状态</div>
              <el-dropdown-menu slot="dropdown">
                <!-- 下拉菜单 -->
                <el-dropdown-item
                  @click.native="setItemStatus(i, item)"
                  v-for="i of status"
                  :key="i.color"
                >
                  <div
                    class="dropdown-color-item"
                    :id="isSelectStatus(i, item)"
                  >
                    <div
                      class="color-item"
                      :style="`background:${i.state_color}`"
                    ></div>
                    {{ i.state_name }}

                    <div
                      class="close"
                      @click="stateDelete(i)"
                      v-if="i.user_id !== '0'"
                      @click.stop
                    ></div>
                  </div>
                </el-dropdown-item>

                <!-- 自定义 -->
                <div class="dropdown-split-line"></div>
                <el-dropdown-item>
                  <el-popover
                    v-model="item.visible"
                    ref="popover"
                    placement="right"
                    trigger="hover"
                  >
                    <div class="custom-popo">
                      <div class="main">
                        <div class="input-item">
                          <div class="name">文本:</div>
                          <div class="main">
                            <el-input
                              class="custom-inputs"
                              maxLength="6"
                              v-model="statusEdit.name"
                              placeholder="请输入6字内"
                            ></el-input>
                          </div>
                        </div>
                        <div class="input-item colorStyle">
                          <div class="name" style="margin-top: -24px">
                            颜色:
                          </div>
                          <div class="main color-container">
                            <div
                              class="color-item"
                              v-for="(a, index) of colorsMapp"
                              :key="index"
                              :style="
                                a.color == statusEdit.color
                                  ? `border:1px solid ${a.color}`
                                  : `background-color:${a.color}`
                              "
                              @click="setCustomItem(a)"
                            >
                              <div
                                class="color-item-center"
                                :style="`background-color:${a.color}`"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="footer">
                        <el-button
                          class="button define"
                          @click="commitCustom(item)"
                          type="primary"
                          >确定</el-button
                        >
                        <el-button
                          class="button cancel"
                          @click="cancelItem(item)"
                          >取消</el-button
                        >
                      </div>
                    </div>
                    <div slot="reference" class="dropdown-color-item">
                      <div
                        class="color-item"
                        :style="`background:#C9CDD4`"
                      ></div>
                      自定义
                    </div>
                  </el-popover>
                </el-dropdown-item>

                <!-- 取消状态 -->
                <div class="dropdown-split-line" v-if="item.state"></div>
                <el-dropdown-item
                  v-if="item.state"
                  @click.native="setItemStatusNull(item)"
                >
                  <div class="dropdown-color-item">
                    <div class="color-item border-color"></div>
                    取消状态
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div>
            <div
              class="collection-button"
              :class="item.isCollection ? 'collection' : 'un-collection'"
              @click.stop="collection(item)"
            ></div>
            <el-dropdown class="custom-dropdown">
              <div class="d-point">
                <img class="tools" src="@/assets/icon/3point.png" alt="" />
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="edit(item)" v-if="type != 3">
                  <div class="d">打开</div></el-dropdown-item
                >
                <el-dropdown-item v-if="type != 3" @click.native="copy(item)"
                  ><div class="d">创建副本</div></el-dropdown-item
                >
                <el-dropdown-item v-if="type != 3" @click.native="remove(item)"
                  ><div class="d">删除</div></el-dropdown-item
                >

                <el-dropdown-item v-if="type == 3" @click.native="reback(item)"
                  ><div class="d">恢复</div></el-dropdown-item
                >

                <el-dropdown-item
                  v-if="type == 3"
                  @click.native="redelete(item)"
                  ><div class="d">永久删除</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

        <!-- 名称 -->
        <div class="list-card-name">{{ item.programme_name }}</div>

        <!-- 信息 -->
        <div class="list-card-info">
          <div class="list-card-info-item">
            <div class="list-card-info-title">需求电量</div>
            <div class="list-card-info-value">
              <span class="number">{{ item.demand_capacity }}</span>
              <span class="unit">kW</span>
            </div>
          </div>
          <div class="list-card-info-line"></div>
          <div class="list-card-info-item">
            <div class="list-card-info-title">实际电量</div>
            <div class="list-card-info-value">
              <span class="number">{{ item.actual_capacity }}</span>
              <span class="unit">kW</span>
            </div>
          </div>
        </div>

        <!-- 时间 -->
        <div class="time-info">{{ getTime(item) }}</div>
      </div>
    </div>

    <!-- 列表类型2 -->
    <div class="list-line" v-else>
      <div class="create" @click="create" v-if="type == 1 && filterText == ''">
        <img src="@/assets/images/workspace/add.png" alt="" />
        <div class="text">新建方案</div>
      </div>
      <div class="list-item list-item-header">
        <div class="row">方案名称</div>
        <div class="row">更新时间</div>
        <div class="row">需求电量 (KW)</div>
        <div class="row">实际电量 (KW)</div>
        <div class="row">状态</div>
      </div>
      <div
        class="list-item list-row"
        @click="toDetail(item)"
        v-for="(item, index) of projectList"
        :key="'list-line' + index"
      >
        <div class="row row-name">
          <div class="text">{{ item.programme_name }}</div>
          <div
            class="collection-button"
            :class="item.isCollection == 1 ? 'collection' : 'un-collection'"
            @click.stop="collection(item)"
          ></div>
        </div>
        <div class="row">{{ getTime(item) }}</div>
        <div class="row">{{ item.demand_capacity }}</div>
        <div class="row">{{ item.actual_capacity }}</div>
        <div class="row utils" @click.stop>
          <!-- 新建状态 -->
          <div>
            <el-dropdown>
              <!-- 已经有 -->
              <div class="list-card-status-1" v-if="item.state">
                {{ item.state.state_name }}
              </div>
              <!-- 没有 -->
              <div v-else class="list-card-status-add">+添加状态</div>
              <el-dropdown-menu slot="dropdown">
                <!-- 下拉菜单 -->
                <el-dropdown-item
                  @click.native="setItemStatus(i, item)"
                  v-for="i of status"
                  :key="i.color"
                >
                  <div
                    class="dropdown-color-item"
                    :id="isSelectStatus(i, item)"
                  >
                    <div
                      class="color-item"
                      :style="`background:${i.state_color}`"
                    ></div>
                    {{ i.state_name }}

                    <div
                      class="close"
                      @click="stateDelete(i)"
                      v-if="i.user_id !== 0"
                      @click.stop
                    ></div>
                  </div>
                </el-dropdown-item>

                <!-- 自定义 -->
                <div class="dropdown-split-line"></div>
                <el-dropdown-item>
                  <el-popover
                    v-model="item.visible"
                    ref="popover"
                    placement="right"
                    trigger="hover"
                  >
                    <div class="custom-popo">
                      <div class="main">
                        <div class="input-item">
                          <div class="name">文本:</div>
                          <div class="main">
                            <el-input
                              class="custom-inputs"
                              v-model="statusEdit.name"
                              maxlength="6"
                              placeholder="请输入6字内"
                            ></el-input>
                          </div>
                        </div>
                        <div class="input-item">
                          <div class="name">颜色:</div>
                          <div class="main color-container">
                            <div
                              class="color-item"
                              v-for="(a, index) of colorsMapp"
                              :key="index"
                              :style="
                                a.color == statusEdit.color
                                  ? `border:1px solid ${a.color}`
                                  : `background-color:${a.color}`
                              "
                              @click="setCustomItem(a)"
                            >
                              <div
                                class="color-item-center"
                                :style="`background-color:${a.color}`"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="footer">
                        <el-button
                          class="button"
                          @click="commitCustom(item)"
                          type="primary"
                          >确定</el-button
                        >
                        <el-button class="button" @click="cancelItem(item)"
                          >取消</el-button
                        >
                      </div>
                    </div>
                    <div slot="reference" class="dropdown-color-item">
                      <div
                        class="color-item"
                        :style="`background:#C9CDD4`"
                      ></div>
                      自定义
                    </div>
                  </el-popover>
                </el-dropdown-item>

                <!-- 取消状态 -->
                <div class="dropdown-split-line" v-if="item.state"></div>
                <el-dropdown-item
                  v-if="item.state"
                  @click.native="setItemStatusNull(item)"
                >
                  <div class="dropdown-color-item">
                    <div class="color-item border-color"></div>
                    取消状态
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <el-dropdown class="custom-dropdown">
            <div class="d-point">
              <img
                class="tools"
                style="padding-top: 2px; paddng-bottom: 2px"
                src="@/assets/icon/3point.png"
                alt=""
              />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="edit(item)" v-if="type != 3">
                <div class="d">打开</div></el-dropdown-item
              >
              <el-dropdown-item v-if="type != 3" @click.native="copy(item)"
                ><div class="d">创建副本</div></el-dropdown-item
              >
              <el-dropdown-item v-if="type != 3" @click.native="remove(item)"
                ><div class="d">删除</div></el-dropdown-item
              >

              <el-dropdown-item v-if="type == 3" @click.native="reback(item)"
                ><div class="d">恢复</div></el-dropdown-item
              >

              <el-dropdown-item v-if="type == 3" @click.native="redelete(item)"
                ><div class="d" id="dele">永久删除</div></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getDateToNewData } from "@/lib/util";
import {
  list,
  remove,
  collection,
  thoroughDelete,
  copy,
  updateState,
  stateGet,
  stateCreate,
  stateDelete,
} from "@/api/programme.js";
export default {
  name: "project-list",
  props: {
    type: [String, Number], //1我的方案 2收藏 3回收站
  },
  data() {
    return {
      visiblepopover: false,
      inputText: "",
      filterText: "",
      listType: 1, //1 卡片 2 列表
      filterInfo: {
        timeType: 1, // 时间 1创建时间 2更新时间
        statusType: "所有状态", //所有状态
        statusValue: "",
      },
      list: [],
      statusTypes: [
        {
          name: "所有状态",
          value: "",
        },
        {
          name: "跟进中",
          value: "跟进中",
        },
        {
          name: "未交付",
          value: "未交付",
        },
        {
          name: "已完成",
          value: "已完成",
        },
      ],
      status: [],
      colorsMapp: [
        {
          color: "#F53F3F",
          css: "background: linear-gradient(90deg, #F53F3F 0%, #F58B3F 100%);",
        },
        {
          color: "#FF7D00",
          css: "background: linear-gradient(90deg, #FF9A2E 0%, #FFD12E 100%);",
        },
        {
          color: "#F9CC45",
          css: "background: linear-gradient(90deg, #FFD12E 0%, #FFF72E 100%);",
        },
        {
          color: "#27C346",
          css: "background: linear-gradient(90deg, #23C343 0%, #90C323 100%);",
        },
        {
          color: "#3C7EFF",
          css: "background: linear-gradient(90deg, #1445F3 0%, #3C7EFF 100%);",
        },
        {
          color: "#8D4EDA",
          css: "background: linear-gradient(90deg, #3414F3 0%, #8D4EDA 100%);",
        },
        {
          color: "#1D2129",
          css: "background: linear-gradient(90deg, #1D2129 0%, #5B5D60 100%);",
        },
      ],

      customStatusData: this.createCustomStatusData(),
      statusEdit: {
        color: "",
        name: "",
        css: "",
      },
    };
  },
  computed: {
    showSetItemStatusNull() {
      return function (item) {
        if (item.programme_state) {
          let re = JSON.parse(item.programme_state);
          for (let data of this.statusTypes) {
            if (data.name == re.name) {
              return true;
            }
          }
          // return
        }
      };
    },
    isSelectStatus() {
      return function (i, item) {
        if (item.state) {
          return i.state_name == item.state.state_name ? "active" : "";
        }
      };
    },
    projectList() {
      if (this.filterInfo.timeType == 1) {
        this.list.sort((a, b) => {
          return b.createTimeN - a.createTimeN;
        });
      }

      if (this.filterInfo.timeType == 2) {
        this.list.sort((a, b) => {
          return b.updateTimeN - a.updateTimeN;
        });
      }

      return this.list

        .filter((e) => {
          return e.programme_name.indexOf(this.filterText) >= 0;
        })
        .filter((e) => {
          return e.actual_capacity !== null && e.actual_capacity !== undefined;
        })
        .filter((e) => {
          let name = e.state ? e.state.state_name : "";
          return name.indexOf(this.filterInfo.statusValue) >= 0;
        })
        .map((project) => {
          return project;
        });
    },
  },
  created() {
    this.loadData();
    this.loadStatus();
  },
  watch: {},
  methods: {
    //加载所有状态
    async loadStatus() {
      let { data } = await stateGet();
      this.status = data;
      // console.log(this.status);
    },
    //删除自定义状态
    async stateDelete(item) {
      let data = await stateDelete({
        state_id: item.state_id,
      });
      this.$message("删除自定义状态成功!");
      this.loadStatus();
      this.loadData();
    },
    //添加自定义状态
    async commitCustom(item) {
      // // 超过六个字直接return
      // if(this.statusEdit.name.length>6) return
      if (!this.statusEdit.name) {
        this.$message.error("请输入名称");
        return;
      }
      if (!this.statusEdit.color) {
        this.$message.error("请选择颜色");
        return;
      }
      let data = await stateCreate({
        state_color: this.statusEdit.color,
        state_name: this.statusEdit.name,
        state_css: this.statusEdit.css,
      });
      this.$message.success("添加自定义状态成功!");
      this.loadStatus();
      this.loadData();
      item.visible = false;

      this.statusEdit = {
        name: "",
        css: "",
        color: "",
      };
    },
    cancelItem(item) {
      item.visible = false;
      this.statusEdit = {
        name: "",
        css: "",
        color: "",
      };
    },
    setCustomItem(item) {
      this.statusEdit.color = item.color;
      this.statusEdit.css = item.css;
    },
    createCustomStatusData() {
      return {
        name: null,
        selectColor: null,
      };
    },
    async commitCustomStatus() {},
    setStatus(item) {
      this.filterInfo.statusType = item.state_name;
      this.filterInfo.statusValue = item.state_value;
    },
    async setItemStatus({ state_id }, item) {
      await updateState({
        programme_id: item.programme_id,
        state_id,
      });
      this.$message.success("设置状态成功!");
      this.loadData();
    },
    async setItemStatusNull(item) {
      await updateState({
        state_id: null,
        programme_id: item.programme_id,
      });
      this.$message.success("取消状态成功!");
      this.loadData();
    },

    toDetail(project) {
      if (this.type == 3) {
        return;
      }
      this.$parent.$parent.$parent.$refs["projectDetail"].open(project);
    },
    async loadData(bool = false) {
      const types = {
        1: "selectNotDelete",
        2: "selectIsCollection",
        3: "selectDelete",
      };
      let { data } = await list(types[this.type]);
      this.list = data
        .map((e) => {
          e.createTimeN = new Date(e.create_date) * 1;
          e.updateTimeN = new Date(e.update_date) * 1;
          return e;
        })
        .map((e) => {
          e.visible = false;
          return e;
        });
      if (bool === true) {
        this.$parent.$parent.$parent.$refs["projectDetail"].open(
          this.list[this.list.length - 1]
        );
      }
    },
    getTime(project) {
      return getDateToNewData(project.update_date);
    },
    create() {
      this.$parent.$parent.$parent.$refs["dialogCreate"].open();
    },
    edit(project) {
      if (this.type == 3) {
        return;
      }
      this.$parent.$parent.$parent.$refs["projectDetail"].open(project);
    },
    async reback(project) {
      this.$confirm(
        "恢复后可在【工作台-我的方案】中查看",
        "确认要恢复方案吗？",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
        }
      ).then(async () => {
        await remove(project);

        this.$message.success("恢复成功!");
        this.loadData();
      });
    },
    async redelete(project) {
      this.$confirm("删除后，此文件将无法恢复。", "确认永久删除该文件吗？", {
        confirmButtonText: "永久删除",
        cancelButtonText: "取消",
        // 自定义类名
        confirmButtonClass: "btnFalses",
        cancelButtonClass: "btnFalse",
      }).then(async () => {
        await thoroughDelete(project);
        this.$message.success("文件已永久删除!");
        this.loadData();
      });
    },
    async remove(project) {
      await remove(project);
      this.$message.success("方案已移入回收站!");
      this.loadData();
      return;
      this.$confirm("确定删除项目吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await remove(project);
        this.$message.success("方案已移入回收站!");
        this.loadData();
      });
    },
    async copy(project) {
      await copy(project);
      this.$message.success("复制成功!");
      this.loadData();
      return;
      this.$confirm("确定复制项目吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(async () => {
        await copy(project);
        this.$message.success("复制成功!");
        this.loadData();
      });
    },
    async collection(project) {
      await collection(project);
      if (project.isCollection) {
        this.$message.success("已取消!");
      } else {
        this.$message.success("已收藏!");
      }
      if (project.isCollection == 1) {
        project.isCollection = 0;
      } else {
        project.isCollection = 1;
      }
      this.loadData();
    },
  },
};
</script>
<style lang="scss" scoped>
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: 120px;
    margin-top: 14px;
    margin-bottom: 31.5px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 39.5px;
    cursor: pointer;
    .cover {
      width: 54px;
      height: 54px;
      margin-bottom: 12px;
    }
    .user-name,
    .user-job {
      width: 112px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
    }
    .user-name {
      font-size: 16px;
      margin-bottom: 4px;
      font-weight: bold;
      color: rgba(43, 54, 116, 1);
    }
    .user-job {
      font-size: 12px;
      color: rgba(137, 141, 165, 1);
    }
  }
  .menus {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .menu {
      margin-bottom: 20px;
      width: 112px;
      overflow: hidden;
      padding-top: 8px;
      padding-bottom: 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      flex-direction: row;
      font-size: 14px;
      color: rgba(134, 144, 156, 1);
      border-radius: 6px;
      svg {
        width: 16px;
        margin-left: 13.5px;
        margin-right: 9.5px;
        fill: rgba(134, 144, 156, 1);
      }
      &:hover {
        background: rgb(242,243,245);
        // color: white;
        svg {
          // fill: white; 
        }
      }
    }

    .active {
      background: #165dff;
      color: white;
      svg {
        fill: white;
      }
      &:hover {
        background: #165dff;
        color: white;
        svg {
        fill: white;

          // fill: white; 
        }
      }
    }
    .menu-line {
      width: 112px;
      height: 0px;
      /* arco/e-0-default/light/line/color-border-2 */

      border-top: 1px solid #e5e6eb;
      margin-bottom: 20px;
    }
  }
}
</style>

<template>
  <div class="menu-container">
    <!-- logo -->
    <img class="logo" src="@/assets/images/workspace/logo.png" alt="" />

    <!-- user info -->
    <div class="user-info" @click="$router.push({ name: 'setting' })">
      <div class="cover">
        <user-cover-mine></user-cover-mine>
      </div>

      <div class="user-name">{{ $store.getters.userName }}</div>
      <div class="user-job">
        {{ $store.getters.userJob }}
      </div>
    </div>

    <!-- menus -->
    <div class="menus">
      <div
        class="menu"
        @click="$router.push({ name: 'project' })"
        :class="$route.name == 'project' ? 'active' : ''"
      >
        <svg viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.666626 1.33329C0.666626 0.642924 1.22628 0.0832863 1.91663 0.0832863H16.0832C16.7736 0.0832863 17.3332 0.642924 17.3332 1.33329V12.1666C17.3332 12.857 16.7736 13.4166 16.0832 13.4166H1.91663C1.22628 13.4166 0.666626 12.857 0.666626 12.1666V1.33329ZM2.3333 1.74995V11.75H15.6666V1.74995H2.3333ZM14 15.9166H3.99996V14.25H14V15.9166ZM14 5.49997H3.99999V3.74997H14V5.49997ZM3.99999 9.24997H11.5V7.49997H3.99999V9.24997Z"
          />
        </svg>

        <div class="meu-text">工作台</div>
      </div>

      <div
        class="menu"
        @click="$router.push({ name: 'collection' })"
        :class="$route.name == 'collection' ? 'active' : ''"
      >
        <svg viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.64926 1.50978C8.03135 0.735564 9.13535 0.73556 9.51743 1.50978L11.4634 5.45266L15.8146 6.08496C16.669 6.20908 17.0102 7.25908 16.3919 7.86171L13.2433 10.9308L13.9866 15.2645C14.1326 16.1155 13.2394 16.7644 12.4752 16.3626L8.58335 14.3165L4.69147 16.3626C3.92726 16.7644 3.03412 16.1155 3.18005 15.2645L3.92335 10.9308L0.774755 7.86171C0.156509 7.25908 0.497663 6.20908 1.35206 6.08496L5.70331 5.45266L7.64926 1.50978ZM8.58335 3.383L7.05247 6.48496C6.90072 6.79237 6.60743 7.00546 6.26814 7.05479L2.84495 7.55221L5.32201 9.96671C5.56751 10.206 5.67951 10.5508 5.62155 10.8887L5.03681 14.2981L8.09864 12.6884C8.4021 12.5289 8.7646 12.5289 9.0681 12.6884L12.1299 14.2981L11.5451 10.8887C11.4872 10.5508 11.5992 10.206 11.8447 9.96671L14.3218 7.55221L10.8986 7.05479C10.5593 7.00546 10.266 6.79237 10.1143 6.48496L8.58335 3.383Z"
          />
        </svg>
        <div class="meu-text">收藏</div>
      </div>

      <div
        class="menu"
        @click="$router.push({ name: 'recovery' })"
        :class="$route.name == 'recovery' ? 'active' : ''"
      >
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.1667 1.75V0.0833282H3.83334V1.74999H0.0833435V3.41666H1.54168V14.6667C1.54168 15.357 2.10132 15.9167 2.79168 15.9167H13.2083C13.8987 15.9167 14.4583 15.357 14.4583 14.6667V3.41666H15.9167V1.75H12.1667ZM3.20834 14.25V3.41666H12.7917V14.25H3.20834ZM5.50001 5.49999V11.75H7.16668V5.49999H5.50001ZM8.83334 5.49999V11.75H10.5V5.49999H8.83334Z"
          />
        </svg>

        <div class="meu-text">回收站</div>
      </div>

      <div class="menu-line" v-if="false"></div>
      <div class="menu" v-if="false">
        <svg viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.00001 0.140457L15.9167 4.33164V13.6684L8.00001 17.8596L0.0833435 13.6684V4.33164L8.00001 0.140457ZM1.75001 6.21747V12.665L7.16668 15.5326V9.0851L1.75001 6.21747ZM8.83334 9.0851V15.5326L14.25 12.665V6.21747L8.83334 9.0851ZM13.3023 4.83335L8.00001 2.02628L2.69772 4.83335L8.00001 7.64047L13.3023 4.83335Z"
          />
        </svg>

        <div class="meu-text">产品库</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    "$route.name"() {
      this.$parent.$refs.projectDetail.hidden();
    },
  },
};
</script>

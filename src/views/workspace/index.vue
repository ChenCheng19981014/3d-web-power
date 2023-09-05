<template>
  <div class="workspace">
    <work-space-menu></work-space-menu>
    <work-space-main ref="workSpaceMain"></work-space-main>
    <dialogCreate @update="update" ref="dialogCreate"></dialogCreate>
    <project-detail ref="projectDetail"></project-detail>
  </div>
</template>

<script>
import dialogCreate from "./components/dialog-create";
import WorkSpaceMenu from "./menu";
import WorkSpaceMain from "./main";
import ProjectDetail from "./project-detail";
export default {
  components: {
    WorkSpaceMenu,
    WorkSpaceMain,
    dialogCreate,
    ProjectDetail,
  },
  created() {
    this.$router.push({
      name: "project",
    });
  },
  methods: {
    //数据更新之后
    update() {
      this.$refs["projectDetail"] && this.$refs["projectDetail"].update();
    },
  },
};
</script>

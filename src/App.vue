<template>
    <div class="landing">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
}
</script>
<style  lang="less">
@import "./assets/css/style.less";
.dark {
  filter: invert(1) hue-rotate(180deg);
  .el-select,
  .el-popper,
  .el-button,
  .inner,
  .image {
    filter: invert(1) hue-rotate(180deg);
    .width-icon {
      color: #fff;
    }
  }
  #container-getStarted .module .area .el-collapse .el-collapse-item::before {
    background-color: #b2b2b2 !important;
  }
  .button,
  .pop-up .connect-area .close {
    &:hover {
      background-color: rgba(0, 0, 0, 0.24) !important;
    }
  }
  #container-settings .module .area .el-row .el-col .cont {
    background-color: rgba(223, 223, 223, 1) !important;
  }
}
</style>

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
<style lang="less">
@import "./assets/css/style.less";
.dark {
  filter: invert(1) hue-rotate(180deg);
  .el-select,
  .el-popper,
  .el-button,
  #container-settings .module .area .el-row .el-col .el-card,
  #container-templates .module .area .el-row .el-col .el-card,
  #container-analytics .module .area .tem-row .el-col .el-card,
  .el-input,
  .el-select .el-input__inner,
  .aside-main .el-menu .el-menu-item .root,
  .inner,
  .image {
    filter: invert(1) hue-rotate(180deg);
    .width-icon {
      color: @white-color;
    }
  }
  #container-getStarted .module .area .el-collapse .el-collapse-item::before {
    background-color: #b2b2b2 !important;
  }
  .button,
  .pop-up .connect-area .close {
    &:hover {
      background-color: @primary-color-opacity1 !important;
    }
  }
  #container-settings .module .area .el-row .el-col .cont,
  #container-main .module {
    background-color: rgba(223, 223, 223, 1) !important;
  }
  #container-settings .module .area .el-row .el-col .el-card,
  #container-templates .module .area .el-row .el-col .el-card,
  #container-analytics .module .area .tem-row .el-col .el-card,
  .el-input__inner {
    color: @white-color !important;
    .desc {
      color: @white-color !important;
    }
  }
}
</style>

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

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.3s;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }
@font-color: @theme-color;
a {
  color: @font-color;
}
.button-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}
.button {
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  border-radius: 100px;
  &:hover {
    background-color: @primary-color-opacity2;
  }
  svg,
  path {
    display: block;
    fill: @primary-color;
    cursor: inherit;
  }
}
.is-disabled {
  cursor: no-drop;
}
.mt-border {
  margin: 32px auto;
}
.m-16 {
  margin: 0 16px;
}
.top-margin {
  padding-top: 16px;
  @media screen and (min-width: 600px) {
    padding-top: 32px;
  }
}
.padding-64 {
  padding: 64px;
}
.padding-24 {
  padding: 24px;
  @media screen and (min-width: 1800px) {
    padding: 32px;
  }
}
.padding-16 {
  padding: 16px;
  @media screen and (min-width: 1800px) {
    padding: 24px;
  }
}
.both-margin {
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (min-width: 1800px) {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.lang-max {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
  // width: 80%;
  // max-width: 1540px;
  // padding: 0;
  // margin: auto;
  // @media screen and (min-width: 2160px) {
  //   width: 100%;
  //   max-width: 1680px;
  // }
  // @media screen and (min-width: 2664px) {
  //   max-width: 1880px;
  // }
  // @media screen and (min-width: 4090px) {
  //   max-width: 2120px;
  // }
  // @media screen and (min-width: 5120px) {
  //   max-width: 2360px;
  // }
  // @media screen and (max-width: 1200px) {
  //   width: calc(100% - 64px);
  //   padding: 0 32px;
  // }
}

.width-icon {
  display: block;
  width: 24px;
  height: 24px;
  color: @primary-color;
  fill: @primary-color;
  &.small {
    width: 20px;
    height: 20px;
  }
  &.min-small {
    width: 16px !important;
    height: 16px;
  }
  &.minimum-small {
    width: 14px;
    height: 14px;
  }
  &.big {
    width: 35px;
    height: 35px;
  }
  svg {
    width: inherit;
    height: inherit;
  }
}

.font-48 {
  font-size: 48px;
}

.font-44 {
  font-size: 44px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 22px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 66px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 88px;
  // }
}

.font-34 {
  font-size: 34px;
}

.font-32 {
  font-size: 32px;
}

.font-30 {
  font-size: 30px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 24px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 45px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 60px;
  // }
}

.font-24 {
  font-size: 24px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 18px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 36px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 60px;
  // }
}

.font-22 {
  font-size: 22px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 17px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 33px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 55px;
  // }
}

.font-20 {
  font-size: 20px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 16px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 30px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 60px;
  // }
}

.font-18 {
  font-size: 18px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 15px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 26px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 54px;
  // }
}

.font-16 {
  font-size: 16px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 14px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 24px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 48px;
  // }
}
.font-14 {
  font-size: 14px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 13px;
  // }
  // @media screen and (max-width: 1260px) {
  //   font-size: 18px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 28px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 42px;
  // }
}
.font-12 {
  font-size: 12px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 11px;
  // }
  // @media screen and (max-width: 1260px) {
  //   font-size: 16px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 24px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 36px;
  // }
}
.font-10 {
  font-size: 10px;
  // @media screen and (min-width: 2160px) {
  //   font-size: 9px;
  // }
  // @media screen and (max-width: 1260px) {
  //   font-size: 14px;
  // }
  // @media screen and (max-width: 768px) {
  //   font-size: 20px;
  // }
  // @media screen and (max-width: 600px) {
  //   font-size: 30px;
  // }
}

.weight-3 {
  font-weight: 300;
}
.weight-4 {
  font-weight: 400;
}
.weight-5 {
  font-weight: 500;
}
.weight-6 {
  font-weight: 600;
}
.weight-8 {
  font-weight: 800;
}

.flex-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &.space-between {
    justify-content: space-between;
  }
  &.center {
    justify-content: center;
  }
  &.flex-start {
    justify-content: flex-start;
  }
  &.nowrap {
    flex-wrap: nowrap;
  }
}

.img,
.wid {
  display: block;
  width: 100%;
}

.picture-mit {
  max-width: 170px;
  margin: auto;
}

.menu-width-mit {
  width: calc(100% - 230px);
  @media screen and (max-width: 540px) {
    width: calc(100% - 200px);
  }
}

.el-loading-spinner {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .path {
    stroke: @theme-color;
  }
  .el-loading-text {
    width: 100%;
    margin: 8px 0 0;
    font-size: 16px;
    color: @theme-color;
    @media screen and (min-width: 2160px) {
      font-size: 14px;
    }
  }
}
</style>


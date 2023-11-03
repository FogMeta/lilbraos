<template>
  <div class="wrapper" id="wrapper" ref="area">
    <el-container>
      <el-header height="60px" class="flex-row">
        <v-head></v-head>
      </el-header>
      <el-main class="el-main-mit">
        <div class="content flex-row">
          <v-aside v-show="clientWidth"></v-aside>
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vHead from './Header.vue'
import vAside from './Aside.vue'
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { ElBacktop, ElContainer, ElHeader, ElMain, ElRow, ElCol } from "element-plus"
export default defineComponent({
  components: {
    vHead, vAside, ElBacktop, ElContainer, ElHeader, ElMain, ElRow, ElCol
  },
  setup () {
    const store = useStore()
    const clientWidth = computed(() => (store.state.clientWidth))
    const bodyWidth = ref(document.body.clientWidth < 992)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()

    onMounted(() => { })
    return { system, clientWidth }
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  min-height: 100vh;
  .content {
    height: 100%;
    align-items: stretch;
    flex-wrap: nowrap;
    :deep(.el-backtop) {
      background-color: #ffffff;
      color: #231f20;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
      @media screen and (max-width: 768px) {
        width: 80px;
        height: 80px;
      }
      @media screen and (max-width: 600px) {
        width: 110px;
        height: 110px;
      }
      .el-icon,
      svg {
        @media screen and (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
        @media screen and (max-width: 600px) {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  .el-container {
    .el-header,
    .el-main {
      width: 100%;
      padding: 0;
    }
    .el-main-mit {
      height: calc(100vh - 60px);
      border-top: 1px solid rgb(33, 33, 33);
    }
  }
}
</style>

<style lang="less">
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.3s;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }

.mt-border {
  margin: 30px auto;
  border-top: 1px solid #8c878d;
}
.top-margin {
  padding-top: 16px;
  @media screen and (min-width: 600px) {
    padding-top: 32px;
  }
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
  @media screen and (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.lang-max {
  width: 100%;
  margin: 0 auto;
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

.width-24 {
  display: block;
  width: 24px;
  height: 24px;
  color: #fff;
  fill: #fff;
  &.small {
    width: 20px;
    height: 20px;
  }
}

.font-44 {
  font-size: 44px;
  font-weight: 400;
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

.flex-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.img {
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

.el-loading-spinner .path {
  stroke: #c37af9;
}
.el-loading-spinner .el-loading-text {
  margin: 15px 0;
  font-size: 20px;
  color: #c37af9;
  @media screen and (min-width: 2160px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 60px;
  }
}
</style>


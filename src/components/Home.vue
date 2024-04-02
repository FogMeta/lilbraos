<template>
  <div class="wrapper" id="wrapper" ref="area">
    <el-container>
      <el-header height="60px" class="flex-row">
        <v-head></v-head>
      </el-header>
      <el-main class="el-main-mit">
        <div class="content flex-row nowrap">
          <v-aside v-show="clientWidth && route.name !== 'get-started' && route.name !== 'homepage'"></v-aside>
          <div class="container">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </router-view>
          </div>
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

    onMounted(async () => {
      system.$commonFun.checkMode()
    })
    return { system, clientWidth, route }
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  min-height: 100vh;
  .content {
    height: 100%;
    align-items: stretch;
    :deep(.el-backtop) {
      background-color: @primary-color;
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
    .container {
  position: relative;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
  .el-container {
    .el-header,
    .el-main {
      width: 100%;
      padding: 0;
    }
    .el-header {
      background-color: @white-color;
    }
    .el-main-mit {
      height: calc(100vh - 60px);
      border-top: 1px solid rgb(224, 224, 224);
      overflow: hidden;
    }
  }
}
</style>

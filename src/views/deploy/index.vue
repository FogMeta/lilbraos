<template>
  <section id="container-settings" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-24 weight-6 flex-row">
        Deployments
        <span class="button width-icon">
          <el-icon>
            <RefreshRight />
          </el-icon>
        </span>
        <el-checkbox v-model="checked" label="Active" size="large" />
      </h1>
      <div class="area padding-64 flex-row center">
        <div class="tit font-24 weight-4">{{ checked? 'No active deployments' : 'No deployments'}}</div>
        <router-link :to="{ name: 'deployNew'}" class="root flex-row center button-shadow">
          <span class="hide">Deploy to Lagrange</span>
          <i class="el-icon width-icon small">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon">
              <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
            </svg>
          </i>
        </router-link>
        <router-link to="" class="root flex-row center button-shadow is-disabled">
          <span class="hide">Deploy to Akash</span>
          <i class="el-icon width-icon small">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="RocketLaunchIcon">
              <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path>
            </svg>
          </i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { RefreshRight } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElSelect, ElOption, ElIcon, ElCheckbox } from "element-plus"
export default defineComponent({
  components: {
    RefreshRight,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption,
    ElIcon, ElCheckbox
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const checked = ref(true)

    onMounted(async () => { })
    return {
      system,
      bodyWidth,
      checked
    }
  }
})
</script>

<style lang="less" scoped>
#container-settings {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  :deep(.module) {
    margin: 0 auto 15px;
    h1 {
      color: @primary-color;
      .button {
        margin: 0 25px;
      }
      .el-checkbox {
        color: inherit;
        .el-checkbox__input.is-checked .el-checkbox__inner {
          background-color: @theme-color;
          border-color: @theme-color;
        }
        .el-checkbox__label {
          color: inherit;
        }
      }
    }
    .area {
      height: auto;
      transition: all 0.8s;
      text-align: center;
      line-height: 2;
      overflow: hidden;
      .tit {
        width: 100%;
      }
      .root {
        padding: 8px 22px;
        margin: 16px;
        background-color: @theme-color;
        font-size: 15px;
        color: @white-color;
        border-radius: 5px;
        text-transform: uppercase;
        &:hover {
          background-color: @theme-color-opacity1;
        }
        &.is-disabled{
          cursor: no-drop;
          background-color: @primary-color-opacity1;
        }
        .el-icon {
          margin: 0 0 0 16px;
          color: @white-color;
          fill: @white-color;
          svg,
          path {
            opacity: 1;
          }
        }
        span {
          letter-spacing: 0.5px;
        }
      }
    }
  }
}
</style>
<template>
  <section id="container-settings" class="lang-max top-margin both-margin">
    <div class="module">
      <div class="area flex-row flex-start">
        <div class="button width-icon" @click="rollback">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChevronLeftIcon">
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </div>
        <el-steps :active="active" align-center finish-status="success" class="padding-16">
          <el-step>
            <template #title>
              <span class="font-14 weight-4">Choose Template</span>
            </template>
          </el-step>
          <el-step>
            <template #title>
              <span class="font-14 weight-4">Create Deployment</span>
            </template>
          </el-step>
          <el-step>
            <template #title>
              <span class="font-14 weight-4">Choose providers</span>
            </template>
          </el-step>
        </el-steps>
      </div>
      <div class="area">
        <h1 class="font-32 weight-6 mt-border">Deploy Application From Lagrange Space</h1>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
            <!-- @click="active ='2'" -->
            <el-card class="is-disabled" shadow="hover">
              <div class="font-14 weight-4">Space URL</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="area">
        <h1 class="font-32 weight-6 mt-border">What do you want to deploy?</h1>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
            <!-- @click="active ='2'" -->
            <el-card class="is-disabled" shadow="hover">
              <div class="font-14 weight-4">Hello World</div>
              <div class="font-12 weight-4 desc">Simple next.js web application showing hello world.</div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Edit } from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElSelect, ElOption, ElStep, ElSteps, ElCard } from "element-plus"
export default defineComponent({
  components: {
    Edit,
    ElButton,
    ElRow,
    ElCol,
    ElSelect,
    ElOption, ElStep, ElSteps, ElCard
  },
  setup () {
    const store = useStore()
    const reverse = computed(() => (store.state.reverse))
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const claimShow = ref(false)
    const active = ref('1')
    const theme = reactive({
      value: '',
      options: [{
        value: 'Auto',
        label: 'Auto',
      }, {
        value: 'Dark',
        label: 'Dark 🌑',
      }, {
        value: 'Light',
        label: 'Light ☀️',
      }]
    })

    async function rollback () {
      if (active.value === '1') router.push({ name: 'deploy' })
      else if (active.value === '2') active.value = '1'
      else if (active.value === '3') active.value = '2'
    }
    onMounted(async () => { })
    return {
      system,
      bodyWidth,
      claimShow,
      active,
      theme,
      rollback
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
    .area {
      flex-wrap: nowrap;
      height: auto;
      transition: all 0.8s;
      .el-steps {
        width: 100%;
        .el-step__head {
          &.is-success {
            color: @theme-color;
          }
          .el-step__line {
            .el-step__line-inner {
              border-color: @theme-color;
            }
          }
          .el-step__icon {
            background-color: @bg-color;
            font-size: 18px;
            border: 0;
            color: inherit;
            div.el-step__icon-inner {
              color: transparent;
              width: 8px;
              height: 8px;
              background-color: @dot-fusco-color;
              border-radius: 8px;
            }
          }
        }
        .el-step__main {
          .el-step__title {
            color: @primary-color-opacity;
            line-height: 1.3;
            &.is-success {
              color: @theme-color;
            }
          }
        }
      }
      .el-row {
        .el-col {
          .el-card {
            color: @primary-color;
            border: 0;
            // cursor: pointer;
            .desc {
              margin: 20px 0 0;
              line-height: 1.8;
              color: @primary-color-opacity;
            }
          }
        }
      }
    }
  }
}
</style>
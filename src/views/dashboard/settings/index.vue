<template>
  <section id="container-settings" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-32 weight-6 flex-row padding-16">Settings</h1>
      <div class="area padding-16 flex-row flex-start">
        <el-row :gutter="16">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="cont">
              <h6 class="font-16 weight-4">Network</h6>
              <div class="root padding-16">

              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
            <div class="cont">
              <h6 class="font-16 weight-4">General</h6>
              <div class="root padding-16">
                <el-select v-model="theme.value" class="m-2" placeholder="Theme" @change="themeMethod">
                  <el-option v-for="item in theme.options" :key="item.value" :label="item.label" :value="item.value">
                    <span class="flex-row width-icon small">
                      {{ item.label }}</span>
                  </el-option>
                </el-select>
              </div>
            </div>
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
import {
  Edit
} from '@element-plus/icons-vue'
import { ElButton, ElRow, ElCol, ElSelect, ElOption } from "element-plus"
export default defineComponent({
  components: {
    Edit, ElButton, ElRow, ElCol, ElSelect, ElOption
  },
  setup () {
    const store = useStore()
    const reverse = computed(() => (store.state.reverse))
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const claimShow = ref(false)
    const collapse = ref(false)
    const theme = reactive({
      value: '',
      options: [
        {
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

    function themeMethod () {
      switch (theme.value) {
        case 'Dark':
          store.dispatch('setReverse', 1)
          break
        case 'Light':
          store.dispatch('setReverse', 2)
          break
        default:
          store.dispatch('setReverse', 0)
      }
      console.log(store.state.reverse)
      system.$commonFun.checkMode()
    }
    async function checkMode () {
      const check = await system.$commonFun.checkDarkMode()
      if (reverse.value === '1') theme.value = 'Dark'
      else if (reverse.value === '2') theme.value = 'Light'
      else theme.value = 'Auto'
    }
    onMounted(async () => {
      checkMode()
    })
    return {
      system,
      bodyWidth,
      claimShow,
      collapse,
      theme,
      themeMethod
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
  .module {
    margin: 0 auto 15px;
    color: #eeeeee;
    h1 {
      color: #0c0b0b;
    }
    .area {
      height: auto;
      transition: all 0.8s;
      overflow: hidden;
      :deep(.el-row) {
        width: 100%;
        .el-col {
          line-height: 1.5;
          .cont {
            background-color: rgba(255, 255, 255, 1);
            border-radius: 4px;
            h3,
            h6 {
              padding: 8px;
              color: rgb(117, 117, 117);
            }
            .root {
              .el-select {
                max-width: 120px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

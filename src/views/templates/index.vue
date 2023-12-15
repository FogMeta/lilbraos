<template>
  <section id="container-templates" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-48 weight-6 flex-row center mobile-h1 mobile-center">Find your Template</h1>
      <h3 class="font-24 weight-4 flex-row center mobile-h3 mobile-center">Jumpstart your app development process with our pre-built solutions.</h3>
      <div class="area flex-row space-between">
        <el-row :gutter="16" class="tem-row">
          <el-col :xs="0" :sm="0" :md="6" :lg="6" :xl="6">
            <div class="left">
              <div class="title font-16 weight-6">Filter Templates</div>
              <el-input v-model="searchValue" class="font-14" clearable placeholder="Search" />
              <ul>
                <li v-for="i in 1" :key="i" :class="{'font-14 weight-4':true, 'active': i===1}">All(1)</li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="0" :lg="0" :xl="0">
            <div class="left mobile-left">
              <el-input v-model="searchValue" class="font-14" clearable placeholder="Search" />
              <el-button @click="drawerDown = true">
                Filter Templates
                <span class="width-icon small">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FilterAltIcon">
                    <path d="M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"></path>
                  </svg>
                </span>
              </el-button>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
            <el-row :gutter="16">
              <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="n in 1" :key="n">
                <el-card class="is-disabled" shadow="hover">
                  <div class="font-14 weight-4">Hello World</div>
                  <div class="font-12 weight-4 desc">Simple next.js web application showing hello world.</div>
                </el-card>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <el-drawer v-model="drawerDown" :direction="direction" size="50%">
      <template #header>
        <span>Filter Templates</span>
      </template>
      <template #default>
        <ul>
          <li @click="drawerDown=false" v-for="i in 1" :key="i" :class="{'font-16 weight-4':true, 'active': i===1}">All(1)</li>
        </ul>
      </template>
    </el-drawer>
  </section>
</template>

<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Edit } from '@element-plus/icons-vue'
import {
  ElButton, ElRow, ElCol, ElSelect, ElOption, ElCard, ElInput, ElDrawer
} from "element-plus"
export default defineComponent({
  components: {
    Edit, ElButton, ElRow, ElCol, ElSelect, ElOption, ElCard, ElInput, ElDrawer
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const searchValue = ref('')
    const collapse = ref(false)
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
    const drawerDown = ref(false)
    const direction = ref('btt')

    onMounted(async () => { })
    return {
      system,
      bodyWidth,
      searchValue,
      collapse,
      theme,
      drawerDown,
      direction
    }
  }
})
</script>

<style lang="less" scoped>
#container-templates {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  :deep(.module) {
    margin: 0 auto 15px;
    h3 {
      padding: 16px 0 48px;
      color: @grey-color;
      @media screen and (max-width: 992px) {
        padding: 16px 0;
      }
    }
    .area {
      height: auto;
      transition: all 0.8s;
      .tem-row {
        width: 100%;
        .el-col {
          margin-bottom: 16px;
          .left {
            max-width: 222px;
            &.mobile-left {
              max-width: none;
              .el-input {
                margin: 16px 0;
              }
              .el-button {
                width: 100%;
                height: 40px;
                background-color: transparent;
                border-color: @primary-color;
                color: @primary-color;
                * {
                  cursor: pointer;
                }
                .width-icon {
                  margin-left: 5px;
                }
              }
            }
            .el-input {
              margin: 16px 0 24px;
              .el-input__wrapper {
                background-color: transparent;
                border: 1px solid @primary-color-opacity1;
                box-shadow: none;
                .el-input__inner {
                  height: auto;
                  padding: 3px;
                }
              }
            }
            ul {
              li {
                padding: 0 16px;
                line-height: 2;
                cursor: pointer;
                &.active {
                  background-color: @dot-fusco-color;
                }
                &:hover {
                  background-color: @dot-fusco-color-hover;
                }
              }
            }
          }
          .el-card {
            color: @primary-color;
            border: 0;
            // cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
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
  :deep(.el-overlay) {
    .el-drawer {
      .el-drawer__header {
        padding: 16px;
        margin-bottom: 0;
      }
      .el-drawer__body {
        padding: 0;
        ul {
          li {
            padding: 6px 16px;
            line-height: 2;
            cursor: pointer;
            &.active {
              background-color: @dot-fusco-color;
            }
            &:hover {
              background-color: @dot-fusco-color-hover;
            }
          }
        }
      }
    }
  }
}
</style>
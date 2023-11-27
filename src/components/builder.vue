<template>
  <div class="spaceBuilder-pop flex-row center">
    <div class="builder-area">
      <div class="close font-22" @click="closeHandle">
        <i class="width-icon small button">
          <Close />
        </i>
      </div>
      <div class="cont padding-16" v-if="props.builderTheme === 'env'">
        <div class="title font-24 weight-5">Edit Environment Variables</div>
        <div class="flex-row space-between nowrap" v-for="(item, index) in builderEnv.addInformation" :key="index">
          <div class="flex-row center">
            <small class="font-12">Key</small>
            <el-input v-model="item.key" placeholder="Key" class="font-16" />
          </div>
          <div class="flex-row center">
            <small class="font-12">Value</small>
            <el-input v-model="item.value" placeholder="Value" class="font-16" />
          </div>
          <div class="">
            <div class="flex-row center nowrap button width-icon" v-if="index>0" @click="removeEnv(index)">
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
              </svg>
            </div>
            <el-switch v-model="item.secret" />
          </div>
        </div>
      </div>

      <div class="cont padding-16" v-else-if="props.builderTheme === 'Commands'">
        <div class="title font-24 weight-5">Edit Commands</div>
        <div class="flex-row center">
          <small class="font-12">Command</small>
          <el-input v-model="commands.data.command" placeholder="Command" class="font-16" />
        </div>
        <div class="top-margin"></div>
        <div class="flex-row center">
          <small class="font-12">Arguments</small>
          <el-input v-model="commands.data.textarea" :rows="4" type="textarea" placeholder="Example: apt-get update; apt-get install -y --no-install-recommends -- ssh;" />
        </div>
      </div>

      <div class="cont padding-16" v-else-if="props.builderTheme === 'Expose'">
        <div class="title font-24 weight-5">Edit Port Expose</div>
        <div class="background padding-16" v-for="(item, index) in builderEnv.exposeInfo" :key="index">
          <div class="flex-row space-between nowrap">
            <div class="flex-row center">
              <small class="font-12">Port</small>
              <el-input-number controls-position="right" v-model="item.port" placeholder="Port" class="font-16 input-with-select" />
            </div>
            <div class="flex-row center m-16">
              <small class="font-12">As</small>
              <el-input-number controls-position="right" v-model="item.as" placeholder="As" class="font-16 input-with-select" />
            </div>
            <div class="flex-row center">
              <el-select v-model="item.httpValue" placeholder="Select">
                <el-option v-for="mo in item.httpOption" :key="mo.value" :label="mo.label" :value="mo.value" />
              </el-select>
            </div>
            <div class="m-16">
              <el-checkbox label="Global" v-model="item.global" />
            </div>
          </div>
          <div class="margin"></div>
          <div class="flex-row space-between nowrap">
            <div class="flex-row center">
              <small class="font-12">Accept</small>
              <el-input v-model="item.accept" placeholder="Value" class="font-16" />
            </div>
          </div>
        </div>
      </div>
      <footer class="flex-row space-between">
        <span v-if="props.builderTheme === 'Commands'"></span>
        <div class="button" @click="closeHandle">Close</div>
        <div v-if="props.builderTheme === 'env'" class="root flex-row center button-shadow" @click="addEnv">Add Variable</div>
        <div v-if="props.builderTheme === 'Expose'" class="root flex-row center button-shadow" @click="addExpose">Add Expose</div>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, onMounted, onActivated, onDeactivated, watch, ref, reactive, getCurrentInstance, toRefs, nextTick } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  Close
} from '@element-plus/icons-vue'
import {  ElIcon, ElInput, ElSwitch, ElInputNumber, ElSelect, ElOption, ElOptionGroup,
  ElCheckbox, ElCheckboxGroup} from "element-plus"
export default defineComponent({
  name: 'Popup',
  components: {
    Close, ElIcon, ElInput, ElSwitch, ElInputNumber, ElSelect, ElOption, ElOptionGroup,
    ElCheckbox, ElCheckboxGroup
  },
  props: {
    builderTheme: { type: String, default: 'env' },
    builderRow: { type: Array, default: [] }
  },
  setup (props, context) {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const spookyLoad = ref(false)
    const builderEnv = reactive({
      addInformation: [],
      addTem:
        {
          key: '',
          value: '',
          secret: false
        },
      exposeInfo: [],
      exposeTem: {
        port: 80,
        as: 80,
        httpValue: 'http',
        httpOption: [
          {
            label: 'http',
            value: 'http'
          },
          {
            label: 'tcp',
            value: 'tcp'
          }
        ],
        global: false,
        accept: '',
        toValue: '',
        toOption: [],
      }
    })
    const commands = reactive({
      data: {
        command: '',
        textarea: ''
      }
    })

    async function closeHandle () {
      switch (props.builderTheme) {
        case 'env':
          builderEnv.addInformation = await builderEnv.addInformation.filter(add => add.key !== '')
          context.emit('hardBuilder', false, props.builderTheme, builderEnv.addInformation)
          if (builderEnv.addInformation.length === 0) builderEnv.addInformation = [].concat(builderEnv.addTem)
          break
        case 'Commands':
          context.emit('hardBuilder', false, props.builderTheme, commands.data.command !== '' || commands.data.textarea !== '' ? commands.data : [])
          break
        case 'Expose':
          context.emit('hardBuilder', false, props.builderTheme, builderEnv.exposeInfo)
          break
      }
    }
    const removeEnv = async (index) => {
      builderEnv.addInformation.splice(index, 1)
    }
    const addEnv = async () => {
      const addTem = await system.$commonFun.jsonFilter(builderEnv.addTem)
      builderEnv.addInformation = builderEnv.addInformation.concat(addTem)
    }
    const removeExpose = async (index) => {
      builderEnv.exposeInfo.splice(index, 1)
    }
    const addExpose = async () => {
      const exposeTem = await system.$commonFun.jsonFilter(builderEnv.exposeTem)
      builderEnv.exposeInfo.push(exposeTem)
    }
    async function init () {
      console.log(props.builderRow)
      if (props.builderRow.length === 0) {
        const exposeTem = await system.$commonFun.jsonFilter(builderEnv.exposeTem)
        const addTem = await system.$commonFun.jsonFilter(builderEnv.addTem)
        builderEnv.exposeInfo = builderEnv.exposeInfo.concat(exposeTem)
        builderEnv.addInformation = builderEnv.addInformation.concat(addTem)
        return
      }
      switch (props.builderTheme) {
        case 'env':
          builderEnv.addInformation = props.builderRow
          break
        case 'Commands':
          commands.data.command = props.builderRow[0].command
          commands.data.textarea = props.builderRow[0].textarea
          break
        case 'Expose':
          builderEnv.exposeInfo = props.builderRow
          break
      }
    }
    onMounted(() => init())
    return {
      system,
      bodyWidth,
      props,
      spookyLoad,
      builderEnv,
      commands,
      closeHandle, removeEnv, addEnv, removeExpose, addExpose
    }
  }
})
</script>

<style lang="less" scoped>
.spaceBuilder-pop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  color: @primary-color;
  line-height: 1;
  transition: all 0.2s;
  :deep(.builder-area) {
    position: relative;
    width: 90%;
    max-width: 600px;
    color: @primary-color;
    border-radius: 4px;
    background-color: @white-color;
    @media screen and (max-width: 768px) {
      padding: 75px 42px;
      border-radius: 20px;
    }
    @media screen and (max-width: 600px) {
      padding: 100px 56px;
      border-radius: 30px;
    }
    .close {
      position: absolute;
      right: 10px;
      top: 16px;
      color: @primary-color;
      cursor: pointer;
      z-index: 100;
      cursor: pointer;
    }
    .cont {
      .title {
        padding: 0 0 24px;
      }
      .background {
        background-color: @bg-color;
        margin-bottom: 16px;
        border-radius: 4px;
        .center {
          small {
            background-color: @bg-color;
          }
        }
      }
      .margin {
        margin: 16px 0;
      }
      .width-icon {
        fill: @grey-color;
        svg,
        path {
          fill: inherit;
        }
      }
      .center {
        position: relative;
        small {
          position: absolute;
          top: -6px;
          left: 6px;
          max-width: calc(100% - 20px);
          padding: 0 4px;
          background-color: @white-color;
          color: @primary-color-opacity;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          z-index: 9;
        }
      }
      .el-input {
        width: 100%;
        .el-input__wrapper {
          width: 100%;
          height: 40px;
          background-color: transparent;
          font-size: 16px;
          line-height: 40px;
          border-radius: 0.05rem;
          color: @primary-color;
          border: 1px solid @primary-color-opacity1;
          box-shadow: none;
          @media screen and (max-width: 768px) {
            width: 100%;
          }
          &:hover,
          &:active,
          &:focus {
            border-color: @theme-color;
          }
          .el-input__inner {
            color: @primary-color;
          }
        }
      }
      .el-input-number {
        width: 100%;
        .el-input__inner {
          text-align: left;
        }
        .el-input-number__increase,
        .el-input-number__decrease {
          height: 20px;
          background-color: transparent;
          box-shadow: none;
          border: 0;
        }
      }
    }
    footer {
      padding: 8px 16px 12px 8px;
      .button {
        padding: 8px 12px;
        border-radius: 4px;
      }
      .root {
        padding: 7px 16px;
        margin: 0;
        text-transform: capitalize;
      }
    }
    .root {
      padding: 8px 16px;
      margin: 0 0 8px;
      background-color: @theme-color;
      font-size: 15px;
      color: @white-color;
      border-radius: 5px;
      text-transform: uppercase;
      line-height: 20px;
      cursor: pointer;
      &:hover {
        background-color: @theme-color-opacity1;
      }
      &.is-disabled {
        cursor: no-drop;
        background-color: @primary-color-opacity1;
      }
      .icon {
        margin: 0 0 0 8px;
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
</style>

<template>
    <div class="monaco-pop flex-row center">
        <div class="monaco-area">
            <header class="flex-row space-between">
                <span class="font-24">{{props.title}} YAML</span>
                <i class="button width-icon" @click="beforeClose">
                    <Close />
                </i>
            </header>
            <div class="cont flex-row">
                <div v-show="props.title === 'Preview'" class="root flex-row center button-shadow" @click="getCodeContext">
                    <span class="font-14 weight-5">Copy the YAML</span>
                    <i class="icon width-icon small">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FileCopyIcon">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"></path>
                        </svg>
                    </i>
                </div>
                <div v-show="props.title !== 'Preview'" class="flex-row color">
                    <span class="font-20 weight-5">Paste your yaml here to import </span>
                    <i class="icon width-icon">
                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDownwardIcon">
                            <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                        </svg>
                    </i>
                </div>
                <div class="editor-style">
                    <div ref="editorContainer" class="editor"></div>
                </div>
            </div>
            <footer class="flex-row space-between">
                <span v-show="props.title === 'Preview'"></span>
                <div class="button" @click="beforeClose">Close</div>
                <div class="root flex-row center button-shadow  is-disabled" v-show="props.title !== 'Preview'">Import</div>
            </footer>
        </div>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor';
import { toRaw, defineComponent, computed, onMounted, watch, ref, reactive, nextTick, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import { Delete, Plus, Close } from '@element-plus/icons-vue'
import { ElButton, ElDialog } from "element-plus"
export default defineComponent({
    name: 'MonacoEditor',
    components: {
        Delete, Plus, Close, ElButton, ElDialog
    },
    props: {
        title: { type: String, default: 'Preview' },
        monacoShow: { type: Boolean, default: false },
        builderData: { type: Array, default: [] }
    },
    setup (props, context) {
        const store = useStore()
        const reverse = computed(() => (store.state.reverse))
        const system = getCurrentInstance().appContext.config.globalProperties
        const route = useRoute()
        const router = useRouter()
        const code = ref('')
        const monacoEditor = ref(null)
        const editorContainer = ref(null)
        const editorData = props.builderData

        function init () {
            // 初始化编辑器
            monacoEditor.value = monaco.editor.create(editorContainer.value, {
                theme: "vs", // CodeSampleTheme 官方自带三种主题vs, hc-black, or vs-dark
                language: 'yaml',
                renderLineHighlight: "gutter",
                folding: true, // 是否折叠
                roundedSelection: false,
                foldingHighlight: true, // 折叠等高线
                foldingStrategy: "indentation", // 折叠方式  auto | indentation
                showFoldingControls: "mouseover", // 是否一直显示折叠 always | mouseover
                disableLayerHinting: true, // 等宽优化
                emptySelectionClipboard: false, // 空选择剪切板
                selectionClipboard: false, // 选择剪切板
                automaticLayout: true, // 自动布局
                codeLens: true, // 代码镜头
                scrollBeyondLastLine: true, // 禁用额外滚动区,滚动完最后一行后再滚动一屏幕
                colorDecorators: true, // 颜色装饰器
                accessibilitySupport: "on", // 辅助功能支持  "auto" | "off" | "on"
                lineNumbers: "on", // 行号 取值： "on" | "off" | "relative" | "interval" | function
                lineNumbersMinChars: 5, // 行号最小字符   number
                enableSplitViewResizing: false,
                readOnly: props.title === 'Preview', //是否只读  取值 true | false
                // value: this.editorValue, // 编辑器初始显示文字
                overviewRulerBorder: false, // 滚动是否有边框
                minimap: { // 关闭代码缩略图
                    enabled: true // 是否启用预览图
                },
                scrollbar: {
                    verticalScrollbarSize: 0, // 垂直滚动条宽度，默认px
                    horizontalScrollbarSize: 4 // 水平滚动条高度
                },
                contextmenu: true // 禁用右键菜单
            });

            if (props.builderData && props.builderData.length > 0) handelSet()

            return
            // monacoEditor.value = monaco.editor.create(editorContainer.value, {
            //     value: code.value,
            //     language: 'javascript',
            //     tabSize: 2,
            //     scrollBeyondLastLine: false,
            //     automaticLayout: true, // 自动布局
            //     readOnly: false
            // })
            // console.log(monacoEditor.value)
            // // 监听内容变化
            // monacoEditor.value.onDidChangeModelContent(() => {

            // })

            // // 监听失去焦点事件
            // monacoEditor.value.onDidBlurEditorText((e) => {
            //     console.log(e)
            // });

            // // 增加自定义菜单
            // monacoEditor.value.addAction({
            //     id: '1123', // 菜单项 id
            //     label: '测试菜单', // 菜单项名称
            //     keybindings: [], // 绑定快捷键
            //     contextMenuGroupId: '1', // 所属菜单的分组
            //     run: () => {
            //         alert('菜单执行')
            //     }, // 点击后执行的操作
            // })

            // // 设置提示
            // setPrompt()
        }

        const handelSet = async () => {
            let text = `---
version: "2.0"`
            let service = `
services: `
            let deployment = `

deployment: `

            const c = await props.builderData.forEach(element => {
                // ------------ image ---------------
                service +=
                    `
  ${element.name}:
    image: ${element.docker || '""'}`
                // ------------ env ---------------
                if (element.evList.length > 0) {
                    service +=
                        `
    env:`
                    element.evList.forEach(ev => {
                        service +=
                            `
      - ${ev.key}=${ev.value}`
                    })
                }
                // ------------ Commands ---------------
                if (element.commandsList.length > 0) {
                    service +=
                        `
    command:
      - ${element.commandsList[0].command || '""'}
    args:
      - ${element.commandsList[0].textarea || '""'}`
                }
                // ------------ expose ---------------
                service +=
                    `
    expose:`
                element.exposeList.forEach(expose => {
                    service +=
                        `
      - port: ${expose.port}
        as: ${expose.as}
        to:
          - global: ${expose.global}`

                    if (expose.toValue) service +=
                        `
          - service: ${expose.toValue}`

                    if (expose.accept) service +=
                        `
        accept:
          - ${expose.accept}`
                })

                // ------------ deployment ---------------
                deployment +=
                    `
  ${element.name}:
    lagrange:
      count: ${element.count || '1'}`
            })


            text += service
            text += deployment
            // console.log(text)
            toRaw(monacoEditor.value).setModel(monaco.editor.createModel(text, 'yaml'))
        }

        const getCodeContext = () => {
            let codeText = toRaw(monacoEditor.value).getValue()
            if (codeText) system.$commonFun.notificationTip('YAML copied to clipboard!', 'success', codeText)
        }

        // 设置错误提示
        function setPrompt () {
            const model = monacoEditor.value.getModel()
            monaco.editor.setModelMarkers(model, 'yaml', [{
                startLineNumber: 2, endLineNumber: 2, startColumn: 1, endColumn: 10, severity: monaco.MarkerSeverity.Error, message: `语法错误`,
            }])
        }

        // 自动格式化代码
        function format () {
            monacoEditor.value.trigger('anything', 'editor.action.formatDocument')
            // 或者
            // monacoEditor.value.getAction(['editor.action.formatDocument']).run()
        }

        function changeEditor () {
            if (monacoEditor.value === null) {
                init()
            }

            const oldModel = monacoEditor.value.getModel()
            const newModel = monaco.editor.createModel(
                code.value,
                'javascript'
            )

            if (oldModel) {
                oldModel.dispose()
            }
            monacoEditor.value.setModel(newModel)
        }

        function beforeClose () {
            context.emit('handleMonaco', false)
        }

        onMounted(() => init())
        // watch(props.builderData, () => {
        //     editorData.value = props.builderData
        //     console.log(editorData.value)
        // })
        return {
            system,
            props,
            code, monacoEditor, editorContainer,
            beforeClose, getCodeContext
        }
    }
})
</script>

<style lang="less">
.monaco-pop {
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
  .monaco-area {
    position: absolute;
    width: 90%;
    max-width: 900px;
    height: 90%;
    min-height: 219px;
    margin: auto;
    border-radius: 4px;
    background-color: @white-color;
    color: @primary-color;
    line-height: 1.5;
    header {
      padding: 16px 20px 12px;
      text-transform: capitalize;
      i {
        * {
          cursor: pointer;
        }
      }
    }
    footer {
      padding: 8px 20px;
      .button {
        padding: 4px 12px;
        border-radius: 4px;
      }
      .root {
        padding: 7px 16px;
        margin: 0;
        text-transform: capitalize;
      }
    }
    .cont {
      height: calc(100% - 119px);
      min-height: 100px;
      padding: 0 20px;
      overflow-y: scroll;
      .color {
        color: @grey-color;
        .width-icon {
          margin-left: 16px;
          color: @grey-color;
          fill: @grey-color;
        }
      }
      .editor-style {
        width: 100%;
        height: calc(100% - 44px);
        overflow-y: scroll;
        .editor {
          width: 100%;
          height: 500px;
        }
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

<template>
    <div>
        <!-- <el-select style="width: 120px" @change="handelChange">
      <el-option v-for="(item,index) in languageList" :key="index" :value="item">
        {{ item }}
      </el-option>
    </el-select> -->
        <button @click="handleBtn">获取</button>
        <button @click="handleForrmat">格式化</button>
        <button @click="handelSet">设置值</button>
        <div ref="main" style="width: 100%; height: 600px"></div>
    </div>
</template>

<script setup>
import * as monaco from "monaco-editor";
import { toRaw, onMounted, ref } from "vue";
import { ElSelect, ElOption } from "element-plus"
const monacoEditor = ref(undefined);
const main = ref(null);
let languageList = ref([
    'javascript', 'json', 'sql', 'java', 'groovy', 'shell', 'python'
])
onMounted(() => {
    init();
});
const handleForrmat = () => {
    monacoEditor.value.getAction('editor.action.formatDocument').run()
};
const handleBtn = () => {
    let demo = toRaw(monacoEditor.value).getValue(); //获取编辑器中的文本
    console.log(demo)
};
const handelChange = (val) => {
    monaco.editor.setModelLanguage(monacoEditor.value.getModel(), val)
}
const handelSet = () => {
    toRaw(monacoEditor.value).setModel(monaco.editor.createModel(`---
version: "2.0"
services:
  service-1:
    image: ""
    expose:
      - port: 80
        as: 80
        to:
          - global: true
profiles:
  compute:
    service-1:
      resources:
        cpu:
          units: 0.1
        memory:
          size: 512Mi
        storage:
          - size: 1Gi
  placement:
    dcloud:
      pricing:
        service-1:
          denom: uakt
          amount: 1000
deployment:
  service-1:
    dcloud:
      profile: service-1
      count: 1
`, 'yaml'))
}
const init = () => {
    // 使用 - 创建 monacoEditor 对象
    monacoEditor.value = monaco.editor.create(main.value, {
        theme: "vs-dark", // CodeSampleTheme 官方自带三种主题vs, hc-black, or vs-dark
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
        scrollBeyondLastLine: false, // 禁用额外滚动区,滚动完最后一行后再滚动一屏幕
        colorDecorators: true, // 颜色装饰器
        accessibilitySupport: "on", // 辅助功能支持  "auto" | "off" | "on"
        lineNumbers: "on", // 行号 取值： "on" | "off" | "relative" | "interval" | function
        lineNumbersMinChars: 5, // 行号最小字符   number
        enableSplitViewResizing: false,
        readOnly: false, //是否只读  取值 true | false

        // value: this.editorValue, // 编辑器初始显示文字
        overviewRulerBorder: true, // 滚动是否有边框
        minimap: { // 关闭代码缩略图
            enabled: true // 是否启用预览图
        },
        scrollbar: {
            verticalScrollbarSize: 4, // 垂直滚动条宽度，默认px
            horizontalScrollbarSize: 4 // 水平滚动条高度
        },
        contextmenu: false // 禁用右键菜单
    });
};
</script>


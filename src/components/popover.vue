<template>
    <el-popover :width="300" popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px; word-break: break-word; text-align: left;">
        <template #reference>
            <div class="width-icon small">
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoIcon" aria-labelledby=":r44:">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
                </svg>
            </div>
        </template>
        <template #default>
            <div class="demo-rich-conent flex-row">
                <p class="demo-rich-content__name weight-5" v-for="text in props.textData" :key="text">
                    <span v-if="text.link" @click="system.$commonFun.goLink(text.link)" class="link">{{text.desc}}</span>
                    <span v-else>{{text.desc}}</span>
                </p>
            </div>
        </template>
    </el-popover>
</template>
<script>
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
    Search
} from '@element-plus/icons-vue'
import { ElButton, ElInput, ElPopover } from "element-plus"
export default defineComponent({
    components: {
        Search, ElButton, ElInput, ElPopover
    },
    props: {
        textData: { type: Array, default: [] }
    },
    setup (props, context) {
        const store = useStore()
        const system = getCurrentInstance().appContext.config.globalProperties
        const route = useRoute()
        const router = useRouter()

        onMounted(() => { })
        return {
            system,
            props
        }
    }
})
</script>

<style lang="less" scoped>
.width-icon {
  fill: @primary-color-opacity1;
}
.demo-rich-conent {
  gap: 16px;
  flex-direction: column;
}
.demo-rich-content__name,
.demo-rich-content__desc {
  width: 100%;
  margin: 0;
  text-align: left;
  .link {
    color: @theme-color;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

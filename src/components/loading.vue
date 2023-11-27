<template>
  <div class="el-loading-mask is-fullscreen" v-show="props.listLoad">
    <div class="el-loading-spinner">
      <svg class="circular" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
      </svg>
      <p class="el-loading-text">loading...</p>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  onMounted,
  onActivated,
  onDeactivated,
  watch,
  ref,
  reactive,
  getCurrentInstance,
  toRefs,
  nextTick
} from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
import {
  Close
} from '@element-plus/icons-vue'
import { ElIcon } from "element-plus"
export default defineComponent({
  name: 'Popup',
  components: {
    Close, ElIcon
  },
  props: {
    listLoad: { type: Boolean, default: false }
  },
  setup (props, context) {
    const store = useStore()

    onMounted(() => { })
    return {
      props
    }
  }
})
</script>

<style lang="less" scoped>
.el-loading-mask.is-fullscreen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>

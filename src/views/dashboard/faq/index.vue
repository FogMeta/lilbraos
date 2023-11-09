<template>
  <section id="container-faq" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-32 weight-6 flex-row padding-16">Frequently Asked Questions</h1>
      <div class="area padding-16 flex-row flex-start">

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
import { ElButton, ElProgress, ElSteps, ElStep } from "element-plus"
export default defineComponent({
  components: {
    Edit, ElButton, ElProgress, ElSteps, ElStep
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const claimShow = ref(false)
    const collapse = ref(false)
    const active = ref(0)

    function hardClose (dialog) {
      claimShow.value = dialog
    }
    const next = () => {
      if (active.value++ > 2) active.value = 0
    }
    onMounted(() => { })
    return {
      system,
      bodyWidth,
      claimShow,
      collapse,
      active,
      hardClose, next
    }
  }
})
</script>

<style lang="less" scoped>
#container-faq {
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1;
  .module {
    margin: 0 auto 15px;
    h1 {
      // text-shadow: 0px 0px 9px #e77304;
      color: transparent;
      background-image: linear-gradient(
        to right,
        @theme-color-opacity,
        @theme-color
      );
      -webkit-background-clip: text;
    }
    .area {
      height: auto;
      text-align: center;
      transition: all 0.8s;
      overflow: hidden;
    }
  }
}
</style>

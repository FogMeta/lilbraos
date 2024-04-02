import {
  ref
} from "vue"

export const isPhone = ref(!(window.innerWidth > 990))

window.onresize = (e) => {
  if (e.target.innerWidth > 990) {
    isPhone.value = false
  } else {
    isPhone.value = true
  }
}
<template>
  <section id="container-builder" class="lang-max top-margin both-margin">
    <div class="module">
      <h1 class="font-32 weight-6 flex-row">
        Space Builder
        <p class="font-14 strong weight-6">beta</p>
      </h1>
      <div class="area mt-border">
        <div class="tab flex-row space-between">
          <div class="left">
            <el-button class="active button-shadow">Deploy</el-button>
            <el-button @click="monacoShow=true">Preview</el-button>
            <el-button @click="importShow=true">Import</el-button>
          </div>
          <div class="right">
            <el-button class="active button-shadow">Save</el-button>
          </div>
        </div>
        <div class="builder">
          <div class="list" v-for="(item, l) in builderData" :key="l">
            <div class="top padding-16 flex-row space-between nowrap">
              <div class="top-left flex-row center nowrap">
                <small class="font-12">Service Name</small>
                <el-input v-model="item.name" placeholder="Service Name" class="font-16" />
                <div class="m-16">
                  <pop-over :textData="item.cpuPop"></pop-over>
                </div>
              </div>
              <div class="top-right flex-row center nowrap">
                <div class="flex-row center nowrap" v-show="item.collapse">
                  <div class="flex-row center nowrap font-12 weight-4">
                    <div class="width-icon big">
                      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SpeedIcon">
                        <path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path>
                      </svg>
                    </div>
                    <span class="font-16 weight-6">{{item.gpuModels.value}}</span>
                  </div>
                  <div class="flex-row center nowrap button width-icon" v-if="builderData.length>1" @click="removeService(l)">
                    <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                    </svg>
                  </div>
                </div>
                <div :class="{'flex-row center nowrap button width-icon':true, 'transform': !item.collapse}" @click="item.collapse=!item.collapse">
                  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon">
                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="main-body" :class="{'hide': item.collapse}">
              <div class="root padding-16">
                <el-row :gutter="16">
                  <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="piece flex-row space-between nowrap">
                      <div class="flex-row center">
                        <small class="font-12">Docker Image / OS</small>
                        <el-input v-model="item.docker" placeholder="Example: mydockerimage:1.01">
                          <template #prepend>
                            <div class="width-icon">
                              <svg t="1699606466208" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3074" width="200" height="200">
                                <path d="M799.26272 469.056a133.696 133.696 0 0 1 0-161.92l12.096-13.632 12.096 11.712a156.864 156.864 0 0 1 66.624 101.44 154.496 154.496 0 0 1 135.296 19.2 147.2 147.2 0 0 1-159.488 84.224c-83.2 200.064-261.888 320-527.104 321.92a321.472 321.472 0 0 1-300.8-150.208 278.976 278.976 0 0 1-34.304-185.6h88.768V392.96h105.024V291.52h209.984V192H532.63872v200.96h105.088v103.424a289.856 289.856 0 0 0 161.536-27.328z m-611.904-52.672H193.43872v74.176h-6.08V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.128v74.176h-8.128V416.384z m-12.096 0h6.08v74.176h-6.08V416.384z m-14.144 0h6.08v74.176h-6.08V416.384z m-8.064-5.824v87.808h90.88V410.56h-90.88z m181.76-93.632h6.016v72.128h-6.016V316.864z m-14.144 0h6.08v72.128h-6.08V316.864z m-14.144 0h8.064v72.128H263.83872V316.864z m-14.144 0h8.064v72.128h-8.064V316.864z m-14.144 0h8.128v72.128h-8.128V316.864z m-12.096 0h6.08v72.128h-6.08V316.864z m-8.064-7.872V396.8h90.88V309.056h-90.88z m76.8 107.328h5.952v74.176h-6.016V416.384z m-14.144 0h6.016v74.176h-6.08V416.384z m-14.144 0h8v74.176H263.83872V416.384z m-14.144 0h8v74.176h-8.064V416.384z m-14.144 0h8.064v74.176h-8.128V416.384z m-12.096 0h6.016v74.176h-6.08V416.384z m-8.128-5.824v87.808h90.88V410.56h-90.88z m179.712 5.824h8.064v74.176h-8.064V416.384z m-12.096 0h6.016v74.176h-6.016V416.384z m-14.144 0h6.08v74.176h-6.08V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.064v74.176H340.63872V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-6.016-5.824v87.808h90.88V410.56h-90.88z m74.688-93.696h8.064v72.192h-8.064V316.864z m-12.096 0h6.016v72.192h-6.016V316.864z m-14.144 0h6.08v72.192h-6.08V316.864z m-14.144 0h8.064v72.192h-8.064V316.864z m-14.144 0h8.064v72.192H340.63872V316.864z m-14.144 0h8.064v72.192h-8.064V316.864z m-6.016-7.808V396.8h90.88V309.056h-90.88zM500.63872 416.384h7.808v74.176H500.63872V416.384z m-14.144 0H494.23872v74.176h-8V416.384z m-12.096 0h5.76v74.176h-6.016V416.384z m-14.144 0h5.76v74.176h-6.016V416.384z m-14.144 0h7.808v74.176h-8.064V416.384z m-14.144 0h7.808v74.176h-8.064V416.384z m-6.336-5.824v87.808h88.896V410.56H425.63072zM500.63872 316.864h7.808v72.192H500.63872V316.864z m-14.144 0H494.23872v72.192h-8V316.864z m-12.096 0h5.76v72.192h-6.016V316.864z m-14.144 0h5.76v72.192h-6.016V316.864z m-14.144 0h7.808v72.192h-8.064V316.864z m-14.144 0h7.808v72.192h-8.064V316.864z m-6.336-7.808V396.8h88.896V309.056H425.63072zM500.63872 215.424h7.808v72.192H500.63872V215.424z m-14.144 0H494.23872v72.192h-8V215.424z m-12.096 0h5.76v72.192h-6.016V215.424z m-14.144 0h5.76v72.192h-6.016V215.424z m-14.144 0h7.808v72.192h-8.064V215.424z m-14.144 0h7.808v72.192h-8.064V215.424z m-6.336-7.808v87.808h88.896V207.616H425.63072z m179.776 208.768h6.016v74.176h-6.016V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-12.096 0H571.03872v74.176h-6.016V416.384z m-14.144 0h6.016v74.176h-6.016V416.384z m-14.144 0h8.064v74.176h-8.064V416.384z m-8.064-5.824v87.808h90.88V410.56h-90.88zM300.44672 638.848A22.336 22.336 0 0 0 283.03872 646.4a25.6 25.6 0 0 0-7.04 17.536 22.208 22.208 0 0 0 7.04 16.576 24.96 24.96 0 0 0 34.304 0 22.208 22.208 0 0 0 7.04-16.576A23.744 23.744 0 0 0 321.43872 651.52a28.672 28.672 0 0 0-9.088-8.768 22.208 22.208 0 0 0-11.904-3.904z m0 7.808a8.384 8.384 0 0 1 6.08 1.92 6.4 6.4 0 0 0-4.032 5.824q0 5.824 8.064 5.824a6.4 6.4 0 0 0 6.08-3.904 16.832 16.832 0 0 1 2.048 7.808 15.808 15.808 0 0 1-18.176 17.536 17.664 17.664 0 1 1-0.064-35.264z m66.624 167.808a226.112 226.112 0 0 1-115.2-109.248 359.296 359.296 0 0 1-82.816 11.712H82.33472a364.8 364.8 0 0 0 256.448 97.536h28.288z"
                                  fill="#1296db" p-id="3075"></path>
                              </svg>
                            </div>
                          </template>
                          <template #append>
                            <div class="button width-icon small">
                              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="OpenInNewIcon">
                                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                              </svg>
                            </div>
                          </template>
                        </el-input>
                      </div>
                      <pop-over :textData="item.dockerPop"></pop-over>
                    </div>

                    <div class="background-main">
                      <div class="flex-row">
                        <h3 class="flex-row">
                          <div class="flex-row center font-14 weight-6">
                            <div class="width-icon">
                              <svg data-v-77e679a4="" class="mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 12 12">
                                <path data-v-77e679a4="" fill-rule="evenodd" clip-rule="evenodd" d="M9.92865 7.42863H10.643C10.7377 7.42863 10.8285 7.39098 10.8955 7.32405C10.9625 7.25705 11.0001 7.16619 11.0001 7.07148C11.0001 6.97676 10.9625 6.88591 10.8955 6.81891C10.8285 6.75198 10.7377 6.71433 10.643 6.71433H9.92865V5.28575H10.643C10.7377 5.28575 10.8285 5.24812 10.8955 5.18114C10.9625 5.11417 11.0001 5.02333 11.0001 4.9286C11.0001 4.83388 10.9625 4.74304 10.8955 4.67607C10.8285 4.60909 10.7377 4.57146 10.643 4.57146H9.92865V2.78573C9.92865 2.59628 9.85336 2.4146 9.71943 2.28065C9.5855 2.1467 9.40378 2.07144 9.21435 2.07144H7.42862V1.35715C7.42862 1.26242 7.39098 1.17158 7.32405 1.10461C7.25705 1.03763 7.16619 1 7.07148 1C6.97676 1 6.88591 1.03763 6.81891 1.10461C6.75198 1.17158 6.71433 1.26242 6.71433 1.35715V2.07144H5.28575V1.35715C5.28575 1.26242 5.24812 1.17158 5.18114 1.10461C5.11417 1.03763 5.02333 1 4.9286 1C4.83388 1 4.74304 1.03763 4.67607 1.10461C4.60909 1.17158 4.57146 1.26242 4.57146 1.35715V2.07144H2.78573C2.59628 2.07144 2.4146 2.1467 2.28065 2.28065C2.14669 2.4146 2.07144 2.59628 2.07144 2.78573V4.57146H1.35714C1.26242 4.57146 1.17158 4.60909 1.10461 4.67607C1.03763 4.74304 1 4.83388 1 4.9286C1 5.02333 1.03763 5.11417 1.10461 5.18114C1.17158 5.24812 1.26242 5.28575 1.35714 5.28575H2.07144V6.71433H1.35714C1.26242 6.71433 1.17158 6.75198 1.10461 6.81891C1.03763 6.88591 1 6.97676 1 7.07148C1 7.16619 1.03763 7.25705 1.10461 7.32405C1.17158 7.39098 1.26242 7.42863 1.35714 7.42863H2.07144V9.21435C2.07144 9.40378 2.14669 9.5855 2.28065 9.71943C2.4146 9.85336 2.59628 9.92865 2.78573 9.92865H4.57146V10.6429C4.57146 10.7377 4.60909 10.8285 4.67607 10.8955C4.74304 10.9624 4.83388 11.0001 4.9286 11.0001C5.02333 11.0001 5.11417 10.9624 5.18114 10.8955C5.24812 10.8285 5.28575 10.7377 5.28575 10.6429V9.92865H6.71433V10.6429C6.71433 10.7377 6.75198 10.8285 6.81891 10.8955C6.88591 10.9624 6.97676 11.0001 7.07148 11.0001C7.16619 11.0001 7.25705 10.9624 7.32405 10.8955C7.39098 10.8285 7.42862 10.7377 7.42862 10.6429V9.92865H9.21435C9.40378 9.92865 9.5855 9.85336 9.71943 9.71943C9.85336 9.5855 9.92865 9.40378 9.92865 9.21435V7.42863Z"
                                  fill="currentColor" fill-opacity="0.3"></path>
                                <path data-v-77e679a4="" fill-rule="evenodd" clip-rule="evenodd" d="M5 4C4.44771 4 4 4.44771 4 5V7C4 7.55227 4.44771 8 5 8H7C7.55227 8 8 7.55227 8 7V5C8 4.44771 7.55227 4 7 4H5Z" fill-opacity="0.5"></path>
                              </svg>
                            </div>
                            <span>Space Hardware</span>
                          </div>
                          <div class="m-16">
                            <pop-over :textData="item.gpuPop"></pop-over>
                          </div>
                        </h3>
                      </div>
                      <div class="flex-row center font-16">
                        <small class="font-12">Hardware</small>
                        <el-select v-model="item.gpuModels.value" placeholder="Select">
                          <el-option-group v-for="group in item.gpuModels.options" :key="group.label" :label="group.label">
                            <el-option v-for="mo in group.list" :key="mo.hardware_name" :label="mo.hardware_name" :value="mo.hardware_name" />
                          </el-option-group>
                        </el-select>
                      </div>
                    </div>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                    <div class="background-main">
                      <div class="flex-row">
                        <h4 class="font-16 weight-6 flex-row">
                          Environment Variables
                          <div class="m-16">
                            <pop-over :textData="item.evPop"></pop-over>
                          </div>
                          <span class="font-12" @click="builderMethod('env', l, item.evList)">Edit</span>
                        </h4>
                      </div>
                      <div v-if="item.evList.length>0">
                        <h6 class="font-12 weight-4" v-for="(elist, elistIndex) in item.evList" :key="elistIndex">
                          <b>{{elist.key}} =</b> {{elist.value}}</h6>
                      </div>
                      <h6 class="font-12 weight-4" v-else>None</h6>
                    </div>

                    <div class="background-main">
                      <div class="flex-row">
                        <h4 class="font-16 weight-6 flex-row">
                          Commands
                          <div class="m-16">
                            <pop-over :textData="item.commandsPop"></pop-over>
                          </div>
                          <span class="font-12" @click="builderMethod('Commands', l, item.commandsList)">Edit</span>
                        </h4>
                      </div>
                      <div v-if="item.commandsList.length>0">
                        <h6 class="font-12 weight-4" v-for="(comlist, comlistIndex) in item.commandsList" :key="comlistIndex">
                          <b>{{comlist.command}}</b><br />{{comlist.textarea}}</h6>
                      </div>
                      <h6 class="font-12 weight-4" v-else>None</h6>
                    </div>

                    <div class="background-main">
                      <div class="flex-row">
                        <h4 class="font-16 weight-6 flex-row">
                          Expose
                          <div class="m-16">
                            <pop-over :textData="item.exposePop"></pop-over>
                          </div>
                          <span class="font-12" @click="builderMethod('Expose', l, item.exposeList)">Edit</span>
                        </h4>
                      </div>
                      <div v-for="(exposelist, exposelistIndex) in item.exposeList" :key="exposelistIndex">
                        <el-divider v-show="exposelistIndex>0" />
                        <h6 class="font-12 weight-4">
                          <b>Port </b> {{exposelist.port}} : {{exposelist.as}} ({{exposelist.httpValue}})</h6>
                        <h6 class="font-12 weight-4">
                          <b>Global </b> {{exposelist.global}}</h6>
                        <h6 class="font-12 weight-4">
                          <b>Accept </b> {{exposelist.accept}}</h6>
                      </div>
                    </div>

                    <div class="piece flex-row space-between nowrap">
                      <div class="flex-row center">
                        <small class="font-12">Count</small>
                        <el-input-number :min="1" controls-position="right" v-model="item.count" placeholder="Count" class="input-with-select" />
                      </div>
                      <pop-over :textData="item.dockerPop"></pop-over>
                    </div>

                    <div class="piece flex-row space-between nowrap">
                      <div class="flex-row center">
                        <small class="font-12">Depend On</small>
                        <el-input v-model="item.dependOn" placeholder="Depend On">
                        </el-input>
                      </div>
                      <!-- <pop-over :textData="item.dependOnPop"></pop-over> -->
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
        <div class="tab flex-row space-between">
          <div class="left"></div>
          <div class="right">
            <el-button class="active button-shadow" @click="addService">Add Service</el-button>
          </div>
        </div>
      </div>
    </div>

    <loading-over v-if="machinesLoad" :listLoad="machinesLoad"></loading-over>

    <builder-over v-if="builderShow" :builderTheme="builderTheme" :builderRow="builderRow" @hardBuilder="hardBuilder"></builder-over>
    <monaco-editor v-if="importShow" :monacoShow="importShow" :title="'Import'" :builderData="[]" @handleMonaco="handleMonaco"></monaco-editor>
    <monaco-editor v-if="monacoShow" :monacoShow="monacoShow" :title="'Preview'" :builderData="builderData" @handleMonaco="handleMonaco"></monaco-editor>
  </section>
</template>

<script>
import loadingOver from "@/components/loading"
import popOver from "@/components/popover"
import builderOver from "@/components/builder"
import monacoEditor from "@/components/monacoEditor"
import { defineComponent, computed, onMounted, watch, ref, reactive, getCurrentInstance } from 'vue'
import { useStore } from "vuex"
import { useRouter, useRoute } from 'vue-router'
// import {
//   Search
// } from '@element-plus/icons-vue'
import {  ElButton, ElInput, ElRow, ElCol, ElSlider, ElInputNumber, ElSelect, ElOption, ElOptionGroup,
  ElCheckbox, ElCheckboxGroup, ElDivider} from "element-plus"
export default defineComponent({
  components: {
    loadingOver, popOver, monacoEditor, builderOver, ElButton, ElInput, ElRow, ElCol, ElSlider, ElInputNumber, ElSelect, ElOption, ElOptionGroup,
    ElCheckbox, ElCheckboxGroup, ElDivider
  },
  setup () {
    const store = useStore()
    const bodyWidth = ref(document.body.clientWidth <= 768 ? 30 : 50)
    const system = getCurrentInstance().appContext.config.globalProperties
    const route = useRoute()
    const router = useRouter()
    const activeIndex = ref(0)
    const builderData = ref([])
    const builderShow = ref(false)
    const builderTheme = ref('env')
    const builderRow = ref([])
    const monacoShow = ref(false)
    const importShow = ref(false)
    const machinesLoad = ref(false)
    const hardwareOptions = ref([])

    async function removeService (index) {
      builderData.value.splice(index, 1)
    }
    async function init (params) {
      machinesLoad.value = true
      const machinesRes = await system.$commonFun.sendRequest(`${process.env.VUE_APP_LOGINAPI}/providers/machines`, 'get')
      if (machinesRes && machinesRes.code === 0) hardwareOptions.value = await system.$commonFun.listArray(machinesRes.data.hardware)
      else system.$commonFun.notificationTip(machinesRes.msg ? machinesRes.msg : 'Request failed.', 'error')
      machinesLoad.value = false
      addService()
    }
    
    async function addService (params) {
      const child = await system.$commonFun.jsonFilter(system.$commonFun.optionCont.data)
      child.name = `service-${builderData.value.length + 1}`
      child.gpuModels.value = hardwareOptions.value && hardwareOptions.value.length > 0 ? hardwareOptions.value[0].list[0].hardware_name : ''
      child.gpuModels.options = hardwareOptions.value
      builderData.value = builderData.value.concat(child)
    }
    function handleMonaco (dialog) {
      monacoShow.value = dialog
      importShow.value = dialog
    }
    function hardBuilder (dialog, type, row) {
      if (type === 'env') builderData.value[activeIndex.value].evList = row
      else if (type === 'Commands') builderData.value[activeIndex.value].commandsList = [].concat(row)
      else if (type === 'Expose') builderData.value[activeIndex.value].exposeList = [].concat(row)
      builderShow.value = dialog
    }
    function builderMethod (theme, l, row) {
      activeIndex.value = l
      builderTheme.value = theme
      builderRow.value = row
      builderShow.value = true
    }
    onMounted(() => {
      init()
    })
    // watch(builderData, () => {})
    return {
      system,
      bodyWidth,
      builderShow,
      builderTheme,
      builderRow,
      monacoShow,
      importShow,
      activeIndex,
      builderData,
      machinesLoad,
      addService, removeService, handleMonaco, hardBuilder, builderMethod
    }
  }
})
</script>

<style lang="less" scoped>
#container-builder {
  position: relative;
  min-height: 90vh;
  font-size: 18px;
  letter-spacing: 1px;
  word-break: break-word;
  line-height: 1.5;
  .el-loading-mask {
    position: absolute;
    background-color: @bg-color;
    z-index: 2005;
  }
  :deep(.module) {
    margin: 0 auto 15px;
    h1 {
      // text-shadow: 0px 0px 9px #e77304;
      color: transparent;
      background-image: linear-gradient(
        to right,
        @theme-color-opacity1,
        @theme-color
      );
      -webkit-background-clip: text;
      p.strong {
        padding: 1px 8px;
        margin: 0 0 0 16px;
        background-color: @primary-color-opacity3;
        border-radius: 16px;
        color: @theme-color;
        text-transform: capitalize;
      }
    }
    .area {
      .tab {
        .el-button {
          background-color: transparent;
          border-color: transparent;
          color: @primary-color;
          text-transform: uppercase;
          transition: all 0.2s;
          &.active {
            background-color: @theme-color;
            border-color: @theme-color;
            color: @white-color;
            &:hover {
              background-color: @theme-color-opacity1;
            }
          }
          &:hover {
            background-color: @theme-color-opacity2;
          }
        }
      }
      .builder {
        .list {
          width: 100%;
          margin: 16px 0;
          background-color: @white-color;
          border-radius: 8px;
          box-sizing: border-box;
          .top {
            .top-left {
              width: 100%;
              position: relative;
              margin: 0;
              .m-16 {
                margin-right: 8px;
              }
              small {
                position: absolute;
                top: -6px;
                left: 10px;
                padding: 0 4px;
                background-color: @white-color;
                color: @primary-color-opacity;
                z-index: 9;
                line-height: 1;
              }
              .el-input {
                width: 100%;
                .el-input__wrapper {
                  height: 40px;
                  padding: 0 32px 0 14px;
                  text-align: left;
                  color: @primary-color;
                  box-shadow: none;
                  border: 1px solid @primary-color-opacity1;
                  .el-input__inner {
                    color: inherit;
                  }
                }
              }
            }
            .top-right {
              line-height: 25px;
              color: @grey-color;
              .flex-row {
                .flex-row {
                  margin: 2px 8px;
                  white-space: nowrap;
                  span {
                    margin: 0 8px;
                    color: @primary-color;
                  }
                }
              }
              .width-icon {
                fill: @grey-color;
                transition: all 0.1s;
                &.transform {
                  transform: rotate(180deg);
                }
                svg,
                path {
                  fill: inherit;
                }
              }
            }
          }
          .main-body {
            max-height: unset;
            border-top: 1px solid @dot-color;
            animation: showing 0.1s linear 1 forwards;
            transition: all 0.3s;
            overflow: hidden;
            &.hide {
              animation: hiddening 0.1s linear 1 forwards;
            }
            .el-row {
              .el-col {
                .piece {
                  margin: 0 0 16px;
                  .center {
                    position: relative;
                    width: 100%;
                    margin: 0 8px 0 0;
                    border: 1px solid @primary-color-opacity1;
                    border-radius: 4px;
                    small {
                      position: absolute;
                      top: -6px;
                      left: 10px;
                      padding: 0 4px;
                      background-color: @white-color;
                      color: @primary-color-opacity;
                      z-index: 9;
                      line-height: 1;
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
                  .el-input {
                    .el-input__wrapper {
                      height: 40px;
                      padding: 0 14px;
                      box-shadow: none;
                    }
                    .el-input-group__prepend,
                    .el-input-group__append {
                      padding: 0 14px;
                      background-color: transparent;
                      box-shadow: none;
                      &.el-input-group__prepend {
                        padding-right: 0;
                      }
                      &.el-input-group__append {
                        padding-left: 0;
                      }
                    }
                  }
                }
                .background-main {
                  padding: 8px 16px;
                  margin: 0 0 16px;
                  background-color: @bg-color;
                  border-radius: 4px;
                  .el-divider--horizontal {
                    margin: 8px 0;
                  }
                  h3 {
                    span {
                      padding: 2px 0 0 8px;
                      line-height: 24px;
                    }
                    .el-select {
                      width: auto;
                      max-width: 85px;
                      margin: 0 0 0 16px;
                    }
                  }
                  h4 {
                    padding: 0 0 16px;
                    text-transform: capitalize;
                    span {
                      color: @theme-color;
                      line-height: 20px;
                      cursor: pointer;
                      &:hover {
                        text-decoration: underline;
                      }
                    }
                  }
                  h6 {
                    color: @grey-color;
                    b {
                      color: @primary-color;
                    }
                  }
                  .slider-demo-block {
                    margin-top: 8px;
                  }
                  .el-input-number {
                    width: auto;
                    .el-input-number__increase,
                    .el-input-number__decrease {
                      background-color: transparent;
                      border: 0;
                    }
                    .el-input {
                      font-size: inherit;
                      color: inherit;
                      .el-input__wrapper {
                        width: 100px;
                        height: 40px;
                        padding: 0 32px 0 14px;
                        background-color: transparent;
                        box-shadow: none;
                        border: 1px solid @primary-color-opacity1;
                        box-sizing: border-box;
                        .el-input__inner {
                          text-align: left;
                        }
                      }
                    }
                  }
                  .center {
                    position: relative;
                    small {
                      position: absolute;
                      top: 8px;
                      left: 6px;
                      max-width: calc(100% - 20px);
                      padding: 0 4px;
                      background-color: @bg-color;
                      color: @primary-color-opacity;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      z-index: 9;
                    }
                  }
                  .el-select {
                    width: 100%;
                    margin: 16px 0 0;
                    .el-input {
                      font-size: inherit;
                      .el-input__wrapper {
                        height: 40px;
                        background-color: transparent;
                        box-shadow: none;
                        border: 1px solid @primary-color-opacity1;
                        box-sizing: border-box;
                        .el-input__inner {
                          color: @primary-color;
                        }
                      }
                    }
                  }
                  .el-checkbox {
                    color: inherit;
                    .el-checkbox__input {
                      padding: 0 16px 0 0;
                      background-color: transparent;
                      border-color: @primary-color-opacity;
                    }
                    .el-checkbox__input.is-checked .el-checkbox__inner {
                      background-color: @theme-color;
                      border-color: @theme-color;
                    }
                    .el-checkbox__label {
                      color: inherit;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

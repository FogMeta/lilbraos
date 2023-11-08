import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    metaAddress: sessionStorage.getItem('metaAddressClaim') || '',
    clientWidth: document.body.clientWidth < 992 ? false : true,
    reverse: localStorage.getItem('libraReverse') || '0' // 0:not set, 1:dark, 2:light
  },
  mutations: {
    SET_METAADDRESS: (state, metaAddress) => {
      state.metaAddress = metaAddress
      sessionStorage.setItem('metaAddressClaim', metaAddress)
    },
    SET_CLIENTWIDTH: (state, clientWidth) => {
      state.clientWidth = clientWidth
    },
    SET_REVERSE: (state, reverse) => {
      state.reverse = reverse
      localStorage.setItem('libraReverse', reverse)
    }
  },
  actions: {
    setMetaAddress({
      commit
    }, metaAddress) {
      commit('SET_METAADDRESS', metaAddress)
    },
    setClientWidth({
      commit
    }, clientWidth) {
      commit('SET_CLIENTWIDTH', clientWidth)
    },
    setReverse({
      commit
    }, reverse) {
      commit('SET_REVERSE', reverse)
    }
  },
  modules: {}
})
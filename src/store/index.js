import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    metaAddress: sessionStorage.getItem('metaAddressClaim') || '',
    clientWidth: document.body.clientWidth < 992 ? false : true
  },
  mutations: {
    SET_METAADDRESS: (state, metaAddress) => {
      state.metaAddress = metaAddress
      sessionStorage.setItem('metaAddressClaim', metaAddress)
    },

    SET_CLIENTWIDTH: (state, clientWidth) => {
      state.clientWidth = clientWidth
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
    }
  },
  modules: {}
})
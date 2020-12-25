import Vue from 'vue'
import aStage from './aStage/index.js'
import cStage from './cStage/index.js'
const _this = new Vue()

let model = {
  namespaced: true,
  state: {
    workbenchKeyid:sessionStorage.getItem('workbenchKeyid'),
    serviceType:[],
    currentItem:JSON.parse(sessionStorage.getItem('currentItem')),
  },
  getters: {
  },
  mutations: {
    updateWorkbenchKeyid(state,data){
      state.workbenchKeyid=data
      _this.sessionStorage.setItem('workbenchKeyid',data)
    },
    updateServiceType(state,data){
      state.serviceType=data
    },
    updateCurrentItem(state,data){
      state.currentItem=data
      _this.sessionStorage.setItem('currentItem',data)
    },

  },
  actions: {
  },
  modules:{
    aStage,
    cStage,
  }
}
export default model

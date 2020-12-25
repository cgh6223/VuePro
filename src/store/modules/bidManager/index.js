import Vue from 'vue'
import bidRecord from './bidRecord/index.js'
const _this = new Vue()

let model = {
  namespaced: true,
  state: {
    item:{}
  },
  getters: {

  },
  mutations: {
    updateItem(state,data){
      state.item=data
    }
  },
  actions: {},
  modules:{
    bidRecord
  }
}
export default model

import Vue from 'vue'
import {getBidRecord,getBidRecordByKeyid, addBidRecord,upBidRecord,delBidRecord} from '../../../../api/webapi-bidRecord.js'
const _this = new Vue()

let model = {
  namespaced: true,
  state: {
    activeName:'',
    pageInfo:{
      page:1,
      limit:30,
    },

    //查询条件
    advancedQuery:{},
    //所有数据
    itemList:{
      dataList:[],
      total:0
    },
    item:{}
  },
  getters: {
    pageShow:state=>{
      return {
        pageInfo: state.pageInfo,
        advancedQuery:state.advancedQuery
      }
    }
  },
  mutations: {
    update(state,{k,v}){
      state[k]=v
    }
  },
  actions: {
    networkGetDataList(context,pageShow){
      getBidRecord(pageShow).then(item=>{
        let ref={
          dataList:item.data.content,
          total:item.data.totalElements
        }

        context.commit('update',{k:'itemList',v:ref})
      })
    },
    networkGetDataByKeyid(context,keyId){
      getBidRecordByKeyid(keyId).then(item=>{
        context.commit('update',{k:'item',v:item.data[0]})
      })
    },
    networkAddData(context,formData){
      addBidRecord(formData).then(item=>{
        if (item.code === 200) {
          _this.$message.success(item.message)
          let pageShow=context.getters.pageShow
          pageShow.advancedQuery.tenderstatuskeyid=formData.tenderstatuskeyid
          context.dispatch('networkGetDataList',pageShow)
        }
      })
    },
    networkUpData(context,formData){
      upBidRecord(formData).then(item=>{
        if (item.code === 200) {
          _this.$message.success(item.message)
          let pageShow=context.getters.pageShow
          pageShow.advancedQuery.tenderstatuskeyid=formData.tenderstatuskeyid
          context.dispatch('networkGetDataList',pageShow)
          context.commit('update',{k:'item',v:item.data})
        }
      })
    },
    networkDelData(context,formData){
      delBidRecord(formData).then(item=>{
        if (item.code === 200) {
          _this.$message.success(item.message)
          let pageShow=context.getters.pageShow
          pageShow.advancedQuery.tenderstatuskeyid=formData.tenderstatuskeyid
          context.dispatch('networkGetDataList',pageShow)
        }
      })
    }
  }
}
export default model

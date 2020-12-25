
import {
  getAll,
  add
} from "../../../api/webapi-share.js";
const module = {
  namespaced: true,
  state: {
    allstampData:[],
    newStampData:{}
  },
  getters: {
    getStampData:state=>state.allstampData
  },
  mutations: {
    updateStamp(state,data){
      state.allstampData=data;
    },
    insertStamp(state,data){
      state.newStampData=data;
    }
  },
  actions: {
    getAllData(context,data){
      getAll(data).then(res=>{
        context.commit("updateStamp",res.data);
      })     
    },
    addStamp(context,data){
     // console.log("进入addStamp：得到的结果为:"+JSON.stringify(data));
      add(data).then(res=>{
        let pa = {
          page: 1,
          limit: 20,
          filter: {}
        };
       // context.dispatch("getAllData",pa);
        context.commit("insertStamp",res.data);
      })
    }    
  } 
}
export default module;
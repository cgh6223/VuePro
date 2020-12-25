import ax from "axios";
import qs from "qs";
import { Message } from "element-ui";
import store from '../store/index.js'
import Vue from 'vue'
let _this=new Vue()
// if(process.env.NODE_ENV === 'production'){
//     ax.defaults.baseURL=this.GLOBAL;//"http://localhost:9090/main/";

// }
let service = ax.create();

service.interceptors.request.use(
  config => {
    // let that = this;
    if (config.url.slice(config.url.length - 11, config.url.length) === '/fileUpload') {
      config.headers["Content-Type"] = "multipart/form-data";
      console.log(config.data.get('files'));
    }else {

      config.headers["Content-Type"] = "application/json";
      config.transformRequest=[function(data){
        if (config.url.slice(config.url.length-5,config.url.length)==='/adds') {
          let ref={
            sysorgadminkeyid:store.state.currentUser.orgId,
            sysorgadminname:store.state.currentUser.orgName,
            syscreatepersonid:store.state.currentUser.personId,
            syscreatepersonname:store.state.currentUser.personName,
            allstatuscode:'0'
          }
          if (!_this.$myfunction.isEmpty(data.allstatuscode)) {
            ref.allstatuscode=data.allstatuscode
          }
          Object.assign(data,ref)
        }
        return JSON.stringify(data)
      }];
    }


    //config.headers["Content-Type"] = "application/json";
    // config.transformRequest=[function(data){return qs.stringify(data)}];

    // config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    // config.transformRequest=[function(data){return qs.stringify(data)}];


    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.status;
    if (res !== 200) {
      Message({
        message: res.message,
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);
export default service;

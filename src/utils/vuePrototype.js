import Vue from "vue";
import MyConfig from "./MyConfig";
import MyFunction from "./myFunction";
import echarts from "echarts";

import myFlow from "./myFlow";
import axios from "axios";
import Store from '../store'


Vue.prototype.$configs=MyConfig
Vue.prototype.$myfunction=MyFunction
Vue.prototype.$echarts=echarts
Vue.prototype.$flow=myFlow
Vue.prototype.$http=axios;
axios.defaults.baseURL = '/capi'
Vue.prototype.$store=Store;
String.prototype.bool= function(str) {
  if (str !== undefined) {
    if (this == str || this ===str) {
      return true
    }else {
      return false
    }
  }else {
    return (/^true$/i).test(this)
  }
}
Vue.prototype.sessionStorage={
  setItem:function (key,value) {
    if (typeof value === "string") {
      sessionStorage.setItem(key,value)
    }else {
      sessionStorage.setItem(key,JSON.stringify(value))
    }
  },
  getItem:function (key) {
    let value=sessionStorage.getItem(key)
    if (typeof value === 'string') {
      return value
    }else {
      return JSON.parse(value)
    }
  }
}

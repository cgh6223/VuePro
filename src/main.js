import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2OrgTree from "vue2-org-tree";
import Antd from "ant-design-vue";
import vueFunction from './utils/vueFunction.js'
import uploader from 'vue-simple-uploader';

//import moment from "moment";
//import "./mock";
import  './utils/vuePrototype.js'
import"./plugins/element.js";
import './components/myTemplate/index.js'
import 'lib-flexible/flexible'
import "../src/utils/auth.js";
import "./premisstion";
import "ant-design-vue/dist/antd";
import {Message, MessageBox} from "element-ui";


localStorage.setItem("lang","java");
Vue.config.productionTip = false;

Vue.use(Vue2OrgTree);
Vue.use(Antd);
Vue.use(uploader)
Vue.use(vueFunction)
Vue.prototype.$message=Message
Vue.prototype.$msgbox=MessageBox
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

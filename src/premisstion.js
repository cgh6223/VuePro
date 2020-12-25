import Vue from 'vue'
import rou from "./router/index";
import { GetToken, SetToken } from "./utils/auth";
import store from './router/index.js'
const _this=new Vue()
let Wlist = ["/*"]
//let currUser=store.state.currentUser
rou.beforeEach((to, from, next) => {
  console.log('toPath',to.path)

  if (to.path === '/*') {
    if (!_this.$myfunction.isEmpty(store.state.currentUser)){
      next({
        path:'/login'
      })
    }
  }
  if (to.path === '/customer/basicManager') {//防止客户模块的基本信息刷新没数据
    next({
      path:'/customer/customerManager'
    })
  }
  next()
  /*if (GetToken("Token")) {
    next();
  } else {
    if (Wlist.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }*/
});

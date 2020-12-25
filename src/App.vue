<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import * as dd from "dingtalk-jsapi";
import { getUserInfo } from './api/webapi-flow';
export default {
  name: "app",
  data() {
    return {
      clientHeight: ""
    };
  },
  mounted() {
  this.getWebSign();
  this.getUserInfoByCode();
  },
  methods: {
    ...mapActions({
       getsign: "flowManager/newworkGetSign",
       GetUserInfo:"flowManager/networkGetUserInfo"
    }),
    changeFix(ch) {
      this.$refs.homepage.$el.style.height = ch - 20 + "px";
    },
    getWebSign(){
      let url=location.href;
      this.getsign(url);
    },
    getUserInfoByCode(){
      this.GetUserInfo();
    }    
  },
  watch: {}
};
</script>

<style lang="less">
@import "./style/variables";
@import "./style/element-ui";
@import "./style/common";
@import "./style/scrollBar";
</style>

<template>
  <div id="homes">
    <el-container ref="homepage">
      <el-header style="padding:0">
        <headerNav_new></headerNav_new>
      </el-header>
      <el-container class="mainshow el-scrollbar">
        <el-aside :width="sidebarWidth+'px'" class="mainshow el-scrollbar">
          <leftmenu></leftmenu>
        </el-aside>
        <el-main class="mainshow el-scrollbar" ref="main">
          <bread></bread>
          <router-view ref="router"></router-view>
        </el-main>
      </el-container>
      <!-- <el-footer>中环信息</el-footer> -->
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav_new from "../components/headerNav_new.vue";
import leftmenu from "../components/leftmenu.vue";
import bread from "../components/bread.vue";
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "home",
  components: {
    headerNav_new,
    leftmenu,
    bread
  },
  computed:{
      ...mapState({
        sidebarWidth:'sidebarWidth'
      })
  },
  data() {
    return {
      clientHeight: '',
      timer:false,
    };
  },

  mounted() {
    /*this.networkGetAllPerson({pageInfo:{page:1,limit:30},advancedQuery:{statuid:'0'}})
    this.networkGetHrLoadData()
    this.networkGetRegion()
    this.networkGetCusLoadData()*/
    this.clientHeight = `${document.documentElement.clientHeight}`;
     /*window.onresize = function temp() {
       this.clientHeight = `${document.documentElement.clientHeight}`;
     };*/
    this.onWindowResize.add(()=>{
      this.clientHeight=window.innerHeight
    })
  },
  methods: {
      ...mapActions({
        networkGetAllPerson:'hrStore/networkGetAllPerson',
        networkGetHrLoadData:'loadType/networkGetHrLoadData',
        networkGetRegion:'loadType/networkGetRegion',
        networkGetCusLoadData:'loadType/networkGetCusLoadData',
      }),
    changeFix(ch) {
      this.$refs.homepage.$el.style.height = ch - 0 + 'px';
      this.$refs.main.$el.style.height = ch - 50 + 'px';
      this.$refs.router.$el.style.height = ch - 50 + 'px';
    },
    setleftmenuShow() {
      this.$store.dispatch("setLeftMenu");
    }
  },
  watch: {
    clientHeight: function(newValue) {
      let _this=this
      setTimeout(function () {
        _this.changeFix(newValue)
      },100)
    }
  }
}
</script>
<style lang="less" scoped>
#homes {
  overflow-x: hidden;
}

.el-header{
  background-color: #ffffff;
}
.el-main {
  height: 750px;
  padding: 5px;
  background-color: rgba(249, 253, 253,0.5);
  overflow-x: hidden;
  overflow-y: auto ;
}
.el-aside {
  background-color: #ffffff;
  height: 99%;
  overflow-y: auto;
  overflow-x: hidden;
}
.el-footer {
  color: blue;
  background-color: aqua;
  line-height: 60px;
}
</style>

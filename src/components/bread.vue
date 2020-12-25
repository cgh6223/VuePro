<template>
  <div class='bread_container' id="bread_container">
    <span @click="setleftmenuShow()" class="bars"><i :class="collapseStyle"></i></span>
    <div class="btn">
      <el-button type="text" size="mini" @click="$router.go(-1)"><<-返回</el-button>
      <el-button type="text" size="mini" @click="$router.go(+1)">前进->></el-button>
    </div>

    <!--<el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item class="breadcrumb-item">
      </el-breadcrumb-item>
    </el-breadcrumb>-->
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'bread',
    data() {
      return {
        changeBarDirection: false,
      }
    },
    computed: {
      ...mapGetters([
        'collapseStyle',
        'sidebarWidth'
      ])
    },
    methods: {
      setleftmenuShow() {
        this.$store.dispatch('setLeftMenu');
        this.changeBarDirection = !this.changeBarDirection;
      }
    }
  }
</script>
<style lang="less">
  .bread_container {
    position: relative;
    background-color: #eaebec;
    height: 30px;
    width: 100%;
    .bars {
      float: left;
      margin: 4px 10px;
      cursor: pointer;
      .isactive {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        transition: .38s;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
      }
    }
    .btn{
      position: absolute;
      top: 0;
      right: 10px;
    }
    .breadcrumb {
      height: 30px;
      line-height: 30px;
      .breadbutton {
        float: left;
        margin: 4px 5px 0 0;
      }
    }
  }
</style>

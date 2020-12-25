<template>
  <div class="body">
    <div class="head-button">
      <head-button></head-button>
    </div>
    <div class="table">
        <el-tabs v-model="activeName">
          <el-tab-pane name="1">
            <span slot="label">在职人员</span>
            <table-list :data-list="dataList"></table-list>
          </el-tab-pane>
          <el-tab-pane name="2">
            <span slot="label">离职人员</span>
            <table-list :data-list="dataList"></table-list>
          </el-tab-pane>
          <el-tab-pane name="3">
            <span slot="label">停用人员</span>
            <table-list :data-list="dataList"></table-list>
          </el-tab-pane>
        </el-tabs>
    </div>
    <div class="dialog">

    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import TableList from './table/TableList.vue'


  export default {
    components: {
      HeadButton,
      TableList,

    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
        dataList: [{}, {}],
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {}
  }
</script>
<style lang='less' scoped>
  .head-button {
    height: 50px;
    line-height: 50px;
    padding: 10px 20px;
  }
</style>

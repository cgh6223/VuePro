<template>
  <div class="body">
    <div class="head-button">
      <head-button></head-button>
    </div>
    <div class="table">
      <el-tabs  v-model="activeName">
        <el-tab-pane name="0">
          <span  slot="label">非业务合同</span>
          <non-contract-table :my-data="dataList"></non-contract-table>
        </el-tab-pane>
        <el-tab-pane name="1">
          <span  slot="label">工程咨询合同</span>
          <table-template :data-base="{type:'工程咨询',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span  slot="label">造价咨询合同</span>
          <table-template :data-base="{type:'造价咨询',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span  slot="label">招标代理合同</span>
          <table-template :data-base="{type:'招标代理',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span  slot="label">工程监理合同</span>
          <table-template :data-base="{type:'工程监理',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
        </el-tab-pane>
        <el-tab-pane name="5">
          <span  slot="label">项目管理合同</span>
          <table-template :data-base="{type:'项目管理',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
        </el-tab-pane>
        <el-tab-pane name="6">
          <span  slot="label">全过程工程咨询合同</span>
          <table-template :data-base="{type:'全过程工程咨询',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
        </el-tab-pane>
        <el-tab-pane name="7">
          <span  slot="label">综合业务合同</span>
          <table-template :data-base="{type:'综合业务',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
        </el-tab-pane>
        <el-tab-pane name="8">
          <span  slot="label">框架或入库合同</span>
          <table-template :data-base="{type:'框架或入库',dataList:dataList}" @tableBtnClick="tableBtnClick"></table-template>
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
  import TableTemplate from './table/TableTemplate.vue'
  import NonContractTable from './table/NonContractTable.vue'


  export default {
    components: {
      HeadButton,
      TableTemplate,
      NonContractTable
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
        activeName2: '1',
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

<template>
  <!--保证金缴纳台账-->
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="申请时间" align="center"></el-table-column>
        <el-table-column prop="" label="申请组织" align="center"></el-table-column>
        <el-table-column prop="" label="申请人" align="center"></el-table-column>
        <el-table-column prop="" label="所属组织" align="center"></el-table-column>
        <el-table-column prop="" label="缴纳类型" align="center"></el-table-column>
        <el-table-column prop="" label="缴纳方式" align="center"></el-table-column>
        <el-table-column prop="" label="合同编号" align="center"></el-table-column>
        <el-table-column prop="" label="合同（项目）名称" align="center"></el-table-column>
        <el-table-column prop="" label="保证金金额" align="center"></el-table-column>
        <el-table-column prop="" label="缴纳账户名" align="center"></el-table-column>
        <el-table-column prop="" label="缴纳时间" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="addPaymentTime">添加时间</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="addPaymentTime">上传回执单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog"></div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      dataList:''
    },
    watch: {},
    //数据节点
    data() {
      return {}
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      addPaymentTime(){

      }
    }
  }
</script>
<style lang='less' scoped>

</style>

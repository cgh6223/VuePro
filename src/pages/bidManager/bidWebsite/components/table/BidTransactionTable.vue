<template>
  <div>
    <div class="table">
      <el-table
              ref="tableRef"
              :data="dataList"
              style="width: 100%"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="tradingPlatformname" label="网站名称" align="center"></el-table-column>
        <el-table-column prop="tradingPlatformUrl" label="网站" align="center"></el-table-column>
        <el-table-column prop="tradingPlatformUser" label="用户名" align="center"></el-table-column>
        <el-table-column prop="tradingPlatformpd" label="密码" align="center"></el-table-column>
        <el-table-column prop="tradingPlatformopfile" label="办事流程图" align="center">
          <template slot-scope="scope">
            <el-button type="text">预览</el-button>
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="300px" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <platform-dialog ref="upRef" @getFormData="networkUpData"></platform-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import PlatformDialog from '../dialog/PlatformDialog.vue'
  import {mapState} from 'vuex'
  import {getPlatformWebsite,addPlatformWebsite,delPlatformWebsite,upPlatformWebsite} from '../../../../../api/webapi-bidRecord.js'
  export default {
    components: {
      TableButton,
      PlatformDialog
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        dataList:[]
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetDataList()
    },
    //自定义函数节点
    methods: {
      tableBtnClick(btn,data){
        switch (btn) {
          case 1:
            this.$refs.upRef.openDialog(data)
            break
          case 2:
            this.networkDelData(data)
            break
          case 3:

            break
        }
      },
      networkGetDataList(){
        getPlatformWebsite().then(item=>{
          this.dataList=item.data
        })
      },
      networkUpData(formData){
        upPlatformWebsite(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkDelData(formData){
        delPlatformWebsite(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

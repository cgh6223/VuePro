<template>

  <div class="body">

    <div class="table">
      <el-table :data="websites.dataList" style="width: 100%" align="center" height="530px" highlight-current-row
                :header-cell-style="{fontSize:'14px'}">
        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column prop="webSiteName" label="网站名称" align="center"></el-table-column>
        <el-table-column prop="webSiteUrl" label="网址" align="center"></el-table-column>
        <el-table-column prop="webSiteUserName" label="用户名" align="center"></el-table-column>
        <el-table-column prop="webSitePassWord" label="密码" align="center"></el-table-column>
        <el-table-column prop="webSiteOparationFlowFile" label="发布程序流程图" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
            <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--<div class="pagination">
      &lt;!&ndash;分页&ndash;&gt;
      <pagination :pageTotal="total" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange">
      </pagination>
    </div>-->

    <div class="dialog">
      <add-station-dialog ref="updateRef" width="30%" @getFormData="submitUpForm"></add-station-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import AddStationDialog from '../dialog/AddStationDialog.vue'
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      AddStationDialog
    },
    props: {},
    watch: {},
    computed: {
      ...mapState('biddingPlatform', {
        websites: 'websites'
      })
    },
    //数据节点
    data() {
      return {}
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
        ...mapActions('biddingPlatform',{
          networkUpWebsite:'networkUpWebsite',
          networkDelWebsite:'networkDelWebsite',
        }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
      },
      submitUpForm(formData) {
			  this.networkUpWebsite(formData)
      },
      deleteData(data){
        this.$msgbox.confirm('是否永久删除该记录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.networkDelWebsite(data)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    .button {
      margin: 10px 10px;
    }
  }
</style>

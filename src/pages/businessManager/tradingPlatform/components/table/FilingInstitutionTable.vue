<template>

  <div class="body">
    <div class="table">
      <el-table :data="agencies.dataList" style="width: 100%" align="center" height="530px" highlight-current-row
                :header-cell-style="{fontSize:'14px'}">
        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column prop="orgName" label="机构名称" align="center"></el-table-column>
        <el-table-column prop="orgAddress" label="地址" align="center"></el-table-column>
        <el-table-column prop="orgPerson" label="联系人" align="center"></el-table-column>
        <el-table-column prop="orgPhone" label="电话" align="center"></el-table-column>
        <el-table-column prop="orgFlowFile" label="办事流程图" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
            <el-button type="text" @click="deleteData(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <!--<pagination :pageTotal="total"
                  @handleCurrentChange="handleCurrentChange"
                  @handleSizeChange="handleSizeChange"></pagination>-->
    </div>

    <div class="dialog">
      <add-institution-dialog ref="updateRef" width="30%" @getFormData="submitFormData"></add-institution-dialog>
    </div>

  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import AddInstitutionDialog from '../dialog/AddInstitutionDialog.vue'
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    components: {
      AddInstitutionDialog,
    },
    props: {},
    watch: {},
    computed: {
      ...mapState('biddingPlatform',{
        agencies:'agencies'
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
          networkDelAgency:'networkDelAgency',
          networkUpAgency:'networkUpAgency',
        }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
      },
      submitFormData(formData){
          this.networkUpAgency(formData)
      },
      deleteData(data){
        this.$msgbox.confirm('是否永久删除该记录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.networkDelAgency(data)
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

</style>

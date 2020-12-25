<template>
  <div class="body">
    <div class="button">
      <el-button class="btn_color" type="primary" size="mini" @click="$refs.addRef.openDialog()">新增荣誉</el-button>
    </div>
    <div class="table">
      <el-table :data="honor.dataList" height="6.8rem" align="center">
        <el-table-column label="荣誉名称" prop="honorName" align="center"></el-table-column>
        <el-table-column label="获取时间" prop="obtainTime" align="center"></el-table-column>
        <el-table-column label="附件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.file"></download-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination :pageTotal="honor.total"
                  @handleCurrentChange="handleCurrentChange"
                  @handleSizeChange="handleSizeChange"></pagination>
    </div>
    <div class="dialog">
      <honor-dialog ref="addRef" title="新增荣誉" width="30%"
                    @getFormData="submitAddFormData"></honor-dialog>
      <honor-dialog ref="updateRef" title="修改荣誉信息" width="30%"
                    @getFormData="submitUpdateFormData"></honor-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HonorDialog from './dialog/HonorDialog.vue'
  import pagination from '../../../../../components/pagination/index.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('hrStore')
  export default {
    components: {
      HonorDialog,
      pagination
    },
    props: {},
    watch: {},
    computed: {
      ...mapGetters({
        honor: 'honor'
      })
    },//数据节点
    data() {
      return {
        pageShow: {
          page: 1,
          limit: 20,
          filter: '1=1'
        },
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      ...mapActions({
        networkAddHonor: 'networkAddHonor',
        networkUpdateHonor: 'networkUpdateHonor'
      }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
      },
      submitAddFormData(data) {
        this.networkAddHonor(data)
      },
      submitUpdateFormData(data) {
        this.networkUpdateHonor(data)
      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    width: 100%;
    height: 100%;
    background-color: white;
  }

  .button {
    height: 25px;
    padding: 10px 15px;
    .el-button {
      float: right;
    }
  }
</style>

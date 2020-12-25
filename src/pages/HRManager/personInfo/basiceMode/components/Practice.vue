<template>
  <div class="body">
    <div class="button">
      <el-button class="btn_color" type="primary" size="mini" @click="$refs.addRef.openDialog()">新增执业</el-button>
    </div>
    <div class="table">
      <el-table :data="practice.dataList" height="6.8rem" align="center">
        <el-table-column label="执业类型" prop="practiceType" align="center"></el-table-column>
        <el-table-column label="专业一" prop="majorA" align="center"></el-table-column>
        <el-table-column label="专业二" prop="majorB" align="center"></el-table-column>
        <el-table-column label="初次获取时间" prop="obtainTime" align="center"></el-table-column>
        <el-table-column label="有效期开始时间" prop="startTime" align="center"></el-table-column>
        <el-table-column label="有效期结束时间" prop="endTime" align="center"></el-table-column>
        <el-table-column label="附件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.file"></download-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
            <el-button type="text" @click="">更换</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination :pageTotal="practice.total"
                  @handleCurrentChange="handleCurrentChange"
                  @handleSizeChange="handleSizeChange"></pagination>
    </div>
    <div class="dialog">
      <practice-dialog ref="addRef" title="新增执业" dialog-width="30%"
                       @getFormData="submitAddFormData"></practice-dialog>
      <practice-dialog ref="updateRef"
                       title="修改执业信息"
                       dialog-width="30%"
                       @getFormData="submitUpdateFormData"></practice-dialog>
    </div>

  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import PracticeDialog from './dialog/PracticeDialog.vue'
  import pagination from '../../../../../components/pagination/index.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('hrStore')
  export default {
    components: {
      PracticeDialog,
      pagination
    },
    props: {},
    watch: {},
    computed: {
      ...mapGetters({
        practice: 'practice'
      })
    },
    //数据节点
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
        networkAddPractice: 'networkAddPractice',
        networkUpdatePractice: 'networkUpdatePractice',
      }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
      },

      submitAddFormData(data) {
        this.networkAddPractice(data)
      },
      submitUpdateFormData(data) {
        this.networkUpdatePractice(data)
      },
    }
  }
</script>
<style lang='less' scoped>
  .body {
    width: 100%;
    height: 100%;
    background-color: white;
    .button {
      height: 25px;
      padding: 10px 15px;
      .el-button {
        float: right;
      }
    }
  }
</style>

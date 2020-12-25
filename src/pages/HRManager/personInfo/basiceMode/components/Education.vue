<template>
  <div class="body">
    <div class="button">
      <el-button class="btn_color" type="primary" size="mini" @click="$refs.addRef.openDialog()">新增学历</el-button>
    </div>
    <div class="table">
      <el-table :data="education.dataList" height="6.8rem" align="center">
        <el-table-column label="学历" prop="name" align="center"></el-table-column>
        <el-table-column label="类型" prop="type" align="center"></el-table-column>
        <el-table-column label="毕业院校" prop="school" align="center"></el-table-column>
        <el-table-column label="毕业时间" prop="graduateTime" align="center"></el-table-column>
        <el-table-column label="所学专业" prop="major" align="center"></el-table-column>
        <el-table-column label="附件" align="center">
          <template slot-scope="scope">
            <download-button :value="scope.row.file"></download-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200px" align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination :pageTotal="education.total"
                  @handleCurrentChange="handleCurrentChange"
                  @handleSizeChange="handleSizeChange"></pagination>
    </div>
    <div class="dialog">
      <!--增加学历-->
      <education-dialog ref="addRef" title="增加学历" dialog-width="30%"
                        @getFormData="submitAddForm"></education-dialog>
      <!--修改学历-->
      <education-dialog ref="updateRef" title="修改学历" dialog-width="30%" :updateData="upData"
                        @getFormData="submitUpdateForm"></education-dialog>
    </div>


  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import EducationDialog from './dialog/EducationDialog.vue'
  import pagination from '../../../../../components/pagination/index.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('hrStore')
  export default {
    components: {
      EducationDialog,
      pagination
    },
    props: {},
    watch: {},
    computed: {
      ...mapGetters({
        education: 'education'
      })
    },
    //数据节点
    data() {
      return {
        upData: {},
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
        networkAddEducation: 'networkAddEducation',
        networkUpdateEducation: 'networkUpdateEducation'
      }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
      },

      submitAddForm(data) {
        this.networkAddEducation(data)
      },
      submitUpdateForm(data) {
        this.networkUpdateEducation(data)
      },
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

  .box-title {
    margin-top: 5px;
    height: 0.405rem;
  }
</style>

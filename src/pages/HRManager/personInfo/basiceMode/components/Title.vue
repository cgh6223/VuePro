<template>
  <div class="body">
    <div class="button">
      <el-button class="btn_color" type="primary" size="mini" @click="$refs.addRef.openDialog()">新增职称</el-button>
    </div>
    <div class="table">
      <el-table :data="titles.dataList" height="6.8rem" align="center">
        <el-table-column label="职称类别" prop="titleType" align="center"></el-table-column>
        <el-table-column label="职称级别" prop="titleLevel" align="center"></el-table-column>
        <el-table-column label="职称专业" prop="titleMajor" align="center"></el-table-column>
        <el-table-column label="获取时间" prop="obtainTime" align="center">
          <template slot-scope="scope">
            {{$myfunction.addDayToDate(scope.row.obtainTime,0)}}
          </template>
        </el-table-column>
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
      <pagination :pageTotal="titles.total"
                  @handleCurrentChange="handleCurrentChange"
                  @handleSizeChange="handleSizeChange"></pagination>
    </div>
    <div class="dialog">
      <add-title ref="addRef" title="新增职称" dialog-width="30%"
                 @getFormData="submitAddFormData"></add-title>
      <add-title ref="updateRef" title="修改职称信息" dialog-width="30%"
                 @getFormData="submitUpdateFormData"></add-title>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import AddTitle from './dialog/TitleDialog.vue'
  import UpdateTitle from './dialog/TitleDialog.vue'
  import pagination from '../../../../../components/pagination/index.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('hrStore')
  export default {
    components: {
      AddTitle,
      UpdateTitle,
      pagination
    },
    props: {

    },
    watch: {

    },
    computed:{
        ...mapGetters({
          titles:'title'
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
          networkAddTitle:'networkAddTitle',
          networkUpdateTitle:'networkUpdateTitle'
        }),
      handleCurrentChange(val) {
        this.pageShow.page = val;
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
      },

      submitAddFormData(data) {
        this.networkAddTitle(data)
      },
      submitUpdateFormData(data) {
          this.networkUpdateTitle(data)
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

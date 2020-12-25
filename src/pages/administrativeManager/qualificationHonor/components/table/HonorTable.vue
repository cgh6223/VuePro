<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="荣誉名称" align="center"></el-table-column>
        <el-table-column prop="" label="荣誉获得方式" align="center"></el-table-column>
        <el-table-column prop="" label="评选主办单位" align="center"></el-table-column>
        <el-table-column prop="" label="评选标准" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="评选提交材料" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="评选结构" align="center"></el-table-column>
        <el-table-column prop="" label="申报单位" align="center"></el-table-column>
        <el-table-column prop="" label="申报要求" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="申报提交材料" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="申报结果" align="center"></el-table-column>
        <el-table-column prop="" label="荣誉等级" align="center"></el-table-column>
        <el-table-column prop="" label="颁发单位" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>单位: 招标一部</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="荣誉获得日期" align="center"></el-table-column>
        <el-table-column prop="" label="荣誉扫描件" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="有效期" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
		<honor-info-dialog title="荣誉情况" ref="honorInfoRef"></honor-info-dialog>
	</div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import HonorInfoDialog from '../dialog/HonorInfoDialog.vue'
  import TextButton from '../../../acomponents/TextButton.vue'

  export default {
    components: {
      TableButton,
	  HonorInfoDialog,
      TextButton
    },
    props: {
      dataList: {
        type: Array,
        default: () => {
          return [
            {
              type: '新增'
            },
            {
              type: '申请'
            }
          ]
        }
      }
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
      tableButtonClick(btn) {
        switch (btn) {
          case 1:
		  this.$refs.honorInfoRef.openDialog();
            break;
          case 2:
            break
          case 3:
            break
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  .el-tag {
    cursor: pointer
  }
</style>

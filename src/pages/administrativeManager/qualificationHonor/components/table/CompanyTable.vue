<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="公司名称" align="center"></el-table-column>
        <el-table-column prop="" label="公司类型" align="center"></el-table-column>
        <el-table-column prop="" label="统一社会信用代码" align="center"></el-table-column>
        <el-table-column prop="" label="法定代表人/负责人" align="center"></el-table-column>
        <el-table-column prop="" label="成立日期" align="center"></el-table-column>
        <el-table-column prop="" label="营业场所" align="center"></el-table-column>
        <el-table-column prop="" label="营业场所相关图片" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="营业执照正本" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="营业执照副本" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="副本数量" align="center"></el-table-column>
        <el-table-column prop="" label="副本情况" align="center">
          <template slot-scope="scope">
            <el-popover-template type="m" :label-prop="copyManager"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="" label="租聘合同附件" align="center">
          <template slot-scope="scope">
            <text-button title="下载"></text-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="租聘合同有效期" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <company-info-dialog title="公司情况" ref="companyInfoRef"></company-info-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import CompanyInfoDialog from '../dialog/CompanyInfoDialog.vue'
  import ElPopoverTemplate from '../../../acomponents/ElPopoverTemplate.vue'
  import TextButton from '../../../acomponents/TextButton.vue'

  export default {
    components: {
      TableButton,
      CompanyInfoDialog,
      ElPopoverTemplate,
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
      return {
        copyManager: [
          {label: '管理人', prop: ''},
          {label: '管理数量', prop: ''},
        ]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      tableButtonClick(btn) {
        switch (btn) {
          case 1:
            this.$refs.companyInfoRef.openDialog();
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

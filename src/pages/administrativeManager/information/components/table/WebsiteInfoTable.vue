<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="网站名称" align="center"></el-table-column>
        <el-table-column prop="" label="链接" align="center"></el-table-column>
        <el-table-column prop="" label="用户名" align="center"></el-table-column>
        <el-table-column prop="" label="密码" align="center"></el-table-column>
        <el-table-column prop="" label="网站简介" align="center"></el-table-column>
        <el-table-column prop="" label="网站管理员" align="center"></el-table-column>
        <el-table-column prop="" label="手机绑定情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>机主：张三</p>
              <p>手机号：18276880319</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="合同相关情况" align="center">
          <template slot-scope="scope">
            <el-popover-template type="multiple" :data="scope.row.contractInfo" :label-prop="contractInfo"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" min-width="100px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <website-info-dialog title="修改网站信息" ref="upWebsite"></website-info-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/WebsiteInfoTableButton.vue'
  import WebsiteInfoDialog from '../dialog/WebsiteInfoDialog.vue'
  import ElPopoverTemplate from '../../../acomponents/ElPopoverTemplate.vue'

  export default {
    components: {
      TableButton,
      WebsiteInfoDialog,
      ElPopoverTemplate
    },
    props: {
      dataList: {
        type: Array,
        default: () => {
          return [
            {}
          ]
        }
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        contractInfo:[
          {label:'合同编号',prop:''},
          {label:'合同名称',prop:''},
          {label:'附件',prop:'',type:'file'},
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
            this.$refs.upWebsite.openDialog()
            break
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

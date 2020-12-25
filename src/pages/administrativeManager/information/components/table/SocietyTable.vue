<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="协会名称" align="center"></el-table-column>
        <el-table-column prop="" label="链接" align="center"></el-table-column>
        <el-table-column prop="" label="用户名" align="center"></el-table-column>
        <el-table-column prop="" label="密码" align="center"></el-table-column>
        <el-table-column prop="" label="网站简要介绍" align="center"></el-table-column>
        <el-table-column prop="" label="网站管理员" align="center"></el-table-column>
        <el-table-column prop="" label="手机绑定情况" align="center">
          <template slot-scope="scope">
            <el-popover-template :label-prop="phoneInfo"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="" label="相关会费情况" align="center">
          <template slot-scope="scope">
            <el-popover-template type="m" :label-prop="societyMoneyInfo"></el-popover-template>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="$refs.upRef.openDialog(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <society-info-dialog title="修改协会信息" ref="upRef"></society-info-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/PhoneTableButton.vue'
  import SocietyInfoDialog from '../dialog/SocietyInfoDialog.vue'
  import ElPopoverTemplate from '../../../acomponents/ElPopoverTemplate.vue'
  export default {
    components: {
      TableButton,
      SocietyInfoDialog,
      ElPopoverTemplate
    },
    props: {
      dataList:{
        type:Array,
        default:()=>{
          return [
            {
              type:'新增'
            },
            {
              type:'申请'
            }
          ]
        }
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        phoneInfo:[
          {label:'机主',prop:''},
          {label:'手机号',prop:''},
        ],
        societyMoneyInfo:[
          {label:'缴纳时间',prop:''},
          {label:'会费',prop:''},
          {label:'缴纳证明材料',prop:''},
        ]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      tableButtonClick(btn){
        switch (btn) {
          case 1:
            this.$refs.upRef.openDialog()
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

</style>

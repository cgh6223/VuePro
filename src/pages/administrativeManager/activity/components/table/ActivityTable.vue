<template>
  <div class="body">
    <div class="table">
      <el-table :data="dataList" align="center" height="7.5rem" highlight-current-row
        :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="" label="活动举办时间" align="center" width="160"></el-table-column>
        <el-table-column prop="" label="活动名称" align="center" width="150"></el-table-column>
        <el-table-column prop="" label="活动类型" align="center" width="100"></el-table-column>
        <el-table-column prop="" label="主办方名称" align="center" width="150"></el-table-column>
        <el-table-column prop="" label="活动举办地点" align="center" width="150"></el-table-column>
        <el-table-column prop="" label="活动持续时间" align="center" width="100"></el-table-column>
        <el-table-column prop="" label="活动规模" align="center" width="80"></el-table-column>
        <el-table-column prop="" label="活动相关人员" align="center" width="100">
          <template slot-scope="scope">
            <el-popover placement="bottom" width="400" trigger="click">
              <el-table :data="scope.row.persons">
                <el-table-column label="公司活动负责人" prop="charge"></el-table-column>
                <el-table-column label="协助人员" prop="assist"></el-table-column>
                <el-table-column label="协助工作" prop="work"></el-table-column>
              </el-table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="活动相关图片资料">
          <template slot-scope="scope">
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="" label="活动费用总计" align="center" width="100"></el-table-column>
        <el-table-column prop="" label="相关合同情况" align="center" width="100">
          <template slot-scope="scope">
            <el-popover placement="bottom" width="400" trigger="click">
              <el-table :data="scope.row.contracts">
                <el-table-column label="合同编号" prop="contractNumber"></el-table-column>
                <el-table-column label="合同名称" prop="contractName"></el-table-column>
                <el-table-column label="附件" prop="enclosure">
                  <template slot-scope="scope2">
                    <el-button type="text">下载</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="获奖情况" align="center" width="80">
          <template slot-scope="scope">
            <el-popover placement="bottom" width="300" trigger="click">
              <el-table :data="scope.row.rewards">
                <el-table-column label="奖项名称" prop="rewardName"></el-table-column>
                <el-table-column label="附件" prop="enclosure">
                  <template slot-scope="scope2">
                    <el-button type="text">下载</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button slot="reference" type="text">详细</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作" align="center" width="80" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <update-activity-dialog ref="updateRef"></update-activity-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import UpdateActivityDialog from '../dialog/UpdateActivityDialog.vue'

  export default {
    components: {
      TableButton,
      UpdateActivityDialog,

    },
    props: {
      /* dataList:{
         type:Array,
         default:()=>{
           return [
             {}
           ]
         }
       } */
    },
    watch: {},
    //数据节点
    data() {
      return {
        dataList: [{
          persons: [{
            charge: '张三',
            assist: '李四',
            work: '资料整理',
          }],
          contracts: [{
            contractNumber: 'sjlasl-sadj-12',
            contractName: '合同1',
            enclosure: ''
          }],
          rewards: [{
            rewardName: '奖励1',
            enclosure: ''
          }]
        }]
      }
    },
    //生命周期函数节点
    created() {},
    //自定义函数节点
    methods: {
      tableButtonClick(btn, data) {
        switch (btn) {
          case 1:
            this.$refs.updateRef.openDialog(data)
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
<template>
  <div class="body">
    <div class="table">
      <el-table
              :data="dataList"
              align="center"
              height="7.5rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <!-- <el-table-column prop="" label="房屋用途" align="center"></el-table-column> -->
        <el-table-column prop="" label="房东姓名" align="center"></el-table-column>
        <el-table-column prop="" label="房东身份证" align="center">
					<template slot-scope="scope">
						<el-button type="text">下载</el-button>
					</template>
				</el-table-column>
        <el-table-column prop="" label="房东电话" align="center"></el-table-column>
        <el-table-column prop="" label="房屋落址" align="center"></el-table-column>
        <el-table-column prop="" label="相关缴费号" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <p>水费号：sf247438444</p>
              <p>电费号：sd844934556</p>
              <p>燃气号：rq93543u344</p>
              <p>网络号1：dx231254643</p>
              <p>座机号1：0823-324512</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
				<el-table-column prop="" label="房屋租金付款类型" align="center"></el-table-column>
				<el-table-column prop="" label="租金" align="center"></el-table-column>
        <el-table-column prop="" label="租金支付信息登记" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <!-- <p>房屋租金付款类型：办公用地</p>
              <p>：3400000</p>
              <p>租金支付信息登记</p> -->
              <p>开户名称：中国银行</p>
              <p>开户银行：中国银行</p>
              <p>开户账号：68453485455445464</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详细</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
				<el-table-column prop="" label="租赁合同" align="center">
					<template slot-scope="scope">
						<el-button type="text">下载</el-button>
					</template>
				</el-table-column>
        <el-table-column prop="" label="租赁合同有效期" align="center"></el-table-column>
        <el-table-column prop="" label="操作" align="center" width="100px">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableButtonClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
			<update-property-dialog title="修改" ref="updateRef"></update-property-dialog>
		</div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
   import TableButton from '../button/TableButton.vue'
  import UpdatePropertyDialog from '../dialog/UpdatePropertyDialog.vue'

  export default {
    components: {
      TableButton,
      UpdatePropertyDialog,
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
            this.$refs.updateRef.openDialog()
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

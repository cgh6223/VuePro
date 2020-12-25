<template>
  <div class="logContainer">
    <div class="table-head">
      <el-row>
        <el-col :span="2">
          <span>下载档案类型：</span>
        </el-col>
        <el-col :span="20">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="1">合同电子版</el-checkbox>
            <el-checkbox label="2">合同</el-checkbox>
            <el-checkbox label="3">补充协议</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </div>
    <el-table
            :data="dataList"
            style="width: 100%"
            align="center"
            height="530px"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}">

      <el-table-column prop="code" label="合同编号" align="center"></el-table-column>
      <el-table-column prop="name" label="合同名称" align="center"></el-table-column>
      <el-table-column prop="" label="创建时间" align="center"></el-table-column>
      <el-table-column prop="orgName" label="签订部门" align="center"></el-table-column>
      <el-table-column label="合同类型" align="center">
        <template slot-scope="scope">
          {{scope.row.types}}/{{scope.row.category}}
        </template>
      </el-table-column>
      <el-table-column prop="" label="合同协议各方情况" align="center">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>甲方: {{ scope.row.partyA}}</p>
            <p>乙方: {{ scope.row.partyB}}</p>
            <p>第三方: {{ scope.row.partyC}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详细</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="signTime" label="签订时间" align="center"></el-table-column>
      <el-table-column prop="isExpiryDate" label="是否有有效期" align="center"></el-table-column>
      <el-table-column prop="expiryDate" label="收取风险（履约）保证金情况" align="center">
        <p>收取金额：</p>
        <p>收取时间：</p>
        <p>退回时间：</p>
      </el-table-column>
      <el-table-column prop="expiryDate" label="缴纳风险（履约）保证金情况" align="center">
        <p>缴纳金额：</p>
        <p>缴纳时间：</p>
        <p>退回时间：</p>
      </el-table-column>
      <el-table-column prop="expiryDate" label="原件情况" align="center">

      </el-table-column>
      <el-table-column label="操作" align="center" width="300px" fixed="right">
        <template slot-scope="scope">
          <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <pagination
            :pageTotal="total"
            @handleCurrentChange="handleCurrentChange"
            @handleSizeChange="handleSizeChange">
    </pagination>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import pagination from '../../../../../components/pagination/index.vue'
  import HeadButton from '../button/HeadButton.vue'

  export default {
    components: {
      pagination,
      HeadButton,

    },
    props: {
      model:'',
      myData: {
        type: Array,
        default: () => {
          return []
        }
      },
      pageTotal: {
        type: Number,
        default: 20
      },
      loadData: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    model:{
      prop:'model',
      event:'getPageShow'
    },
    watch: {
      myData() {
        this.dataList = this.myData
      },
      pageTotal() {
        this.total = this.pageTotal
      }
    },
    //数据节点
    data() {
      return {
        checkList:[],
        //数据源
        dataList: this.myData,
        //条数
        total: this.pageTotal,
        pageShow: {
          page: 1,
          limit: 20,
          filter: '1=1'
        },
      }
    },
    //生命周期函数节点
    created() {
      this.getPageShowData()
    },
    //自定义函数节点
    methods: {
      handleCurrentChange(val) {
        this.pageShow.page = val;
        this.getPageShowData()
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
        this.getPageShowData()
      },
      headBtnClick(btn) {
        switch (btn) {
          case 1:
            this.$refs.addRef.openDialog()
            break
          case 2:
            this.$refs.queryRef.openDialog()
            break
          case 3:
            this.$router.push({path:'/contract/original_script',query:{nav:'1'}})
            break

          case 4:
            this.$router.push({path:'/contract/original_script',query:{nav:'2'}})
            break
          case 5:
            this.$router.push({path:'/contract/template_manager'})
            break

        }
      },
      tableBtnClick(btn,data) {
        switch (btn) {
          case 1:
            this.$router.push({path:'/contract/basic_manager',query:{id:data.keyid}})
            break
          case 2:
            this.$refs.cancelRef.openDialog()
            break
          case 3:
            this.$refs.transferRef.openDialog()
            break
          case 4:
            break
          case 5:
            break
        }
      },
      submitAddContract(data){
        this.$emit('function','addContractForm',data)
      },
      getPageShowData(){
        this.$emit('getPageShow',this.pageShow)
      }
    }
  }
</script>
<style lang='less' scoped>
  .search_container {
    margin-bottom: 20px;
  }
  .searchArea {
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 18px 18px 0;
  }
  .el-tag{
    cursor: pointer
  }
  .table-head{
    height: 30px;
    line-height: 30px;
    margin-bottom: 15px;
    span{
      font-size: 16px;
    }
  }
</style>

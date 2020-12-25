<template>
  <div>
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
            height="500px"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}">
      <el-table-column prop="code" label="合同编号" align="center" width="150px"></el-table-column>
      <el-table-column prop="name" label="合同名称" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="businessType" label="客户方名称" align="center">
        <template slot-scope="scope">
          <el-popover :trigger="tagType" placement="top">
            <p>客户方名称: {{ scope.row.partyB }}</p>
            <p>第三方名称: {{ scope.row.partyC }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.partyB }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="projectHead" label="合同上客户方项目负责人" align="center">
        <template slot-scope="scope">
          <el-popover :trigger="tagType" placement="top">
            <p>姓名: {{ scope.row.projectHead }}</p>
            <p>电话: {{ scope.row.projectHeadPhone }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.projectHead }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="signTime" label="合同签订时间" align="center" width="110px"></el-table-column>
      <template v-if="type==='框架或入库'">
        <el-table-column  prop="" label="是否有有效期" align="center" width="180px">
          <template slot-scope="scope">
            <el-popover :trigger="tagType" placement="top">
              <p>2020/08/16</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">是</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </template>
      <el-table-column prop="" label="合同上公司项目负责人" align="center"></el-table-column>
      <template v-if="type==='综合业务' || type==='框架或入库'">
        <el-table-column  prop="businessType" label="涉及业务" align="center" width="180px"></el-table-column>
      </template>
      <template v-if="type!=='招标代理'">
        <el-table-column prop="totalInvestment" label="项目总投资" align="center" width="100px"></el-table-column>
        <el-table-column prop="" label="项目规模" align="center" width="100px"></el-table-column>
      </template>
      <template v-if="type==='招标代理'">
        <el-table-column  prop="totalInvestment" label="项目总投资/采购预算" align="center" width="100px"></el-table-column>
        <el-table-column  prop="" label="项目规模/采购内容" align="center" width="100px"></el-table-column>
      </template>
      <template v-if="type==='造价咨询'">
        <el-table-column prop="" label="计价标准" align="center" width="250px"></el-table-column>
      </template>
      <template v-if="type==='工程监理'">
        <el-table-column prop="installationCosts" label="建筑安装工程费" align="center" width="150px"></el-table-column>
        <el-table-column prop="" label="工程建设地" align="center" width="150px"></el-table-column>
        <el-table-column prop="duration" label="监理工期" align="center" width="130px"></el-table-column>
        <el-table-column prop="supervisingEngineer" label="总监理工程师" align="center" width="130px"></el-table-column>
      </template>
      <el-table-column prop="" label="收费标准" align="center"></el-table-column>
      <template v-if="type==='工程监理'">
        <el-table-column prop="" label="延期收费标准" align="center"></el-table-column>
      </template>
      <el-table-column prop="remuneration" label="合同酬金" align="center"></el-table-column>
      <el-table-column prop="isPayDeposit" label="是否缴纳风险（履约）保证金" align="center" width="100px">
        <template slot-scope="scope">
          <el-popover :trigger="tagType" placement="top">
            <p>缴纳金额: {{ scope.row.name }}</p>
            <p>缴纳时间: {{ scope.row.address }}</p>
            <p>退回时间: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">是</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="expiryDate" label="原件情况" align="center">

      </el-table-column>
      <el-table-column label="操作" align="center" width="200px" fixed="right">
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
  import TableButton from '../button/TableButton.vue'
  import pagination from '../../../../../components/pagination/index.vue'
  export default {
    components: {
      TableButton,
      pagination
    },
    props: {
      dataBase:{
        type:Object,
        default:()=>{
          return {
            type:'',
            dataList:[],
          }
        }
      }
    },
    watch: {
      dataBase(newValue){
        this.type=newValue.type
        let array=[]
        newValue.dataList.forEach(val=>{
          if (newValue.type === '综合业务') {
            if (val.businessType.indexOf(newValue.type)!==-1) {
              array.push(val)
            }
          }else if (val.businessType === newValue.type) {
            array.push(val)
          }

        })
        this.dataList=array
        this.total=array.length
      }
    },
    //数据节点
    data() {
      return {
        checkList:[],
        tagType:'click',
        type:'',
        dataList:[],
        total:0,
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
      handleCurrentChange(val) {
        this.pageShow.page = val;

      },
      handleSizeChange(val) {
        this.pageShow.limit = val;

      },
      tableBtnClick(btn,data){
        this.$emit('tableBtnClick',btn,data)
      }
    }
  }
</script>
<style lang='less' scoped>
.el-table{
  .el-tag{
    cursor:pointer;
  }
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

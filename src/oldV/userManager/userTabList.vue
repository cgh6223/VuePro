<template>
  <div class="chinaTabsTable">
    <!-- <el-button size="mini" type="primary" @click="getshow">test</el-button>
    <tableList :tableData="tableData" :headerData="pds"></tableList>-->
    <search-item @searchMore="searchMore" @addUser="addUsers"></search-item>
    <el-table
      :data="tableData"
      style="width: 100%;font-size:10px;"
      align="center"
      :fit="true"
      :height="tableHeight"
      highlight-current-row
      :header-cell-style="{fontSize:'14px'}"
    >
      <el-table-column prop="sortnum" label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="username" label="客户名称" align="center"></el-table-column>
      <el-table-column prop="address" label="单位地址" align="center"></el-table-column>
      <!-- <el-table-column prop="province" label="省" align="center"></el-table-column>
       <el-table-column prop="city" label="市" align="center"></el-table-column>
      <el-table-column prop="county" label="区" align="center"></el-table-column>-->
      <el-table-column prop="corpType" label="单位性质" align="center" width="60"></el-table-column>
      <el-table-column prop="createTime" label="初次服务时间" align="center">
        <template slot-scope="scope">
          <i class="el-icon-timer"></i>
          <span style="margin-left:10px">{{scope.row.createTime}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="scope"
        label="所涉及业务"
        align="center"
        :formatter="scopeFormat"
        :filters="scopeType"
        :filter-method="scopeFilter"
      ></el-table-column>
      <el-table-column prop="IstaxPayer" label="是否一般纳税人" align="center" width="50"></el-table-column>
      <el-table-column prop="taxPayerNum" label="纳税人识别号" align="center"></el-table-column>
      <el-table-column prop="username" label="户名" align="center"></el-table-column>
      <el-table-column prop="userCountNum" label="账号" align="center"></el-table-column>
      <el-table-column prop="bankName" label="开户行" align="center"></el-table-column>
      <el-table-column prop="phoneNum" label="通讯电话" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :pageTotal="pageTotal"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    ></pagination>
    <search-dialogs v-if="searchDialogsShow" :isShow="searchDialogsShow" @searchSubmit="searchSubmit"></search-dialogs>
  </div>
</template>
<script>
import { getComstomList,getLists } from "../../api/old/user";
import { groupBy } from "../../utils/auth";
import pagination from "../../components/pagination/index.vue";
//import tableList from "../../components/tableList/index.vue";
import searchItem from "./searchItem.vue";
import searchDialogs from "./searchDialog.vue";
const headerD = [
  { prop: "sortnum", label: "序号", show: false },
  { prop: "username", label: "客户名称", show: false },
  { prop: "address", label: "单位地址", show: false },
  {
    prop: "createTime",
    label: "初次服务时间",
    show: true,
    temp:
      '<i class="el-icon-timer"></i><span style="margin-left:10px">@v</span>'
  },
  { prop: "corpType", label: "单位性质", show: false },
  { prop: "scope", label: "所涉及业务", show: false },
  { prop: "bankName", label: "开户行", show: false },
  { prop: "phoneNum", label: "通讯电话", show: false },
  { prop: "IstaxPayer", label: "是否一般纳税人", show: false },
  { prop: "userCountNum", label: "账号", show: false }
];
export default {
  name: "userTabList",
  data() {
    return {
      tableData: [],
      tableHeight: window.innerHeight - 300,
      pageTotal: 1,
      pageShow: {
        page: 1,
        limit: 20,
        filter: {}
      },
      pds: headerD,
      searchDialogsShow: false,
      format_type_list: {
        0: "工程咨询",
        1: "工程造价",
        2: "招标代理",
        3: "工程监理",
        4: "全过程工程咨询"
      },
      scopeType: [
        {
          text: "工程咨询",
          value: "0"
        },
        {
          text: "工程造价",
          value: "1"
        },
        {
          text: "招标代理",
          value: "2"
        },
        {
          text: "工程监理",
          value: "3"
        },
        {
          text: "全过程工程咨询",
          value: "4"
        }
      ]
    };
  },
  components: {
    pagination,
    searchItem,
    searchDialogs
  },
  methods: {
    getList() {
      let pa = this.pageShow;
      getComstomList(pa).then(res => {
        (this.tableData = res.rows), (this.pageTotal = res.total);
      });
    },
    scopeFormat(row) {
      return this.format_type_list[row.scope];
    },
    scopeFilter(value, row) {
      const type = parseInt(value);
      return row.scope === type;
    },
    searchMore() {

      this.searchDialogsShow = true;
    },
    addUsers(){

      getLists().then(res=>{});
    },
    searchSubmit(val) {
      this.pageShow = Object.assign({}, this.pageShow, val);
      console.log(this.pageShow);
    },
    handleCurrentChange(val) {
      this.pageShow.page = val;
      this.getList();
    },
    handleSizeChange(val) {
      this.pageShow.limit = val;
      this.getList();
    },
    getshow() {
      console.log(this);
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style scoped>
.chinaTabsTable {
}
</style>

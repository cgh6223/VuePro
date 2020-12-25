<template>
  <div>
    <div class="table">
      <div class="table-head">
        <el-row>
          <el-col :span="2">
            <span>下载档案类型：</span>
          </el-col>
          <el-col :span="20">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="1">身份证</el-checkbox>
              <el-checkbox label="2">劳动合同</el-checkbox>
              <el-checkbox label="3">学历</el-checkbox>
              <el-checkbox label="4">荣誉</el-checkbox>
              <el-checkbox label="5">职称</el-checkbox>
              <el-checkbox label="6">执业</el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
      </div>
      <el-table
              :data="dataList"
              style="width: 100%"
              align="center"
              height="6.8rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">

        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column prop="userName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="Gender" label="性别" align="center"></el-table-column>
        <el-table-column prop="idCard" label="身份证号" align="center" width="250px"></el-table-column>
        <el-table-column prop="birthday" label="出生年月" align="center" width="100px"></el-table-column>
        <el-table-column prop="Age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="120px" align="center"></el-table-column>
        <el-table-column prop="personType" label="人员分类" align="center"></el-table-column>
        <el-table-column prop="organize" label="所属组织" align="center"></el-table-column>
        <el-table-column prop="stationName" label="岗位名称" align="center"></el-table-column>
        <el-table-column prop="maxEducation" label="最高学历" align="center">
          <template slot-scope="scope">
            <!--{{scope.row.education[0].type}}-->
          </template>
        </el-table-column>
        <el-table-column prop="" label="学历情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <el-table :data="scope.row.education">
                <el-table-column prop="type" label="学历类型" align="center"></el-table-column>
                <el-table-column prop="school" label="毕业院校" align="center"></el-table-column>
                <el-table-column prop="graduateTime" label="毕业时间" align="center"></el-table-column>
                <el-table-column prop="major" label="所学专业" align="center"></el-table-column>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详情</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="荣誉情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <el-table :data="scope.row.honor">
                <el-table-column prop="honorName" label="荣誉名称" align="center"></el-table-column>
                <el-table-column prop="obtainTime" label="获取时间" align="center"></el-table-column>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详情</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="职称情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <el-table :data="scope.row.title">
                <el-table-column prop="titleLevel" label="职称类别" align="center"></el-table-column>
                <el-table-column prop="titleLevel" label="职称级别" align="center"></el-table-column>
                <el-table-column prop="titleMajor" label="职称专业" align="center"></el-table-column>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详情</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="" label="执业情况" align="center">
          <template slot-scope="scope">
            <el-popover trigger="click" placement="top">
              <el-table :data="scope.row.practice">
                <el-table-column prop="practiceType" label="执业类型" align="center"></el-table-column>
                <el-table-column prop="majorA" label="专业一" align="center"></el-table-column>
                <el-table-column prop="majorB" label="专业二" align="center"></el-table-column>
              </el-table>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">详情</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="isBuySocial" label="是否购买社保" align="center"></el-table-column>
        <el-table-column prop="isSignLaborContract" label="是否签订劳动合同" align="center"></el-table-column>
        <el-table-column prop="isSignLabourServiceContract" label="是否签订劳务合同" align="center"></el-table-column>
        <el-table-column prop="isSignSecrecyTreaty" label="是否签订保密协议" align="center"></el-table-column>
        <el-table-column prop="isSignStationDutyConfirmation" label="是否签订岗位职责书" align="center"></el-table-column>
        <el-table-column prop="isSignProhibitionTreaty" label="是否签订禁业合同" align="center"></el-table-column>
        <el-table-column prop="isBuyInsurance" label="是否购买其他保险" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="100px" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination
              :pageTotal="total"
              @handleCurrentChange="handleCurrentChange"
              @handleSizeChange="handleSizeChange">
      </pagination>
    </div>
    <div class="dialog">
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import pagination from '../../../../../components/pagination/index.vue'

  export default {
    components: {
      TableButton,
      pagination,
    },
    props: {
      dataList: '',
      total: '',
    },
    watch: {},
    //数据节点
    data() {
      return {
        pageShow: {
          page: 1,
          limit: 20,
          filter: '1=1'
        },
        checkList: []
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      getPageShow() {
        this.$emit('getPageShow', this.pageShow)
      },
      handleCurrentChange(val) {
        this.pageShow.page = val;
        this.getPageShow()
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
        this.getPageShow()
      },
      tableBtnClick(val, data) {
        switch (val) {
          case 1:
            break
          case 2:
            break

        }
      },
    }
  }
</script>
<style lang='less' scoped>
.table-head{
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
  span{
    font-size: 16px;
  }
}
</style>

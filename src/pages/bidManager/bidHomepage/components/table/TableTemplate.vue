<template>
  <div>
    <div class="table">
      <el-table
              ref="tableRef"
              :data="itemList.dataList"
              style="width: 100%"
              align="center"
              height="7rem"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column prop="createddateTime" label="创建日期" align="center" width="100" fixed="left"></el-table-column>
        <el-table-column prop="syscreatepersonname" label="创建人" align="center" width="80" ></el-table-column>
        <el-table-column prop="projectname" label="项目名称" align="center" width="150" fixed="left"></el-table-column>
        <el-table-column prop="tenderee" label="甲方信息" align="center">
          <template slot-scope="scope">
            <com-popover data-type="obj" :label-prop="partyAObject" :data="scope.row"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="existingclients" label="既有客户" align="center">
          <template slot-scope="scope">
            {{scope.row.existingclients===true?'是':scope.row.existingclients===false?'否':''}}
          </template>
        </el-table-column>
        <el-table-column prop="accesstradingcentre" label="是否进交易中心" align="center" width="150px">
          <template slot-scope="scope">
            <template v-if="scope.row.accesstradingcentre">
              <com-popover title="是" data-type="obj" :label-prop="biddingAddress" :data="scope.row"></com-popover>
            </template>
            <template v-else>
              否
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="applicantdatetime" label="报名时间" align="center" width="250">
          <template slot-scope="scope">
            <template v-if="scope.row.applicantdelaydateTime!==''">
              {{scope.row.applicantbegindatetime}}-{{scope.row.applicantdelaydateTime}}
            </template>
            <template v-else>
              <template v-if="scope.row.applicantbegindatetime!==''">
                {{scope.row.applicantbegindatetime}}-{{scope.row.applicantenddatetime}}
              </template>
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="bidopeningdateTime" label="开标时间" align="center" width="120"></el-table-column>
        <el-table-column prop="" label="招标文件分析" align="center" width="120">
          <template slot-scope="scope">
            <com-popover data-type="obj" :label-prop="biddingFileAnalysis" :data="scope.row"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="formtendername" label="投标形式" align="center" width="170">
          <template slot-scope="scope">
            <span v-if="scope.row.formtendername!=='' && scope.row.tenderername!==''">{{scope.row.formtendername+'/'+scope.row.tenderername}}</span>
            <span v-else>{{scope.row.formtendername}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="biddingleading" label="投标负责人" align="center" width="100"></el-table-column>
        <el-table-column prop="istenderbond" label="是否缴纳保证金" align="center" width="120">
          <template slot-scope="scope">
            <template v-if="scope.row.istenderbond">
              <com-popover title="是" data-type="obj" :label-prop="depositInfo" :data="scope.row"></com-popover>
            </template>
            <template v-else>
              否
            </template>
          </template>
        </el-table-column>
        <el-table-column prop="iswinbidding" label="中标情况" align="center" width="80">
          <template slot-scope="scope">
            <com-popover :label-prop="winBid" :data="scope.row.winBid"></com-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="200px" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination
              :pageTotal="itemList.total"
              @handleCurrentChange="handleCurrentChange"
              @handleSizeChange="handleSizeChange"></pagination>
    </div>
    <div class="dialog">
      <set-head-dialog ref="setHeadRef" title="指定负责人" width="30%" @getFormData="networkUpData"></set-head-dialog>
      <bid-define-dialog ref="bidDefineRef" title="投标确定" width="30%" @getFormData="bidIsOk"></bid-define-dialog>
      <sign-up-registration ref="signUpRef" title="报名登记" width="45%" @getFormData="networkUpData"></sign-up-registration>
      <item-registration ref="itemRef" title="项目情况登记" @getFormData="networkUpData"></item-registration>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from '../button/TableButton.vue'
  import SetHeadDialog from '../dialog/SetHeadDialog.vue'
  import BidDefineDialog from '../dialog/BidDefineDialog.vue'
  import SignUpRegistration from '../dialog/SignUpRegistration.vue'
  import ItemRegistration from '../../showBasic/components/dialog/ItemRegistration.vue'
  import {mapState,mapActions,mapMutations} from 'vuex'
  import {getBidItemFile,upBidItemFile,getSubcontract,delSubcontract} from '../../../../../api/webapi-bidRecord.js'
  export default {
    components: {
      TableButton,
      SetHeadDialog,
      BidDefineDialog,
      SignUpRegistration,
      ItemRegistration
    },
    props: {
      statusCode:''
    },
    watch: {},
    computed:{
        ...mapState('bidManager/bidRecord',{
          itemList:'itemList'
        })
    },
    //数据节点
    data() {
      return {
        pageInfo: {
          page: 1,
          limit: 30,
        },
        partyAObject:[
          {label:'项目业主',prop:'proprietor'},
          {label:'招标人',prop:'tenderee'},
          {label:'负责人',prop:'tendereeleading'},
          {label:'联系电话',prop:'tendereeleadingphone'},
          {label:'招标代理机构',prop:'biddingagency'},
          {label:'负责人',prop:'biddingagencyleading'},
          {label:'联系电话',prop:'biddingagencyleadingphone'},
        ],
        biddingAddress:[
          {label:'交易中心名称',prop:'tradingcentrename'},
          {label:'开标地点',prop:'placebidopening'}
        ],
        biddingFileAnalysis:[
          {label:'人员分析',prop:'personanalyse'},
          {label:'业绩分析',prop:'achievementanalyse'},
          {label:'行政分析',prop:'administrationanalyse'},
          {label:'重点分析',prop:'keypointanalyse'},
          {label:'答辩人员',prop:'rejoinperson'},
        ],
        depositInfo:[
          {label:'保证金',prop:'tenderbondsum'},
          {label:'缴纳时间',prop:'tbbegindateTime'},
          {label:'递交时间',prop:'tbbegindateTime'},
          {label:'退回时间',prop:'tbenddateTime'},
          {label:'退还时间',prop:'tbenddateTime'},
        ],
        winBid:[
          {label:'文件名称',prop:'tenderDocName'},
          {label:'分包/分标段名称',prop:'bidsectionname'},
          {label:'中标单位',prop:'companyname'},
          {label:'中标价',prop:'winbiddingsum'},
        ]
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
        ...mapActions('bidManager/bidRecord',{
          networkUpData:'networkUpData',
          networkGetDataByKeyid:'networkGetDataByKeyid'
        }),
        ...mapMutations('bidManager',{
          updateItem:'updateItem'
        }),
      tableBtnClick(btn,data){
        switch (btn) {
          case 1:
            this.networkGetDataByKeyid({keyid:data.keyid})
            this.$router.push({path:'bid_basic'})
            break
          case 2:
            this.$refs.signUpRef.openDialog(data)
            break
          case 3:
            this.$refs.bidDefineRef.openDialog(data)
            break
          case 4:
            this.updateItem(data)
            this.$router.push({path: 'workbench'})
            break
          case 5:
            this.$refs.setHeadRef.openDialog(data)
            break
        }
      },
      handleCurrentChange(val) {
        this.pageInfo.page = val;
        this.$emit('getPageInfo',this.pageInfo)
      },
      handleSizeChange(val) {
        this.pageInfo.limit = val;
        this.$emit('getPageInfo',this.pageInfo)
      },
      bidIsOk(formData){
        this.networkUpData(formData).then(()=>{
          getBidItemFile({keyid:formData.keyid}).then(item=>{
            let ref=item.data[0]
            ref.docustatus='已作废'
            upBidItemFile(ref).then(item=>{
              getSubcontract({tenderDocKeyid:item.keyid}).then(item=>{
                delSubcontract(item)
              })
            })
          })
        })
      }
    }
  }
</script>
<style lang='less' scoped>
</style>

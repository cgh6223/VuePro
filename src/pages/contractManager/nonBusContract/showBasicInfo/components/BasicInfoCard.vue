<template>
  <div class="body">
    <div class="card-head">
      <el-row>
        <el-col :span="2">
          <el-button type="primary" size="mini" @click="$refs.showRef.openDialog(contractInfo)">完善信息</el-button>
        </el-col>
        <el-col :span="12">
          <div v-if="contractInfo.isgather===true">
            <span style="color: red">提示：当前合同需要缴纳保证金，请缴纳！</span>金额：{{contractInfo.depositsum}} <el-button type="text">缴纳申请</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="card-main">
      <com-showinfo :data-base="contractInfo" label="value" :label-prop-list="infoArray" :index="index"></com-showinfo>
    </div>
    <up-basic-info-dialog ref="showRef" width="55%" @getFormData="submitForm"></up-basic-info-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import UpBasicInfoDialog from './dialog/UpBasicInfoDialog.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('nonBusContract')
  export default {
    components: {
      UpBasicInfoDialog
    },
    props: {},
    watch: {
      contractInfo(newValue){
        if (newValue.isgather) {
          let arr=[
            {key: 'isgather', value: '是否需要缴纳履约（风险）保证金',type:'boolean'},
            {key: 'depositsum', value: '缴纳履约（风险）保证金'},
            {key: 'depositdateTime', value: '履约（风险）保证金缴纳时间'},
            {key: 'depositfile', value: '履约（风险）保证金缴纳回执单'},
            {key: 'indepositdateTime', value: '履约（风险）保证金退回时间'},
            {key: 'indepositfile', value: '履约（风险）保证金退回电子凭证'},
          ]
          this.infoArray=this.$options.data().infoArray
          this.infoArray=this.infoArray.concat(arr)
        }
        if (newValue.isdeposit) {
          let arr=[
            {key: 'isdeposit', value: '是否需要收取履约（风险）保证金', type:'boolean'},
            {key: 'depositsum', value: '缴纳履约（风险）保证金'},
            {key: 'depositdateTime', value: '履约（风险）保证金收取时间'},
            {key: 'depositfile', value: '履约（风险）保证金收取回执单'},
            {key: 'indepositdateTime', value: '履约（风险）保证金退回时间'},
            {key: 'indepositfile', value: '履约（风险）保证金退回电子凭证'}
          ]
          this.infoArray=this.$options.data().infoArray
          this.infoArray=this.infoArray.concat(arr)
        }
      }
    },
    computed: {
      ...mapState({
        contractInfo:'contractInfo'
      })
    },
    //数据节点
    data() {
      return {
        index: 12,
        dataInfo: {},
        infoArray: [
          {key: 'contractName', value: '合同名称'},
          {key: 'contractTypename', value: '合同类型'},
          {key: 'contractBurchaser', value: '甲方名称'},
          {key: 'contractSeller', value: '乙方名称'},
          {key: 'thirdparty', value: '第三方'},
          {key: 'methodofdisputename', value: '合同争议方式'},
          {key: 'disputename', value: '仲裁地点/法院名称'},
          {key: 'issecurity', value: '是否有担保人',type:'boolean'},
          {key: 'contractSecurityPerson', value: '担保人'},
          {key: 'concludesigndateTime', value: '合同签订时间'},
          {key: '', value: '合同扫描件', type: 'file',},
          {key: 'isexpiryDate', value: '是否有有效期',type:'boolean'},
          {key: 'expiryDate', value: '有效期起止时间'},
        ],
      }
    },
    //生命周期函数节点
    created() {
      if (this.contractInfo.isgather) {
        let arr=[
          {key: 'isgather', value: '是否需要缴纳履约（风险）保证金',type:'boolean'},
          {key: 'depositsum', value: '缴纳履约（风险）保证金'},
          {key: 'depositdateTime', value: '履约（风险）保证金缴纳时间'},
          {key: 'depositfile', value: '履约（风险）保证金缴纳回执单'},
          {key: 'indepositdateTime', value: '履约（风险）保证金退回时间'},
          {key: 'indepositfile', value: '履约（风险）保证金退回电子凭证'},
        ]
        this.infoArray=this.$options.data().infoArray
        this.infoArray=this.infoArray.concat(arr)
      }
      if (this.contractInfo.isdeposit) {
        let arr=[
          {key: 'isdeposit', value: '是否需要收取履约（风险）保证金', type:'boolean'},
          {key: 'depositsum', value: '缴纳履约（风险）保证金'},
          {key: 'depositdateTime', value: '履约（风险）保证金收取时间'},
          {key: 'depositfile', value: '履约（风险）保证金收取回执单'},
          {key: 'indepositdateTime', value: '履约（风险）保证金退回时间'},
          {key: 'indepositfile', value: '履约（风险）保证金退回电子凭证'}
        ]
        this.infoArray=this.$options.data().infoArray
        this.infoArray=this.infoArray.concat(arr)
      }
    },
    //自定义函数节点
    methods: {
        ...mapActions({
          networkUpContract:'networkUpContract',

        }),
      submitForm(formData) {
        this.networkUpContract(formData)
      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    height: 550px;
    .card-head {
      height: 30px;
      margin-bottom: 20px;
    }
    .card-main {
      position: relative;
      .show-data {
        height: 230px;
        width: 50%;
        p {
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          margin-bottom: 5px;
        }
        &:nth-child(2) {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
  }

</style>

<template>
  <div class="body">
    <div class="card-head">
      <el-button class="btn_color" type="primary" size="mini" @click="$refs.upRef.openDialog(dataBasic)">信息完善</el-button>
    </div>
    <div class="card-main">
      <com-showinfo label="value" :index="index" :data-base="dataBasic" :label-prop-list="infoArray"></com-showinfo>
    </div>
    <up-basic-info-dialog ref="upRef" title="基本信息完善" width="60%" @getFormData="submitForm"></up-basic-info-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import UpBasicInfoDialog from './dialog/UpBasicInfoDialog.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('businessContract')
  export default {
    components: {
      UpBasicInfoDialog
    },
    props: {

    },
    watch: {
      dataBasic(newValue) {
        this.typesJudge(newValue.contractTypeKeyId)
      }
    },
    computed:{
        ...mapState({
          dataBasic:'contractInfo'
        })
    },
    //数据节点
    data() {
      return {
        index: 14,
        infoArray: [
          {key: 'contractTypeName', value: '合同类型'},
          {key: 'contractCode', value: '合同编号'},
          {key: 'contractName', value: '合同名称'},
          {key: 'contractBurchaser', value: '客户方名称'},
          {key: 'thirdparty', value: '第三方名称'},
          {key: 'methodDisputeName', value: '合同争议方式'},
          {key: 'disputeName', value: '仲裁地点/法院名称'},
          {key: 'contractBurchaserPerson', value: '合同上客户方项目负责人'},
          {key: 'contractBurchaserPhone', value: '联系电话'},
          {key: 'contractSellerPerson', value: '合同上公司项目负责人'},
          {key: 'concludesigndateTime', value: '合同签订时间'},
          {key: 'contractallfile', value: '合同扫描件',type:'file'},
          {key: 'projectSum', value: '项目总投资'},
          {key: 'projectScale', value: '项目规模'},
          {key: 'projectStandard', value: '合同收费标准'},
          {key: 'contractSumtype', value: '合同酬金类型'},
          {key: 'contractSum', value: '合同酬金金额'},
          {key: 'isgather', value: '是否需要缴纳履约（风险）保证金',type:'boolean'},
          {key: 'depositsum', value: '缴纳金额'},
          {key: 'depositdateTime', value: '履约（风险）保证金缴纳时间'},
          {key: 'depositfile', value: '履约（风险）保证金缴纳回执单'},
          {key: 'indepositdateTime', value: '履约（风险）保证金退回时间'},
          {key: 'indepositfile', value: '履约（风险）保证金退回电子凭证'},
        ],
      }
    },
    mounted(){

    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
        ...mapActions({
          networkUpContact:'networkUpContact'
        }),
      typesJudge(typeName) {
        this.infoArray=this.$options.data().infoArray
        switch (typeName) {
          case '402880fa74c3492d0174d98812c0003e'://造价咨询
            this.infoArray.push({key: 'castName', value: '计价标准'})
            break
          case '402880fa74c3492d0174d988b0cb003f'://招标代理
            this.infoArray.splice(13,1,{key: 'projectSum', value: '项目总投资/采购预算'})
            this.infoArray.splice(14,1,{key: 'projectScale', value: '项目规模/采购内容'})
            break
          case '402880fa74c3492d0174d988f7670040'://工程监理
            this.infoArray.push({key: 'installsum', value: '建筑安装工程费'})
            this.infoArray.push({key: 'projectAddress', value: '工程建设地'})
            this.infoArray.push({key: 'proTimeLimit', value: '工期'})
            this.infoArray.push({key: 'enPersonName', value: '总监理工程师'})
            this.infoArray.push({key: 'deferredCharges', value: '延期收费标准'})
            break
          case '402880fa74c3492d0174d989e5de0044'://框架或入库
            this.infoArray.push({key: 'isExpiryDate', value: '是否有有效期'})
            this.infoArray.push({key: 'expiryDate', value: '有效期起止时间'})
            break
          case '402880fa74c3492d0174d989b38e0043'://综合业务
            this.infoArray.splice(1,0,{key: 'contractVocationalTypeName', value: '涉及业务'})
            break
        }


      },
      submitForm(form) {
        this.networkUpContact(form)
      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    height: 600px;
    .card-head {
      height: 30px;
      .el-col {
        position: relative;
        height: 30px;
        line-height: 30px;
        span {
          font-size: 20px;
        }
        .el-button {
          position: absolute;
          top: 0;
          right: 0;
        }

      }
    }
    .card-main {
      position: relative;
      .show-data {
        height: 730px;
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

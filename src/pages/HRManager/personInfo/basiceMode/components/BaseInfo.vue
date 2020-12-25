<template>
  <div class="body">
    <div class="main-box">
      <div class="column">
        <div class="head-button">
          <el-button class="btn_color" type="primary" size="mini" @click="$refs.baseRef.openDialog(dataBase)">完善信息
          </el-button>
        </div>
        <com-showinfo :data-base="dataBase" label="value" :index="index" :label-prop-list="infoArray"
                      @click="btnClick"></com-showinfo>
      </div>
    </div>
    <update-base-info ref="baseRef" title="修改资料" dialog-width="63%" @getFormData="submitFormData"></update-base-info>
    <replace-file-dialog ref="replaceRef" title="更改文件" dialog-width="300px" @getFormData="networkReplaceFile"></replace-file-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import UpdateBaseInfo from './dialog/UpdateBaseInfoDialog.vue'
  import ReplaceFileDialog from './dialog/ReplaceFileDialog.vue'
  import BasicInfoTemplate from '../../../../../components/BasicInfoTemplate.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('hrStore')
  export default {
    components: {
      UpdateBaseInfo,
      ReplaceFileDialog,
      BasicInfoTemplate
    },
    props: {},
    watch: {},
    computed: {
      ...mapState({
        dataBase: 'baseInfo'
      })
    },
    //数据节点
    data() {
      return {
        infoArray: [
          {key: 'personName', value: '姓名'},
          {key: 'gender', value: '性别'},
          {key: 'age', value: '年龄'},
          {key: 'birthday', value: '出生年月'},
          {key: 'idCard', value: '身份证号'},
          {key: 'idCardExpiryDate', value: '身份证有效期'},
          {
            key: 'idCardFile',
            value: '身份证件',
            type: 'file',
            btns: [{name: '下载', type: 'button'}, {name: '更换', type: 'button'}]
          },
          {key: 'idCardAddress', value: '身份证上住址'},
          {key: 'familyAddress', value: '家庭住址'},
          {key: 'phone', value: '手机号'},
          {key: 'emergencyPerson', value: '紧急联系人'},
          {key: 'emergencyPhone', value: '紧急联系人电话'},
          {key: 'personType', value: '人员分类'},
          {key: 'entryTime', value: '入职时间'},
          {key: 'bodyInspectFile', value: '体检征明', type: 'file', btns: [{name: '下载', type: 'button'}]},
          {key: 'criminalRecordFile', value: '无行为犯罪记录', type: 'file', btns: [{name: '下载', type: 'button'}]},
          {key: 'bankCreditFile', value: '银行个人征信', type: 'file', btns: [{name: '下载', type: 'button'}]},
          {key: 'laborContractExpiryDate', value: '劳动合同有效期'},
          {
            key: 'laborContractFile',
            value: '劳动合同扫描件',
            type: 'file',
            btns: [{name: '下载', type: 'button'}, {name: '更换', type: 'button'}]
          },
          {key: 'labourServiceContractDate', value: '劳务合同有效期'},
          {
            key: 'labourServiceContractFile',
            value: '劳务合同扫描件',
            type: 'file',
            btns: [{name: '下载', type: 'button'}, {name: '更换', type: 'button'}]
          },
          {key: 'secrecyTreatySignTime', value: '保密协议签订时间'},
          {key: 'secrecyTreatyFile', value: '保密协议扫描件保密协议', type: 'file', btns: [{name: '下载', type: 'button'}]},
          {key: 'postDutyBookSignTime', value: '岗位职责确认书签订时间'},
          {key: 'postDutyBookFile', value: '岗位职责确认书', type: 'file', btns: [{name: '下载', type: 'button'}]},
          {key: 'prohibitionTreatySignTime', value: '禁业协议签订时间'},
          {key: 'prohibitionTreatyFile', value: '禁业协议', type: 'file', btns: [{name: '下载', type: 'button'}]},
        ],
        index: 13,
        replaceKey:'',
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      ...mapActions({
        networkUpdateBasicInfo: 'networkUpdateBasicInfo'
      }),
      submitFormData(data) {
        this.networkUpdateBasicInfo(data)
      },
      downloadFile(file) {

      },
      upFile(file) {

      },
      btnClick({prop, btn, value}) {
        this.replaceKey=prop
        switch (btn) {
          case '更换':
            let ref={
              documentTypeName:'人事档案',
              documentTypeListName:'',
              entityKeyid:this.dataBase.keyid
            }
            switch (prop) {
              case 'idCardFile':
                ref.documentTypeListName='身份证'
                this.$refs.replaceRef.openDialog(ref)
                break
              case 'laborContractFile':
                ref.documentTypeListName='劳动合同扫描件'
                this.$refs.replaceRef.openDialog(ref)
                break
              case 'labourServiceContractFile':
                ref.documentTypeListName='劳务合同扫描件'
                this.$refs.replaceRef.openDialog(ref)
                break
            }
            break
        }
      },
      networkReplaceFile(file){
        let ref=this.$myfunction.copyData(this.dataBase)
        ref[this.replaceKey]=file
        this.networkUpdateBasicInfo(ref)
      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    width: 100%;
    height: auto;
    background-color: white;
  }

  .box-title {
    margin-top: 5px;
    height: 0.405rem;
  }

  .material-box {
    position: relative;
    .head-title {
      div {
        &:nth-child(2) {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
    .column {
      .panel {
        width: 369px;
        position: relative;
        height: 210px;
        border: 1px solid rgba(25, 186, 139, 0.17);
        margin-bottom: 10px;
        padding: 10px;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-left: 2px solid #02a6b5;
          border-top: 2px solid #02a6b5;
          content: "";
        }
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #02a6b5;
          border-top: 2px solid #02a6b5;
          content: "";
        }
        .panel-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 10px;
            height: 10px;
            border-left: 2px solid #02a6b5;
            border-bottom: 2px solid #02a6b5;
            content: "";
          }
          &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 10px;
            height: 10px;
            border-right: 2px solid #02a6b5;
            border-bottom: 2px solid #02a6b5;
            content: "";
          }
        }
        .card {
          width: 100%;
          height: 210px;
          background: rgba(101, 132, 226, 0.1);
        }
      }
    }
  }

  .main-box {
    display: flex;
    .column {
      flex: 2;
      position: relative;
      height: 650px;
      overflow: hidden;
      padding: 0 10px;
      &:nth-child(1) {
        flex: 7;
      }
      &:nth-child(2) {
        flex: 3;
      }
      .head-button {
        height: 25px;
        padding: 10px 15px;
      }
      .show-data {
        width: 49%;
        p {
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          margin-bottom: 10px;
        }
        &:nth-child(2) {
          position: absolute;
          left: 20px;
        }
        &:nth-child(3) {
          position: absolute;
          right: 5px;
        }
      }
    }

  }
</style>

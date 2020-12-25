<template>
  <!--移交合同-->
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <div>
        <el-checkbox :key="selectA" v-model="isSelectA" @change="item=>{if (item) $refs.transferRef.openDialog(nameA)}">合同</el-checkbox>
        <el-checkbox :key="selectB" v-model="isSelectB" @change="item=>{if (item) $refs.transferRef.openDialog(nameB)}">补充协议</el-checkbox>
        <el-checkbox :key="selectC" v-model="isSelectC" @change="item=>{if (item) $refs.transferRef.openDialog(nameC)}">委托书</el-checkbox>
        <el-button style="float: right" type="text" @click="$refs.transferRef.openDialog()">新增移交资料</el-button>
      </div>
      <rea-divider title="待移交数据"></rea-divider>
      <com-transfer-table v-model="addReceiveList"></com-transfer-table>
      <dialog-button :reset-btn="{show:false}" @cancelBtn="dialogClose" @okBtn="submitFormData"></dialog-button>
    </el-dialog>
    <com-transfer-dialog ref="transferRef" @getFormData="getTransferInfo"></com-transfer-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../acomponents/DialogButton.vue'

  export default {
    components: {
      DialogButton
    },
    props: {
      title: '',
      width: {
        type: String,
        default: '50%'
      }
    },
    watch: {
      addReceiveList(newValue){
        let ref1=newValue.findIndex(item=>{
          return item.resourcename === this.nameA
        })
        let ref2=newValue.findIndex(item=>{
          return item.resourcename === this.nameB
        })
        let ref3=newValue.findIndex(item => {
          return item.resourcename === this.nameC
        })
        if (ref1!==-1) {
          this.isSelectA= true
        }else {
          this.isSelectA= false
        }
        if (ref2!==-1) {
          this.isSelectB= true
        }else {
          this.isSelectB= false
        }
        if (ref3!==-1) {
          this.isSelectC= true
        } else {
          this.isSelectC= false
        }
      },
      isSelectA(newValue){
        console.log(newValue)
        if (!newValue) {
          let index=this.addReceiveList.findIndex(item=>{
            return item.resourcename === this.nameA
          })
          if (index !== -1) {
            this.addReceiveList.splice(index,1)
          }
        }else {
          let index=this.addReceiveList.findIndex(item=>{
            return item.resourcename === this.nameA
          })
          if (index === -1) {
            this.isSelectA=false
            this.selectA++
          }
        }
      },
      isSelectB(newValue){
        if (!newValue) {
          let index=this.addReceiveList.findIndex(item=>{
            return item.resourcename === this.nameB
          })
          if (index !== -1) {
            this.addReceiveList.splice(index,1)
          }
        }else {
          let index=this.addReceiveList.findIndex(item=>{
            return item.resourcename === this.nameB
          })
          if (index === -1) {
            this.isSelectB=false
            this.selectB++
          }
        }
      },
      isSelectC(newValue){
        if (!newValue) {
          let index=this.addReceiveList.findIndex(item=>{
            return item.resourcename === this.nameC
          })
          if (index !== -1) {
            this.addReceiveList.splice(index,1)
          }
        }else {
          let index=this.addReceiveList.findIndex(item=>{
            return item.resourcename === this.nameC
          })
          if (index === -1) {
            this.isSelectC=false
            this.selectC++
          }
        }
      }
    },
    //数据节点
    data() {
      return {
        nameA:'合同',
        nameB:'补充协议',
        nameC:'委托书',
        selectA:0,
        selectB:10000,
        selectC:100000,
        isSelectA: false,
        isSelectB: false,
        isSelectC: false,
        dialogVisible: false,
        form: {
          contracttypecode: '',//类型编号
          contracttypename: '',//类型名称
          contractkeyid: '',//合同id
          contractcode: '',//合同编号
          contractname: '',//合同名称
          outpersonkeyid: '',//移交人id
          outperson: '',//移交人
          outOrgkeyid:'',//移交组织id
          outOrgName:'',//移交组织名称
          descinfo: '',//备注，
          isOutPerson: true,
          turnOverFileTypeKeyId: '0',//文档id
          turnOverFileTypeName: '合同',//文档名称
          trunoverstatus:'移交中'
        },
        addReceiveList: [],
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      getTransferInfo(formData) {

        this.addReceiveList.push(this.$myfunction.copyData(Object.assign(this.form, formData)))
      },
      openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          let ref=this.$myfunction.copyData(data)
          this.form.contracttypecode=ref.contractTypecode
          this.form.contracttypename=ref.contractTypename
          this.form.contractkeyid=ref.keyid
          this.form.contractcode=ref.contractCode
          this.form.contractname=ref.contractName
        }
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
        this.resetForm()
      },
      submitFormData() {
        this.$emit('getFormData', this.$myfunction.copyData(this.addReceiveList))
        this.dialogClose()
      },
      resetForm() {
        this.addReceiveList = []
        this.form=this.$options.data().form
      },
      removeReceiveList(key) {
        this.addReceiveList.splice(key, 1)
      }
    }
  }
</script>
<style lang='less' scoped>
  table{
    width: 100%;
    tr{
      width: 100%;
      min-height: 35px;
      td{
        top: 50%;
        min-width: 75px;
        max-width: 250px;
      }
    }
  }
</style>

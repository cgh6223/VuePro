<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="75px">
        <el-form-item v-if="isShow" label="机构类型"><!--修改的时候不要-->
					<rea-select v-model="form.orgTypeKeyid" :data="agencyType.list" @getLabel="item=>{form.orgTypeName=item}"></rea-select>
				</el-form-item>
        <el-form-item label="机构名称">
					<el-input v-model="form.orgName"></el-input>
				</el-form-item>
        <el-form-item label="地址">
					<el-input v-model="form.orgAddress"></el-input>
				</el-form-item>
				<el-form-item label="联系人">
					<el-input v-model="form.orgPerson"></el-input>
				</el-form-item>
        <el-form-item label="电话">
					<rea-number-input v-model="form.orgPhone"></rea-number-input>
				</el-form-item>
        <el-form-item label="办事流程图">
					<upload-button v-model="form.orgFlowFile"></upload-button>
				</el-form-item>
      </el-form>
      <dialog-button reset-btn="false"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
	import {mapState,mapActions,mapMutations} from 'vuex'

  export default {
    components: {

    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      }
    },
    watch: {},
		computed:{
				...mapState('loadType',{
          agencyType:'agencyType'
				})
		},
    //数据节点
    data() {
      return {
        isShow:true,
        dialogVisible: false,
        form: {
          orgTypeKeyid:'',
          orgTypeName:'',
          orgName:'',
          orgAddress:'',
          orgPerson:'',
          orgPhone:'',
          orgFlowFile:''
        },
        formRules: {},
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      itemTypeChange(value) {

      },
      openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          this.form=this.$myfunction.copyData(data)
					this.isShow=false
				}
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
				this.form=this.$options.data().form
				this.isShow=true
      },
      submitForm() {
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>

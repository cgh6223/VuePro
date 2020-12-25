<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
				<el-form-item label="分包/分标段名称">
					<el-input v-model="form.filesalename" :readonly="readonly"></el-input>
				</el-form-item>
        <el-form-item label="文件费收取时间">
          <rea-datescope value-type="array" v-model="fileTime"></rea-datescope>
        </el-form-item>
        <el-form-item label="文件费金额">
          <el-input v-model="form.filecost"></el-input>
        </el-form-item>
        <el-form-item label="保证金收取时间">
          <rea-datescope value-type="array" v-model="bondTime"></rea-datescope>
        </el-form-item>
        <el-form-item label="保证金金额">
          <el-input v-model="form.cashdepositcost"></el-input>
        </el-form-item>
      </el-form>
      <dialog-button reset-btn="false"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件


  export default {
    components: {

    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      },
			data:{},
    },
    watch: {},
    //数据节点
    data() {
      return {
        dialogVisible: false,
				fileTime:[],
				bondTime:[],
        form:{
          filesalename:'',
          filecost:'',
          filesalebegindateTime:'',
          filesaleestimateEndTime:'',
          cashdepositcost:'',
          cashdeposittime:'',
          cashdepositendtime:'',
        },
        formRules:{},
        readonly:false,
      }
    },
    //生命周期函数节点
    created() {

			},
    //自定义函数节点
    methods: {
      openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          this.readonly=true
          this.form=this.$myfunction.copyData(data)
          this.fileTime.splice(0,1,data.filesalebegindateTime)
          this.fileTime.splice(1,1,data.filesaleestimateEndTime)
          this.bondTime.splice(0,1,data.cashdeposittime)
          this.bondTime.splice(1,1,data.cashdepositendtime)
        }
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
        this.form=this.$options.data().form
        this.fileTime=[]
        this.bondTime=[]
        this.readonly=false
      },
      submitForm() {
        this.form.filesalebegindateTime=this.fileTime[0]
        this.form.filesaleestimateEndTime=this.fileTime[1]
        this.form.cashdeposittime=this.bondTime[0]
        this.form.cashdepositendtime=this.bondTime[1]
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>

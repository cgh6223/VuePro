<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
				<el-form-item label="开标时间">
					<rea-datepicker v-model="form.openingbidddateTime"></rea-datepicker>
				</el-form-item>
				<el-form-item label="中标单位">
					<!--<rea-select v-model="form.orgName" prop="name" label="name"></rea-select>-->
					<el-input v-model="form.orgName"></el-input>
				</el-form-item>

				<el-form-item label="中标金额">
					<el-col :span="12">
						<rea-select v-model="isProjectSum"
												prop="name" label="name"
												:data="[{id:1,name:'有具体金额'},{id:2,name:'无具体金额'}]"></rea-select>
					</el-col>
					<el-col :span="12">
						<rea-number-input v-if="form.isProjectSum==='有具体金额'" v-model="form.projectSum"></rea-number-input>
						<el-input v-if="form.isProjectSum==='无具体金额'" v-model="form.projectSum"></el-input>
					</el-col>
				</el-form-item>

				<el-form-item label="通知书发出时间">
					<rea-datepicker v-model="form.disdateTime"></rea-datepicker>
				</el-form-item>

				<el-form-item label="盖章扫描件">
					<upload-button v-model="form.signNoticeFile"></upload-button>
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
        isProjectSum:'',
        dialogVisible: false,
        form:{
          openingbidddateTime:'',
          orgName:'',
          disdateTime:'',
          signNoticeFile:'',
        },
        formRules:{},

      }
    },
    //生命周期函数节点
    created() {
			},
    //自定义函数节点
    methods: {
      openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          this.form=this.$myfunction.copyData(data)
        }
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
      },
      submitForm() {
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>
<style lang='less' scoped>

</style>

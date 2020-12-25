<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
				<el-form-item label="发布日期">
					<rea-datepicker v-model="form.publicitydateTime"></rea-datepicker>
				</el-form-item>
				<el-form-item label="发布公示网站">
					<rea-query-input v-model="form.publicityWebName"
													 url="pro/tawebsite/findall"
													 filter-key="webSiteName"
													 @getObject="item=>{form.publicityWebKeyid=item.keyid}"></rea-query-input>
				</el-form-item>
				<el-form-item label="公示截图">
					<upload-button v-model="form.publicityImageFile"></upload-button>
				</el-form-item>
				<el-form-item label="更正截图">
					<upload-button v-model="form.publicityChangeImageFile"></upload-button>
				</el-form-item>
      </el-form>
      <dialog-button reset-btn="false"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import DialogButton from '../../../../../../acomponents/DialogButton.vue'
  import ElSelectTemplate from '../../../../../../acomponents/ElSelectTemplate.vue'

  export default {
    components: {
      DialogButton,
			ElSelectTemplate,
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
        form:{
          publicitydateTime:'',
          publicityWebKeyid:'',
          publicityWebName:'',
          publicityImageFile:'',
          publicityChangeImageFile:'',
        },
        formRules:{},
      }
    },
    //生命周期函数节点
    created() {},
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
				this.form=this.$options.data().form
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

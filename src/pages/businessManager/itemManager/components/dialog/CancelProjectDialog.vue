<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="75px">
        <el-form-item label="取消类型" prop="projectCallOffTypeKeyId">
          <rea-select v-model="form.projectCallOffTypeKeyId"
                      :data="typeOptions"
                      @getLabel="item=>{form.projectCallOffTypeName=item}" :readonly="!isBtn"></rea-select>
        </el-form-item>
        <el-form-item label="取消理由" prop="projectCallOffDesc">
          <rea-textarea v-model="form.projectCallOffDesc" :readonly="!isBtn"></rea-textarea>
        </el-form-item>
      </el-form>
      <dialog-button v-if="isBtn" reset-btn="false"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('loadType')
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
    },
    //数据节点
    data() {
      return {
        isBtn:true,
        dialogVisible: false,
        typeOptions:[],
        form: {
          projectCallOffTypeKeyId:'',
          projectCallOffTypeName:'',
          projectCallOffDesc:'',
          projectStatusKeyId:'',
          projectStatusName:'',
        },
        formRules: {},

      }
    },
    //生命周期函数节点
    created() {
      this.networkGetSelectByCode('TYPE-063').then(item=>{
        this.typeOptions=item
      })
    },
    //自定义函数节点
    methods: {
        ...mapActions({
          networkGetSelectByCode:'networkGetSelectByCode'
        }),
      openDialog(data,isBtn) {
        if (!this.$myfunction.isEmpty(isBtn)) {
          this.isBtn=isBtn
        }
        if (!this.$myfunction.isEmpty(data)) {
          this.form=this.$myfunction.copyData(data)
          this.form.projectStatusKeyId='6'
          this.form.projectStatusName='项目已取消'
        }
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
        this.form=this.$options.data().form
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

<template>
    <el-dialog :visible.sync="dialogVisible" width="300px" @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="75px">
        <el-form-item label="资料名称" prop="resourcename">
          <el-input  v-model="form.resourcename" :readonly="readonly"></el-input>
        </el-form-item>
        <el-form-item label="份数" prop="copies">
          <el-input-number style="width: 100%" v-model="form.copies"></el-input-number>
        </el-form-item>
        <el-form-item label="接收人" prop="inperson">
          <rea-query-input v-model="form.inperson"
                           url="/hr/basicinfo/findall"
                           filter-key="personName"
                           @getObject="getItem"></rea-query-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="submitData">确 定</el-button>
      </span>
    </el-dialog>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {},
    //生命周期函数节点
    created() {
    },
    mounted() {
    },
    watch: {},
    //数据节点
    data() {
      return {
        readonly:false,
        dialogVisible: false,
        form: {
          resourcename: '',
          copies: '',
          inpersonkeyid: '',
          inperson: '',
          inOrgkeyid:'',
          inOrgName:'',
        },
        formRules: {}
      }
    },

    //自定义函数节点
    methods: {
      getItem(item){
        this.form.inpersonkeyid=item.keyid
        this.form.inOrgkeyid=item.orgId
        this.form.inOrgName=item.orgName
      },
      submitData(){
        this.$emit('getFormData',this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
      openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          this.readonly=true
          this.form.resourcename=this.$myfunction.copyData(data)
        }
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
        this.resetForm()
      },
      resetForm() {
        this.readonly=false
        this.form=this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

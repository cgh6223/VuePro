<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="140px">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="创建日期" prop="">
              <rea-datepicker v-model="form.createddateTime"></rea-datepicker>
            </el-form-item>
            <el-form-item label="创建人" prop="">
              <rea-query-input v-model="form.syscreatepersonname"
                               url="/hr/basicinfo/findall"
                               filter-key="personName"
                               @getObject="item=>{form.syscreatepersonid=item.keyid}"></rea-query-input>
            </el-form-item>
            <el-form-item label="是否需要答辩" prop="">
              <com-truefalse v-model="form.isrejoin"></com-truefalse>
            </el-form-item>
            <el-form-item label="投标项目负责人" prop="">
              <rea-query-input v-model="form.biddingleading"
                               url="/tender/tenderinfo/findall"
                               unmatched
                               filter-key="biddingleading"></rea-query-input>
            </el-form-item>
            <el-form-item label="是否需要缴纳保证金" prop="">
              <com-truefalse v-model="form.isdeposit"></com-truefalse>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="项目名称" prop="">
              <el-input v-model="form.projectname" property="请输入关键字"></el-input>
            </el-form-item>
            <el-form-item label="业务类型" prop="">
              <rea-select v-model="form.vocationaltypekeyid" :data="businessType"></rea-select>
            </el-form-item>
            <el-form-item label="开标时间" prop="">
              <rea-datescope value-type="array" v-model="form.begindateTime"></rea-datescope>
            </el-form-item>
            <el-form-item label="投标形式" prop="">
              <rea-select v-model="form.formtenderkeyid" :data="bidModality"></rea-select>
            </el-form-item>
            <el-form-item label="投标主体" prop="tendererkeyid">
              <rea-cascader v-model="form.tendererkeyid" :data="bidPart"></rea-cascader>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <dialog-button reset-btn="重 置" ok-btn="筛 选" @resetBtn="resetForm"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import  {mapActions} from 'vuex'
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
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          createddateTime:'',//创建日期
          syscreatepersonname:'',//创建人
          isrejoin:'',//是否需要答辩
          biddingleading:'',//投标项目负责人
          isdeposit:'',//是否需要缴纳保证金
          projectname:'',//项目名称
          vocationaltypekeyid:'',//业务类型
          begindateTime:[],//开标时间
          formtenderkeyid:'',//投标形式
          tendererkeyid:'',//投标主体

          tenderstatuskeyid:''//状态
        },
        formRules: {},
        bidModality:[],
        businessType:[],
        bidPart:[]
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetSelectByCode('TYPE-015').then(item=>{
        this.businessType=item
        this.businessType.splice(item.length-1,1)
      })
      this.networkGetCascaderByCode('TYPE-042').then(item=>{
        this.bidPart=item
      })
      this.networkGetSelectByCode('TYPE-041').then(item=>{
        this.bidModality=item
      })
    },
    //自定义函数节点
    methods: {
        ...mapActions('loadType',{
          networkGetSelectByCode:'networkGetSelectByCode',
          networkGetCascaderByCode:'networkGetCascaderByCode',
        }),
      openDialog() {
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
      },
      submitForm() {
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
      resetForm(){
        this.form = this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

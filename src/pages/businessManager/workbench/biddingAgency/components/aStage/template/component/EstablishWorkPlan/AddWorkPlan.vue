<template>
  <div>
    <el-form :model="form"
             ref="formRef"
             :rules="formRules"
             label-width="120px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="计划开始时间">
            <rea-datepicker v-model="form.begindateTime"></rea-datepicker>
          </el-form-item>
          <el-form-item label="计划服务总天数">
            <template v-if="form.planServiceDays!==''">
              {{form.planServiceDays}}天
            </template>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="计划完成时间">
            <rea-datepicker v-model="form.enddateTime" readonly></rea-datepicker>
          </el-form-item>
          <el-form-item label="计划回访及归档天数">
            <el-col :span="20">
              <el-input v-model="form.finalReportDays"></el-input>
            </el-col>
            <el-col :span="4">天</el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <rea-divider title="服务类容"></rea-divider>
      <el-row>
        <el-col :span="16">
          <el-form-item label="服务计划时间不确定总天数" label-width="160px">
            <el-col :span="20">
              <rea-number-input v-model="form.uncertainServiceDay"></rea-number-input>
            </el-col>
            <el-col :span="4">天</el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <com-service-content v-model="form.serviceContent" :service-type="serviceType"></com-service-content>
      <el-button style="width: 100%; margin-top: 20px" type="primary" size="mini" @click="submitFormData">
        <span style="margin-right: 100px">提</span><span>交</span>
      </el-button>
    </el-form>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {mapState,mapActions} from 'vuex'

  export default {
    components: {},
    props: {
      isReset: {
        type:Boolean,
        default: false
      },
      width: {
        type: String,
        default: '50%'
      },
      loading:{
        type:Boolean,
        default: false
      }
    },
    watch: {
      isReset(newValue){
        this.resetForm()
      },
      'form.planServiceDays': function (newValue) {
        if (!this.$myfunction.isEmpty(this.form.begindateTime) && !this.$myfunction.isEmpty(newValue)) {
          this.form.enddateTime = this.$myfunction.addDayToDate(this.form.begindateTime, newValue)
        }
      },
      'form.uncertainServiceDay': function (newValue) {
        if (newValue === '') {
          newValue = '0'
        }
        let uncertainDay = parseInt(newValue)
        if (this.form.planServiceDays === '') {
          this.form.planServiceDays = uncertainDay+this.serviceListDay
        } else {
          this.form.planServiceDays = uncertainDay +this.serviceListDay
        }
      },
      'form.begindateTime': function (newValue) {
        if (!this.$myfunction.isEmpty(this.form.planServiceDays)) {
          this.form.enddateTime = this.$myfunction.addDayToDate(newValue, this.form.planServiceDays)
        }
      },
      'form.serviceContent':function (newValue,oldValue) {
        let newNum=0
        newValue.forEach(item=>{
          if (item.planServiceDays !== '') {
            newNum+=parseInt(item.planServiceDays)
          }
        })
        console.log(newNum)
        this.serviceListDay=newNum
      },
      serviceListDay(newValue,oldValue){
        let uncertainDay=0
        let planServiceDays=0
        if (this.form.uncertainServiceDay !== '') {
          uncertainDay=parseInt(this.form.uncertainServiceDay)
        }
        if (this.form.planServiceDays !== '') {
          planServiceDays=parseInt(this.form.planServiceDays)
        }
        planServiceDays = uncertainDay+ newValue
        this.form.planServiceDays=planServiceDays
      }
    },
    computed: {
      ...mapState('workbench',{
        currentItem:'currentItem'
      })
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          begindateTime: '',
          enddateTime: '',
          planServiceDays: '',
          finalReportDays: '',
          uncertainServiceDay: '',
          serviceContent: []
        },
        formRules: {},
        serviceType:[],
        serviceListDay:0
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetSelectByCode(this.currentItem.serviceCode).then(item=>{
        this.serviceType=item
      })
    },
    //自定义函数节点
    methods: {
        ...mapActions('loadType',{
          networkGetSelectByCode:'networkGetSelectByCode'
        }),
      submitFormData() {
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.resetForm()
      },
      resetForm() {
        this.form = this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

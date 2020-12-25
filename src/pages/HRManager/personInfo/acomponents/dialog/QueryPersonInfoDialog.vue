<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width" @close="dialogClose">
      <el-form :model="form" ref="formRef" label-width="100px">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="姓名" prop="personName">
              <el-input v-model="form.personName"></el-input>
            </el-form-item>
            <el-form-item label="所学专业" prop="major">
              <el-input v-model="form.major"></el-input>
            </el-form-item>
            <el-form-item label="人员分类" prop="personType">
              <rea-select v-model="form.personType" :data="loadData.personTypeList"></rea-select>
            </el-form-item>
            <el-form-item label="所属组织" prop="orgName">
              <rea-cascader v-model="form.orgName" :data="loadData.organizeList" prop="keyid" label="label"
                            checkStrictly></rea-cascader>
            </el-form-item>
            <el-form-item label="岗位名称" prop="postName">
              <rea-select v-model="form.postName" :data="loadData.positionList"
                          :filter="{orgId:form.orgId}"
                          label="posName"
                          prop="keyid"></rea-select>
            </el-form-item>
            <el-form-item label="多执业证件选择" prop="practiceList">
              <rea-select v-model="form.practiceList" :data="loadData.practiceTypeList" multiple></rea-select>
            </el-form-item>
            <el-form-item label="执业获取时间" prop="getCertifyTime">
              <rea-datepicker v-model="form.getCertifyTime"></rea-datepicker>
            </el-form-item>
            <el-form-item label="执业证件专业" prop="practiceMajor">
              <el-input v-model="form.practiceMajor"></el-input>
            </el-form-item>
            <el-form-item label="社保缴纳时间" prop="socialPaymentTime" label-width="100px">
              <rea-datescope v-model="form.socialPaymentTime" type="monthrange" value-type="array"></rea-datescope>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="性别" prop="gender" label-width="115px">
              <com-truefalse v-model="form.gender" true-title="男" false-title="女"></com-truefalse>
            </el-form-item>
            <el-form-item label="年龄" prop="age" label-width="115px">
              <com-numberscope v-model="form.age"></com-numberscope>
            </el-form-item>
            <el-form-item label="学历工龄" prop="educationYears" label-width="115px">
              <com-numberscope v-model="form.educationYears"></com-numberscope>
            </el-form-item>
            <el-form-item label="入职工龄" prop="workYears" label-width="115px">
              <com-numberscope v-model="form.workYears"></com-numberscope>
            </el-form-item>
            <el-form-item label="最高学历" prop="education" label-width="115px">
              <rea-select v-model="form.maxEducation" :data="loadData.educationList"></rea-select>
            </el-form-item>

            <el-form-item label="职称级别" prop="titleLevel" label-width="115px">
              <rea-select v-model="form.titleLevel" :data="loadData.titleLevelList"></rea-select>
            </el-form-item>
            <el-form-item label="职称类别" prop="titleType" label-width="115px">
              <rea-select v-model="form.titleType" :data="loadData.titleTypeList"></rea-select>
            </el-form-item>
            <el-form-item label="职称专业" prop="titleMajor" label-width="115px">
              <el-input v-model="form.titleMajor"></el-input>
            </el-form-item>
            <el-form-item label="公积缴纳时间" prop="fundPaymentTime" label-width="115px">
              <rea-datescope v-model="form.fundPaymentTime" type="monthrange" value-type="array"></rea-datescope>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="身份证信息是否有效" prop="isIDCard" label-width="170px">
              <com-truefalse v-model="form.isIDCard"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否签订劳动合同" prop="isSignLaborContract" label-width="170px">
              <com-truefalse v-model="form.isSignLaborContract"></com-truefalse>
            </el-form-item>
            <el-form-item label="劳动合同是否有效" prop="isLaborContractEffective" label-width="170px">
              <com-truefalse v-model="form.isLaborContractEffective"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否签订劳务合同" prop="isSignLabourServiceContract" label-width="170px">
              <com-truefalse v-model="form.isSignLabourServiceContract"></com-truefalse>
            </el-form-item>
            <el-form-item label="劳务合同是否有效" prop="isLabourServiceContractEffective" label-width="170px">
              <com-truefalse v-model="form.isLabourServiceContractEffective"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否签订保密协议" prop="isSignSecrecyTreaty" label-width="170px">
              <com-truefalse v-model="form.isSignSecrecyTreaty"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否签订禁业合同" prop="isSignProhibitionTreaty" label-width="170px">
              <com-truefalse v-model="form.isSignProhibitionTreaty"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否签订岗位职责确认书" prop="isSignPostDutyBook" label-width="170px">
              <com-truefalse v-model="form.isSignPostDutyBook"></com-truefalse>
            </el-form-item>
            <el-form-item label="是否购买其他保险" prop="isBuyOtherInsurance" label-width="170px">
              <com-truefalse v-model="form.isBuyOtherInsurance"></com-truefalse>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <dialog-button ok-btn="筛 选" @okBtn="submitFormData" @cancelBtn="dialogClose"
                     @resetBtn="resetForm"></dialog-button>
    </el-dialog>
  </div>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('loadType')

  export default {
    props: {
      title: '',
      width: '',
    },
    computed: {
      ...mapGetters({
        loadData: 'loadHrType'
      })
    },
    watch: {
    },
    mounted() {
    },
    data() {
      return {
        dialogVisible: false,
        form: {
          personName: '',
          gender: '',
          personType: '',
          age: [],
          idCard: '',
          maxEducation: '',
          orgName: '',
          postName: '',
          major: '',
          titleLevel: '',
          titleType: '',
          titleMajor: '',
          practiceList: [],
          isIDCard: '',
          isSignLaborContract: '',
          isLaborContractEffective: '',
          isSignLabourServiceContract: '',
          isLabourServiceContractEffective: '',
          isSignSecrecyTreaty: '',
          isSignPostDutyBook: '',
          isSignProhibitionTreaty: '',
          isBuyOtherInsurance: '',
          workYears: [],
          educationYears: [],
          socialPaymentTime: [],
          fundPaymentTime: [],
          practiceType: '',
          practiceMajor: '',
          getCertifyTime: '',
        },
      }
    },
    created() {

    },
    methods: {
      getPostList(value) {
        return this.loadData.positionList.filter(item => {
          if (item.orgId === value) return item
        })
      },
      //关闭对话框
      dialogClose() {
        this.dialogVisible = false
      },
      //打开对话框
      openDialog() {
        this.dialogVisible = true
      },
      //重置表单
      resetForm() {
        Object.assign(this.form, this.$options.data().form)
      },
      submitFormData() {
        this.$emit('getFormData', this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
    }
  }
</script>

<style scoped>

  .btn-right {
    float: right;
    margin-right: 0px !important;
  }
</style>

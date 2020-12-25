<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="dialogWidth" @close="close">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="1.618rem">
        <el-form-item label="执业类型" prop="practiceTypeid">
          <rea-select v-model="form.practiceTypeid" :data="practiceType.list"
                      @getLabel="item=>{form.practiceType=item}"></rea-select>
        </el-form-item>
        <el-form-item label="专业一" prop="majorA">
          <el-input v-model="form.majorA"></el-input>
        </el-form-item>
        <el-form-item label="专业二" prop="majorB">
          <el-input v-model="form.majorB"></el-input>
        </el-form-item>
        <el-form-item label="初次获取时间" prop="obtainTime">
          <rea-datepicker v-model="form.obtainTime"></rea-datepicker>
        </el-form-item>
        <el-form-item label="注册有效期">
          <rea-datescope v-model="effectiveTime" value-type="array"></rea-datescope>
        </el-form-item>
        <el-form-item label="执业扫描件" prop="file">
          <upload-button v-model="form.file" module-type="hr" file-name="执业扫描件" :base-id="currentPersonId"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button reset-btn="false" @okBtn="submitFormData" @cancelBtn="close"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
    },
    props: {
      title: '',
      dialogWidth: '',
    },
    watch: {
      effectiveTime(newValue) {
        this.form.startTime = newValue[0]
        this.form.endTime = newValue[1]
      }
    },
    computed: {
      ...mapState('loadType',{
        practiceType: 'practiceType'
      }),
      ...mapState('hrStore',{
        currentPersonId:'currentPersonId'
      })
    },
    //数据节点
    data() {
      return {
        dialogVisible: false,
        form: {
          practiceTypeid: '',
          practiceType: '',
          majorA: '',
          majorB: '',
          obtainTime: '',
          startTime: '',
          endTime: '',
          file: '',
        },
        formRules: {
          practiceType: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
          majorA: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
          majorB: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
          obtainTime: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
          startTime: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
          endTime: [
            {
              required: true,
              trigger: 'blur'
            }
          ],
        },
        //已录入的执业类型
        allPracticeType: [
          {id: 1, name: '咨询工程师'},
          {id: 2, name: '造价工程师'},
          {id: 3, name: '水利造价工程师'},
          {id: 4, name: '造价员'},
          {id: 5, name: '监理工程师'},
          {id: 6, name: '安全监理工程师'},
          {id: 7, name: '专职安全监理员'},
          {id: 8, name: '专业监理工程师'},
          {id: 9, name: '监理员'},
          {id: 10, name: '招标师'},
          {id: 11, name: '招标专职人员证'},
          {id: 12, name: '招标采购专职从业人员证'},
          {id: 13, name: '一级建造师'},
          {id: 14, name: '二级建造师'},
          {id: 15, name: '水利交易员证'},
          {id: 16, name: '中级注册安全工程师'},
        ],
        effectiveTime: []
      }
    },
    //生命周期函数节点
    created() {
      this.effectiveTime.splice(0, 1, this.form.startTime)
      this.effectiveTime.splice(1, 1, this.form.endTime)
    },
    //自定义函数节点
    methods: {
      submitFormData() {

        this.$refs.formRef.validate(valid => {
          console.log(valid)
          if (!valid) return
          this.$emit('getFormData', this.$myfunction.copyData(this.form))
          this.close()
        })
      },
      close() {
        this.effectiveTime = ['', '']
        this.dialogVisible = false
        this.$refs.formRef.resetFields()

        //
      },
      openDialog(data) {
        if (!this.$myfunction.isEmpty(data)) {
          this.form = this.$myfunction.copyData(data)
        }
        this.dialogVisible = true
      },
    }
  }
</script>
<style lang='less' scoped>

</style>

<template>
  <div class="content">
    <template v-if="parseInt(currentItem.projectStatusKeyId)<3">
      <el-row v-loading="loading"
              :element-loading-text="message"
              element-loading-spinner="el-icon-reading"
              element-loading-background="rgba(0, 0, 0, 0.8)"
              class="plan">
        <el-form :model="form"
                 ref="formRef"
                 :rules="formRules" label-width="75px">
          <el-form-item label="延期天数">
            {{form.postponeServiceDays>0?form.postponeServiceDays+'天':'暂无延期'}}
          </el-form-item>
          <rea-divider position="left" title="工作延期原因"></rea-divider>
          <rea-textarea v-model="form.postponeServiceDesc" max-height="20" min-height="20"></rea-textarea>
        </el-form>
        <el-button v-if="!isBtn()" style="width: 100%; margin-top: 10px" type="primary" size="mini"
                   @click="submitFormData">
          <span style="margin-right: 100px">提</span><span>交</span>
        </el-button>
      </el-row>
      <el-button v-if="isBtn()"
                 style="width: 100%; margin-top: 10px" type="primary" size="mini" @click="submitFormData">
        <span style="margin-right: 100px">提</span><span>交</span>
      </el-button>
    </template>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {},
    props: {},
    watch: {
      currWorkPlan(newValue) {
        this.init()
      },
      'form.postponeServiceDays': function (newValue) {
        if (parseInt(this.currentItem.projectStatusKeyId) >= 2) {
          this.loading = true
          this.message = this.projectStatus.list.find(item => {
            return this.currentItem.projectStatusKeyId === item.staticsCode
          }).listname
        }else if (newValue <= 0) {
          this.loading = true
          this.message = '剩余' + Math.abs(newValue) + '天'
        } else {
          this.loading = false
        }
      },
      'currentItem.projectStatusKeyId': function (newValue) {
        if (parseInt(newValue) >= 2) {
          this.loading = true
          this.message = this.projectStatus.list.find(item => {
            return this.currentItem.projectStatusKeyId === item.staticsCode
          }).listname
        }
      },
    },
    computed: {
      ...mapState('workbench/cStage', {
        currWorkPlan: 'currWorkPlan',
        currentItem: 'currentItem'
      }),
      ...mapState('loadType', {
        projectStatus: 'projectStatus'
      })
    },
    //数据节点
    data() {
      return {
        loading: true,
        message: '',
        formRules: {},
        form: {
          postponeServiceDays: '',
          postponeServiceDesc: '',
        },
      }
    },
    //生命周期函数节点
    created() {
    },
    mounted(){
      this.init()
    },
    //自定义函数节点
    methods: {
      ...mapActions('workbench/cStage', {
        networkGetCurrWorkPlan: 'networkGetCurrWorkPlan',
        networkUpCurrWorkPlan: 'networkUpCurrWorkPlan',
        networkUpItem: 'networkUpItem'
      }),
      init(){
        if (parseInt(this.currentItem.projectStatusKeyId) >= 2) {
          this.loading = true
          this.getSelectByCode('066').then(item=>{
            let ref=item.find(item => {
              return this.currentItem.projectStatusKeyId === item.staticsCode
            })
            if (ref) {
              this.message=ref.listname
            }
          })
        }else if (!this.$myfunction.isEmpty(this.currentItem.projectPlanKeyid)) {
          const end = new Date().getTime()
          const curr = new Date(this.currWorkPlan.enddateTime).getTime()
          let leftTime = parseInt((end - curr) / 1000)
          this.form.postponeServiceDays = parseInt(leftTime / (24 * 60 * 60));
        } else {
          this.message = '无项目计划'
        }
      },
      isBtn(){
        if (parseInt(this.currentItem.projectStatusKeyId) < 2
            && !this.$myfunction.isEmpty(this.currWorkPlan)
            && this.form.postponeServiceDays <= 0) {
          return true
        }else {
          return false
        }
      },
      submitFormData() {
        if (parseInt(this.form.postponeServiceDays)<=0) {
          this.this.form.postponeServiceDays=0
          this.this.form.postponeServiceDesc='无延期'
        }
        this.ddform('v_2020_ywgl_gczj_xmwcsb',{
          c:{code:this.currentItem.contractCode,name:this.currentItem.contractName},
          i:{code:this.currentItem.projectCode,name:this.currentItem.projectName},
          muitList:[{name:'工作延期原因',value:this.form.postponeServiceDesc}],
          numList:[{name:'延期天数',value:this.form.postponeServiceDays}]
        }).then(flowId=>{
          let ref = this.$myfunction.copyData(this.currWorkPlan)
          Object.assign(ref, this.form)
          this.networkUpCurrWorkPlan(ref).then(() => {
            let ref = this.currentItem
            ref.allstatecode = '2'
            this.networkUpItem(ref)
          })
          this.ddflow(3,1,{
            baseId:item.keyid,
            baseUrl:'/pro/cmbaseproject',
            baseColumn:'projectStatusKeyId',
            flowId:flowId,
            fType:'项目完成申报'
          })
        })

        this.resetForm()
      },
      resetForm() {
        this.form = this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>
  .content {
  }
</style>

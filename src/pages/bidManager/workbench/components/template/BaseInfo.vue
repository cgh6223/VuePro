<template>
  <div class="body">
    <el-row>
      <el-col :span="16" :offset="4">
        <div style="height: 7rem">
          <el-form :model="form" ref="formRef" :rules="formRules" label-width="150px">
            <el-row v-if="!readonly">
              <el-col :span="12">
                <el-form-item label="投标形式" prop="">
                  <rea-select v-model="form.formtenderkeyid" :data="bidModality"
                              @getLabel="item=>{form.formtendername=item}"></rea-select>
                </el-form-item>
                <el-form-item label="投标主体" prop="">
                  <rea-cascader v-model="form.tendererkeyid" :data="bidPart"
                                @getLabel="item=>{form.tenderername=item}"></rea-cascader>
                </el-form-item>
                <el-form-item label="是否需要缴纳保证金" prop="">
                  <com-truefalse v-model="form.istenderbond"></com-truefalse>
                </el-form-item>
                <template v-if="form.istenderbond">
                  <el-form-item label="保证金" prop="">
                    <el-input v-model="form.tenderbondsum"></el-input>
                  </el-form-item>
                  <el-form-item label="缴纳时间" prop="">
                    <rea-datescope v-model="form.tbbegindateTime"></rea-datescope>
                  </el-form-item>
                </template>
              </el-col>
              <el-col :span="12">
                <el-form-item label="保证金缴纳时间">
                  {{form.bondpaydateTime}}
                </el-form-item>
                <el-form-item label="保证金缴纳回执单">
                  {{form.bondpayfile}}
                </el-form-item>
                <el-form-item label="保证金退回时间">
                  {{form.bondbackdateTime}}
                </el-form-item>
                <el-form-item label="保证金退回回执单">
                  {{form.bondbackfile}}
                </el-form-item>
              </el-col>
            </el-row>
            <el-row v-if="readonly">
              <el-col :span="12">
                <el-form-item label="投标形式" prop="">
                  {{form.formtendername}}
                </el-form-item>
                <el-form-item label="投标主体" prop="">
                  {{form.tenderername}}
                </el-form-item>
                <el-form-item label="是否需要缴纳保证金" prop="">
                  {{form.istenderbond?'是':!form.istenderbond?'否':''}}
                </el-form-item>
                <template v-if="form.istenderbond">
                  <el-form-item label="保证金" prop="">
                    <el-col :span="8">
                      {{form.tenderbondsum}}
                    </el-col>
                    <el-col :span="8">
                      <el-button type="text">缴纳申请</el-button>
                    </el-col>
                    <el-col :span="8">
                      <status-button title="审核中"></status-button>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="缴纳时间" prop="">
                    {{form.tbbegindateTime}}
                  </el-form-item>
                </template>
              </el-col>
              <el-col :span="12">
                <el-form-item label="保证金缴纳时间">
                  {{form.bondpaydateTime}}
                </el-form-item>
                <el-form-item label="保证金缴纳回执单">
                  {{form.bondpayfile}}
                </el-form-item>
                <el-form-item label="保证金退回时间">
                  {{form.bondbackdateTime}}
                </el-form-item>
                <el-form-item label="保证金退回回执单">
                  {{form.bondbackfile}}
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <primary-button v-if="!readonly" width="100%" letter-spacing="100px" title="保存"
                        @click="submitForm"></primary-button>
        <primary-button v-if="readonly" width="100%" letter-spacing="100px" title="编辑"
                        @click="readonly=false"></primary-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import {getBidRecordByKeyid, addBidRecord, upBidRecord} from '../../../../../api/webapi-bidRecord.js'
  import {mapState, mapActions,mapMutations} from 'vuex'

  export default {
    components: {},
    props: {},
    //生命周期函数节点
    created() {
      this.networkGetCascaderByCode('TYPE-042').then(item => {
        this.bidPart = item
      })
      this.networkGetSelectByCode('TYPE-041').then(item => {

        this.bidModality = item
      })
    },
    mounted() {
      this.form = this.$myfunction.copyData(this.item)
    },
    watch: {
      'form.istenderbond': function (newValue) {
        if (newValue === false) {
          this.form.tenderbondsum = ''
          this.form.tbbegindateTime = ''
        }
      }
    },
    computed: {
      ...mapState('bidManager', {
        item: 'item'
      })
    },
    //数据节点
    data() {
      return {
        readonly: true,
        form: {
          formtenderkeyid: '',
          tendererkeyid: '',
          formtendername: '',
          tenderername: '',
          istenderbond: '',
          tenderbondsum: '',
          tbbegindateTime: '',
        },
        formRules: {},
        bidModality: [],
        bidPart: [],
      }
    },

    //自定义函数节点
    methods: {
      ...mapActions('loadType', {
        networkGetSelectByCode: 'networkGetSelectByCode',
        networkGetCascaderByCode: 'networkGetCascaderByCode',
      }),
        ...mapMutations('bidManager',{
          updateItem:'updateItem'
        }),
      networkGetDataByItemId() {
        getBidRecordByKeyid({keyid: this.item.keyid}).then(item => {
          this.form = item.data[0]
          this.updateItem(this.$myfunction.copyData(item.data[0]))
        })
      },
      submitForm() {
        upBidRecord(this.form).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataByItemId()
          }
          this.readonly = true
        })
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

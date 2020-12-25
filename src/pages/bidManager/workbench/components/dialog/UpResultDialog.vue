<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogVisible" :width="width"
               @close="dialogClose">
      <el-form :model="form" ref="formRef" :rules="formRules" label-width="150px">
        <el-form-item label="是否中标" prop="isBid">
         <com-truefalse v-model="form.iswinbidding"></com-truefalse>
        </el-form-item>
        <template v-if="form.iswinbidding">
          <el-form-item label="中标通知书" prop="winbiddingfile">
            <upload-button v-model="form.winbiddingfile" module-type="tb" :base-id="item.keyid" file-name="中标通知书"></upload-button>
          </el-form-item>
          <el-form-item label="中标价" prop="">
            <el-input v-model="form.winbiddingsum"></el-input>
          </el-form-item>
        </template>
        <template v-if="form.iswinbidding===false">
          <rea-divider title="其他单位中标情况"></rea-divider>
          <bid-template v-model="form.winbidlist" :filter-keyid="form.keyid"></bid-template>
          <rea-divider></rea-divider>
        </template>
        <el-form-item label="中标结果截图" prop="">
          <upload-button v-model="form.bidopeningimagefile" module-type="tb" :base-id="item.keyid" file-name="中标结果截图"></upload-button>
        </el-form-item>
      </el-form>
      <dialog-button reset-btn="false" ok-btn="确 定"
                     @okBtn="submitForm" @cancelBtn="dialogClose"></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import BidTemplate from '../acomponents/BidTemplate.vue'
  import {mapState} from  'vuex'
  export default {
    components: {
      BidTemplate,
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
      ...mapState('bidManager',{
        item:'item'
      })
    },
    //数据节点
    data() {
      return {
        index:1,
        dialogVisible: false,
        form:{
          iswinbidding:'',
          winbiddingfile:'',
          winbiddingsum:'',
          winbidlist:[],
          bidopeningimagefile:'',
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

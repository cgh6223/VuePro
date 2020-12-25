<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :width="width"
      @close="dialogClose"
    >
      <el-form
        :model="form"
        ref="formRef"
        :rules="formRules"
        label-width="110px"
      >
        <el-form-item label="资料名称" prop="documentName">
          <el-input v-model="form.documentName" clearable></el-input>
        </el-form-item>
        <el-form-item label="盖章申请说明" prop="contentDesc">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 8 }"
            v-model="form.contentDesc"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="审核附件">
          <el-button type="text" @click="attachUp">附件上传</el-button>
        </el-form-item>
        <!-- <el-form-item label="审核附件1">
          <el-button type="text" @click="attachUpByImg">附件上传123</el-button>
        </el-form-item> -->
      </el-form>
      <!-- <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">关 闭</el-button>
      <el-button @click="$emit('submitFormData')">提 交</el-button>
    </div> -->
      <dialog-button
        reset-btn="false"
        ok-btn="提 交"
        @okBtn="submitFormData"
        @cancelBtn="dialogClose"
      ></dialog-button>
    </el-dialog>
  </div>
</template>
<script>
// import __ from '__' // __是需要手动引入的文件
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {},
  props: {
    title: "",
    width: {
      type: String,
      default: "50%"
    }
  },
  watch: {},
  //数据节点
  data() {
    return {
      dialogVisible: false,
      form: {
        documentName: "",
        contentDesc: "",
        documentFilePath_value: []
      },
      formRules: {}
    };
  },
  //生命周期函数节点
  created() {
    //console.log(this.signs);
  },
  mounted() {
    //console.log(this.currentUser);
  },
  computed: {
    ...mapGetters({
      attachpath: "flowManager/attachmentUploadStr"     
    })
  },
  //自定义函数节点
  methods: {
    ...mapActions({
      GetAttachment: "flowManager/networkGetAttachment"
     
    }),

    openDialog() {
      this.dialogVisible = true;
    },
    dialogClose() {
      this.dialogVisible = false;
      this.$refs.formRef.resetFields();
    },
    attachUp() {
     
      
      this.GetAttachment();
      // setTimeout(() => {
      //   console.log(this.attachpath.data);
      // }, 1000);
    },
    attachUpByImg() {
      //this.$flow.attachmentByImg();
    },
    checkValid() {
      if (this.form.documentName == "") {
        this.$message.info("文件名称不能为空");
        return false;
      }
      if (this.form.contentDesc == "") {
        this.$message.info("文件描述不能为空");
        return false;
      }
      let attpath = this.attachpath;
     
      let keys = Object.keys(attpath);
      if (keys.length == 0) {
        this.$message.info("附件不能为空");
        return false;
      }
      return true;
    },
    submitFormData() {
      if (this.checkValid()) {
        this.form.documentFilePath_value =this.attachpath.data;
        this.$emit("getFormData", this.$myfunction.copyData(this.form));
        this.dialogClose();
      }
    }
  }
};
</script>
<style lang='less' scoped>
</style>

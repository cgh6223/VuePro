<template>
  <el-dialog
    :visible.sync="isVisible"
    title="高级查询"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    @close="closeDialog"
  >
    <div class="form">
      <el-form
        ref="form"
        :model="form"
        :label-width="dialog.formLabelWidth"
        style="margin:10px;width:auto;"
      >
        <!-- <el-form-item prop="incomePayType" label="收支类型:"> :rules="form_rules"
          <el-select v-model="form.incomePayType" placeholder="收支类型">
            <el-option
              v-for="item in payType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>-->

        <el-form-item prop="username" label="用户名:">
          <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>

        <!-- <el-form-item prop="address" label="籍贯:">
          <el-cascader
            v-model="form.address"
            placeholder="请选择地区"
            :props="{ expandTrigger: 'hover'}"
            :options="areaData"
            @change="handleChange"
            ref="cascaderAddr"
          ></el-cascader>
        </el-form-item>-->

        <el-form-item prop="address" label="单位地址:">
          <el-input v-model.number="form.address"></el-input>
        </el-form-item>

        <el-form-item prop="corpType" label="单位性质:">
          <el-select v-model="form.corpType" placeholder="单位性质">
            <el-option
              v-for="item in payType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否一般纳税人:">
          <el-radio-group v-model="form.IstaxPayer">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="phoneNum" label="通讯电话:">
          <el-input v-model.number="form.phoneNum"></el-input>
        </el-form-item>

        <el-form-item class="text_right">
          <el-button @click="isVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit()">提 交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "searchDialogs",
  data() {
    return {
      isVisible: this.isShow,
      form: {
        address: "",
        username: "",
        corpType: "",
        IstaxPayer: "",
        phoneNum: ""
      },
      payType: [
        { label: "国企", value: "国企" },
        { label: "事业单位", value: "事业单位" },
        { label: "企业", value: "企业" },
        { label: "高校", value: "高校" },
        { label: "医院", value: "医院" },
        { label: "银行", value: "银行" },
        { label: "金融机构", value: "金融机构" }
      ],
      //详情弹框信息
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      }
    };
  },
  props: {
    isShow: Boolean
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    //表单提交
    onSubmit() {
      let filters = { filter: this.form };
      this.$emit("searchSubmit", filters);
    }
  }
};
</script>

<style lang="less" scoped>
.search_container {
  margin-bottom: 20px;
}
.btnRight {
  float: right;
  margin-right: 0px !important;
}
.searchArea {
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  padding: 18px 18px 0;
}
</style>

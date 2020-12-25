<template>
  <el-dialog
    :visible.sync="isVisible"
    :title="form.id==''?'添加':'修改'"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    @close="closeDialog"
  >
    <div class="form">
      <el-form ref="form" :model="form" label-width="120px" style="margin:10px;width:auto;">
        <el-form-item prop="positionName" label="岗位名称:">
          <el-input type="text" v-model="form.positionName"></el-input>
        </el-form-item>
        <el-form-item prop="rankLevel" label="岗位等级:">
          <el-select v-model="form.rankLevel" placeholder="岗位等级">
            <el-option
              v-for="item in levels"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="belongOrg" label="所属组织:">
          <el-select v-model="form.belongOrg" placeholder="所属组织">
            <el-option
              v-for="item in orgs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="belongDept" label="所属部门:">
          <el-select v-model="form.belongDept" placeholder="所属部门">
            <el-option
              v-for="item in depts"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item class="text_right"></el-form-item>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit()">提 交</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "testDialog",
  data() {
    return {
      isVisible: this.isShow,
      form: {
        id: "",
        belongOrg: "",
        positionName: "",
        rankLevel: "",
        belongDept: ""
      },
      levels: [
        { label: "一级", value: "一级" },
        { label: "二级", value: "二级" },
        { label: "三级", value: "三级" },
        { label: "四级", value: "四级" }
      ],
      orgs: [
        { label: "总经办", value: "总经办" },
        { label: "经营管理中心", value: "经营管理中心" },
        { label: "造价中心", value: "造价中心" },
        { label: "招标中心", value: "招标中心" },
        { label: "监理中心", value: "监理中心" },
        { label: "咨询中心", value: "咨询中心" },
        { label: "财务部", value: "财务部" }
      ],
      depts: [
        { label: "总经办", value: "总经办" },
        { label: "经营管理中心", value: "经营管理中心" },
        { label: "造价中心", value: "造价中心" },
        { label: "招标中心", value: "招标中心" },
        { label: "监理中心", value: "监理中心" },
        { label: "咨询中心", value: "咨询中心" },
        { label: "财务部", value: "财务部" },
        { label: "毕节办事处", value: "毕节办事处" },
        { label: "陕西分公司", value: "陕西分公司" },
        { label: "河南分公司", value: "河南分公司" },
        { label: "日喀则分公司", value: "日喀则分公司" },
        { label: "广西分公司", value: "广西分公司" },
        { label: "招标贵阳部一部", value: "招标贵阳部一部" },
        { label: "云南分公司", value: "云南分公司" },
        { label: "新浦分公司", value: "新浦分公司" },
        { label: "陈晓辉项目团队", value: "陈晓辉项目团队" },
        { label: "袁秀项目团队", value: "袁秀项目团队" },
        { label: "海鹰项目团队", value: "海鹰项目团队" }
      ],
      dialog: {
        width: "400px",
        formLabelWidth: "120px"
      }
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    init(val){
        this.form=val;
    },
    //表单提交
    onSubmit() {
      let obj = JSON.parse(JSON.stringify(this.form));

      this.$emit("addSubmit", obj);
    }
  }
};
</script>
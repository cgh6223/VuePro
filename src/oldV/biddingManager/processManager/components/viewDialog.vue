<template>
  <el-dialog
    :visible.sync="isVisible"
    title="查看"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :modal-append-to-body="false"
    @close="closeDialog"
  >
    <el-form
      ref="viewform"
      :model="viewform"
      :label-width="dialog.formLabelWidth"
      class="myForm el-scrollbar"
    >
      <div v-show="viewform.tenderType!='报价函形式'">
        <el-form-item prop="mainBody" label="投标主体:">
          <el-select v-model="viewform.mainBody" placeholder="请选择">
            <el-option
              v-for="item in mainBody"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="scopes" label="业务类型:">
          <el-select v-model="viewform.scopes" placeholder="请选择">
            <el-option
              v-for="item in scopes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="tenderType" label="投标形式:">
          <el-select v-model="viewform.tenderType" placeholder="请选择">
            <el-option
              v-for="item in tenderType"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-divider style="color:#409EFF">基本信息</el-divider>
        <el-form-item label="是否需要答辩:">
          <el-radio-group v-model="viewform.isAnswer">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否进交易中心:">
          <el-radio-group v-model="viewform.IsTrading">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="交易中心名称:">
          <el-input type="text" v-model="viewform.tradingCenter"></el-input>
        </el-form-item>
        <el-form-item label="投标截止时间:">
          <el-input type="text" v-model="viewform.endTime"></el-input>
        </el-form-item>
        <el-form-item label="开标时间:">
          <el-input type="text" v-model="viewform.tenderOpenTime"></el-input>
        </el-form-item>
        <el-form-item prop="inviteMan" label="招标人:">
          <el-input type="text" v-model="viewform.businessOwner"></el-input>
        </el-form-item>
        <el-form-item prop="inviteManContact" label="招标人联系人:">
          <el-input type="text" v-model="viewform.businessOwner"></el-input>
        </el-form-item>
        <el-form-item prop="agency" label="招标代理机构:">
          <el-input type="text" v-model="viewform.businessOwner"></el-input>
        </el-form-item>
        <el-form-item prop="businessOwner" label="项目业主:">
          <el-input type="text" v-model="viewform.businessOwner"></el-input>
        </el-form-item>
        <el-form-item prop="isTender" label="获取文件阶段是否完成:">
          <el-switch
            v-model="viewform.step1"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeStatus($event,1)"
          ></el-switch>
        </el-form-item>
        <el-divider style="color:#409EFF">获取文件</el-divider>
        <el-form-item label="投标报价:">
          <el-input type="text" v-model="viewform.quotePrice"></el-input>
        </el-form-item>
        <el-form-item prop="securityPrice" label="投标保证金金额:">
          <el-input type="text" v-model="viewform.securityPrice"></el-input>
        </el-form-item>
        <el-form-item prop="securityTime" label="投标保证金缴纳截止时间:">
          <el-input type="text" v-model="viewform.securityTime"></el-input>
        </el-form-item>
        <el-form-item prop="pushTime" label="投标保证金递交时间:">
          <el-input type="text" v-model="viewform.pushTime"></el-input>
        </el-form-item>
        <el-form-item prop="isTender" label="文件制作阶段是否完成:">
          <el-switch
            v-model="viewform.step2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeStatus($event,2)"
          ></el-switch>
        </el-form-item>
        <el-divider style="color:#409EFF">文件制作</el-divider>

        <el-form-item prop="tenderOpenTime" label="最终开标时间:">
          <el-input type="text" v-model="viewform.tenderOpenTime"></el-input>
        </el-form-item>
        <el-form-item prop="isTender" label="开标评标阶段是否完成:">
          <el-switch
            v-model="viewform.step3"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeStatus($event,3)"
          ></el-switch>
        </el-form-item>
        <el-divider style="color:#409EFF">开标评标</el-divider>
        <el-form-item prop="tenderOpenTime" label="是否中标:">
          <el-radio-group v-model="viewform.IsTrading">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="开标结果:">
          <el-table
            :data="viewform.handleForm"
            style="width: 100%;font-size:9px;"
            align="center"
            :fit="true"
            highlight-current-row
            :header-cell-style="{fontSize:'14px'}"
          >
            <el-table-column prop="companyName" label="参与单位" align="center"></el-table-column>
            <el-table-column prop="result" label="开标结果" align="center"></el-table-column>
          </el-table>
        </el-form-item>

        <el-form-item prop="status" label="结果跟踪阶段是否完成:">
          <el-switch
            v-model="viewform.step4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeStatus($event,4)"
          ></el-switch>
        </el-form-item>
        <el-divider style="color:#409EFF">结果跟踪</el-divider>
        <el-form-item prop="tenderOpenTime" label="是否中标:">
          <el-radio-group v-model="viewform.IsTrading">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="status" label="后期工作阶段是否完成:">
          <el-switch
            v-model="viewform.step5"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeStatus($event,5)"
          ></el-switch>
        </el-form-item>
        <el-divider style="color:#409EFF">后期工作</el-divider>
      </div>
      <div v-show="viewform.tenderType=='报价函形式'">
        <el-form-item prop="quoteLetter" label="报价函制作:">
          <el-input type="text" v-model="viewform.quoteLetter"></el-input>
        </el-form-item>
        <el-form-item prop="quoteLetterTime" label="报价函递交时间:">
          <el-input type="text" v-model="viewform.quoteLetterTime"></el-input>
        </el-form-item>
        <el-form-item prop="status" label="报价函制作阶段是否完成:">
          <el-switch
            v-model="viewform.stepbj1"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeStatusBj($event,1)"
          ></el-switch>
        </el-form-item>
        <el-divider style="color:#409EFF">报价函制作</el-divider>
        <el-form-item prop="tenderOpenTime" label="是否中标:">
          <el-radio-group v-model="viewform.IsTrading">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="status" label="结果跟踪阶段是否完成:">
          <el-switch
            v-model="viewform.stepbj2"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="是"
            inactive-text="否"
            @change="changeStatusBj($event,2)"
          ></el-switch>
        </el-form-item>
        <el-divider style="color:#409EFF">结果跟踪</el-divider>
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isVisible = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit()">提 交</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "viewDialog",
  data() {
    return {
      isVisible: this.isShow,
      dialog: {
        width: "400px",
        formLabelWidth: "160px"
      },
      tableHeight: "98%",
      mainBody: [
        { label: "经营部", value: "经营部" },
        { label: "遵义分公司", value: "遵义分公司" },
        { label: "都匀分公司", value: "都匀分公司" },
        { label: "毕节分公司", value: "毕节分公司" },
        { label: "六盘水分公司", value: "六盘水分公司" },
        { label: "铜仁分公司", value: "铜仁分公司" }
      ],
      scopes: [
        { label: "工程咨询", value: "工程咨询" },
        { label: "工程造价", value: "工程造价" },
        { label: "招标代理", value: "招标代理" },
        { label: "工程监理", value: "工程监理" },
        { label: "全过程工程咨询", value: "全过程工程咨询" }
      ],
      visitClass: [
        { label: "项目回访", value: "项目回访" },
        { label: "非项目回访", value: "非项目回访" }
      ],
      tenderType: [
        { label: "报价函形式", value: "报价函形式" },
        { label: "招标形式", value: "招标形式" },
        { label: "比选形式", value: "比选形式" }
      ],
      viewform: {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        stepbj1: false,
        stepbj2: false,
        handleForm: [
          { companyName: "弘典建设咨询有限公司", result: "中标" },
          { companyName: "测试公司1", result: "未中标" },
          { companyName: "测试公司2", result: "未中标" },
          { companyName: "测试公司3", result: "未中标" }
        ]
      }
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    mydata: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  created() {
    this.viewform = Object.assign({}, this.viewform, this.mydata);
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    //表单提交
    onSubmit() {
      let obj = Object.assign({}, this.viewform);
      let filters = { page: 1, limit: 20, filter: obj };
      this.isVisible = false;
      this.$emit("viewSubmit", obj);
    },
    changeStatus(events, index) {
      if (events) {
        for (let i = index - 1; i > 0; i--) {
          this.viewform["step" + i] = events;
        }
        this.viewform.status = index;
      } else {
        for (let i = index; i <= 5; i++) {
          this.viewform["step" + i] = events;
        }
        this.viewform.status = index == 1 ? 1 : index - 1;
      }
    },
    changeStatusBj(events, index) {
      if (events) {
        for (let i = index - 1; i > 0; i--) {
          this.viewform["stepbj" + i] = events;
        }
        this.viewform.status = index;
      } else {
        for (let i = index; i <= 2; i++) {
          this.viewform["stepbj" + i] = events;
        }
        this.viewform.status = index == 1 ? 1 : index - 1;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.myForm {
  margin: 10px;
  width: auto;
  overflow: auto;
  height: 400px;
}
</style>
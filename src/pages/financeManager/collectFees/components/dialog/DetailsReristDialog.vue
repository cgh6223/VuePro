<template>
  <el-dialog :visible.sync="dialogVisible" width="40%" :title="title1">
    <el-form :model="form" ref="formRef" :rules="formRules" label-width="90px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="实际收款金额"> </el-form-item>
          <el-form-item label="收款金额">
            <el-input v-model="form.collMoney"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="已登记金额"> </el-form-item>
          <el-form-item label="收款类型">
            <!-- <rea-select v-model="form.collType" :data="collTypeOptions">

						</rea-select> -->
            <el-select v-model="form.collType">
              <el-option
                v-for="item in collTypeOptions"
                :key="item.id"
                :value="item.id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <template v-if="form.collType == 1 || form.collType == 3">
        <el-row>
          <el-col :span="12">
            <el-form-item label="合同编号">
              <el-form-item label="合同编号" prop="contractCode">
                <rea-query-input
                  v-model="form.contractId"
                  url="agr/busicontractbase/findall"
                  filter-key="contractCode"
                  @getObject="
                    item => {
                      //form.agreementkeyid = item.keyid;
                       form.contractItem=item;
                      form.contract_name=item.contractName;
                      form.contractId = item.contractCode;
                    }
                  "
                ></rea-query-input>
              </el-form-item>
              <!-- <el-select v-model="form.contractNum">
								<el-option label="001" value="003"></el-option>
							</el-select> -->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="合同名称">
              <el-input v-model="form.contract_name" readonly></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-form-item>
              <!-- <span slot="label"
                ><i class="el-icon-circle-plus-outline" @click="num++"></i
                >项目:</span
              > -->
            </el-form-item>
          </el-col>
        </el-row>

       <!-- <template v-for="i in num">-->
          <el-row>
            <el-col :span="12">
              <el-form-item label="项目编号">
                <rea-query-input
                  v-model="form.projectId"
                  url="pro/cmbaseproject/findall"
                  filter-key="projectCode"
                  :filter-obj="form.contractItem"
                  @getObject="
                    item => {
                      form.project_name = item.projectName;
                     // form.projectMajorCode = item.projectMajorCode;
                    }
                  "
                ></rea-query-input>
                <!-- <el-select v-model="form.projectNum" multiple>
									<el-option label="001" value="001"></el-option>
								</el-select> -->
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目名称">
                <el-input v-model="form.project_name" readonly></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        <!--</template>-->
      </template>
      <template
        v-if="form.collType == 4 || form.collType == 7 || form.collType == 8"
      >
        <el-form-item label="所属组织">
          <!-- <el-select
            v-model="form.organization"
            placeholder="请选择"
          ></el-select> -->
          <el-cascader                    
                      v-model="form.orgIdsss"
                      :props="optionProps"
                      :options="orgTree"                    
                    ></el-cascader>
        </el-form-item>
      </template>
      <template v-if="form.collType == 5">
        <!-- <el-form-item label="收取方式">
					<el-select v-model="form.payType" >
						<el-option value="1" label="总公司"></el-option>
						<el-option value="2" label="总公司代缴纳"></el-option>
					</el-select>
				</el-form-item> -->
        <el-form-item label="类型">
          <el-select v-model="form.riskType">
            <el-option value="项目" label="项目"></el-option>
            <el-option value="非项目" label="非项目"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="合同编号">
              <rea-query-input
                  v-model="form.contractId"
                  url="agr/busicontractbase/findall"
                  filter-key="contractCode"
                  @getObject="
                    item => {
                      //form.agreementkeyid = item.keyid;
                      form.contractItem=item;
                      form.contract_name=item.contractName;
                      form.contractId = item.contractCode;
                    }
                  "
                ></rea-query-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="合同名称">
              <el-input v-model="form.contract_name" readonly></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </template>
      <template v-if="form.collType == 6">
        <el-form-item label="项目名称">
         <el-row>
            <el-col :span="12">
              <el-form-item label="项目编号">
                <rea-query-input
                  v-model="form.projectId"
                  url="pro/cmbaseproject/findall"
                  filter-key="projectCode"
                  :filter-obj="form.contractItem"
                  @getObject="
                    item => {
                      form.project_name = item.projectName;                     
                    }
                  "
                ></rea-query-input>              
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目名称">
                <el-input v-model="form.project_name" readonly></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
      </template>
    </el-form>

    <dialog-button
      :resetBtn="{ show: false }"
      okBtn="确 定"
      @okBtn="submitFormData"
      @cancelBtn="dialogClose"
    ></dialog-button>
  </el-dialog>
</template>

<script>
import DialogButton from "../../../acomponents/DialogButton.vue";
import Station from "../../../acomponents/Station.vue";
import {mapState,mapActions} from "vuex";
export default {
  components: {
    DialogButton,
    Station
  },
  props: {
    title: {
      type: String,
      dealt: ""
    }
  },
  watch: {
    title(newValue) {
      this.title = newValue;
    }
  },
  computed:{
    ...mapState({
      orgTree: state => state.loadType.organizeList//state.orgAndPost.orgTree
    })
  },
  mounted() {
    console.log(this.orgTree);
  },
  data: function() {
    return {
       optionProps: {
        value: "keyid",
        label: "label",
        children: "children"
      },
      //父窗口传递的弹窗标题
      title1: this.title,
      //弹窗显示控制
      dialogVisible: false,
      num: 1,

      //收费类型
      collTypeOptions: [
        //服务费、中标服务费、文件费、管理费、风险（履约）保证金、投标保证金、其他往来款、其他收款
        { id: 1, name: "服务费" },
        { id: 3, name: "文件费" },
        { id: 4, name: "管理费" },
        { id: 5, name: "风险（履约）保证金" },
        { id: 6, name: "投标保证金" },
        { id: 7, name: "其他往来款" },
        { id: 8, name: "其他收款" }
      ],

      //表单对象
      form: {
        contractItem:{},
        contractId:'',
        // sumlist: "",
        // pkeyid:'',
        // collType: {},
        // sumtype:'',
        // agreementkeyid: "",
        // agreementname: "",
        // projectkeyid: "",
        // projectname: "",
        // orgkeyid: "",
        // orgname:"",
        // payType: "",
        // bondType: "",
        // type: "",
        // contractCodes: { contractCode: "" }
      },
      //表单验证规则
      formRules: {}
    };
  },

  methods: {
   
    //设置弹窗显示
    openDialog() {
      this.dialogVisible = true;
    },
    dialogClose() {
      this.dialogVisible = false;
      this.resetForm();
    },
    submitFormData() {
      this.$emit("getFormData", this.$myfunction.copyData(this.form));
      this.dialogClose();
    },
    resetForm() {
      this.$refs.formRef.resetFields();
    }
  }
};
</script>

<style scoped>
</style>

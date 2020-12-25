<template>
  <div class="logContainer">
    <div class="search_container searchArea">
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogFormVisible = true"
        >添 加</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogsearchVisible = true"
        >高级查询</el-button
      >
      <el-button
        class="btn_color"
        size="mini"
        icon="view"
        @click="dialogEXCELVisible = true"
        >导出EXCEL</el-button
      >
    </div>

    <el-table
      :data="mydata"
      style="width: 100%;font-size:10px;"
      align="center"
      :fit="true"
      :height="300"
      highlight-current-row
      :header-cell-style="{ fontSize: '14px' }"
    >
      <el-table-column prop="name" label="活动名称" width="100">
      </el-table-column>
      <el-table-column prop="type" label="活动类型" width="100">
      </el-table-column>
      <el-table-column prop="mname" label="主办方名称" width="100">
      </el-table-column>
      <el-table-column prop="ht" label="是否有签订相关合同" width="200">
      </el-table-column>
      <el-table-column prop="jx" label="是否有奖项" width="130">
      </el-table-column>
      <el-table-column prop="bdate" label="活动举办时间" width="120">
      </el-table-column>
      <el-table-column prop="tlong" label="活动持续时间" width="120">
      </el-table-column>
      <el-table-column prop="address" label="活动举办地点" width="120">
      </el-table-column>
      <el-table-column prop="person" label="公司活动负责人" width="120">
      </el-table-column>
      <el-table-column prop="xperson" label="协助人员" width="100">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="100">
        <template slot-scope>
          <el-button size="small" type="text" @click="dialogeditVisible = true"
            >编辑</el-button
          >
          <el-button size="small" type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :pageTotal="pageTotals"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    ></pagination>

    <el-dialog title="增加活动" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select placeholder="请选择活动">
            <el-option label="年会活动" value="年会活动"></el-option>
            <el-option label="旅游活动" value="旅游活动"></el-option>
            <el-option label="拓展活动" value="拓展活动"></el-option>
            <el-option label="节日活动" value="节日活动"></el-option>
            <el-option label="协会活动" value="协会活动"></el-option>
            <el-option label="文体活动" value="文体活动"></el-option>
            <el-option label="公益活动" value="公益活动"></el-option>
            <el-option label="其他活动" value="其他活动"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog title="高级查询" :visible.sync="dialogsearchVisible">
      <el-form>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select placeholder="请选择活动">
            <el-option label="年会活动" value="年会活动"></el-option>
            <el-option label="旅游活动" value="旅游活动"></el-option>
            <el-option label="拓展活动" value="拓展活动"></el-option>
            <el-option label="节日活动" value="节日活动"></el-option>
            <el-option label="协会活动" value="协会活动"></el-option>
            <el-option label="文体活动" value="文体活动"></el-option>
            <el-option label="公益活动" value="公益活动"></el-option>
            <el-option label="其他活动" value="其他活动"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主办方名称" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-checkbox label="是否有签订相关合同" name="type"></el-checkbox>
        <el-checkbox label="是否有奖项" name="type"></el-checkbox>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogsearchVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogsearchVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>

    <el-dialog title="导出表格" :visible.sync="dialogEXCELVisible">
      <el-form> </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEXCELVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogEXCELVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-dialog title="编辑" :visible.sync="dialogeditVisible">
      <el-form>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动类型" :label-width="formLabelWidth">
          <el-select placeholder="请选择活动类型">
            <el-option label="年会活动" value="年会活动"></el-option>
            <el-option label="旅游活动" value="旅游活动"></el-option>
            <el-option label="拓展活动" value="拓展活动"></el-option>
            <el-option label="节日活动" value="节日活动"></el-option>
            <el-option label="协会活动" value="协会活动"></el-option>
            <el-option label="文体活动" value="文体活动"></el-option>
            <el-option label="公益活动" value="公益活动"></el-option>
            <el-option label="其他活动" value="其他活动"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主办方名称" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox label="是否有签订相关合同" name="type"></el-checkbox>
          <el-checkbox label="是否有奖项" name="type"></el-checkbox>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="活动持续时间" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动举办地点" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="公司活动负责人">
          <el-select placeholder="请选择区域">
            <el-option label="张三" value="shanghai"></el-option>
            <el-option label="李四" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="协助人员">
          <el-select placeholder="请选择区域">
            <el-option label="张三" value="shanghai"></el-option>
            <el-option label="李四" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="附件上传">
          <el-upload class="upload-demo" action="" multiple :limit="3">
            <el-button size="small" type="primary"
              >活动相关图片资料上传</el-button
            >
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
          <el-upload class="upload-demo" action="" multiple :limit="3">
            <el-button size="small" type="primary">合同附件上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
          <el-upload class="upload-demo" action="" multiple :limit="3">
            <el-button size="small" type="primary">奖项图片</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogeditVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogeditVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import pagination from "@c/pagination/index.vue";
export default {
  name: "activitylist",
  data() {
    return {
      dialogFormVisible: false,
      dialogsearchVisible: false,
      dialogEXCELVisible: false,
      dialogeditVisible: false,
      addform: {
        name: "",
        type: []
      },
      formLabelWidth: "120px"
    };
  },
  components: {
    pagination
  },
  props: {
    mydata: {
      type: Array,
      default: () => {
        return [
          {
            name: "test",
            type: "",
            mname: "",
            ht: false,
            jx: false,
            bdate: "",
            tlong: "",
            address: "test",
            person: "",
            xperson: ""
          }
        ];
      }
    },
    pageTotals: {
      type: Number,
      default: 20
    },
    totalRows: {
      type: Array,
      default: () => {
        return [];
      }
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

.logContainer {
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
  height: 700px;
  max-height: 700px;
  overflow: hidden;
  border-radius: 6px;
  .logArea {
    overflow: auto;
    height: 100%;
  }
  .item {
    .title {
      font-size: 13px;
    }
    .time {
      color: #87de75;
    }
    .logContent {
      .logUl {
        padding-left: 30px;
        li {
          font-size: 12px;
          list-style: disc;
          line-height: 20px;
        }
      }
    }
  }
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

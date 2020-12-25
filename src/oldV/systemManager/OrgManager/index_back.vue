<template>
  <div class="text-center">
    <!-- <div v-show="menuVisible">
    		<ul id="menu" class="menu" >
    				<li class="menu__item">新增</li>
    				<li class="menu__item">重命名</li>
    				<li class="menu__item">删除</li>
    		</ul>
    </div>-->
    <vue2-org-tree
      name="test"
      :data="data[0]"
      :horizontal="horizontal"
      :collapsable="collapsable"
      :label-class-name="labelClassName"
      selectedClassName="bg-lightpink"
      :render-content="renderContent"
      @on-expand="onExpand"
      @on-node-click="onNodeClick"
    />
    <el-dialog
      title="组织架构"
      width="30%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :modal-append-to-body="false"
      :visible.sync="orgDialogShow"
    >
      <el-form
        ref="searchform"
        :model="addform"
        label-width="120px"
        style="margin:10px;width:auto;"
      >
        <el-form-item prop="orgName" label="组织名称:">
          <el-input type="text" v-model="addform.orgName"></el-input>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button @click="orgDialogShow = false">取 消</el-button>
          <el-button type="primary" @click="onSearchSubmit()">确 认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import Mock from "mockjs";
export default {
  data() {
    return {
      data: 
        [{"label":"总经办","id":"1","pid":null,"children":[{"label":"经营管理中心","id":"2","pid":null,"children":[{"label":"经营部","id":"7","pid":null,"children":[]},{"label":"行政部","id":"8","pid":null,"children":[]},{"label":"分支机构","id":"9","pid":null,"children":[]},{"label":"自营分公司","id":"10","pid":null,"children":[]}]},{"label":"造价中心","id":"3","pid":null,"children":[{"label":"造价重庆部","id":"11","pid":null,"children":[{"label":"一部","id":"15","pid":null,"children":[]},{"label":"二部","id":"16","pid":null,"children":[]},{"label":"三部","id":"17","pid":null,"children":[]}]},{"label":"造价贵阳部","id":"12","pid":null,"children":[]}]},{"label":"监理中心","id":"4","pid":null,"children":[{"label":"监理贵阳部","id":"13","pid":null,"children":[]}]},{"label":"咨询中心","id":"5","pid":null,"children":[{"label":"咨询贵阳部","id":"14","pid":null,"children":[]}]},{"label":"财务部","id":"6","pid":null,"children":[]}]}]
      ,
      horizontal: false,
      collapsable: false,
      expandAll: false,
      labelClassName: "bg-white",
      orgDialogShow: false,
      addform: {
        orgName: "",
        type: "",
        mydata: {}
      }
    };
  },
  methods: {
    addOrg(myd) {
      this.addform.type = "add";
      this.addform.mydata = myd;
      this.addform.orgName = "";
      this.orgDialogShow = true;
    },
    modifyOrg(myd) {
      this.addform.type = "modify";
      this.addform.mydata = myd;
      this.addform.orgName = myd.label;
      this.orgDialogShow = true;
    },
    delOrg(myd) {
      if (myd.children) {
        this.$message({
          message: "节点下存在子结点，不能删除",
          type: "warning"
        });
      } else {
        this.$confirm("此操作将删除该内容, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.findItem(this.data, myd.id);
        });
      }
    },
    renderContent(h, data) {
      return (
        <el-popover placement="right" trigger="click">
          <ul id="menu" class="menu">
            <li class="menu__item">
              <el-button type="text" onClick={() => this.addOrg(data)}>
                新增子结节
              </el-button>
            </li>
            <li class="menu__item">
              <el-button type="text" onClick={() => this.modifyOrg(data)}>
                重命名
              </el-button>
            </li>
            <li class="menu__item">
              <el-button type="text" onClick={() => this.delOrg(data)}>
                删 除
              </el-button>
            </li>
          </ul>
          <el-button slot="reference">{data.label}</el-button>
        </el-popover>
      );
    },
    findItem(bt, uid) {
      var _this = this;
      if (Array.isArray(bt)) {
        bt.forEach((item, index, arr) => {
          if (item.id == uid) {
            arr.splice(index, 1);
            return false;
          }
          if (item.children) {
            _this.findItem(item.children, uid);
          }
        });
      } else {
        if (bt.children) {
          console.log(bt.label);
          _this.findItem(bt.children, uid);
        } else {
          return null;
        }
      }
    },
    onSearchSubmit() {
      if (this.addform.orgName === "") {
        this.$message({
          message: "名称不能为空！！！",
          type: "warning"
        });
      } else {
        this.orgDialogShow = false;
        if (this.addform.type === "add") {
          let guid = Mock.Random.guid();
          let o = { id: guid, label: this.addform.orgName };
          if (this.addform.mydata.children) {
            this.addform.mydata.children.push(o);
          } else {
            this.$set(this.addform.mydata, "children", [o]);
          }
        } else if (this.addform.type === "modify") {
          this.$set(this.addform.mydata, "label", this.addform.orgName);
        } else {
        }
      }
    },
    onExpand(e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
    },
    onNodeClick(e, data) {
      //    console.log(e);
      //  console.log(JSON.stringify(data));
    },
    collapse(list) {
      var _this = this;
      list.forEach(function(child) {
        if (child.expand) {
          child.expand = false;
        }
        child.children && _this.collapse(child.children);
      });
    },
    expandChange() {
      this.toggleExpand(this.data, this.expandAll);
    },
    toggleExpand(data, val) {
      var _this = this;
      if (Array.isArray(data)) {
        data.forEach(function(item) {
          _this.$set(item, "expand", val);
          if (item.children) {
            _this.toggleExpand(item.children, val);
          }
        });
      } else {
        this.$set(data, "expand", val);
        if (data.children) {
          _this.toggleExpand(data.children, val);
        }
      }
    }
  }
};
</script>
<style type="text/css">
.org-tree-node-label {
  white-space: nowrap;
}
.bg-white {
  background-color: white;
}
.bg-orange {
  background-color: orange;
}
.bg-gold {
  background-color: gold;
}
.bg-gray {
  background-color: gray;
}
.bg-lightpink {
  background-color: lightpink;
}
.bg-chocolate {
  background-color: chocolate;
}
.bg-tomato {
  background-color: tomato;
}

.menu__item {
  display: block;
  line-height: 20px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
}
.menu__item:hover {
  color: rgb(86, 52, 207);
}

.menu {
  height: auto;
  width: auto;
  font-size: 14px;
  text-align: left;
  border-radius: 10px;
  border: 1px solid #c1c1c1;
  background-color: #ffffff;
}

li:hover {
  background-color: rgb(244, 244, 250);
  color: white;
}
</style>

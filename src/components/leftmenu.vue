<template>
  <el-menu default-active="1"
           class="el-menu-vertical-demo"
           :collapse="isCollapse"
           :default-openeds="[]"
           :show-timeout="200"
           background-color="#fff"
           text-color="#666"
           active-text-color="#0bb27a"
           style="{width:180px}"
           unique-opened
           router>
    <el-menu-item index="/index" class="dropItem">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <!--<el-submenu index="11">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span slot="title">我的工作台</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/HR/plat_manager">我的信息</el-menu-item>
        <el-menu-item index="11-2">我的待办</el-menu-item>
        <el-menu-item index="11-3">我的已办</el-menu-item>
        &lt;!&ndash; <el-menu-item index="9-3">角色管理</el-menu-item> &ndash;&gt;
      </el-menu-item-group>
    </el-submenu>-->

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>客户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/customer/customerManager">客户信息管理</el-menu-item>
        <el-menu-item index="/customer/upkeepManager">客户维护管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">投标管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/bid/record_manager">投标备案管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">合同管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/contract/business">业务合同管理</el-menu-item>
        <el-menu-item index="/contract/non_business">非业务合同管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span slot="title">业务管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/business/project_consult">工程咨询</el-menu-item>
        <el-menu-item index="/business/project_cost">造价咨询</el-menu-item>
				<el-menu-item index="/business/bidding_agency">招标代理</el-menu-item>
        <el-menu-item index="/business/project_supervisor">工程监理</el-menu-item>
				<el-menu-item index="/business/item_manager">项目管理</el-menu-item>
        <el-menu-item index="/business/whole_process">全过程咨询</el-menu-item>
        <el-menu-item index="/business/integrated_service">综合业务</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <!--<el-submenu index="/callforbids">
      <template slot="title">
        <i class="el-icon-s-data"></i>
        <span slot="title">招标管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/callforbids">招标分析</el-menu-item>
        <el-menu-item index="/callforbids/contract">合同管理</el-menu-item>
        <el-menu-item index="/callforbids/projectinfo">项目管理</el-menu-item>
        <el-menu-item index="/callforbids/scheduled">进度管理</el-menu-item>
        <el-menu-item index="/callforbids/projectperson">项目人员管理</el-menu-item>
        <el-menu-item index="/callforbids/document">项目文档管理</el-menu-item>
        <el-menu-item index="/callforbids/recordkeep">招标备案机构管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>-->
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-money"></i><span slot="title">账务管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/finance/collect_fees">收款管理</el-menu-item>
        <el-menu-item index="/finance/invoice">发票管理</el-menu-item>
        <el-menu-item index="/finance/other">其他管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-office-building"></i>
        <span slot="title">行政管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/administrative/activity">活动管理</el-menu-item>
        <el-menu-item index="/administrative/information">信息管理</el-menu-item>
        <el-menu-item index="/administrative/document">文件管理</el-menu-item>
        <el-menu-item index="/administrative/qualification">资质荣誉工商管理</el-menu-item>
        <el-menu-item index="/administrative/seal_ca_lock">印章及CA锁管理</el-menu-item>
        <el-menu-item index="/administrative/purchase_use">采购领用管理</el-menu-item>
        <el-menu-item index="/administrative/logistics">后勤管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-view"></i>
        <span slot="title">档案管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/archive/hr_archive">人事档案</el-menu-item>
        <el-menu-item index="/archive/administration_archive">行政档案</el-menu-item>
        <el-menu-item index="/archive/finance_archive">财务档案</el-menu-item>
        <el-menu-item index="/archive/bid_archive">投标档案</el-menu-item>
        <el-menu-item index="/archive/contract_archive">合同档案</el-menu-item>
        <el-menu-item index="/archive/business_archive">业务档案</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="9">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/sys/org_manager">组织和岗位</el-menu-item>
        <el-menu-item index="/sys/sys_type">系统分类管理</el-menu-item>
        <el-menu-item index="/sys/flow_manager">流程管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="10">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span slot="title">人力资源管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/HR/base_manager">人员信息管理</el-menu-item>
        <el-menu-item index="/HR/recruit_manager">招聘与配置</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="11">
      <template slot="title">
        <i class="el-icon-paperclip"></i>
        <span slot="title">共享管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/shared/card_manager">其他资料盖章</el-menu-item>
         <el-menu-item index="/shared/card_fy">费用报销</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
  import {mapGetters} from "vuex";

  export default {
    name: "leftmenu",
    data() {
      return {
        abc: "1"
      };
    },
    computed: {
      ...mapGetters(["isCollapse", "sidebarWidth"])
    }
  };
</script>
<style scoped>
  .el-menu-item:focus,
  .el-menu-item:hover {
    outline: 0;
    background-color: #ceeda8;
  }
</style>

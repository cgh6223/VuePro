import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import index from "../oldV/index.vue";
import login from "@/views/login.vue";
import pdfshows from "../components/pdfview/index.vue";

//模板管理
import original_template from '../pages/originalTemplate/index.vue'
//客户管理
import customerInfo from "../pages/customerManager/customerInfo/index.vue";
import basicInfo from "../pages/customerManager/customerInfo/custBasicInfo/index.vue";
import upkeepInfo from "../pages/customerManager/customerMaintenance/index.vue";
import custMainBasicInfo from "../pages/customerManager/customerMaintenance/custMainBasicInfo/index.vue";
//合同模块开始
import contract_query from "../pages/contractManager/businessContract/index.vue";
import business_basic from "../pages/contractManager/businessContract/showBasicInfo/index.vue";
import contract_original_script from "../pages/contractManager/xOriginalScriptManager/index.vue";
import Non_business from '../pages/contractManager/nonBusContract/index.vue'
import basic_info from '../pages/contractManager/nonBusContract/showBasicInfo/index.vue'
//系统管理
import org_index from "../pages/systemManager/orgAndPosManager/index.vue";
import sys_type from "../pages/systemManager/sysType/index.vue";
//人事管理
import base_index from "../pages/HRManager/personInfo/index.vue";
import platForm_index from "../pages/HRManager/personInfo/basiceMode/index.vue";
import recruit_index from "../pages/HRManager/recruitDispose/index.vue";
import dataInfo_index from "../pages/HRManager/personInfo/dataExhibition/index.vue";

//共享管理
import card_index from "../pages/sharedManager/MaterialSeal/index.vue";
import fy from "../pages/sharedManager/Reimbursement/index.vue";
//业务管理
import project_consult from '../pages/businessManager/projectConsult/index.vue'
import project_cost from '../pages/businessManager/projectCost/index.vue'
import project_supervisor from '../pages/businessManager/projectSupervisor/index.vue'
import bidding_agency from '../pages/businessManager/biddingAgency/index.vue'
import whole_process from '../pages/businessManager/wholeProcess/index.vue'
import item_manager from '../pages/businessManager/itemManager/index.vue'
import integrated_service from '../pages/businessManager/integratedService/index.vue'
import item_original from '../pages/businessManager/itemOriginalManager/index.vue'
//工作台
import workbench from '../pages/businessManager/workbench/index.vue'
//交易平台管理
import trading_platform from '../pages/businessManager/tradingPlatform/index.vue'

//投标管理
import record_manager from '../pages/bidManager/bidHomepage/index.vue'
import website_manager from '../pages/bidManager/bidWebsite/index.vue'
import bid_workbench from '../pages/bidManager/workbench/index.vue'
import bid_basic from '../pages/bidManager/bidHomepage/showBasic/index.vue'
//财务管理
import finance_collect_fees from '../pages/financeManager/collectFees/index.vue'
import finance_invoice from '../pages/financeManager/invoice/index.vue'
import finance_other from '../pages/financeManager/other/index.vue'
//行政管理
import administrative_activity from '../pages/administrativeManager/activity/index.vue'
import administrative_information from '../pages/administrativeManager/information/index.vue'
import administrative_document from '../pages/administrativeManager/document/index.vue'
import administrative_qualification from '../pages/administrativeManager/qualificationHonor/index.vue'
import administrative_seal_ca_lock from '../pages/administrativeManager/sealAndCALock/index.vue'
import administrative_purchase_use from '../pages/administrativeManager/purchaseUse/index.vue'
import administrative_logistics from '../pages/administrativeManager/logistics/index.vue'
//档案管理
import hr_archive from '../pages/archiveManager/hrArchive/index.vue'
import administration_archive from '../pages/archiveManager/administrativeArchive/index.vue'
import finance_archive from '../pages/archiveManager/financeArchive/index.vue'
import bid_archive from '../pages/archiveManager/bidArchive/index.vue'
import contract_archive from '../pages/archiveManager/contractArchive/index.vue'
import business_archive from '../pages/archiveManager/businessArchive/index.vue'

import flow_manager from "../pages/flowManager/index.vue";

Vue.use(VueRouter);

const myroutes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/pdfview",
    name: "pdfshows",
    component: pdfshows
  },
  {
    path: "/index",
    name: "home",
    component: Home,
    children: [
      {
        path: "/",
        component: index,
        meta: {
          title: "工作台"
        }
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      title: "登录管理"
    }
  },
  {//客户
    path: "/customer",
    name: "customer",
    component: Home,
    meta: {
      title: "客户管理"
    },
    children: [
      {
        path: "customerManager",
        name: "customerManager",
        component: customerInfo,
        meta: {
          title: ""
        }
      },
      {
        path: "upkeepManager",
        name: "upkeepManager",
        component: upkeepInfo,
        meta: {
          title: ""
        }
      },
      /*新增*/

      {
        path: "basicManager",
        name: "basicManager",
        component: basicInfo,
        meta: {
          title: ""
        }
      },
      {
        path: "custMainManager",
        name: "custMainManager",
        component: custMainBasicInfo,
        meta: {
          title: ""
        }
      },
      {
        path: "",
        name: "custMainManager",
        component: custMainBasicInfo,
        meta: {
          title: ""
        }
      },
      {
        path: "original_template",
        name: "original_template",
        component: original_template,
        meta: {
          title: ""
        }
      },
    ]
  },
  {//合同
    path: "/contract",
    name: "contract",
    component: Home,
    children: [
      {
        path: "business",
        name: "business",
        component: contract_query,
        meta: {
          title: ""
        }
      },

      {
        path: "original_script",
        name: "original_script",
        component: contract_original_script,
        meta: {
          title: "合同原件"
        }
      },
      {
        path: "template_manager",
        name: "template_manager",
        component: original_template,
        meta: {
          title: "合同模板"
        }
      },
      {
        path: "non_business",
        name: "non_business",
        component: Non_business,
        meta: {
          title: "非业务合同"
        }
      },
      {
        path: "basic_manager",
        name: "basic_manager",
        component: basic_info,
        meta: {
          title: "非业务合同基本信息"
        },
      },
      {
        path: "business_basic_manager",
        name: "business_basic_manager",
        component: business_basic,
        meta: {
          title: "非业务合同基本信息"
        }
      },

    ]
  },
  {//投标管理
    path: "/bid",
    name: "bid",
    component: Home,
    children: [
      {
        path: 'record_manager',
        name: 'record_manager',
        component: record_manager,
        meta: {
          title: "投标备案"
        }
      },
      {
        path: 'bid_basic',
        name: 'bid_basic',
        component: bid_basic,
        meta: {
          title: "项目情况登记"
        }
      },
      {
        path: 'website_manager',
        name: 'website_manager',
        component: website_manager,
        meta: {
          title: "投标网站管理"
        }
      },
      {
        path: 'bid_template',
        name: 'bid_template',
        component: original_template,
        meta: {
          title: "投标模板管理"
        }
      },
      {
        path: 'workbench',
        name: 'workbench',
        component: bid_workbench,
        meta: {
          title: "投标工作台"
        }
      },
    ]
  },
  {//业务管理
    path: "/business",
    name: "business",
    component: Home,
    children: [
      {
        path: 'project_consult',
        name: 'project_consult',
        component: project_consult,
        meta: {
          title: "工程咨询"
        }
      },
      {
        path: 'project_cost',
        name: 'project_cost',
        component: project_cost,
        meta: {
          title: "造价咨询"
        }
      },
      {
        path: 'project_supervisor',
        name: 'project_supervisor',
        component: project_supervisor,
        meta: {
          title: "工程监理"
        }
      },
      {
        path: 'bidding_agency',
        name: 'bidding_agency',
        component: bidding_agency,
        meta: {
          title: "招标代理"
        }
      },
      {
        path: 'whole_process',
        name: 'whole_process',
        component: whole_process,
        meta: {
          title: "全过程咨询"
        }
      },
      {
        path: 'item_manager',
        name: 'item_manager',
        component: item_manager,
        meta: {
          title: "项目管理"
        }
      },
      {
        path: "integrated_service",
        name: "integrated_service",
        component: integrated_service,
        meta: {
          title: "综合业务"
        }
      },
      {
        path: "item_original",
        name: "item_original",
        component: item_original,
        meta: {
          title: "项目原件管理"
        }
      },
      {
        path: "template",
        name: "template",
        component: original_template,
        meta: {
          title: "模板管理"
        }
      },

      {
        path: "trading_platform",
        name: "trading_platform",
        component: trading_platform,
        meta: {
          title: "交易平台管理"
        }
      },

      {
        path: "workbench",
        name: "workbench",
        component: workbench,
        meta: {
          title: "工作台"
        }
      },
    ]
  },
  {//财务
    path: "/finance",
    name: "finance",
    component: Home,
    children: [
      {
        path: "collect_fees",
        name: "collect_fees",
        component: finance_collect_fees,
        meta: {
          title: "收款管理"
        }
      },
      {
        path: "invoice",
        name: "invoice",
        component: finance_invoice,
        meta: {
          title: "发票管理"
        }
      },
      {
        path: "other",
        name: "other",
        component: finance_other,
        meta: {
          title: "其他管理"
        }
      },
    ]
  },
  {//档案
    path: "/archive",
    name: "archive",
    component: Home,
    children: [
      {
        path: "hr_archive",
        name: "hr_archive",
        component: hr_archive,
        meta: {
          title: "人事档案"
        }
      },
      {
        path: "administration_archive",
        name: "administration_archive",
        component: administration_archive,
        meta: {
          title: "行政档案"
        }
      },
      {
        path: "finance_archive",
        name: "finance_archive",
        component: finance_archive,
        meta: {
          title: "财务档案"
        }
      },
      {
        path: "bid_archive",
        name: "bid_archive",
        component: bid_archive,
        meta: {
          title: "投标档案"
        }
      },
      {
        path: "contract_archive",
        name: "contract_archive",
        component: contract_archive,
        meta: {
          title: "合同档案"
        }
      },
      {
        path: "business_archive",
        name: "business_archive",
        component: business_archive,
        meta: {
          title: "业务档案"
        }
      },

    ]
  },
  {//系统
    path: "/sys",
    name: "sys",
    component: Home,
    children: [
      {
        path: "org_manager",
        name: "org_manager",
        component: org_index,
        meta: {
          title: "组织和岗位"
        }
      },
      {
        path: "sys_type",
        name: "sys_type",
        component: sys_type,
        meta: {
          title: "系统类型"
        }
      },
      {
        path: "flow_manager",
        name: "flow_manager",
        component: flow_manager,
        meta: {
          title: "流程管理"
        }
      }
    ]
  },
  {//人事
    path: "/HR",
    name: "HR",
    component: Home,
    children: [
      {
        path: "base_manager",
        name: "base_manager",
        component: base_index,
        meta: {
          title: ""
        }
      },
      {
        path: "plat_manager",
        name: "plat_manager",
        component: platForm_index,
        meta: {
          title: ""
        }
      },
      {
        path: "recruit_manager",
        name: "recruit_manager",
        component: recruit_index,
        meta: {
          title: ""
        }
      },
      {
        path: "card_manager",
        name: "card_manager",
        component: card_index,
        meta: {
          title: ""
        }
      },
      {
        path: "dataInfo_manager",
        name: "dataInfo_manager",
        component: dataInfo_index,
        meta: {
          title: ''
        },
      },
      {
        path: "original_template",
        name: "original_template",
        component: original_template,
        meta: {
          title: '人事相关模板'
        }
      }
    ]
  },
  {//共享
    path: "/shared",
    name: "shared",
    component: Home,
    children: [
      {
        path: "card_manager",
        name: "card_manager",
        component: card_index,
        meta: {
          title: ""
        }
      },
      {
        path: "card_fy",
        name: "card_fy",
        component: fy,
        meta: {
          title: ""
        }
      },
    ]
  },
  {//行政
    path: "/administrative",
    name: "administrative",
    component: Home,
    children: [
      {
        path: "activity",
        name: "activity",
        component: administrative_activity,
        meta: {
          title: "活动管理"
        }
      },
      {
        path: "information",
        name: "information",
        component: administrative_information,
        meta: {
          title: "信息管理"
        }
      },
      {
        path: "document",
        name: "document",
        component: administrative_document,
        meta: {
          title: "文件管理"
        }
      },
      {
        path: "qualification",
        name: "qualification",
        component: administrative_qualification,
        meta: {
          title: "资质荣誉工商管理"
        }
      },
      {
        path: "seal_ca_lock",
        name: "seal_ca_lock",
        component: administrative_seal_ca_lock,
        meta: {
          title: "印章CA锁管理"
        }
      },
      {
        path: "purchase_use",
        name: "purchase_use",
        component: administrative_purchase_use,
        meta: {
          title: "采购领用管理"
        }
      },
      {
        path: "logistics",
        name: "logistics",
        component: administrative_logistics,
        meta: {
          title: "后勤管理"
        }
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  routes: myroutes
});

export default router;

<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>
    <div class="table">
      <el-tabs v-model="activeName">
        <el-tab-pane name="1">
          <span slot="label">手机号信息</span>
          <phone-table></phone-table>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">各大网站信息</span>
          <website-info-table></website-info-table>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">各大协会管理</span>
          <society-table></society-table>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span slot="label">社会角色管理</span>
          <social-role-table></social-role-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="dialog">
      <information-dialog title="手机号备案" ref="addPhoneRef"></information-dialog>
      <website-info-dialog title="网站信息备案" ref="addWebsiteRef" ></website-info-dialog>
      <society-info-dialog title="协会信息备案" ref="addSocietyRef"></society-info-dialog>
      <social-role-dialog title="社会角色备案" ref="addSocialRef"></social-role-dialog>
      <query-item-dialog title="高级查询" ref="queryRef"></query-item-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import PhoneTable from './table/PhoneTable.vue'
  import WebsiteInfoTable from './table/WebsiteInfoTable.vue'
  import SocietyTable from './table/SocietyTable.vue'
  import QueryItemDialog from './dialog/QueryDialog.vue'
  import InformationDialog from './dialog/InformationDialog.vue'
  import WebsiteInfoDialog from './dialog/WebsiteInfoDialog.vue'
  import SocietyInfoDialog from './dialog/SocietyInfoDialog.vue'
  import SocialRoleDialog from './dialog/SocialRoleDialog.vue'
  import SocialRoleTable from "./table/SocialRoleTable.vue";

  export default {
    components: {
      SocialRoleTable,
      HeadButton,
      PhoneTable,
      WebsiteInfoTable,
      SocietyTable,
      QueryItemDialog,
      InformationDialog,
      WebsiteInfoDialog,
      SocietyInfoDialog,
      SocialRoleDialog
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
        dataList: [{}, {}],
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      headButtonClick(btn){
        switch (btn) {
          case 1:
            this.$refs.addPhoneRef.openDialog()
            break
          case 2:
            this.$refs.addWebsiteRef.openDialog()
            break
          case 3:
            this.$refs.addSocietyRef.openDialog()
            break
          case 4:
            this.$refs.addSocialRef.openDialog()
            break
          case 5:
            this.$refs.queryRef.openDialog()
            break
          case 6:
            this.$refs.addWebsite.openDialog()
            break
          case 7:
            this.$refs.addWebsite.openDialog()
            break
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  .head-button {
    height: 50px;
    line-height: 50px;
    padding: 10px 20px;
  }
</style>

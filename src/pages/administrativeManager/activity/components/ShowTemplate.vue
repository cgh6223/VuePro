<template>
  <div class="body">
    <div class="head-button">
      <head-button @click="headButtonClick"></head-button>
    </div>
    <div class="table">
      <activity-table></activity-table>
    </div>
    <div class="dialog">
      <add-activity-dialog ref="addRef" @getFormData="submitAddForm"></add-activity-dialog>
      <query-activity-dialog ref="queryRef"></query-activity-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadButton from './button/HeadButton.vue'
  import ActivityTable from './table/ActivityTable.vue'
  import AddActivityDialog from './dialog/AddActivityDialog.vue'
  import QueryActivityDialog from './dialog/QueryActivityDialog.vue'
  import {
    getContractDetailsCard,
    addContractDetailsCard
  } from '../../../../api/webapi-contract.js'
  export default {
    components: {
      HeadButton,
      ActivityTable,
      AddActivityDialog,
      QueryActivityDialog
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        activeName: '1',
        dataList: [],
      }
    },
    //生命周期函数节点
    created() {},
    //自定义函数节点
    methods: {
      headButtonClick(btn) {
        switch (btn) {
          case 1:
            this.$refs.addRef.openDialog()
            break
          case 2:
            this.$refs.queryRef.openDialog()
            break
        }
      },
      submitAddForm(formData) {
        addContractDetailsCard(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)

          }
        })
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
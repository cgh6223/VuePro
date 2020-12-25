<template>
    <div class="search_container searchArea">
      <el-button class="btn_color" size="mini" icon="view" @click="onAdd()">添 加</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="onSearch()">高级查询</el-button>
      <el-button class="btn_color" size="mini" icon="view" @click="exportExcel()">导出EXCEL</el-button>
      <!-- <div class="btnRight">
        <el-button class="btn_color" size="mini" icon="view" @click="webManager()">网站管理</el-button>
      </div> -->
    </div>
</template>
<script>
export default {
    name:"toolbar",
    data(){
        return {}
    },
    methods:{
        onAdd(){
            this.$emit("onAdd");
        },
        onSearch(){
             this.$emit("onSearch");
        },
        exportExcel(){
             this.$emit("exportExcel");
        }
    }
}
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
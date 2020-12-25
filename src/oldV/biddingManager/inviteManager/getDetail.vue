<template>
  <el-collapse class="detail_container" value="1">
    <el-collapse-item title="项目投标详细信息" name="1">
      <DetailShow :colData="tabledata" :type="cols"></DetailShow>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import DetailShow from "@c/Detail.vue";
import { getDetail } from "@/api/bidding.js";
export default {
  name: "inviteDetail",
  data() {
    return {
      tabledata: [],
      cols: 3
    };
  },
  components: {
    DetailShow
  },
  methods: {
    getArr(datas) {        
      const page = [];
      let index = 0;
      for (let p in datas) {
        let pi = Math.floor(index / this.cols);
        if (!page[pi]) {
          page[pi] = {};
        }
        page[pi][p] = datas[p];
        index++;
      }
      return page;
    }
  },
  beforeMount() {
    let parm = this.$route.query;
    if (parm) {
      getDetail(parm).then(res => {
        let mydata = this.getArr(res);       
        this.tabledata=mydata;       
      });
     
    }
  }
};
</script>
<style lang="less" scoped>
.detail_container {
  width: 100%;
  height: 600px;
}
</style>
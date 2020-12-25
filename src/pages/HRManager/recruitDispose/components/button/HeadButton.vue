<template>
  <div>
    <el-row>
      <div class="btn-left">
        <template v-for="(item,index) in buttonList">
          <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',index+1,item.keyid)">{{item.listname}}</el-button>
        </template>
        <!--<el-button class="btn_color" type="primary" size="mini" @click="$emit('click',1)">招聘需求申请</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',2)">转正申请</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',3)">离职申请</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',4)">调岗晋级申请</el-button>
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',5)">补助申请</el-button>-->
      </div>
      <div class="btn-right">
        <el-button class="btn_color" type="primary" size="mini" @click="$emit('click',6)">模板管理</el-button>
      </div>
    </el-row>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        buttonList:[]
      }
    },
    //生命周期函数节点
    created() {
      this.getSelectByCode(167).then(item=>{
        this.buttonList=item.data
      })
    },
    //自定义函数节点
    methods: {
      handleCommand(command) {
        this.$emit('click', parseInt(command))
      }
    }
  }
</script>
<style lang='less' scoped>
  .btn-left {
    float: left;
    margin-left: 0 !important;
  }
  .btn-right {
    float: right;
    margin-right: 0 !important;
  }
</style>

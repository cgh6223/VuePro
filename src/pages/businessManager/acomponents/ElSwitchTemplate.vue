<template>
  <div>
    <el-switch
            v-model="value"
            :active-text="okText"
            :inactive-text="noText" @change="submitValue">
    </el-switch>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      model:'',
      okText:{
        type:String,
        default:'是'
      },
      noText:{
        type:String,
        default:'否'
      }
    },
    model:{
      prop:'model',
      event:""
    },
    mounted(){
      this.value=this.model
    },
    watch: {
      value(newValue){

      }
    },
    //数据节点
    data() {
      return {
        value:''
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      submitValue(value){
        /*this.$confirm('是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$emit('click',value)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });*/
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

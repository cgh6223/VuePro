<template>
  <div>
    <show-main></show-main>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import ShowMain from './components/ShowMain.vue'
  export default {
    components: {
      ShowMain
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {}
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {}
  }
</script>
<style lang='less' scoped>

</style>

<template>
  <div>
    <table-list></table-list>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableList from './components/TableList.vue'
  export default {
    components: {
      TableList
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

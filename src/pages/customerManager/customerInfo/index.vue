<template>
  <div class="body">
    <table-list ref="tableRef"></table-list>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableList from './components/TableList.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('loadType')
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
      this.networkGetCusLoadData()
      this.networkGetRegion()
    },
    //自定义函数节点
    methods: {
      ...mapActions({
        networkGetCusLoadData: 'networkGetCusLoadData',
        networkGetRegion: 'networkGetRegion'
      })
    }
  }
</script>
<style lang='less' scoped>

</style>

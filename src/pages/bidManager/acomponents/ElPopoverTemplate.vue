<template>
  <div>
    <el-popover :trigger="showType" placement="top">
      <template v-if="pObject.show">
        <table>
          <tr v-for="item in pObject.labelPropList">
            <td style="text-align: right">{{item.label}}:</td>
            <td>{{pObject.data[item.prop]}}</td>
          </tr>
        </table>
      </template>
      <template v-if="tableObject.show">
        <span>{{tableObject.title}}</span>
        <el-table :data="tableObject.data">
          <template v-for="item in tableObject.labelPropList">
            <el-table-column :label="item.label" :prop="item.prop" align="center"></el-table-column>
          </template>
        </el-table>
      </template>
      <div slot="reference" class="name-wrapper">
        <el-tag size="medium">{{title}}</el-tag>
      </div>
    </el-popover>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      title:{
        type:String,
        default:'详情'
      },

      pObject: {
        type: Object,
        default: () => {
          return {
            show: false,
            labelPropList: [],
            data: '',
          }
        }
      },
      tableObject: {
        type: Object,
        default: () => {
          return {
            title: '',
            show: false,
            labelPropList: [],
            data: '',
          }
        }
      },
      showType: {
        type: String,
        default: 'click'
      },
      tagTitle: '',
    },
    watch: {},
    mounted() {
      if (!this.$myfunction.isEmpty(this.tagTitle)) {
        this.title = this.tagTitle
      }
    },
    //数据节点
    data() {
      return {
        tableData: [
          {k1: '张三', k2: '男'},
          {k1: '李四', k2: '女'},
        ],
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {}
  }
</script>
<style lang='less' scoped>
  .el-tag {
    cursor: pointer
  }
</style>

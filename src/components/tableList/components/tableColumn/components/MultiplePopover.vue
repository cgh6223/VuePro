<template>
  <div>
    <el-popover :trigger="popoverType" placement="top">
        <el-table :data="data">
          <template v-for="item in labelProp">
            <el-table-column :label="item.label" :prop="item.prop" align="center" v-if="item.prop != '下载' "></el-table-column>
            <el-table-column :label="item.label" :prop="item.prop" align="center" v-if="item.prop == '下载' ">
							<template slot-scope="scope">
								<el-button type="text">下载</el-button>
							</template>
						</el-table-column>
          </template>
        </el-table>
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
      data:'',
      type:{
        type:String,
        default:'single'
      },
      popoverType: {
        type: String,
        default: 'click'
      },
      labelProp:{
        type:Array,
        default:()=>{
          return []
        }
      },
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
        title: '详细',
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

<template>
  <div>
    <el-popover  :trigger="popoverType" placement="top">
      <template v-if="!$myfunction.isEmpty(data)">
        <template v-if="type==='object'|| type==='obj'">
          <table >
            <tr v-for="item in labelProp">
              <td style="text-align: right">{{item[label]}}:</td>
              <td style="text-indent: 2em;max-width: 300px">{{data[item[prop]]}}</td>
            </tr>
          </table>
        </template>
        <template v-if="type==='array'|| type==='arr'">
          <el-table :data="dataList">
            <template v-for="item in labelProp">
              <el-table-column v-if="item.type!=='file'" :label="item[label]" :prop="item[prop]" align="center" :width="item.width?item.width:'100'"></el-table-column>
              <el-table-column v-if="item.type==='file'" :label="item[label]" align="center" width="80px">
                <template slot-scope="scope">
                  <el-button type="text">下载</el-button>
                </template>
              </el-table-column>
            </template>
          </el-table>
        </template>
        <template v-if="type==='keyValue'|| type==='ky'">
          <div style="width: 300px">
            <el-table :data="dataList" stripe :show-header="false">
              <el-table-column min-width="75px">
                <template slot-scope="scope">
                  {{scope.row[label]}}
                </template>
              </el-table-column>
              <el-table-column :prop="prop" min-width="100px"></el-table-column>
            </el-table>
          </div>
        </template>
      </template>
      <template v-else>
        <div style="height: 60px;text-align: center;line-height: 60px;">
          <h4>暂无数据</h4>
        </div>
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
      data:'',
      dataType:{
        type:String,
        default:'array'
      },
      popoverType: {
        type: String,
        default: 'click'
      },
      label:{
        type:String,
        default:'label'
      },
      prop:{
        type:String,
        default:'prop'
      },
      labelProp:'',
      title:{
        type:String,
        default:'详细'
      }
    },
    watch: {
      dataType(newValue){
        this.type=newValue
      },
      type(newValue){
        if (newValue.indexOf('arr')!==-1 && Array.isArray(this.data)) {
          this.dataList=this.data
        }
      }
    },
    mounted() {
      this.type=this.dataType
    },
    //数据节点
    data() {
      return {
        type:'',
        dataList:[]
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

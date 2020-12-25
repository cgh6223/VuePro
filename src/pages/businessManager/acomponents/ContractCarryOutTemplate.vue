<template>
  <div class="body">
    <div class="column">
      <table>
        <tr>
          <td>项目编号:</td><td>HDZX-2020-002-002</td>
        </tr>
        <tr>
          <td>项目名称:</td><td>项目一</td>
        </tr>
        <tr>
          <td>计划天数:</td><td>21天</td>
        </tr>
        <tr>
          <td>工作进度:</td><td>10%</td>
        </tr>
        <tr>
          <td>延期天数:</td><td>0</td>
        </tr>
        <tr>
          <td>延期原因:</td><td></td>
        </tr>
        <tr>
          <td>归档情况:</td><td>未归档</td>
        </tr>
      </table>
    </div>
    <div class="column">
      <span>收入</span>
      <table >
        <tr>
          <td>类型</td><td>开票金额</td><td>开票已收</td><td>应收账款</td>
        </tr>
        <tr>
          <td>服务费收入</td><td>1000</td><td>1000</td><td>1100</td>
        </tr>
      </table>
    </div>
    <div class="column">
      <span>支出</span>
      <table>
        <tr>
          <td>税金支出:</td><td>231200</td>
        </tr>
        <tr>
          <td>项目差旅费支出:</td><td>834</td>
        </tr>
        <tr>
          <td>其他支出:</td><td>875</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      shoeData:{
        type:Object,
        default:()=>{
          return {
            itemName:'项目一',
            itemCode:'HDZX-2020-001-001'
          }
        }
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
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
.body{
  display: flex;
  .column{
    flex: 3;
    &:nth-child(2){
      table{
        border: 1px solid #bfcbd9;
        td{
          padding: 5px 10px;
          border: 1px solid #bfcbd9;
          text-align: center;
        }
      }
    }
  }
}
</style>

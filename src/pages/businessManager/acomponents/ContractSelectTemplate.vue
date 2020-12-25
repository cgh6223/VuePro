<template>
  <div class="box">
    <div class="column">
      <el-input v-model="front" readonly></el-input>
    </div>


    <div class="column">
      <el-select v-model="year" placeholder="请选择">
        <el-option
                v-for="item in years"
                :key="item"
                :label="item"
                :value="item">
        </el-option>
      </el-select>
    </div>

    <div class="column">
      <el-select v-model="code" placeholder="请选择">
        <el-option
                v-for="item in tailCode"
                :key="item"
                :label="item"
                :value="item">
        </el-option>
      </el-select>
    </div>

  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      title: '',
    },
    mounted() {
      this.frontType.forEach(value => {
        if (value.key === this.title) {
          this.front = value.value
        }
      })
    },
    watch: {
      title(newValue) {
        this.frontType.forEach(value => {
          if (value.key === newValue) {
            this.front = value.value
          }
        })
      }
    },
    //数据节点
    data() {
      return {
        frontType: [
          {key: '工程咨询', value: 'HDZX'},
          {key: '造价咨询', value: 'HDZJ'},
          {key: '招标代理', value: 'HDZB'},
          {key: '工程监理', value: 'HDJL'},
          {key: '项目管理', value: 'HDXG'},
          {key: '全过程工程咨询', value: 'HDQGC'},
          {key: '综合业务', value: 'HDZH'}
        ],
        years: ['2017', '2018', '2019', '2020'],
        tailCode: ['001', '002', '003', '004'],
        front: '',
        year: '',
        code: '',
        returnData: ''
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
  .box {
    display: flex;
    .column {
      flex: 3;
    }
  }
</style>

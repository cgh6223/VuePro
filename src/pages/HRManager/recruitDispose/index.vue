<template>
  <div>
    <el-row :gutter="20">
      <el-col>
        <table-list></table-list>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableList from './components/TableList.vue'
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    components: {
      TableList
    },
    props: {},
    watch: {},
    computed:{
      ...mapState({
        currentUser:'currentUser',
        allPerson:state=>state.hrStore.allPerson,
      })
    },
    mounted(){

    },
    //数据节点
    data() {
      return {}
    },
    //生命周期函数节点
    created() {
      this.networkGetHrLoadData()
     // this.getRandomUser()
    },
    //自定义函数节点
    methods: {
      ...mapMutations({
        updateCurrentUser:'updateCurrentUser'
      }),
      ...mapActions({
        networkGetHrLoadData:'loadType/networkGetHrLoadData',
        networkGetAllPerson:'hrStore/networkGetAllPerson',
      }),
      getRandomUser(){
        let len=parseInt(Math.random()*(this.allPerson.total-1))
        if (this.allPerson.total > 0) {
          let user=this.allPerson.dataList[len]
          let currentUser={
            userName:'',
            personId:user.keyid,
            personName:user.personName,
            orgId:user.orgId,
            orgName:user.orgName,
            postId:user.posId,
            postName:user.posName
          }
          this.updateCurrentUser(currentUser)
        }
      },
    }
  }
</script>
<style lang='less' scoped>
  .search_container {
    margin-bottom: 20px;
  }

  .btnRight {
    float: right;
    margin-right: 0px !important;
  }

  .searchArea {
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    padding: 18px 18px 0;
  }

  .row_list {
    margin-bottom: 20px;
    .row_base {
      padding: 10px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 6px;
      height: 120px;
    }
  }

  .order_list {
    .orderArea {
      width: 100%;
      height: 370px;
      background: #fff !important;
      border-radius: 6px;
      box-sizing: border-box;
      padding: 10px;
      padding-top: 40px;
      overflow: hidden;
    }
    .orderbarArea {
      height: 370px;
    }
  }

  .data_list {
    text-align: center;
    font-size: 14px;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
    height: 80px;
    .leftItem {
      align-items: start;
      justify-content: space-between;
      text-align: left;
    }
    .rightItem {
      width: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      .svg-icon {
        font-size: 30px;
      }
    }
    .number {
      font-size: 22px;
      font-weight: bold;
      .perTitle {
        font-size: 13px;
        margin-left: 5px;
      }
    }
  }

  .pay {
    .leftItem {
      justify-content: space-around;
    }
  }
</style>

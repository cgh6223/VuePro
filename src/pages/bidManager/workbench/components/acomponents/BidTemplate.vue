<template>
  <div>
    <el-button type="text" @click="dialogVisible=true">新增</el-button>
    <div>
      <el-table :data="data" stripe :show-header="true">
        <el-table-column label="单位名称" prop="othercompanyname" align="left"></el-table-column>
        <el-table-column label="中标价" prop="winbiddingsum" align="left"></el-table-column>
        <el-table-column align="right" width="100px">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="remObj(scope.$index)">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="dialog">
      <el-dialog :visible.sync="dialogVisible" :append-to-body="true" width="300px" @close="dialogClose">
        <el-form :model="form" ref="formRef" :rules="formRules" label-width="75px">
          <el-form-item label="单位名称" prop="othercompanyname">
           <rea-query-input v-model="form.othercompanyname"
                            unmatched
                            url="tender/bidopeningevaluation/findwhere"
                            filter-key="othercompanyname"
                            :filter-obj="{bidopenkeyid:filterKeyid}"
                            @getObject="item=>{
                              item.iswinbidding=true
                              Object.assign(form,item)
                            }"></rea-query-input>
          </el-form-item>
          <el-form-item label="中标价" prop="winbiddingsum">
            <el-input v-model="form.winbiddingsum"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini" @click="submitData">确 定</el-button>
      </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      filterKeyid:{
        type:String,
        default:''
      },
      title:'',
      model:{
        type:Array,
        default:()=>{
          return []
        }
      },
      typeList:{
        type:Array,
        default:()=>{
          return []
        }
      },
    },
    model:{
      prop:'model',
      event:'getData'
    },
    //生命周期函数节点
    created() {
    },
    mounted() {
      this.data=this.model
    },
    watch: {
      model(newValue){
        this.data=newValue
      },
    },
    computed:{
    },
    //数据节点
    data() {
      return {
        isContent:false,
        data:[],
        dialogVisible: false,
        form:{
          othercompanyname:'',
          winbiddingsum:'',
        },
        formRules:{}
      }
    },

    //自定义函数节点
    methods: {
      remObj(index){
        this.data.splice(index,1)
        this.$emit('getData',this.$myfunction.copyData(this.data))
      },
      submitData(){
        this.data.push(this.$myfunction.copyData(this.form))
        this.dialogClose()
      },
      openDialog() {
        this.dialogVisible = true
      },
      dialogClose() {
        this.dialogVisible = false
        this.resetForm()
      },
      resetForm() {
        this.form=this.$options.data().form
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

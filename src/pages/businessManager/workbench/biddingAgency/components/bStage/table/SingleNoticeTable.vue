<template>
  <div>

    <div>
    	<head-right-button @click="$refs.addRef.openDialog()"  title="新增编制及发布"></head-right-button>
    </div>
    <div>
    	<el-table :data="dataList" style="width: 100%" align="center"  height="400px" highlight-current-row
    	 :header-cell-style="{fontSize:'10px'}">
    		<el-table-column prop="createddateTime" label="创建时间" width="100" align="center"></el-table-column>
    		<el-table-column prop="publicityCount" label="次数" width="100" align="center"></el-table-column>
    		<el-table-column prop="attachFile" label="附件" width="100" align="center">
					<template slot-scope="scope">
						<el-button type="text" >下载</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="needAttachFile" label="盖章扫描件" width="75" align="center">
					<template slot-scope="scope">
						<el-button type="text" >下载</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="publicitydateTime" label="发布日期" width="100" align="center"></el-table-column>
				<el-table-column prop="publicityWebName" label="发布公告网站" width="150" align="center"></el-table-column>
				<el-table-column prop="publicityImageFile" label="公告截图" width="75" align="center">
					<template slot-scope="scope">
						<el-button type="text" >下载</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="publicityChangeImageFile" label="更正截图" width="75" align="center">
					<template slot-scope="scope">
						<el-button type="text" >下载</el-button>
					</template>
				</el-table-column>

    		<el-table-column prop="" label="操作" align="center" min-width="200" fixed="right">
    			<template slot-scope="scope">
    				<el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
    				<el-button type="text" @click="$refs.perfectRef.openDialog(scope.row)">完善发布信息</el-button>
    			</template>
    		</el-table-column>

    	</el-table>
    </div>
		<div class="dialog">
			<add-establishment-dialog title="新增编制及发布" width="30%" ref="addRef" @getFormData="networkAddData"></add-establishment-dialog>
			<add-establishment-dialog title="修改" width="30%" ref="updateRef" @getFormData="networkUpData"></add-establishment-dialog>
			<perfect-info-dialog title="完善发布信息" width="30%" ref="perfectRef" @getFormData="networkUpData"></perfect-info-dialog>

		</div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddEstablishmentDialog from "../dialog/SingleNoticeTable/AddEstablishmentDialog.vue"
  import PerfectInfoDialog from "../dialog/SingleNoticeTable/PerfectInfoDialog.vue"
  import {mapState} from 'vuex'
  import {getPretrial,addPretrial,upPretrial,delPretrial} from '../../../../../../../api/workbench/webapi-biddingAgency.js'



  export default {
    components: {
      HeadRightButton,
			AddEstablishmentDialog,
			PerfectInfoDialog,
    },
    props: {
      title: '',
      width: '',
      labelWidth: {
        type: String,
        default: '130px'
      },
			data:{},
    },
    watch: {},
    computed:{
      ...mapState('workbench',{
        currentItem:'currentItem'
      })
    },
    //数据节点
    data() {
      return {
        dataList: [],
      }
    },
    //生命周期函数节点
    created() {
      this.networkGetDataList()
			},
    //自定义函数节点
    methods: {
      networkGetDataList() {
        let ref={
          projectKeyid:this.currentItem.keyid,
          publicityTypeKeyid:'singlenotice'
        }
        getPretrial(ref).then(item=>{
          this.dataList=item.data
        })
      },
      networkAddData(formData) {
        formData.projectKeyid=this.currentItem.keyid
        formData.ordernum=this.maxOrder+1
        formData.publicityTypeKeyid='singlenotice'
        addPretrial(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpData(formData) {
        upPretrial(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkDelData(formData) {
        delPretrial(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkAdjustmentData(formData) {
        formData.pkeyid=this.$myfunction.copyData(formData.keyid)
        formData.keyid=''
        addPretrial(formData).then(item=>{
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
    }
  }
</script>
<style lang='less' scoped>

</style>

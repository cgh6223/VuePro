<template>
  <div>

    <div>
    	<head-right-button @click="$refs.addRef.openDialog()"  title="新增编制及发布"></head-right-button>
    </div>
    <div>
    	<el-table :data="dataList" style="width: 100%" align="center"  height="400px" highlight-current-row
    	 :header-cell-style="{fontSize:'10px'}">
    		<el-table-column prop="createddateTime" label="创建时间" align="center"></el-table-column>
    		<el-table-column prop="publicityCount" label="次数" align="center"></el-table-column>
    		<el-table-column prop="attachFile" label="附件" align="center">
					<template slot-scope="scope">
						<download-button :value="scope.row.attachFile"></download-button>
					</template>
				</el-table-column>
				<el-table-column prop="publicitydateTime" label="发布日期" align="center"></el-table-column>
				<el-table-column prop="publicityWebName" label="发布公示网站" align="center"></el-table-column>
				<el-table-column prop="publicityImageFile" label="公示截图" align="center">
					<template slot-scope="scope">
						<download-button :value="scope.row.publicityImageFile"></download-button>
					</template>
				</el-table-column>
				<el-table-column prop="publicityChangeImageFile" label="更正截图" align="center">
					<template slot-scope="scope">
						<download-button :value="scope.row.publicityChangeImageFile"></download-button>
					</template>
				</el-table-column>

    		<el-table-column prop="" label="操作" align="center" width="200" fixed="right">
    			<template slot-scope="scope">
    				<el-button type="text" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
    				<el-button type="text" @click="$refs.perfectRef.openDialog(scope.row)">完善发布信息</el-button>
    			</template>
    		</el-table-column>

    	</el-table>
    </div>
		<div class="dialog">
			<add-single-release title="新增编制及发布" width="30%" ref="addRef" @getFormData="networkAddData"></add-single-release>
			<add-single-release title="修改" width="30%" ref="updateRef" @getFormData="networkUpData"></add-single-release>
			<perfect-single-dialog title="完善发布信息" width="30%" ref="perfectRef" @getFormData="networkUpData"></perfect-single-dialog>

		</div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from "../button/HeadRightButton.vue"
  import AddSingleRelease from "../dialog/SinglePublicityTable/AddSingleRelease.vue"
  import PerfectSingleDialog from "../dialog/SinglePublicityTable/PerfectSingleDialog.vue"
  import {mapState} from 'vuex'
  import {getPretrial,addPretrial,upPretrial,delPretrial} from '../../../../../../../api/workbench/webapi-biddingAgency.js'
  export default {
    components: {
      HeadRightButton,
			AddSingleRelease,
			PerfectSingleDialog,
    },
    props: {
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
          publicityTypeKeyid:'singlepublicity'
        }
        getPretrial(ref).then(item=>{
          this.dataList=item.data
        })
      },
      networkAddData(formData) {
        formData.projectKeyid=this.currentItem.keyid
        formData.ordernum=this.maxOrder+1
        formData.publicityTypeKeyid='singlepublicity'
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

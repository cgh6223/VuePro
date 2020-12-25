<template>
	<div class="b-main">
		<div>
			<head-right-button @click="$refs.addRef.openDialog()" title="新增发布及处理"></head-right-button>
		</div>
		<div>
			<el-table :data="dataList" style="width: 100%" align="center" height="430px" highlight-current-row
			 :header-cell-style="{fontSize:'10px'}">
				<el-table-column prop="publicitydateTime" label="发布日期" align="center" width="80"></el-table-column>
				<el-table-column prop="publicityCount" label="次数" align="center" width="50"></el-table-column>
				<el-table-column prop="publicityWebKeyid" label="发布公示网站" align="center" width="150"></el-table-column>
				<el-table-column prop="publicityImageFile" label="公示截图" align="center" width="80">
					<template slot-scope="scope">
						<download-button :value="scope.row.publicityImageFile"></download-button>
					</template>
				</el-table-column>
				<el-table-column prop="publicityChangeImageFile" label="更正截图" align="center" width="80">
					<template slot-scope="scope">
						<download-button :value="scope.row.publicityImageFile"></download-button>
					</template>
				</el-table-column>
				<el-table-column prop="isdissent" label="是否有异议" align="center" width="100">
					<template slot-scope="scope">
						<switch-button prop="isdissent" :data="scope.row" @change="networkUpData"></switch-button>
					</template>
				</el-table-column>
				<el-table-column prop="dissentSubmitFile" label="提出异议的文件" align="center" width="150">
					<template slot-scope="scope">
						<download-button :value="scope.row.publicityImageFile"></download-button>
					</template>
				</el-table-column>
				<el-table-column prop="dissentDoWay" label="异议回复处理" align="center" width="100"></el-table-column>
				<el-table-column prop="dissentResultFile" label="异议驳回文件" align="center" width="100">
					<template slot-scope="scope">
						<download-button :value="scope.row.publicityImageFile"></download-button>
					</template>
				</el-table-column>
				<el-table-column prop="" label="异议接受处理" align="center" width="100">
					<template slot-scope="scope">
						<com-popover data-type="obj" :label-prop="failActionTemplate" :data="scope.row"></com-popover>
					</template>
				</el-table-column>
				<el-table-column prop="" label="公示公告截图" align="center" width="100">
					<template slot-scope="scope">
						<download-button :value="scope.row.publicityImageFile"></download-button>
					</template>
				</el-table-column>
				<el-table-column prop="" label="操作" align="center" fixed="right" width="150">
					<template slot-scope="scope">
						<el-button type="text" size="mini" @click="$refs.updateRef.openDialog(scope.row)">修改</el-button>
						<el-button type="text" size="mini" @click="$refs.processingRef.openDialog(scope.row)">异议处理登记</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="dialog">
			<add-publish-dialog title="新增发布及处理" ref="addRef" width="30%" @getFormData="networkAddData"></add-publish-dialog>
			<add-publish-dialog title="修改" ref="updateRef" width="30%" @getFormData="networkUpData"></add-publish-dialog>
			<processing-regist-dialog title="异议登记处理" ref="processingRef" width="30%" @getFormData="networkUpData"></processing-regist-dialog>
		</div>
	</div>
</template>
<script>
	// import __ from '__' // __是需要手动引入的文件
	import AddPublishDialog from "../dialog/PublishResultsTable/AddPublishDialog.vue"
	import ProcessingRegistDialog from "../dialog/PublishResultsTable/ProcessingRegistDialog.vue"
	import HeadRightButton from "../button/HeadRightButton.vue"
  import {mapState} from 'vuex'
  import {getDemand,addDemand,upDemand,delDemand} from '../../../../../../../api/workbench/webapi-biddingAgency.js'
	export default {
		components: {
			AddPublishDialog,
			ProcessingRegistDialog,
			HeadRightButton,
		},
		props: {
		  typeCode:''
		},
		watch: {},
    computed: {
      ...mapState('workbench', {
        currentItem: 'currentItem'
      })
    },
		//数据节点
		data() {
			return {
			  dataList:[],
				failActionTemplate: [{
						label: '流标原因',
						prop: 'pubobjectionDoWay'
					},
					{
						label: '发布网站',
						prop: 'pubobjectionWeb'
					},
					{
						label: '发布日期',
						prop: 'pubobjectiondateTime'
					},
				],
			}
		},
		//生命周期函数节点
		created() {
		  this.networkGetDataList()
		},
		//自定义函数节点
		methods: {
      networkGetDataList() {
        let ref = {
          projectKeyid: this.currentItem.keyid,
          publicityTypeKeyid: this.typeCode,
        }
        getDemand(ref).then(item => {
          this.dataList = item.data
        })
      },
      networkAddData(formData) {
        formData.projectKeyid = this.currentItem.keyid
        formData.publicityTypeKeyid = this.typeCode
        addDemand(formData).then(item => {
          if (item.code === 200) {
            this.$message.success(item.message)
            this.networkGetDataList()
          }
        })
      },
      networkUpData(formData) {
        upDemand(formData).then(item => {
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
	.b-main {
		height: 80%;
	}
</style>

<template>
  <div>
    <div class="table">
      <el-table :data="data"
              style="width: 100%"
              align="center"
              :height="height"
              highlight-current-row
              :header-cell-style="{fontSize:'14px'}">
        <el-table-column label="账号" align="center" width="50px" fixed="left">
          <template slot-scope="scope">
            <i :class="scope.row.isuserflage?'el-icon-user-solid':'el-icon-user'"
               :style="{color: scope.row.isuserflage?'#409EFF':'',cursor: 'pointer'}"
               @click="establishUser(scope.row)"></i>
          </template>
        </el-table-column>
        <el-table-column prop="personName" label="姓名" align="left" width="100px" fixed="left"></el-table-column>
        <el-table-column prop="gender" label="性别" align="center" width="50px"></el-table-column>
        <el-table-column prop="idCard" label="身份证号" align="center" width="150px"></el-table-column>
        <el-table-column prop="birthday" label="出生年月" align="center" width="100px"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center" width="50px"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="100px" align="center"></el-table-column>
        <el-table-column prop="personType" label="人员分类" align="center" width="100px"></el-table-column>
        <el-table-column prop="orgName" label="所属组织" align="center" width="250px"></el-table-column>
        <el-table-column prop="posName" label="岗位名称" align="center" width="100px"></el-table-column>
        <el-table-column prop="highesteducation" label="最高学历" align="center" width="100px"></el-table-column>
        <el-table-column prop="education" label="学历情况" align="center" width="100px">
          <template slot-scope="scope">
            <com-popover :data="scope.row.education" :label-prop="labelProp.educations"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="honors" label="荣誉情况" align="center" min-width="100px">
          <template slot-scope="scope">
            <com-popover :data="scope.row.honors" :label-prop="labelProp.honors"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="titles" label="职称情况" align="center" width="100px">
          <template slot-scope="scope">
            <com-popover :data="scope.row.titles" :label-prop="labelProp.titles"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="practices" label="执业情况" align="center" width="100px">
          <template slot-scope="scope">
            <com-popover :data="scope.row.practices" :label-prop="labelProp.practices"></com-popover>
          </template>
        </el-table-column>
        <el-table-column prop="isLaborContractEffective" label="劳动合同" align="center" width="100px">
          <template slot-scope="scope">
            {{scope.row.isLaborContractEffective?'已签订':'未签订'}}
          </template>
        </el-table-column>
        <el-table-column prop="isLabourServiceContractEffective" label="劳务合同" align="center" width="100px">
          <template slot-scope="scope">
            {{scope.row.isLabourServiceContractEffective?'已签订':'未签订'}}
          </template>
        </el-table-column>
        <el-table-column prop="isSignSecrecyTreaty" label="保密协议" align="center" width="100px">
          <template slot-scope="scope">
            {{scope.row.isSignSecrecyTreaty?'已签订':'未签订'}}
          </template>
        </el-table-column>
        <el-table-column prop="isSignPostDutyBook" label="岗位职责书" align="center" width="100px">
          <template slot-scope="scope">
            {{scope.row.isSignPostDutyBook?'已签订':'未签订'}}
          </template>

        </el-table-column>
        <el-table-column prop="isSignProhibitionTreaty" label="禁业合同" align="center" width="100px">
          <template slot-scope="scope">
            {{scope.row.isSignProhibitionTreaty?'已签订':'未签订'}}
          </template>

        </el-table-column>
        <el-table-column prop="isBuySocial" label="社保" align="center" width="100px">
          <template slot-scope="scope">
            {{scope.row.isBuySocial?'已购买':'未购买'}}
          </template>
        </el-table-column>
        <el-table-column prop="isBuyInsurance" label="其他保险" align="center" width="100px">
          <template slot-scope="scope">
            {{scope.row.isBuyOtherInsurance?'已购买':'未购买'}}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="left" header-align="center" min-width="230px" fixed="right">
          <template slot-scope="scope">
            <table-button :scope="scope.row" @click="tableBtnClick"></table-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <!--分页-->
      <pagination
              :pageTotal="total"
              @handleCurrentChange="handleCurrentChange"
              @handleSizeChange="handleSizeChange">
      </pagination>
    </div>
    <div class="dialog">
      <!--离职类型-->
      <quit-type-dialog ref="quitTypeRef" @getFormData="submitQuitForm"></quit-type-dialog>
      <!--工作提醒-->
      <work-remind-dialog ref="workRef"></work-remind-dialog>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import TableButton from './button/TableButton.vue'
  import pagination from '../../../../components/pagination/index.vue'
  import QuitTypeDialog from './dialog/QuitTypeDialog.vue'
  import WorkRemindDialog from './dialog/WorkRemindDialog.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('hrStore')

  export default {
    components: {
      TableButton,
      pagination,
      QuitTypeDialog,
      WorkRemindDialog
    },
    props: {
      dataList: {
        type: Array,
        default: () => {
          return []
        }
      },
      tableHeight: '',
      total: '',
    },
    watch: {
      dataList(newValue) {
        this.data = newValue
      },
      total(newValue) {
        this.total = newValue
      }
    },
    //数据节点
    data() {
      return {
        data: this.dataList,
        height: '7rem',//window.innerHeight - 250,
        pageShow: {
          page: 1,
          limit: 30,
        },
        labelProp: {
          educations: [
            {label: '学历名称', prop: 'name'},
            //{label:'学历类型',prop:'type'},
            {label: '毕业院校', prop: 'school'},
            {label: '毕业时间', prop: 'graduateTime'},
            {label: '所学专业', prop: 'major'},
          ],
          honors: [
            {label: '荣誉名称', prop: 'honorName'},
            {label: '获取时间', prop: 'obtainTime'},
          ],
          titles: [
            {label: '职称类别', prop: 'titleType'},
            {label: '职称级别', prop: 'titleLevel'},
            {label: '职称专业', prop: 'titleMajor'},
          ],
          practices: [
            {label: '执业类型', prop: 'practiceType'},
            {label: '专业一', prop: 'majorA'},
            {label: '专业二', prop: 'majorB'},
          ]
        },
        eType:[],
      }
    },
    //生命周期函数节点
    created() {
      this.getSelectByCode('002').then(item=>{
        this.eType=item.data
      })
    }
    ,
    //自定义函数节点
    methods: {
      ...mapActions({
        networkUpdateStatus: 'networkUpdateStatus',
        networkUpdateBasicInfo: 'networkUpdateBasicInfo'
      }),
      ...mapMutations({
        updatePersonId: 'updatePersonId',
      }),
      establishUser(data) {
        if (!data.isuserflage) {
          this.$msgbox.confirm('是否创建该用户账号？','创建系统账号',{

          }).then(()=>{
            data.isuserflage=true
          })

        }

      },
      getMaxEducations(array) {
        if (Array.isArray(array) && array.length>0) {
          let indexs = []

          array.forEach(item => {
            let index = this.eType.findIndex(ref => {
              return item.nameid = ref.keyid
            })
            indexs.push(index)
          })

          for (let i = 0; i < indexs.length; i++) {
            for (let j = 0; j < indexs.length - 1 - i; j++) {
              let temp = indexs[j]
              if (indexs[j] > indexs[j + 1]) {
                indexs[j] = indexs[j + 1]
                indexs[j + 1] = temp
              }
            }
          }
          let name =''
          if(indexs.length>0){
             name=this.eType[indexs[indexs.length - 1]].listname
          }

          return name
        }
      },
      handleCurrentChange(val) {
        this.pageShow.page = val;
        this.$emit('getPageInfo', this.pageShow)
      },
      handleSizeChange(val) {
        this.pageShow.limit = val;
        this.$emit('getPageInfo', this.pageShow)
      },
      tableBtnClick(val, data) {
        switch (val) {
          case 1:
            this.$msgbox.confirm('是否启用该人员?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              data.statusid = '0'
              data.statusname = '启用中'
              this.networkUpdateStatus(data)
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消'
              })
            })
            break
          case 2:
            this.$msgbox.confirm('是否停用该人员?', '提示', {
              showCancelButton: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              data.statusid = '1'
              data.statusname = '已停用'
              this.networkUpdateStatus(data)
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消'
              });
            });
            break
          case 3:
            this.$refs.quitTypeRef.openDialog(data)
            break
          case 4:
            this.updatePersonId(data.keyid)
            this.$router.push({path: '/HR/plat_manager'})
            break
          case 5:
            this.$refs.workRef.openDialog(data.keyid)
            break
          case 6:
            this.openAddSocialDialog(data)
            break
          case 7:
            break
        }
      },
      submitQuitForm(formData) {
        const name = formData.personName
        const reason = formData.separationcausesname
        this.$msgbox.confirm('请确认  <span style="color: #409EFF">' + name + '</span>  是否离职,离职原因：<span style="color: #FF5366">' + reason + '</span>。确认后将不可更改', '提示', {
          dangerouslyUseHTMLString: true,
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          formData.statusid = '2'
          formData.statusname = '离职-' + formData.separationcausesname
          this.networkUpdateStatus(formData)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });

      }
    }
  }
</script>
<style lang='less' scoped>
  .el-tag {
    cursor: pointer
  }
</style>

<template>
  <div class="body">
    <div class="card-head">
      <el-button class="btn_color" type="primary" size="mini" @click="$refs.upRef.openDialog(dataBasic)">完善信息</el-button>
    </div>
    <div class="card-main">
      <div class="column">
        <com-showinfo :data-base="dataBasic" :label-prop-list="infoArray" label="value"></com-showinfo>
      </div>
      <div class="column">
        <div class="table-el">
          <div class="table-el-head">
            <span style="font-size: 16px">前期阶段产生的客户联系人</span>
            <el-button type="text" size="mini" @click="$refs.contactsRef.openDialog()">
              <span>新增</span>
            </el-button>
          </div>
          <el-table
                  :data="contacts.dataList"
                  style="width: 100%"
                  align="center"
                  height="430px"
                  highlight-current-row
                  :header-cell-style="{fontSize:'14px'}">
            <el-table-column prop="name" label="客户联系人" align="left">
              <template slot-scope="scope">
                <i :class="scope.row.keycontacts?'el-icon-star-on':'el-icon-star-off'"
                   @click="signContactStatus(scope.row)"
                   :style="scope.row.keycontacts?'font-size: 19px;color: #409EFF':'font-size: 16px;color: #409EFF\''"></i>
                <span>{{scope.row.name}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="phone" label="联系人电话" align="center"></el-table-column>
            <el-table-column prop="department" label="联系人部门" align="center"></el-table-column>
            <el-table-column prop="post" label="联系人职务" align="center"></el-table-column>
            <el-table-column prop="操作" label="" align="center">
              <template slot-scope="scope">
                <el-button type="text" size="mini" @click="$refs.upContactsRef.openDialog(scope.row)">修改</el-button>
                <!--<el-button type="text" size="mini">删除</el-button>-->
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <up-basic-info-dialog ref="upRef" @getFormData="submitUpBasicInfoForm"></up-basic-info-dialog>
    <add-contacts-dialog ref="contactsRef" title="新增前期阶段客户联系人"
                         width="35%" @getFormData="submitAddContacts"></add-contacts-dialog>
    <add-contacts-dialog ref="upContactsRef" title="修改前期阶段客户联系人"
                         width="35%" @getFormData="submitUpContacts"></add-contacts-dialog>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import UpBasicInfoDialog from './dialog/UpBasicInfoDialog.vue'
  import AddContactsDialog from './dialog/AddContactsDialog.vue'
  import {createNamespacedHelpers} from 'vuex'

  const {mapState, mapGetters, mapMutations, mapActions} = createNamespacedHelpers('customerInfo')
  export default {
    components: {
      UpBasicInfoDialog,
      AddContactsDialog
    },
    props: {},
    watch: {

    },
    computed: {
      ...mapState({
        dataBasic: 'dataBasic',
        contacts: 'contacts',
      })
    },
    //数据节点
    data() {
      return {
        isImportant: false,
        upContacts: {},
        infoArray: [
          {key: 'customerName', value: '客户名称'},
          {key: 'address', value: '单位地址'},
          {key: 'region', value: '所属省市区'},
          {key: 'unitNature', value: '单位性质'},
          {key: 'isTaxpayer', value: '是否为一般纳税人',type:'boolean'},
          {key: 'isCreditCode', value: '是否有统一社会信用码',type:'boolean'},
          {key: 'creditCode', value: '统一社会信用代码'},
          {key: 'bank', value: '开户行'},
          {key: 'accountCode', value: '账号'},
          {key: 'invoiceAddress', value: '开票地址'},
          {key: 'invoicePhone', value: '开票电话'},
        ],
        index: 18
      }
    },
    //生命周期函数节点
    created() {
    },

    //自定义函数节点
    methods: {
      ...mapActions({
        networkUpCustomer: 'networkUpCustomer',
        networkAddContacts:'networkAddContacts',
        networkUpContacts:'networkUpContacts'
      }),
      submitUpBasicInfoForm(data) {
        this.networkUpCustomer(data)
      },
      submitAddContacts(data) {
        data.clientid=this.dataBasic.keyid
        this.networkAddContacts(data)
      },
      submitUpContacts(data) {
        this.networkUpContacts(data)
      },
      signContactStatus(oldData){
        let data=this.$myfunction.copyData(oldData)
        if (!data.keycontacts) {
          data.keycontacts=true
          this.$msgbox.confirm('是否标记该联系人？','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.networkUpContacts(data)
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            });
          })
        }else if (data.keycontacts) {
          data.keycontacts=false
          this.$msgbox.confirm('是否取消该联系人的标记？','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.networkUpContacts(data)
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消操作'
            });
          })
        }
      }
    }
  }
</script>
<style lang='less' scoped>
  .body {
    span {
      font-size: 16px;
    }
    .card-head {
      height: 30px;
      margin-bottom: 20px;
      .el-col {
        position: relative;
        height: 30px;
        line-height: 30px;
        span {
          font-size: 20px;
        }
        .el-button {
          position: absolute;
          top: 0;
          right: 0;
        }

      }
    }
    .card-main {
      display: flex;
      .column {
        flex: 2;
        &:nth-child(1) {
          position: relative;
          .show-data {
            width: 50%;
            p {
              height: 30px;
              line-height: 30px;
              font-size: 16px;
              margin-bottom: 10px;
            }
            &:nth-child(2) {
              position: absolute;
              top: 0;
              right: 0;
            }
          }
        }
        &:nth-child(2) {
          .table-el {
            background-color: #e7e8e9;
            padding: 10px;
            .table-el-head {
              position: relative;
              height: 30px;
              line-height: 30px;
              span {
                font-size: 14px;
              }
              .el-button {
                position: absolute;
                top: 0;
                right: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>

<template>
  <el-button v-if="!$myfunction.isEmpty(value)" type="text" @click="downloadFile">下载</el-button>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  //import 'file-saver'
  import {GetHttp} from "../../../utils/http";

  export default {
    components: {},
    props: {
      value: [String],
      baseId: [String],
      flowType: [String]
    },
    //生命周期函数节点
    created() {
    },
    mounted() {
      if (process.env.NODE_ENV === 'production') { //生产环境
        this.api = 'http://182.43.223.185:7777/hdpmwork/capi/'
      } else { //开发环境
        this.api = 'http://182.43.223.185:8080/hdpmwork/capi/'
      }
    },
    watch: {},
    //数据节点
    data() {
      return {
        api: ''
      }
    },
    //自定义函数节点
    methods: {
      async downloadFile() {
        let {data:fileName}=await GetHttp('java_post','mobile_uploader/fileDownname?filekeyid='+this.value)
        this.$http({
          method: 'get',
          url: "mobile_uploader/fileDown?filekeyid=" + this.value,
          responseType: 'blob'
        }).then(res => {
          console.log(res)
          const link = document.createElement('a')
          let blob = new Blob([res.data], {type: 'application/vnd.ms-excel'});
          console.log('fileName_', fileName)
          // return
          link.style.display = 'none'
          link.href = URL.createObjectURL(blob);
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        })

      },
    }
  }
</script>
<style lang='less' scoped>

</style>

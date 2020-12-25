<template>
  <div>
    <div class="head-button">
      <com-document code="TYPE-163"></com-document>
    </div>
  </div>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  import HeadRightButton from '../button/HeadRightButton.vue'
  import UploadButton from '../../../../../acomponents/UploadButton.vue'
  export default {
    components: {
      HeadRightButton,
      UploadButton
    },
    props: {},
    watch: {},
    //数据节点
    data() {
      return {
        show:false
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

</style>

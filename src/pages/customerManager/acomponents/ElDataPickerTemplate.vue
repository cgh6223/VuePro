<template>
  <el-date-picker
          v-model="value"
          :type="type"
          :format="format"
          :size="size"
          :value-format="valueType"
          :placeholder="placeholder">
  </el-date-picker>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      clazz: '',
      model: '',
      separator: {
        type: String,
        default: '-'
      },
      type: {
        type: String,
        default: 'date'
      },
      valueType: {
        type: String,
        default: 'yyyy/MM/dd'
      },
      size: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: '选择日期'
      }
    },
    model: {
      prop: 'model',
      event: 'getValue'
    },
    watch: {
      model(newValue) {
        this.value = newValue
      },
      value(newValue) {
        this.submit(newValue)
      }
    },
    mounted() {
      this.value = this.model
    },
    //数据节点
    data() {
      return {
        value: '',
        format: 'yyyy' + this.separator + 'MM' + this.separator + 'dd'
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      submit(value) {
        this.$emit('getValue', value)
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

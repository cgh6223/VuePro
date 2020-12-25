<template>
  <el-date-picker
          style="width: 100%"
          v-model="value"
          :type="type"
          align="right"
          unlink-panels
          range-separator="-"
          :format="format"
          :value-format="valueFormat"
          start-placeholder="开始日期"
          end-placeholder="结束日期" @change="handleClick">
  </el-date-picker>
</template>
<script>
  // import __ from '__' // __是需要手动引入的文件
  export default {
    components: {},
    props: {
      model: '',
      valueType: {
        type: String,
        default: 'string'
      },
      type: {
        type: String,
        default: 'daterange'
      },
    },
    model: {
      prop: 'model',
      event: 'getValue'
    },
    watch: {
      model(newValue) {
        if (this.valueType === 'string') {
          this.value = newValue.split('-')
        } else {
          this.value = newValue
        }
      },
      value(newValue, oldValue) {
        if (newValue.length > 2) {
          newValue.splice(2)
        }
      }
    },
    mounted() {
      switch (this.type) {
        case 'datetimerange':
          this.format = 'yyyy/MM/dd HH:mm'
          this.valueFormat = 'yyyy/MM/dd HH:mm'
          break
        case 'daterange':
          this.format = 'yyyy/MM/dd'
          this.valueFormat = 'yyyy/MM/dd'
          break
        case 'monthrange':
          this.format = 'yyyy/MM'
          this.valueFormat = 'yyyy/MM'
          break
        default:
          this.format = 'yyyy/MM/dd'
          this.valueFormat = 'yyyy/MM/dd'
          break
      }
      if (!Array.isArray(this.model) && !this.$myfunction.isEmpty(this.model)) {
        this.value = this.model.split('-')
      } else {
        this.value = this.model
      }
    },
    //数据节点
    data() {
      return {
        value: [],
        format: 'yyyy/MM/dd',
        valueFormat: 'yyyy/MM/dd'
      }
    },
    //生命周期函数节点
    created() {
    },
    //自定义函数节点
    methods: {
      handleClick(newValue) {
        if (this.valueType === 'string') {
          this.$emit('getValue', newValue.join('-'))
        } else {
          this.$emit('getValue', newValue)
        }
      }
    }
  }
</script>
<style lang='less' scoped>

</style>

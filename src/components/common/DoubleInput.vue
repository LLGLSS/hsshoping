<template>
    <div class="doubleInput">
        <input type="text" v-bind:value="val1" id="text1" @input="changeText">输入框1
        <input type="text" v-bind:value="val2" id="text2" @input="changeText">输入框2
    </div>
</template>
<script>
export default {
  data () {
    return {
      val1: '',
      val2: '',
      text: ''
    }
  },
  methods: {
    changeText () {
      const val1 = document.getElementById('text1').value
      const val2 = document.getElementById('text2').value
      this.text = val1 + val2
      console.log(this.text)
    }
  }
}
</script>
<style lang="less" scoped>
</style>

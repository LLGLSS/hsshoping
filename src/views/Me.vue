<template>
    <div id="me">
        <Top :header="'华杉购物'"></Top>
        <div>个人中心</div>
        <Todo></Todo>
        <info-list></info-list>
        <double-input></double-input>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Top from '@/components/common/Top'
import Tabbar from '@/components/common/Tabbar'
import Todo from '@/components/me/Todo'
import InfoList from '@/components/me/InfoList'
import DoubleInput from '@/components/common/DoubleInput'

export default {
  data () {
    return {
    }
  },
  components: {
    Top,
    Tabbar,
    Todo,
    InfoList,
    DoubleInput
  },
  mounted () {
    console.log(this)
  }
}
</script>
<style lang="less" scoped>
</style>

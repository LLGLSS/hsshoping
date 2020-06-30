<template>
    <div id="cart">
        <Top :header="'华杉购物'"></Top>
        <div>我是购物车页面</div>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Top from '@/components/common/Top'
import Tabbar from '@/components/common/Tabbar'
export default {
  components: {
    Top,
    Tabbar
  }
}
</script>
<style lang="less" scoped>
</style>

<template>
    <div id="cart">
        <Top :header="'购物车'"></Top>
        <cart-list></cart-list>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Top from '@/components/common/Top'
import Tabbar from '@/components/common/Tabbar'
import CartList from '@/components/cart/CartList'
export default {
  components: {
    Top,
    Tabbar,
    CartList
  }
}
</script>
<style lang="less" scoped>
#cart{
  background-color: rgb(245, 240, 240);
  height: 800px;
}
</style>

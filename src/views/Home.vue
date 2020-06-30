<template>
    <div id="home">
       <Top :header="'华杉购物'"></Top>
       <Swiper></Swiper>
       <Tabbar></Tabbar>
       <goods-show></goods-show>
    </div>
</template>
<script>
import Top from '@/components/common/Top'
import Swiper from '@/components/Home/Swiper'
import Tabbar from '@/components/common/Tabbar'
import GoodsShow from '@/components/Home/GoodsShow'
export default {
  components: {
    Top,
    Swiper,
    Tabbar,
    GoodsShow
  }
}
</script>
<style lang="less" scoped>
</style>

<template>
    <div id="home">
       <Top :header="'华杉购物'"></Top>
       <Swiper></Swiper>
    </div>
</template>
<script>
import Top from '@/components/common/Top'
import Swiper from '@/components/Home/Swiper'
export default {
  components: {
    Top,
    Swiper
  }
}
</script>
<style lang="less" scoped>

</style>

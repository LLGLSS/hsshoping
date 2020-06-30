<template>
  <div id="GoodsShow">
      <div class="goodsTitle">商品展示</div>
      <Goods></Goods>
  </div>
</template>
<script>
import Goods from '@/components/Home/Goods'
export default {
  components: {
    Goods
  }
}
</script>
<style lang="less" scoped>
#GoodsShow{
  .goodsTitle{
    text-align: center;
    margin-top: 4px;
    padding-bottom: 5px;
  }
}
</style>

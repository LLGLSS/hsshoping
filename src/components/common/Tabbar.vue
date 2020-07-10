<template>
  <div id="tab-bar">
    <div class="wrapper">
      <div class="itemIcon" @click="itemClick('/')" :class="{colorRed:'/'===$route.path}">
        <i class="el-icon-s-home"></i>
        <div class="item-text">首页</div>
      </div>
      <div class="itemIcon" @click="itemClick('/Category')" :class="{colorRed:'/Category'===$route.path}">
        <i class="el-icon-menu"></i>
        <div class="item-text">分类</div>
      </div>
      <div class="itemIcon"  @click="itemClick('/Cart')" :class="{colorRed:'/Cart'===$route.path}">
        <i class="el-icon-shopping-cart-2"></i>
        <div class="item-text">购物车</div>
      </div>
      <div class="itemIcon"  @click="itemClick('/Me')" :class="{colorRed:'/Me'===$route.path}">
        <i class="el-icon-s-custom"></i>
        <div class="item-text">我的</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
  data () {
    return {
    }
  },
  methods: {
    itemClick (path) {
      this.$router.push(path)
      // if (path === '/') {
      //   this.$router.push(path)
      // } else {
      //   this.$router.push('/Login')
      // }
    }
  }
}
</script>
<style lang="less" scoped>
#tab-bar{
  background-color: #f6f6f6;
  box-shadow: 0px -1px 7px rgb(100,100,100,0.2);
  height: 49px;
  position: fixed;
  width: 100%;
  bottom: 0;
  .colorRed{
    color:red;
  }
  .wrapper{
    padding-top: 8px;
    display: flex;
    text-align: center;
    .itemIcon{
      flex: 1;
      .item-text{
      font-size: 14px;
      }
    }
  }
}
</style>

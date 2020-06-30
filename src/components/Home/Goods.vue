<template>
    <div id="Goods">
        <div v-for="(item) in goodList" :key="item.id" class="goodItem">
            <!-- <a :href="item.img">{{item.img}}</a> -->
            <img :src="item.img">
            <div class="goodsInfo">
                <div class="goodsTitle">{{item.name}}</div>
                <div class="goodsPS">
                  <span class="goodsSales">￥ {{item.sales}}</span>
                  <span class="goodsPrice">price: {{item.price}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      goodList: []
    }
  },
  methods: {
    resetPicture () {}
  },
  mounted () {
  },
  created () {
    axios.get('http://101.200.63.147:3001/ecshop/commodities').then(value => {
      console.log(value)
      this.goodList = value.data.data
      console.log(this.goodList)
    }).catch(reason => {
      console.log(reason)
    })
  }
}
</script>
<style lang="less" scoped>
#Goods{
  width: 100%;
  background-color: skyblue;
  display: flex;
  flex-flow:row wrap;
  align-content: flex-start;
  .goodItem{
    height: 360px;
    background-color: palegreen;
    flex: 0 0 50%;
    img{
      width: 170px;
      height: 170px;
    }
    .goodsInfo{
      height: 94px;
      .goodsTitle{
        height: 55px;
        font-size: 15px;
      }
      .goodsPS{
        margin-top: 5px;
        height: 20px;
        .goodsSales{
          font-weight: bold;
          font-size: 15px;
          color: red;
          margin-right: 10px;
        }
        .goodsPrice{
          font-size: 8px;
          text-decoration:line-through
        }
      }
    }
  }
}
</style>

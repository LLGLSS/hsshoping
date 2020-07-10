<template>
    <div id="Goods">
        <div v-for="(item) in goodList" :key="item.id" class="goodItem">
            <!-- <a :href="item.img">{{item.img}}</a> -->
            <img v-lazy="item.img" @click="addGood(item.id)">
            <div class="goodsInfo">
                <div class="goodsTitle">{{item.name}}</div>
                <div class="goodsPS">
                  <span class="goodsPrice">￥ {{item.price}}</span>
                  <span class="goodsSales">销量: {{item.sales}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      goodList: [],
      hotGoodList: []
    }
  },
  methods: {
    ...mapMutations(['addGoods', 'goodsInfo']),
    addGood (id) {
      // console.log(id)
      this.addGoods(id)
    }
  },
  computed: {
    // ...mapState(['goodsInfo'])
  },
  created () {
    axios.get('http://101.200.63.147:3001/ecshop/commodities').then(value => {
      // console.log(value)
      this.goodList = value.data.data
      this.goodsInfo(this.goodList)
      // console.log(this.goodList)
    }).catch(reason => {
      console.log(reason)
    })
  }
}
</script>
<style lang="less" scoped>
#Goods{
  width: 100%;
  // background-color: rgb(245, 240, 240);
  display: flex;
  flex-flow:row wrap;
  justify-content: space-around;
  .goodItem{
    background-color: white;
    height: 245px;
    width: 45vw;
    border-radius: 6px;
    margin-bottom: 8px;
    img{
      width: 150px;
      height: 170px;
      margin-bottom: 8px;
    }
    .goodsInfo{
      font-size: 12px;
      color: #333333;
      height: 94px;
      width: 150px;
      .goodsTitle{
        font-size: 14px;
        overflow: hidden;
        margin-bottom: 5px;
        // text-overflow: ellipsis;
        -webkit-box-orient:vertical;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .goodsPS{
        height: 20px;
        .goodsPrice{
          font-weight: bold;
          font-size: 15px;
          color: red;
          margin-right: 10px;
        }
        .goodsSales{
          font-size: 8px;
        }
      }
    }
  }
}
</style>

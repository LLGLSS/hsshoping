<template>
  <div id="CartList">
    <div class="wrapper">
      <div class="goodsList" v-for="(item) in cartList" :key="item.id">
        <div class="goodsItem">
          <div class="checkGood">
            <div class="check" @click="checked(item.id)">
              <Checkbox :choosed="item.checked"></Checkbox>
            </div>
          </div>
          <img v-lazy="item.img"/>
          <div class="goodsDescribe">
            <div class="goodsTitle">{{item.name}}</div>
            <div class="priceNumber">
              <span class="price">￥ {{item.price}}</span>
              <span class="number">
                <el-input-number size="mini" v-model="item.number" @change="handleChange" :min="1"></el-input-number>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <span class="fl">
          <span @click="checkedAll()">
            <Checkbox :choosed="checkAll"></Checkbox>
          </span>
          <span class="checkAll" @click="checkedAll()">全选</span>
        </span>
        <span class="fr">
          <span class="total">
            合计:
            <span class="totalPrice">￥{{caculatePrice}}</span>
          </span>
          <span class="settlement">
            <el-button type="danger" round>结算</el-button>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Checkbox from '@/components/cart/Checkbox'
import { mapMutations, mapState } from 'vuex'
// import { localAdd, localRead } from '../../common/localStorage'
export default {
  data () {
    return {
      cartList: [],
      checkAll: false
    }
  },
  components: {
    Checkbox
  },
  methods: {
    handleChange (value) {
      console.log(value) // 计数器中的值
      this.$store.commit('updateGoodsNumber', value) // 改变仓库中的数据
    },
    ...mapMutations(['checkedGood', 'checkedAllGoods']), // 选中购物车单个商品
    checked (goodsId) {
      // console.log(goodsId)
      this.checkedGood(goodsId)
    },
    checkedAll () {
      // console.log(this.checkAll)
      this.checkAll = !this.checkAll
      this.checkedAllGoods(this.checkAll)
    }
  },
  computed: {
    ...mapState({
      goodsCartInfo: state => state.goodsCartInfo
    }),
    caculatePrice () {
      return this.$store.getters.caculatePrice
    }
  },
  created () {
    this.cartList = this.goodsCartInfo // 初始化渲染购物车页面
  }
}
</script>
<style lang="less" scoped>
#CartList {
  padding: 10px;
  .wrapper {
    // height: 800px;
    background-color: rgb(187, 211, 223);
    .goodsList {
      // height: 400px;
      background-color: #99e0e6;
      .goodsItem {
        // background-color:  rgb(245, 240, 240);
        position: relative;
        background-color: white;
        width: 100%;
        height: 140px;
        .checkGood {
          left: 3px;
          position: absolute;
          top: 60px;
          // background-color: whitesmoke;
        }
        img {
          top: 14px;
          left: 29px;
          position: absolute;
          width: 108px;
          height: 115px;
        }
        .goodsDescribe {
          left: 146px;
          position: absolute;
          width: 210px;
          height: 140px;
          // background-color: wheat;
          .goodsTitle {
            font-size: 17px;
            padding-top: 10px;
            padding-bottom: 15px;
            padding-left: 10px;
            padding-right: 5px;
          }
          .priceNumber {
            .price {
              color: red;
              margin-right: 20px;
            }
            .number {
              position: absolute;
            }
          }
        }
      }
    }
    .footer {
      display: flex;
      position: fixed;
      bottom: 50px;
      width: 100%;
      margin-right: 5px;
      background-color: #f6f6f6;
      height: 60px;
      justify-content: space-between;
      .fl {
        margin-left: 15px;
        margin-top: 10px;
        .checkAll {
          font-size: 15px;
        }
      }
      .fr {
        font-size: 18px;
        margin-top: 10px;
        margin-right: 25px;
        .total {
          margin-right: 20px;
          .totalPrice {
            color: rgba(240, 32, 32, 0.877);
          }
        }
      }
    }
  }
}
</style>

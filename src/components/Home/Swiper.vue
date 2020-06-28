<template>
    <div id="swiper">
        <div class="showArea">
            <div class="swiperPictures" :style="swiperStyle">
                <div class="picture"><img src="http://101.200.63.147:3001/ecshop/images/swiper01.jpg" alt=""></div>
                <div class="picture"><img src="http://101.200.63.147:3001/ecshop/images/swiper02.jpg" alt=""></div>
                <div class="picture"><img src="http://101.200.63.147:3001/ecshop/images/swiper03.jpg" alt=""></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      nowleft: 0,
      swiperStyle: { left: '0px' }
    }
  },
  methods: {
    moveStart () {
      this.nowleft -= 4
      this.swiperStyle.left = this.nowleft + 'px'
    }
  },
  mounted () {
    setInterval(this.moveStart, 70)
  }
}
</script>
<style lang="less" scoped>
#swiper{
    margin-top: 5px;
    .showArea{
        position: relative;
        height: 200px;
        background-color: skyblue;
        .swiperPictures{
            width: 300vw;
            position: absolute;
            // left:0px;
            text-align: center;
            height: 200px;
            .picture{
                line-height: 200px;
                float: left;
                img{
                    width: 100vw;
                    height: 200px;
                }
            }
        }
    }
}
</style>

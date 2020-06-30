<template>
    <div id="swiper">
        <div class="showArea">
            <div class="swiperPictures" id="swiperPicture">
                <div class="picture"><img src="http://101.200.63.147:3001/ecshop/images/swiper01.jpg" alt=""></div>
                <div class="picture"><img src="http://101.200.63.147:3001/ecshop/images/swiper02.jpg" alt=""></div>
                <div class="picture"><img src="http://101.200.63.147:3001/ecshop/images/swiper03.jpg" alt=""></div>
                <div class="picture"><img src="http://101.200.63.147:3001/ecshop/images/swiper01.jpg" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
import MySwiper from '../../common/swiper'
export default {
  data () {
    return {}
  },
  mounted () {
    MySwiper('swiperPicture', 375, 3)
  }
}
</script>
<style lang="less" scoped>
#swiper{
    margin-top: 5px;
    .showArea{
        overflow: hidden;
        position: relative;
        height: 200px;
        background-color: skyblue;
        .swiperPictures{
            width: 400vw;
            position: absolute;
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

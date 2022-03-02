<template>
<div class="container">
  <div class="row mt-5 p-0 m-0">
  <div class="col-12">
    <div class="thumb-example">
      <!-- swiper1 -->
      <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide class="slide-1"><div class="title"><h2>環狀運動區</h2></div></swiper-slide>
        <swiper-slide class="slide-2"><div class="title"><h2>伸展運動區</h2></div></swiper-slide>
        <swiper-slide class="slide-3"><div class="title"><h2>更衣間與化妝室</h2></div></swiper-slide>
        <swiper-slide class="slide-4"><div class="title"><h2>展示櫃與休息區</h2></div></swiper-slide>
        <swiper-slide class="slide-5"><div class="title"><h2>置物櫃</h2></div></swiper-slide>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="col-8 mt-5 mx-auto">
    <h2 class="text-center mb-5" style="color: rgb(40,174,147);">活動空間</h2>
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="環狀運動區">
          <b-card-img bottom src="./images/器材示範.jpg" alt="Image 25"></b-card-img>
          <b-card-footer>主要運動的區域，已一個環狀的方式陳列健身器材，器材和器材間會有個踏板，
            作為在器材間踏步休息用，運動是循環式的，將所有的健身器材做兩圈，大約要24分鐘，做運動的同時，
            會有音樂，每30秒會提醒更換到下一個器材，每8分鐘停一次，站在原地測量脈搏，牆上會有心跳數對照表，
            檢查自己的運動狀態，教練會詢問並給予建議，告訴你增加或減少到怎樣的強度會更好。</b-card-footer>
        </b-tab>

        <b-tab no-body title="伸展運動區">
          <b-card-img bottom src="./images/伸展操.jpg"></b-card-img>
          <b-card-footer>依圖做伸展操。</b-card-footer>
        </b-tab>

        <b-tab no-body title="更衣間與化妝室">
          <b-card-img bottom src="./images/服裝守則.jpg"></b-card-img>
          <b-card-footer>採開放式，依服裝守則更換適合運動的裝束，衣架可掛外套。</b-card-footer>
        </b-tab>

        <b-tab no-body title="展示櫃與休息區">
          <b-card-img bottom src="./images/百日紀念服.jpg"></b-card-img>
          <b-card-footer>
            展示櫃上陳列百日紀念T-shirt，每累積運動達百次時會贈送，非常有紀念價值。還有水壺、手套、運動毛巾...等商品。
          </b-card-footer>
        </b-tab>

        <b-tab title="置物櫃">
          <b-card-title>鞋櫃與置物櫃</b-card-title>
          <b-card-text>
            這區左側的藍色小櫃子，是會員專屬鞋櫃，不同方案會有優惠，年繳的會員(信用卡扣款)，健身中心會免費提供鞋櫃，其他則可以用月租的方式。<br>
            這區右側的綠色小櫃子，可放當天所攜帶的隨身物品。
          </b-card-text>
        </b-tab>

      </b-tabs>
    </b-card>
  </div>
</div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 'Thumbs gallery with Two-way control',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="scss" scoped>
.thumb-example {
  height: 600px;
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
    .title{
      background-color: blanchedalmond;
      text-align: center;
      color: purple;
    }

    &.slide-1 {
      background-image:url('~@/assets/images/環狀運動01.jpg');
    }
    &.slide-2 {
      background-image:url('~@/assets/images/伸展區.jpg');
    }
    &.slide-3 {
      background-image:url('~@/assets/images/更衣室.jpg');
    }
    &.slide-4 {
      background-image:url('~@/assets/images/展示櫃.jpg');
    }
    &.slide-5 {
      background-image:url('~@/assets/images/置物櫃.jpg');
    }
  }

  &.gallery-top {
    height: 70%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 30%;
    box-sizing: border-box;
    padding:  0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>

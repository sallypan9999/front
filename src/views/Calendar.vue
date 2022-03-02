<template>
<div class="container">
  <div class="row mt-5"><img class="calendar" src="../assets/images/02.jpg"></div>
  <div class="row mt-5">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img src="../assets/images/cb90.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/announcement.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/activity.jpg"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-centered-auto',
  title: 'Centered slides + Auto slides per view',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar{
  width: 100%;
}
.swiper-slide {
    width: 60%;
    height: calc(250px + 12vw);
    img{
      height: 100%;
      width: 100%;
    }
  }
  .swiper-slide:nth-child(2n) {
    width: 30%;
  }
  .swiper-slide:nth-child(3n) {
    width: 30%;
  }
</style>

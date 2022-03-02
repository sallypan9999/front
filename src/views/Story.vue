<template>
<div class="container">
  <div class="row mt-5">
    <div class="col-md-6 col-lg-3">
    <vue-pure-lightbox
    style="width: 400px; height: 300px;"
    thumbnail="./post/post_purple.png"
    :images="[
      './post/s_1.jpg',
      './post/s_2.jpg',
      './post/s_3.jpg',
      './post/s_4.jpg',
      './post/s_5.jpg'
    ]"
  ></vue-pure-lightbox>
    </div>
  </div>
</div>
</template>

<script>
import VuePureLightbox from 'vue-pure-lightbox'
/* @vue/component */
export default {
  components: {
    // ...
    VuePureLightbox
  }
}
</script>

<style>
  @import url('https://unpkg.com/vue-pure-lightbox/dist/VuePureLightbox.css');
  .lightbox__image {
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .lightbox__image img {
    width: calc(100px + 20vw);
  }
  .lightbox__default-loader{
    display: none;
  }
</style>

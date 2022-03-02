<template>
<div class="container">
  <div class="row mt-5">
    <div class="col-md-6 col-lg-3">
    <vue-pure-lightbox
    style="width: 300px; height: 300px;"
    thumbnail="./post/post_blue.png"
    :images="[
      './post/b_1.jpg',
      './post/b_2.jpg',
      './post/b_3.jpg',
      './post/b_4.jpg',
      './post/b_5.jpg'
    ]"
  ></vue-pure-lightbox>
    </div>
    <div class="col-md-6 col-lg-3">
    <vue-pure-lightbox
    style="width: 300px; height: 300px;"
    thumbnail="./post/post_red.png"
    :images="[
      './post/r_1.jpg',
      './post/r_2.jpg',
      './post/r_3.jpg',
      './post/r_4.jpg',
      './post/r_5.jpg'
    ]"
  ></vue-pure-lightbox>
    </div>
    <div class="col-md-6 col-lg-3">
    <vue-pure-lightbox
    style="width: 300px; height: 300px;"
    thumbnail="./post/post_green.png"
    :images="[
      './post/g_1.jpg',
      './post/g_2.jpg',
      './post/g_3.jpg',
      './post/g_4.jpg',
      './post/g_5.jpg'
    ]"
  ></vue-pure-lightbox>
    </div>
    <div class="col-md-6 col-lg-3">
    <vue-pure-lightbox
    style="width: 300px; height: 300px;"
    thumbnail="./post/post_info.png"
    :images="[
      './post/in_1.jpg',
      './post/in_2.jpg',
      './post/in_3.jpg',
      './post/in_4.jpg',
      './post/in_5.jpg'
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
    width: calc(300px + 40vw);
  }
  .lightbox__default-loader{
    display: none;
  }
</style>

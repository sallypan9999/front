<template lang="pug">
#home
  Video
  Space
  Slogan
  Footer
</template>

<script>
import Video from '../components/Video.vue'
import Space from '../components/Space.vue'
import Slogan from '../components/Slogan.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Video,
    Space,
    Slogan,
    Footer
  }
  // data () {
  //   return {}
  // },
  // methods: {},
  // mounted: {
  //   gsap
  // }
}
</script>

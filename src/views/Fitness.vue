<template lang="pug">
#fitness
  b-row.mask
    <video autoplay muted allowfullscreen id="myVideo">
      <source src="../assets/images/運動服飾.mp4" type="video/mp4">
    </video>
  b-row.d-flex.justify-content-center.my-3
      b-tabs(pills)
        b-tab(title='全部商品' active  @click="filter = ''")
        b-tab(title='限時限量預售中' @click="filter = '限時限量預售中'")
        b-tab(title='聯名商品' @click="filter = '聯名商品'")
        b-tab(title='乳清蛋白' @click="filter = '乳清蛋白'")
        b-tab(title='運動好夥伴' @click="filter = '運動好夥伴'")
  b-container
    b-row.mb-5
      b-col(cols='12' md='6' lg='3' v-for='product in filterItems' :key='product._id')
        ProductCard(:product='product')
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: [],
      filter: ''
    }
  },
  computed: {
    filterItems () {
      return this.products.filter(item => {
        if (this.filter === '') return true
        return item.category === this.filter
      })
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '商品取得失敗'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mask{
  background-color: rgba(40,174,147,0.2);
    #myVideo{
      width: 100%;
      height: 400px;
    }
}

.nav-link.active {
  color: #fff;
  background-color: rgb(40,174,147) !important;
}

</style>

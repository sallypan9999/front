<template lang="pug">
b-container#product.mt-5
  b-overlay(:show='!sell')
    template(#overlay)
      h1 商品已下架
    .content
      b-row.w-50
        img.w-100(:src='image')
      b-row.w-50.px-5
        b-col(cols='12')
          h2 {{ name }}
          h4 ${{price}}
          p(style='white-space: pre') {{ description }}
          .line
        b-col(cols='3')
          b-form-input.pattern(type='number' v-model.number='quantity' :state='quantityState' min='0')
        b-col(cols='4')
          b-btn.vary(@click='addCart') 加入購物車
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      description: '',
      image: '',
      sell: false,
      category: '',
      quantity: 0
    }
  },
  methods: {
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity })
    }
  },
  computed: {
    quantityState () {
      return this.quantity === 0 ? null : this.quantity > 0
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.category = data.result.category
      document.title = `${this.name} | 商品`
    } catch (error) {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.content{
  width: 100%;
  display: flex;
  .line{
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,0.5);
  }
  .pattern{
    width: 100px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
  }
  .vary{
    height: 50px;
    color: white;
    background-color: rgb(40,174,147);
    border: none;
    &:hover{
      background-color: rgb(244,155,78);
    }
  }
}
</style>

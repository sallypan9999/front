<template lang="pug">
#app
  b-navbar.nav-style.px-5(toggleable='lg')
    b-navbar-brand(to="/")
      b-img.logo(src="./assets/images/logo.png")
    b-navbar-toggle(target='nav-collapse')
    b-collapse#nav-collapse(is-nav)
      b-navbar-nav.m-auto.nav-style
        b-nav-item(to="/calendar") 行事曆
        b-nav-item(to="/article") 健康快樂雲
        b-nav-item(to="/exercisespace") 活動空間
        b-nav-item(to="/story") 成果分享
        b-nav-item(to="/fitness") 商品
      b-navbar-nav
        b-nav-item-dropdown(id="my-nav-dropdown" text="會員專區" toggle-class="nav-link-custom" right)
          b-dropdown-item.text-center(v-if="!user.isLogin" v-b-modal.modal-1) 註冊&nbsp;&nbsp;
            font-awesome-icon(:icon="['fas', 'user-plus']")
            b-modal#modal-1(hide-footer title='歡迎加入 Curves 石牌店')
              Register
          b-dropdown-item.text-center(v-if="!user.isLogin" v-b-modal.modal-2) 登入&nbsp;&nbsp;
            font-awesome-icon(:icon="['fas', 'user-large']")
          b-modal#modal-2(hide-footer title='親愛的會員，您好')
            Login
          b-dropdown-item.text-center(v-if="user.isLogin" to='/orders') 訂單&nbsp;&nbsp;
            font-awesome-icon.icon-size(:icon="['fas', 'clipboard-list']")
        b-nav-item(v-if="user.isLogin" to='/cart')
          font-awesome-icon.icon-size(:icon="['fas', 'cart-shopping']")
          b-badge(variant='danger') {{ user.cart }}
        b-nav-item-dropdown(v-if="user.isLogin && user.isAdmin" id="my-nav-dropdown" text="管理" toggle-class="nav-link-custom" right)
          b-dropdown-item.text-center(to="/admin/products") 商品管理
          b-dropdown-item.text-center(to="/admin/orders") 訂單管理
        b-nav-item.pl-5(v-if="user.isLogin" @click="logout")
          font-awesome-icon.icon-size(:icon="['fas', 'right-from-bracket']")
  router-view(:key='$route.fullPath')
</template>

<script>
import Login from './views/Login'
import Register from './views/Register'
export default {
  components: { Login, Register },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>

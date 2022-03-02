import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios.js'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixin from './mixin.js'
import '../scss/style.scss'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser, faUserPlus, faUserLarge, faRightFromBracket, faCartShopping, faCartArrowDown, faClipboardList, faInfoCircle, faTimes, faGlobe, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleUser, faUserPlus, faUserLarge, faRightFromBracket, faCartShopping, faCartArrowDown, faClipboardList, faInfoCircle, faTimes, faGlobe, faLocationDot, faPhone, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('ImgInputer', ImgInputer)
Vue.use(VueSweetalert2)
Vue.mixin(mixin)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

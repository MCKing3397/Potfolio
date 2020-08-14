import Vue from 'vue'
import App from './App.vue'
import Header from './Head.vue'
import Footer from './Footer.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueGtag from "vue-gtag"
import 'bulma/css/bulma.css'
Vue.use(vueSmoothScroll)

Vue.use(VueGtag, {
  config: { id: "UA-175459186-1" }
});

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Header),
}).$mount('#vue_header')

new Vue({
  render: h => h(Footer),
}).$mount('#vue_footer')

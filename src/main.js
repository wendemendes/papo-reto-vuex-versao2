import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import EmissaoNotaFiscal from "./components/EmissaoNotaFiscal.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
	routes: [
    
   {
			path: "/emissaonota",
			component: EmissaoNotaFiscal
		},
		{
			path: "/",
			redirect: "/emissaonota"
    }
	]
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

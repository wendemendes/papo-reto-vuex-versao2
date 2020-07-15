import Vue from 'vue'
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from './App.vue'
import EmissaoNotaFiscal from "./components/EmissaoNotaFiscal.vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import apiProduto from "./api/produto";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		mensagemErro: "",
		produtos: [],
		itensNotaFiscal: []
	},
	mutations: {

		adicionarProduto(state, payload) {
			const { produto } = payload;

			if (produto == null) {
				state.mensagemErro = "Selecione um produto valido para adicionar na nota";
				return false
			}

			state.itensNotaFiscal.push(produto);
		},
		removerProduto(state, payload) {

			const { index } = payload;
			state.itensNotaFiscal.splice(index, 1);
		}
	},
	getters: {
	},

	actions: {

		async getProdutos(context, payload) {

			context.state.produtos = apiProduto.getProdutos();

		},

		async adicionarProduto(context, payload) {
			const produto = payload;

			context.commit("adicionarProduto", { produto });

		},

		async removerProduto(context, payload) {
			const index = payload;

			context.commit("removerProduto", { index });

		},


		async produto(context, payload) {

			let newValue = payload

			if (newValue = ! null) {
				context.state.mensagemErro = "";
			}
		},


	}
});

Promise.all([
	store.dispatch("getProdutos")
]).then(() => {

});


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
	store,
	render: h => h(App),
}).$mount('#app')

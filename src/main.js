import Vue from 'vue'
import VueRouter from 'vue-router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import App from '@/App.vue'
import Index from '@/components/Index.vue'
import Tech from '@/components/tech/Tech.vue'
import Front from '@/components/tech/Front.vue'
import NotFound from '@/components/public/NotFound.vue'

// requireComponent.keys().forEach(fileName => {
// 	const componentConfig = requireComponent(fileName)
// 	const componentName = upperFirst(
// 		camelCase(
// 			fileName.split('/')
// 				.pop()
// 				.replace(/\.\w+$/, '')
// 		)
// 	);
// 	Vue.component(
// 		componentName,
// 		componentConfig.default || componentConfig
// 	);
// });

Vue.use(VueRouter)
Vue.config.productionTip = false

const requireComponent = require.context(
	"./components/public",
	false,
	/Base[A-Z]\w+\.(vue|js)$/
);

const routers = new VueRouter({
	routes: [{
		path: '/home',
		name: 'Index',
		component: Index
	},{
		path: '/index',
		name: 'Index',
		component: Index
	},{
		path: '/tech',
		name: 'Tech',
		component: Tech,
		children: [{
			path: '/front',
			name: 'Front',
			component: Front
		}]
	},{
		path: '*',
		name: 'None',
		component: NotFound
	}]
});

new Vue({
	routes: routers,
	render: h => h(App),
}).$mount('#app');

$(function(){})
import Vue from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';


Vue.config.productionTip = false

const requireComponent = require.context(
	"./components/public",
	false,
	/Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName)
	const componentName = upperFirst(
		camelCase(
			fileName.split('/')
				.pop()
				.replace(/\.\w+$/, '')
		)

	);
	Vue.component(
		componentName,
		componentConfig.default || componentConfig
	);
});
new Vue({
	render: h => h(App),
}).$mount('#app')

$(function(){})
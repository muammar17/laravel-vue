require('./bootstrap');

window.Vue = require('vue').default;

import {Form, HasError, AlertError} from 'vform';
window.Form  = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import Vue from 'vue';
import VueRouter from 'vue-router';

import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dropdown from 'primevue/dropdown';

import 'primevue/resources/themes/saga-blue/theme.css'; // Choose a theme
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

// import App from './App.vue';
import store from './store';

Vue.use(VueRouter)

let routes = [
    {path: '/', component:require('./components/Filter/FilterSearchComponent.vue').default}
]

const router = new VueRouter({
    routes
})

Vue.use(PrimeVue);

Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('Dropdown', Dropdown);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store
});

Vue.config.productionTip = false;

// new Vue({
//     store,
//     render: h => h(app)
// }).$mount('#app');

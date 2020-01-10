/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router"
import Index from "./Index"

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component(
//     'example-component', 
//     require('./components/ExampleComponent.vue').default
//     );

// Vue.component(
//     'example-2', 
//     require('./components/Example2.vue').default
//     );


Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: router,
    components: {
        "index": Index
    }
});

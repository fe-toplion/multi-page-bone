import Vue from 'vue';
import App from './js/index.vue';



let vm = new Vue({
    el: '#container',
    render: h => h(App)
})


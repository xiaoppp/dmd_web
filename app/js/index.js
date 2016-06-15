import Vue from 'vue';
import myCom from '../components/my-com.vue'

new Vue({
    el: "#app",
    data: {
        message: "Hello,World!"
    }
});

Vue.component('my-com', myCom)
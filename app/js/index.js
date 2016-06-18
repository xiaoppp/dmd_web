import Vue from 'vue';
import VuePagination from 'vue-pagination';

import router from './router.config';

import Store from './store';
import './filters';
import './constants'

Vue.use(VuePagination);

let page = new VuePagination({
     pageSize: 10
});

//page.init();

const App = Vue.extend({
        props: {
            sid: {
                type: String,
                default: ""
            }
        },
        methods: {
        },
        created() {
        },
        components: {
        },
        store: Store 
    });

// start app
router.start(App, '#app')

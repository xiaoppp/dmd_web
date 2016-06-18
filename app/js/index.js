import Vue from 'vue';
import router from './router.config';

import Store from './store';
import './filters'

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

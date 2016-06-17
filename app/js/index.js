

import Vue from 'vue';
import VueRouter from 'vue-router';

import index from './views/index.vue';
import offer from './views/offer.vue';
import apply from './views/apply.vue';
import info from './views/info.vue';
import team from './views/team.vue';
import income from './views/income.vue';
import record from './views/record.vue';
import news from './views/news.vue';
import message from './views/message.vue';
import leavemsg from './views/leavemsg.vue';
import share from './views/share.vue';

load()

function load(params) {

    Vue.use(VueRouter);

    // Vue.filter('TaskIcon', (value) => {
    //     if (iconDic[value])
    //         return iconDic[value];
    // })

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
            // store.on('exchange', (info) => {
            //     this.showMessage(info);
            // });
        },
        components: {
            // messageBox: require('../widgets/messageBox.vue')
        }
    })

    const router = new VueRouter({
        history: false,
        hashbang: true,
        root: "app/index.html"
    });

    router.map({
        '/index': {
            component: index
        },
        '/offer': {
            component: offer
        },
        '/apply': {
            component: apply
        },
        '/info': {
            component: info
        },
        '/team': {
            component: team
        },
        '/income': {
            component: income
        },
        '/record': {
            component: record
        },
        '/news': {
            component: news
        },
        '/leavemsg': {
            component: leavemsg
        },
        '/message': {
            component: message
        },
        '/share': {
            component: share
        }
    })

    router.redirect({
        '*': '/index'
    })

    // start app
    router.start(App, '#app123')

}

import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../components/index.vue'
import offer from '../components/offer.vue'
import apply from '../components/apply.vue'
import info from '../components/info.vue'
import team from '../components/team.vue'
import income from '../components/income.vue'
import record from '../components/record.vue'
import news from '../components/news.vue'
import newssingle from '../components/newssingle.vue'
import messages from '../components/messages.vue'
import messagesingle from '../components/messagesingle.vue'
import leavemsg from '../components/leavemsg.vue'
import share from '../components/share.vue'
import offerDetail from '../components/offer_detail.vue'
import applyDetail from '../components/apply_detail.vue'
import blank from '../components/blank.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    history: false,
    hashbang: true,
    root: "app/index.html"
})

router.map({
    '/index': {
        name:'index',
        component: index
    },
    '/offer': {
        name:'offer',
        component: offer
    },
    '/apply': {
        name:'apply',
        component: apply
    },
    '/applydetail/:id': {
        name : 'applydetail',
        component : applyDetail
    },
    '/info': {
        name:'info',
        component: info
    },
    '/team': {
        name:'team',
        component: team
    },
    '/income': {
        name:'income',
        component: income
    },
    '/record': {
        name:'record',
        component: record
    },
    '/offerdetail/:id':{
        name : 'offerdetail',
        component : offerDetail
    },
    '/news': {
        name:'news',
        component: news
    },
    '/news/:id': {
        name:"newssingle",
        component: newssingle
    },
    '/leavemsg': {
        name:'leavemsg',
        component: leavemsg
    },
    '/messages': {
        name:'messages',
        component: messages
    },
    '/message/:id': {
        name:"messagesingle",
        component: messagesingle
    },
    '/share': {
        name:'share',
        component: share
    },
    'blank':{
        name : 'blank',
        component : blank
    }
})

router.redirect({'*': '/index'})
router.go({name: 'blank'})

export default router
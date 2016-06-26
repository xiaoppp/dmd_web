import Vue from 'vue'

import router from './router.config'

import './filters'
import './constants'
import * as $D from './data'
import { API,GET_MEMBER_INFO,SET_MEMBER_INFO,GET_MEMBER_LOGIN_INFO } from './api'
import {alert2} from './utils'

const App = Vue.extend({
        data(){
            return { nickname : 'temp' , level: 3, believe : 1 }
        },
        methods: {
            gBelieveSrc(n){
                var b = this.believe
                if(!b) return 'images/xin02.png'
                var i = n < b ? 1 : 2
                return "images/xin0"+ i +".png"
            },
        },
        components: {}
    })

//start router.
router.start(App, '#app')
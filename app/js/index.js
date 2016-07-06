import Vue from 'vue'

import router from './router.config'

import './filters'
import './constants'
import { API,GET_MEMBER_LOGIN_INFO } from './api'
import {alert2} from './utils'

const App = Vue.extend({
        data(){
            return { 
                nickname : 'temp' , 
                level: 3, 
                believe : 1, 
                sex : 1,
             }
        },
        methods: {
            gBelieveSrc(n){
                var b = this.believe
                if(!b) return 'images/xin02.png'
                var i = n < b ? 1 : 2
                return "images/xin0"+ i +".png"
            },
            logout(evt){
                API.Logout({}).then(x=>{
                    alert2('已退出系统').then(x=>{
                        window.location.href = '/login.html'
                    })
                })
            }
        },
        components: {}
    })

//start router.
router.start(App, '#app')
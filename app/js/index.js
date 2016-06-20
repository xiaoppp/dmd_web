import Vue from 'vue';
import VueValidator from 'vue-validator';

import router from './router.config';

import Store from './store';
import './filters';
import './constants'
import { API,GET_MEMBER_INFO,SET_MEMBER_INFO } from './api';
import {alert2} from './utils';

Vue.use(VueValidator);

const App = Vue.extend({
        data(){
            return {
                member:{},
                config6:{},
                config24:{},
                bonusFreeze:0,
                moneyFreeze:0,
                offer:{},
                offerPairs: 0,
                applyPairs: 0,
                showNews: false
            }
        },
        props: {
        },
        methods: {
            gBelieveSrc(n){
                var b = this.member.believe;
                if(b == undefined) return 'images/xin02.png';
                var i = n < b ? 1 : 2;
                return "images/xin0"+ i +".png";
            }
        },
        created() {
            var vm = this;
            API.IndexData().then(function(data){
                if(data.isSuccess){
                    var d = data.data;
                    SET_MEMBER_INFO(d.member);
                    vm.member = GET_MEMBER_INFO();
                    vm.config6 = d.config6;
                    vm.config24 = d.config24;
                    vm.moneyFreeze = d.moneyFreeze;
                    vm.bonusFreeze = d.bonusFreeze;
                    vm.offer = d.offer;
                    vm.offerPairs = d.offerPairs;
                    vm.showNews = d.showNews;
                    vm.apply = d.apply;
                    console.log(data.data);
                } else {
                    alert2(data.error.message);
                    console.log(data.error.message);
                }
            });
        },
        components: {
        },
        store: Store 
    });

// start app
router.start(App, '#app')

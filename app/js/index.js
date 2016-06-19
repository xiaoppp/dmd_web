import Vue from 'vue';

import router from './router.config';

import Store from './store';
import './filters';
import './constants'
import { API,GET_MEMBER_INFO,SET_MEMBER_INFO } from './api';
import {alert2} from './utils';

const App = Vue.extend({
        data(){
            return {
                member:{},
                config6:{},
                config24:{},
                income:90,
                bonus:100
            }
        },
        props: {
        },
        methods: {
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
                    vm.income = d.incomeTotal;
                    vm.bonus = d.bonusTotal;
                } else {
                    alert2(data.error.message);
                }
            });
        },
        components: {
        },
        store: Store 
    });

// start app
router.start(App, '#app')

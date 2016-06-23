import Vue from 'vue';

import router from './router.config';

import Store from './store';
import './filters';
import './constants'
import { API,GET_MEMBER_INFO,SET_MEMBER_INFO,GET_MEMBER_LOGIN_INFO } from './api';
import {alert2} from './utils';

const App = Vue.extend({
        data(){
            return {
                member:{},
                config6:{},
                config24:{},
                config3:{},
                bonusFreeze:0,
                moneyFreeze:0,
                offer:{},
                offerPairs: 0,
                applyPairs: 0,
                showNews: false,
                teamScope : 0,
            }
        },
        props: {
        },
        methods: {
            gBelieveSrc(n){
                var b = this.member.believe
                if(b == undefined) return 'images/xin02.png'
                var i = n < b ? 1 : 2
                return "images/xin0"+ i +".png"
            }
        },
        computed:{
            //本金总额
            capitalSum(){
                return this.member.money + this.moneyFreeze
            },
            //奖金总额
            bonusSum(){
                return this.member.bonus + this.bonusFreeze
            },
            //账户总资产
            total(){
                return 	this.member.money + this.member.interest + 
					    this.member.bonus + this.moneyFreeze +
					    this.bonusFreeze
            },
            //账户冻结资产
            freeze(){
                return this.moneyFreeze + this.bonusFreeze
            },
            //账户可提现总资产
            available(){
			    return 	this.member.money + this.member.interest +
			       	    this.member.bonus - this.money_apply
            },
        },
        created() {

            let vm = this;

            API.IndexData().then(function(data){
                if(data.isSuccess){
                    let d = data.data
                    SET_MEMBER_INFO(d.member)
                    vm.member = GET_MEMBER_INFO()
                    vm.config6 = d.config6
                    vm.config24 = d.config24
                    vm.config3 = d.config3
                    vm.money_apply = d.money_apply || 10
                    vm.moneyFreeze = d.moneyFreeze
                    vm.bonusFreeze = d.bonusFreeze
                    vm.offer = d.offer
                    vm.offerPairs = d.offerPairs
                    vm.showNews = d.showNews
                    vm.apply = d.apply

                    console.log(data.data)
                } else {
                    alert2(data.error.message)
                    console.log(data.error.message)
                }
            });

            let who = GET_MEMBER_LOGIN_INFO()

            API.TeamScope(who.memberid).then(function(data){
                if(data.isSuccess){
                    let d = data.data
                    vm.teamScope = d
                    console.log(d)
                } else {
                    alert2(data.error.message)
                }
            })
        },
        components: {  },
        store: Store 
    });

// start app
router.start(App, '#app')

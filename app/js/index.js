import Vue from 'vue'

import router from './router.config'

import Store from './store'
import './filters'
import './constants'
import { API,GET_MEMBER_INFO,SET_MEMBER_INFO,GET_MEMBER_LOGIN_INFO } from './api'
import {alert2} from './utils'

const App = Vue.extend({
        data(){
            return {
                member:{},
                bonusFreeze:0,
                moneyFreeze:0,
                config:{},
                offer:{},
                apply:{},
                offerPairs: 0,
                applyPairs: 0,
                showNews: false,
                teamScope : 0,
            }
        },
        methods: {
            gBelieveSrc(n){
                var b = this.member.believe
                if(b == undefined) return 'images/xin02.png'
                var i = n < b ? 1 : 2
                return "images/xin0"+ i +".png"
            },
            aboutIncome(offer){
                let offer0 = offer || this.offer 
                if(offer && offer.fst)
                    return offer.money * this.config.key6 * this.config.key24
                else return 0
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
            M(){
                let who = GET_MEMBER_INFO()
                return who
            }
        },
        created() {

            let vm = this

            API.IndexData().then(function(data){
                if(data.isSuccess) {
                    let d = data.data
                    
                    SET_MEMBER_INFO(d.member)
                    vm.member = GET_MEMBER_INFO()

                    d.config.forEach(({id,val},i)=>{
                        let t = val
                        if(/-/.test(t)){
                            t = t.split('-')
                            t.forEach((v,i) => {
                                if(/\./.test(v)) t[i] = parseFloat(v)
                                else t[i] = parseInt(v)
                            })
                        } else {
                            if(/\./.test(t)) t = parseFloat(t)
                            else t = parseInt(t)
                        }
                        vm.config['key'+ id] = t
                    })

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
            })

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

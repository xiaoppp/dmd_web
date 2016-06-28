import Vue from 'vue'
import VueValidator from 'vue-validator'

import {API} from './api'
import {alert2,queryValue} from './utils'
import validationErrors from '../components/_validation_errors.vue'
import {ValidatorRules} from './validation'

Vue.use(VueValidator)

new Vue({
    el:"#registerApp",
    data:{
        model:{ 
            refer:"18742538743",
            refer_name:"张星海"
        },
        ValidatorRules: ValidatorRules.Register
    },
    methods:{
        register: function(evt){
            var model = {}
            Object.assign(model, this.model)
            console.log(model)
            API.Register(model).then(function(data){
                if(data.isSuccess){
                    alert2("注册成功！")
                } else {
                    var msg =  data.error.message
                    alert2(msg)
                }
            }).catch(function(err){
                console.log(err)
            })
        }
    },
    created:function(){
        var refer=queryValue('refer')
        var vm = this
        vm.model.refer = refer
        API.Member(refer).then(function(data){
            if(data.isSuccess){
                if(data.data) vm.model.refer_name = data.data.truename
                else alert2("没有找到推荐人")
            } else {
                alert2(data.error.message)
            }
        })
    },
    components:{validationErrors}
});
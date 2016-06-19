import Vue from 'vue';
import VueValidator from 'vue-validator';

import {API} from './api';
import {alert2,queryValue} from './utils';
import validationErrors from '../components/_validation_errors.vue';

Vue.use(VueValidator);

new Vue({
    el:"#registerApp",
    data:{
        model:{ 
            refer:"18742538743",
            refer_name:"张星海"
        },
        validationRules:{
            nickname:{
                required:{ rule:true,message:"昵称不能为空"},
                maxlength:{ rule:15,message:"不能超过15个字符"}
            },
            pwd: {
                required:{ rule:true,message:"密码不能为空"},
                maxlength:{ rule:32,message:"不能超过32个字符"}
            },
            pay_pwd: {
                required:{ rule:true,message:"安全密码不能为空"},
                maxlength:{ rule:32,message:"不能超过32个字符"}
            },
            mobile: {
                required:{ rule:true,message:"会员手机号码不能为空"},
                maxlength:{ rule:11,message:"不能超过11个字符"}
            },
            captcha: {
                required:{ rule:true,message:"图形验证码不能为空"},
                maxlength:{ rule:4,message:"不能超过4个字符"}
            },
            mobile_checkcode: {
                required:{ rule:true,message:"手机验证码不能为空"},
                maxlength:{ rule:6,message:"不能超过6个字符"}
            }
        }
    },
    methods:{
        register: function(evt){
            var model = {};
            Object.assign(model, this.model);
            console.log(model);
            API.Register(model).then(function(data){
                if(data.isSuccess){
                    alert2("注册成功！");
                } else {
                    var msg = '[' + data.error.code + ']  ' + data.error.message;
                    alert2(msg);
                }
            }).catch(function(err){
                console.log(err);
            });
        }
    },
    created:function(){
        var refer=queryValue('refer');
        var vm = this;
        vm.model.refer = refer;
        API.Member(refer).then(function(data){
            if(data.isSuccess){
                if(data.data) vm.model.refer_name = data.data.truename;
                else alert2("没有找到推荐人");
            } else {
                alert2(data.error.message);
            }
        });
    },
    components:{validationErrors}
});
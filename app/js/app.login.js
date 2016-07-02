import Vue from 'vue';
import {API} from './api';
import {alert2} from './utils'

new Vue({
    el:"#loginApp",
    data:{
        message:"Hello,Loing app.",
        mobile:'',
        pwd:'',
        disabled: false
    },
    methods:{
        login: function(evt){
            evt.preventDefault()
            let model={
                username: this.mobile,
                pwd: this.pwd
            }
            API.Login(model).then(function(data){
                if(data.isSuccess){
                    alert2("登录成功！").then(function(){
                        let url = window.location.protocol + "://" + window.location.host + '/'
                        console.log(url)
                        window.location.href = '/index.html'
                    })
                } else {
                    let msg =  data.error.message
                    alert2(msg)
                }
            }).catch(function(err){
                console.log(err)
            })
        },
        retrievePWD: function(evt) {
            alert("您是否正的忘记了密码呢？")
        }
    }
});
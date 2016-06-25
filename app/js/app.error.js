import Vue from 'vue'
import {queryValue} from './utils'

let vm = new Vue({
    el:'#errorApp',
    data : {
        message : '',
        code   : 404
    },
    created(){
        let vm = this
        let code = queryValue('code')
        switch(code){
            case 404:
                vm.message = '404'
                break
            case 500:
                vm.message = '500'
                break
            default:
                vm.message = 'the server cannot be connected now.'
                break
        }
    }
})
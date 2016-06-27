import Vue from 'vue'
import {queryValue} from './utils'

let vm = new Vue({
    el:'#errorApp',
    data : {
        message : '',
        code   : '404'
    },
    created(){
        let vm = this
        let code = queryValue('code')
        console.log(code)
        switch(code){
            case '404':
                vm.message = 'the resource you request is not found here.'
                break
            case '500':
                vm.message = 'oh! there is a server error.'
                break
            default:
                vm.message = 'the server cannot be connected now.'
                break
        }
    }
})
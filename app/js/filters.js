import Vue from 'vue'
import Moment from 'moment'
import {States,Banks} from './constants'

Vue.filter('datetime2',function(input){
    let d = Moment(input)
    if(!input || !d.isValid) return '暂无'
    return d.format('YYYY-MM-DD hh:mm:ss')
})

Vue.filter('datetime',function(input){
    if(!input) return '暂无'
    return Moment.unix(input).format('YYYY-MM-DD HH:mm:ss')
})

Vue.filter('level', function(input){
    return  input + '级会员'
})

Vue.filter('orderstate',function(i){
    let v = States[i]
    if(!v) return '未知'
    return v
})

Vue.filter('bank',function(input){
    let l = Banks.length
    for(let i = 0; i< l; i++){
        if(Banks[i].value == input) 
            return Banks[i].text
    }
    return '未知'
})
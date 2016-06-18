import Vue from 'vue';
import Moment from 'moment'

Vue.filter('datetime',function(input){
    return Moment(input).format('YYYY-MM-DD hh:mm:ss');
});

export default "";
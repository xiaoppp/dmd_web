<template>
<div class="rmain">
  <div class="applyC">
  	<h1><b>我要收获</b></h1>
  	<h2>请输入收获金额</h2>
  	<ul>
  		<li><input type="number" class="text" v-model="model" id="money" min="500" max="0" step="100"></li>
  		<li class="sm">
			  您的账户总额：{{total|currency '￥'}}元，
			  冻结总额：{{freeze|currency '￥'}}元，
			  正在提现总额：{{going|currency '￥'}}元，
			  可提现总额：{{available|currency '￥'}}元。
		</li>
  		<li class="sm">收获金额最少500元，不能大于账户可用总余额，且必须是100的整倍数。</li>
  		<li><input type="button" class="btn" @click="submit" id="apply_help_btn"></li>
  	</ul>
  </div>
</div>
</template>

<script>

import {alert2} from '../js/utils';
import {API} from '../js/api';

export default {
    data(){
		return {
			model:0
		};
    },
	methods:{
		submit(evt){
			var vm = this;
			var money = vm.model;
			if(money > vm.available) alert2('你的可提现总额不足，无法提现。');
			else if(money < 500) alert2('提现金额不可小于500元。');
			else if(money % 100 !== 0) alert2('提现金额必须是100的倍数。');
			else {
				API.Offer(money).then(function(data){
					if(data.isSuccess){
						alert2('正在提现...');
					} else {
						alert2(data.error.message);
					}
				}).catch(function(err){
					console.log(err);
				});
			}
		}
	},
    computed:{
        total(){
			return 0;
		},
		freeze(){
			return 0;
		},
		going(){
			return 0;
		},
		available(){
			return 0;
		}
    }

}
</script>

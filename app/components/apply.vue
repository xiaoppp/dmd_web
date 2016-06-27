<template>
<div class="rmain">
  <div class="applyC">
  	<h1><b>我要收获</b></h1>
  	<h2>请输入收获金额</h2>
  	<ul>
  		<li><input type="number" class="text" v-model="model" step="{{Cfg.key3[1]}}" id="money"></li>
  		<li class="sm">
			  您的账户总额：{{M.capital.total | currency '￥'}}元，
			  冻结总额：{{M.capital.frozen | currency '￥'}}元，
			  正在提现总额：{{M.moneyApply | currency '￥'}}元，
			  可提现总额：{{M.capital.available | currency '￥'}}元。
		</li>
  		<li class="sm">
			  收获金额最少{{Cfg.key3[0] | currency '￥'}}元，
			  不能大于账户可用总余额，且必须是{{Cfg.key3[1]}}的整倍数。
		</li>
  		<li><input type="button" class="btn" @click="submit" id="apply_help_btn"></li>
  	</ul>
  </div>
</div>
</template>

<script>

import {alert2} from '../js/utils'
import {API} from '../js/api'
import * as D from '../js/data'

export default {
    data(){
		return {
			model: 0,
			M : D.Member,
			Cfg : D.Config
		}
    },
	methods:{
		submit(evt){
			let vm = this
			let money = vm.model
			let min = vm.Cfg.key3[0]
			let time = vm.Cfg.key3[1]
			
			if(money > vm.M.capital.available) alert2('你的可提现总额不足，无法提现。')
			else if(money < min) alert2('提现金额不可小于' + min + '元。')
			else if(money % time != 0) alert2('提现金额必须是' + time + '的倍数。')
			else {
				API.Apply(money).then(function(data){
					if(data.isSuccess){
						alert2('正在提现...')
					} else {
						alert2(data.error.message)
					}
				}).catch(function(err){
					console.log(err)
				})
			}
		}
	}
}
</script>

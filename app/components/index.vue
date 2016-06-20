<template>
<div class="rmain" style="background:#26272C;">

	<div class="nifo">
		<ul>
			<li><b>DMD币</b><span>{{dmd|currency '￥'}}</span></li>
			<li><b>本金总额</b><span>{{income|currency '￥'}}</span></li>
			<li><b>利息总额</b><span>{{$parent.member.interest|currency '￥'}}</span></li>
			<li><b>奖金总额</b><span>{{bonus|currency '￥'}}</span></li>
		</ul>
	</div>

	<div class="anniu">
		<a href="" v-link="{name:'offer'}"><img src="/images/btn_bozhong.png"></a>
		<a href="" v-link="{name:'apply'}"><img src="/images/btn_shouhuo.png"></a>
	</div>

	<div class="bzsh">
		<a href="javascript:void(0);" @click="goOffer" class="bs bz" title="查看详情">
		<i>{{offer?"正在":"等待"}}播种</i>
			<ul v-if="offer">
				<li><span>金额：</span><b class="rd">{{offer.money|currency '￥'}}</b></li>
				<li><span>匹配人数：</span><b>{{$parent.offerPairs}}人</b></li>
				<li><span>发起时间：</span><b>{{offer.the_time|datetime}}</b></li>
				<li><span>预计收益：</span><b>{{aboutIncome}}</b></li>
				<li><span>状态：</span><b class="rd">{{offer.state==100?"订单完成":"进行中..."}}</b></li>
			</ul>
		</a>
		<a href="javascript:void(0);" @click="goApply" class="bs sh" title="查看详情">
		<i class="i">{{apply?"正在":"等待"}}收获</i>
			<ul v-if="apply">
				<li><span>金额：</span><b class="rd">{{apply.money}}</b></li>
				<li><span>匹配人数：</span><b>{{$parent.applyPairs}}人</b></li>
				<li><span>发起时间：</span><b>{{apply.the_time|datetime}}</b></li>
				<li><span>状态：</span><b class="rd">{{apply.state==100?"订单完成":"进行中..."}}</b></li>
			</ul>
		</a>
	</div>
</div>
</template>

<script>

import router from '../js/router.config';
import {alert2} from '../js/utils';

export default {
	computed:{
		offer(){
			return this.$parent.offer;
		},
		apply(){
			return this.$parent.apply;
		},
		dmd(){
			return 0;
		},
		income(){
			return this.$parent.member.money + this.$parent.moneyFreeze;
		},
		bonus(){
			return this.$parent.member.bonus + this.$parent.bonusFreeze;
		},
		aboutIncome(){
			var p = this.$parent;
			var offer = p.offer;
			if(offer.fst == 0) return offer.money*p.config6.val*p.config24.val;
			else return 0;
		}
	},
	methods:{
		goApply(){
			var o = this.apply;
			if(!o) return;
			else  router.go({name:"apply",query:{id:o.id}});
		},
		goOffer(){
			var o = this.offer;
			if(!o) return;
			else router.go({name:"offer",query:{id:o.id}});
		}
	}
}
</script>

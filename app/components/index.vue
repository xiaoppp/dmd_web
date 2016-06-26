<template>
<div class="rmain" style="background:#26272C;">

	<div class="nifo">
		<ul>
			<li><b>DMD币</b><span>{{ 0 | currency '￥'}}</span></li>
			<li><b>本金总额</b><span>{{M.capital.sum | currency '￥'}}</span></li>
			<li><b>利息总额</b><span>{{M.interest | currency '￥'}}</span></li>
			<li><b>奖金总额</b><span>{{M.capital.bonus | currency '￥'}}</span></li>
		</ul>
	</div>

	<div class="anniu">
		<a href="" v-link="{name:'offer'}"><img src="/images/btn_bozhong.png"></a>
		<a href="" v-link="{name:'apply'}"><img src="/images/btn_shouhuo.png"></a>
	</div>

	<div class="bzsh">
		<a href="javascript:void(0);" @click="goOffer" class="bs bz" title="查看详情">
		<i>{{M.lastOffer ? "正在":"等待"}}播种</i>
			<ul v-if="M.lastOffer">
				<li><span>金额：</span><b class="rd">{{M.lastOffer.money | currency '￥'}}</b></li>
				<li><span>匹配人数：</span><b>{{M.lastOffer.pairs}}人</b></li>
				<li><span>发起时间：</span><b>{{M.lastOffer.the_time | datetime}}</b></li>
				<li><span>预计收益：</span><b>{{M.capital.about}}</b></li>
				<li><span>状态：</span><b class="rd">{{M.lastOffer.state == 100 ? "订单完成" : "进行中..."}}</b></li>
			</ul>
		</a>
		<a href="javascript:void(0);" @click="goApply" class="bs sh" title="查看详情">
		<i class="i">{{M.lastApply ? "正在" : "等待"}}收获</i>
			<ul v-if="apply">
				<li><span>金额：</span><b class="rd">{{M.lastApply.money | currency '￥'}}</b></li>
				<li><span>匹配人数：</span><b>{{M.lastApply.pairs}}人</b></li>
				<li><span>发起时间：</span><b>{{M.lastApply.the_time | datetime}}</b></li>
				<li><span>状态：</span><b class="rd">{{M.lastApply.state == 100 ? "订单完成" : "进行中..."}}</b></li>
			</ul>
		</a>
		<!--<div style="color:#fff;">{{M | json}}</div>-->
	</div>
</div>
</template>

<script>

import router from '../js/router.config';
import {alert2} from '../js/utils';
import * as D from '../js/data'

export default {
	data(){
		return {
			M : D.Member
		}
	},
	methods:{
		goApply(){
			var o = this.apply;
			if(!o) return;
			else  router.go({name:"apply", params:{id:o.id}});
		},
		goOffer(){
			var o = this.offer;
			if(!o) return;
			else router.go({name:"offer", params:{id:o.id}});
		}
	}
}
</script>

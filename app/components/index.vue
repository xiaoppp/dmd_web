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
		<a href="/?act=offer"><img src="/images/btn_bozhong.png"></a>
		<a href="/?act=apply"><img src="/images/btn_shouhuo.png"></a>
	</div>

	<div class="bzsh">
		<a href="javascript:;" v-link="{}" class="bs bz" title="查看详情">
			<i>等待播种</i>
		</a>
		<a href="javascript:;" class="bs sh" title="查看详情">
			<i class="i">等待收获</i>
		</a>
	</div>
</div>
</template>

<script>

export default {
	computed:{
		dmd(){
			return 0;
		},
		income(){
			return this.$parent.member.money + this.$parent.moneyFreeze;
		},
		bonus(){
			return this.$parent.member.bonus + this.$parent.bonusFreeze;
		}
	}
}
</script>

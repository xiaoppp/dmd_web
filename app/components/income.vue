<template>
<div class="rmain">
<div class="incomeC">
	<h1><b>我的资产</b></h1>
	<h2 class="allzichan">
		<i>账户总资产：</i> {{M.capital.total | currency '￥'}}
		<i>账户冻结总资产：</i>{{M.capital.frozen | currency '￥'}}
		<i>账户正在提现总资产：</i>{{M.moneyApply | currency '￥'}}
		<i>账户可提现总资产：</i>{{M.capital.available | currency '￥'}}
	</h2>

	<div class="sad">
		<a href="javascript:;" :class="{'on' : tab == 0}" @click="tabClick(0)">本 金</a>
		<a href="javascript:;" :class="{'on' : tab == 1}" @click="tabClick(1)">利 息</a>
		<a href="javascript:;" :class="{'on' : tab == 2}" @click="tabClick(2)">团队奖励</a>

		<span style="position:relative;top:90px;float:right;color:#ccc;">提现说明：首先扣除可提团队奖，不够再扣利息，利息不够再扣可提本金。</span>
	</div>

	<ul class="u1" v-show="tab == 0">

		<h2>
			<span>本金总额：<b>{{M.capital.sum | currency '￥'}}</b></span>
			<span>本金冻结总额：<b>{{M.moneyFreeze | currency '￥'}}</b></span>
			<span>本金可提现总额：<b>{{M.money | currency '￥'}}</b></span>
		</h2>

		<table>
			<thead>
				<tr>
					<th>金额</th>
					<th>说明</th>
					<th>时间</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in model0" class="row-{{$index % 2}}">
					<td>{{item.money | currency '￥'}}</td>
					<td>{{item.intro}}</td>
					<td>{{item.the_time | datetime}}</td>
				</tr>
			</tbody>
		</table>
		<pagination :page="pageCfg.p0" :total="pageCfg.t0" event-name="on-page-changed0"></pagination>
	</ul>

	<ul class="u2" v-show="tab == 1">
		<h2>
			<span>利息总额：<b>{{M.interest | currency '￥'}}</b></span>
			<span>利息可提现总额：<b>{{M.interest | currency '￥'}}</b></span>
		</h2>
		<table>
			<thead>
				<tr>
					<th>金额</th>
					<th>说明</th>
					<th>时间</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in model1" class="row-{{$index % 2}}">
					<td>{{item.money | currency '￥'}}</td>
					<td>{{item.intro}}</td>
					<td>{{item.the_time | datetime}}</td>
				</tr>		
			</tbody>
		</table>
		<pagination :page="pageCfg.p1" :total="pageCfg.t1" event-name="on-page-changed1"></pagination>
	</ul>

	<ul class="u3" v-show="tab == 2">
		<h2>
			<span>团队奖励总额：<b>{{M.capital.sum | currency '￥'}}</b></span>
			<span>团队奖励冻结总额：<b>{{M.bonusFreeze | currency '￥'}}</b></span>
			<span>团队奖励可提总额：<b>{{M.bonus | currency '￥'}}</b></span>
		</h2>
		<table>
			<thead>
				<tr>
					<th>金额</th>
					<th>说明</th>
					<th>时间</th>
				</tr>
			</thead>
			<tbody id="bonus_tbody">
				<tr v-for="item in model2" class="row-{{$index % 2}}">
					<td>{{item.money | currency '￥'}}</td>
					<td>{{item.intro}}</td>
					<td>{{item.the_time | datetime}}</td>
				</tr>	
			</tbody>
		</table>
		<pagination :page="pageCfg.p2" :total="pageCfg.t2" event-name="on-page-changed2"></pagination>
	</ul>
</div>

</div>
</template>

<script>

	import pagination from './_pagination.vue'
	import {API} from '../js/api'
	import * as D from '../js/data'

    export default {
		data(){
			return {
				tab : 0,
				model0: [],
				model1: [],
				model2: [],
				pageCfg:{
					p0 : 1,
					p1 : 1,
					p2 : 1,
					t0 :0,
					t1 :0,
					t2 :0
				},
				M : D.Member
			}
		},
		components:{pagination},
		route:{
			data(transition){
				this.load(this.pageCfg.p0, 0)
				transition.next()
			}
		},
		methods:{
			load:function(page, n){
				let vm = this
				let type = n == 0 ? 'money' : 
				           n == 1 ? 'interest' : 
						   n ==2 ? 'bonus' : ''

				if(!type) return

				API.IncomeRecords(type, page).then(function(data){
					if(data.isSuccess){
						let d = data.data
						vm.$set('model'+ n, d.rows)
						vm.$set('pageCfg.p'+ n, page)
						vm.$set('pageCfg.t'+ n, d.count)
					}else{
						alert2(data.error.message)
					}
				})
			},
			tabClick(i){
				this.tab = i
				this.load(this.pageCfg['p'+i], i)
			}
		},
		events:{
			'on-page-changed0':function(page){
				this.load(page, 0)
			},
			'on-page-changed1':function(page){
				this.load(page, 1)
			},
			'on-page-changed2':function(page){
				this.load(page, 2)
			}
		}
    }
</script>

<style>
.allzichan{text-align:center; position:relative; top:-23px; font-size:16px; color:#FEC107; }
.allzichan i{margin-left:3%; font-size:16px; color:#fff; }
#page{width:800px; margin:auto; margin-top:25px; padding-bottom:25px; text-align:center; }
#page a{font-size:20px; color:#999; margin-left:50px; }
#page a:hover{color:#fff; }
</style>

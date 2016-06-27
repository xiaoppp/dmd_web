<template>
<div class="rmain">
<div class="recordC">
	<h1><b>交易记录</b></h1>
	<div class="sad">
		<a href="javascript:void(0);" :class="{'on': tab == 0}" @click="tabClick(0)">播种记录</a>
		<a href="javascript:void(0);" :class="{'on': tab == 1}"  @click="tabClick(1)">收获记录</a>
		<a href="javascript:void(0);" :class="{'on': tab == 2}" @click="tabClick(2)">失败匹配记录</a>
	</div>
	<ul class="u1" v-show="tab == 0">
		<table>
			<thead>
				<tr>
					<th>编号</th>
					<th>金额</th>
					<th>播种时间</th>
					<th>匹配人数</th>
					<th>完成时间</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in model0" class="row-{{$index % 2}}">
					<td>{{item.offer.code}}</td>
					<td>{{item.offer.money | currency '￥'}}</td>
					<td>{{item.offer.the_time | datetime}}</td>
					<td>{{item.pct}}人</td>
					<td>{{item.offer.end_time | datetime }}</td>
					<td :style="{color : item.offer.state == 100 ? '#43C328' : '#FEC107'}">{{item.offer.state == 100 ? '已完成':'进行中...'}}</td>
					<td><a v-link="{name:'offerdetail',params:{id:item.offer.id}}" href="" class="see">查看</a></td>
				</tr>
			</tbody>
		</table>
		<!--<pagination :page="pageCfg.p0" :total="pageCfg.t0" event-name="on-page-changed0"></pagination>-->
	</ul>
	<ul class="u2" v-show="tab == 1">
		<table>
			<thead>
				<tr>
					<th>编号</th>
					<th>金额</th>
					<th>收获时间</th>
					<th>匹配人数</th>
					<th>完成时间</th>
					<th>状态</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in model1" class="row-{{$index % 2}}">
					<td>{{item.apply.code}}</td>
					<td>{{item.apply.money | currency '￥'}}</td>
					<td>{{item.apply.the_time | datetime}}</td>
					<td>{{item.pct}}人</td>
					<td>{{item.apply.end_time | datetime }}</td>
					<td :style="{color : item.apply.state == 100 ? '#43C328' : '#FEC107'}">{{item.apply.state == 100 ? '已完成':'进行中...'}}</td>
					<td><a href="javascript:void(0);" v-link="{name:'applydetail', params:{ id: item.apply.id}}" class="see">查看</a></td>
				</tr>
			</tbody>
		</table>
		<!--<pagination :page="pageCfg.p1" :total="pageCfg.t1" event-name="on-page-changed1"></pagination>-->
	</ul>

	<ul class="u3" v-show="tab == 2">
		<table>
			<thead>
				<tr>
					<th>类型</th>
					<th>编号</th>
					<th>匹配金额</th>
					<th>匹配时间</th>
					<th>对方姓名</th>
					<th>对方手机</th>
					<th>主单金额</th>
					<th>主单下单时间</th>
					<th>解除匹配时间</th>
					<th>原因</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in model2" class="row-{{$index % 2}}">
					<td>{{M.id == item_om_id ? '播种' : '收获'}}</td>
					<td>{{item.code}}</td>
					<td>{{item.money | currency '￥'}}</td>
					<td>{{item.the_time | datetime}}</td>
					<td>{{M.id == item.om_id ? item.am.truename : item.om.truename}}</td>
					<td>{{M.id == item.om_id ? item.am.mobile : item.om.mobile}}</td>
					<td>{{item.order_money | currency '￥'}}</td>
					<td>{{item.order_the_time | datetime}}</td>
					<td>{{item.unmatch_time | datetime}}</td>
					<td>{{item.intro}}</td>
				</tr>
			</tbody>
		</table>
		<!--<pagination :page="pageCfg.p2" :total="pageCfg.t2" event-name="on-page-changed2"></pagination>-->
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
			M : D.Member,
			tab : 0,
			model0 : [],
			model1 : [],
			model2 : [],
			pageCfg  : {
				p0 : 1,
				p1 : 1, 
				p2 : 1,
				t0 : 0,
				t1 : 0,
				t2 : 0
			}
		}
	},
	components:{ pagination },
		route:{
			data(transition){
				this.load(this.pageCfg.p0, 0)
				transition.next()
			}
		},
		methods:{
			load:function(page, n){
				let vm = this
				let logic  = n == 0 ?  D.OfferLogic :  n == 1 ? D.ApplyLogic : D.FailedMatchLogic 
				logic.fetchMany().then(function(Store){
					vm.$set('model'+ n, Store.data)
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

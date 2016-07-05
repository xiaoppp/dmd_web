<template>
	<div class="rmain">
		<div class="teamC">
			<h1><b>我的团队</b></h1>
			<div class="sad">
				<a href="javascript:;" :class="{'on':tab == 1}" @click="tab = 1">我的团队</a>
				<a href="javascript:;" :class="{'on':tab == 2}" @click="tab = 2">申请升级</a>
			</div>
			<ul class="u1" v-show="tab == 1">
				<h2>
				<span>团队总人数：<b>{{teamScope}}人</b></span>
				<span>直推人数：<b>{{rootChildrenCount}}人</b></span>
				<!--<span>有效会员人数：<b>0人</b></span>
				<span>无效会员人数：<b>0人</b></span>-->
				<!--span>团队总挂单金额：<b>0.00元</b></span-->
				<!--span>团队已完成打款金额：<b>0.00元</b></span-->
				</h2>

				<table>
					<thead>
						<tr>
							<th>编号</th>
							<th>会员手机</th>
							<th>会员昵称</th>
							<th>注册时间</th>
							<th>下级人数</th>
							<th>状态</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-if="currentModel.id">
							<td>DMD{{currentModel.id}}18636967</td>
							<td>{{currentModel.mobile}}</td>
							<td :style="{color: currentModel.ok == 1?'#0f0':'#F1AF36'}">{{currentModel.nickname}}</td>
							<td>{{currentModel.reg_time|datetime}}</td>
							<td>{{currentModel.teamCount}}</td>
							<td :style="{color: currentModel.state == 1 ? '#01CCCC':'f00'}">
								{{currentModel.state == 1 ? "正常":"冻结"}}
							</td>
							<td><a href="javascript:void(0);" class="see">查看</a></td>
						</tr>
					</tbody>
				</table>

				<ul style="padding: 8px 0 0 35px;">
					<item class="item" :model="treeData">
					</item>
				</ul>

			</ul>

			<ul class="u2" v-show="tab == 2">
				<li>推荐1位，晋升M1（一级会员），可获1代收益</li>
				<li>推荐2位，晋升M2（二级会员），可获2代收益</li>
				<li>推荐5位，晋升M3（三级会员），可获3代收益</li>
				<li>推荐15位，团队100人，晋升M4（四级会员），可获4代收益</li>
				<li>推荐15位，团队100人，晋升高级经理，可获无限代收益</li>
				<li><a href="javascript:;" class="btn" id="team_apply_btn">申请升级</a></li>
				<li class="imgli"><br><img src="/images/team.png"></li>
			</ul>
		</div>

	</div>
</template>

<script>
	import {API} from '../js/api';
	import {alert2} from '../js/utils';
	import item from './teamtree.vue';
	import * as D from '../js/data'

	export default {
		route: {
			data(transition) {
				let vm = this
				let who = D.Member
				let model = {
					truename: who.truename,
					id : who.id,
					sex : who.sex,
					mobile : who.mobile,
					teamCount : who.teamScope
				}
				transition.next({treeData: model})
			}
		},
		events:{
			'on-detail-click':function(model){
				console.log('on-detail-click',model)
				this.currentModel = model
			}
		},
		data() {
			return {
				treeData: {},
				tab : 1,
				currentModel : {},
				teamScope : D.Member.teamScope
			}
		}
	}
</script>

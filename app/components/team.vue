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
				<span>团队总人数：<b>{{$parent.teamScope}}人</b></span>
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
							<td>{{childrenCount}}</td>
							<td :style="{color: currentModel.state == 1 ? '#01CCCC':'f00'}">
								{{currentModel.state == 1 ? "正常":"冻结"}}
							</td>
							<td>
								
									<a href="/?act=team&id=<?php echo $val['id']; ?>" class="see">查看</a>

							</td>
						</tr>
					</tbody>
				</table>

				<ul style="padding: 8px 0 0 35px;">
					<item class="item" :model="treeData" :from="whoid">
					</item>
				</ul>

			</ul>

			<ul class="u2" v-show="tab == 2">
				<li>推荐1位，晋升M1（一级会员），可获1代收益</li>
				<li>推荐2位，晋升M2（二级会员），可获2代收益</li>
				<li>推荐5位，晋升M3（三级会员），可获3代收益</li>
				<li>推荐15位，团队100人，晋升M4（四级会员），可获4代收益</li>
				<li>推荐15位，团队100人，晋升高级经理，可获无限代收益</li>
				<li>
					<a href="javascript:;" class="btn" id="team_apply_btn">申请升级</a></li>
				<li class="imgli">
					<br><img src="/images/team.png"></li>
			</ul>
		</div>

		

	</div>
</template>

<script>
	import {API,GET_MEMBER_INFO} from '../js/api';
	import {alert2} from '../js/utils';
	import item from './teamtree.vue';
	export default {
		route: {
			data(transition) {

				let who = GET_MEMBER_INFO();
				let vm = this;

				//transition.next({whoid:who.id});

				API.TeamTree(who.id).then(function(data) {
					if (data.isSuccess) {
						const children = data.data.map(d => {
							return {
								name: d.truename,
								id: d.id,
								sex: d.sex,
								mobile: d.username,
								nickname: d.nickname,
								ok : d.ok
							}
						})

						let tree = {
							name: who.truename,
							id : who.id,
							sex : who.sex,
							mobile : who.username,
							nickname: who.nickname,
							ok : who.ok,
							children: children
						}
						transition.next({treeData: tree})
					} else {
						alert2(data.error.message);
					}
				})
			}
		},
		events:{
			'on-detail-click':function(model){
				this.currentModel = model
			}
		},
		computed:{
			childrenCount(){
				var n = this.currentModel.children;
				if(!n) return '未加载下级';
				else return n.length;
			},
			rootChildrenCount(){
				let d = this.treeData
				if(d.children) return d.children.length
				else return 0
			}
		},
		data() {
			return {
				treeData: {},
				tab : 1,
				currentModel : {},
				whoid : 0
			}
		}
	}
</script>

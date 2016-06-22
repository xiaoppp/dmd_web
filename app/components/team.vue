<template>
	<div class="rmain">
		<div class="teamC">
			<h1><b>我的团队</b></h1>
			<div class="sad">
				<a href="javascript:;" class="on" data-i="1">我的团队</a>
				<a href="javascript:;" data-i="2">申请升级</a>
			</div>
			<ul class="u1">
				<h2>
				<span>团队总人数：<b>0人</b></span>
				<span>直推人数：<b>0人</b></span>
				<span>有效会员人数：<b>0人</b></span>
				<span>无效会员人数：<b>0人</b></span>
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
					</tbody>
				</table>
			</ul>
			<ul class="u2">
				<li>推荐1位，晋升M1（一级会员），可获1代收益</li>
				<li>推荐2位，晋升M2（二级会员），可获2代收益</li>
				<li>推荐5位，晋升M3（三级会员），可获3代收益</li>
				<li>推荐15位，团队100人，晋升M4（四级会员），可获4代收益</li>
				<li>推荐15位，团队100人，晋升高级经理，可获无限代收益</li>
				<li><a href="javascript:;" class="btn" id="team_apply_btn">申请升级</a></li>
				<li class="imgli">
					<br><img src="/images/team.png"></li>
			</ul>
		</div>

		<ul id="team-tree">
			<item class="item" :model="treeData">
			</item>
		</ul>

	</div>
</template>


<style scoped>

#team-tree{}
.bold{}
.bold > span {color:#fff;}
.item{}
.item > ul{}

</style>


<script>
	import {API,GET_MEMBER_INFO} from '../js/api';
	import {alert2} from '../js/utils';
	import item from './teamtree.vue';
	export default {
		route: {
			data(transition) {
				let who = GET_MEMBER_INFO();
				let vm = this;

				API.TeamTree(who.id).then(function(data) {
					if (data.isSuccess) {
						const children = data.data.map(d => {
							return {
								name: d.truename,
								id: d.id
							}
						})
						let tree = {
							name: who.truename,
							children: children
						}
						transition.next({treeData: tree})
					} else {
						alert2(data.error.message);
					}
				});
			}
		},
		data() {
			return {
				treeData: {}
			}
		}
	}
</script>

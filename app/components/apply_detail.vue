<template>
<div>
<div class="apply_logC">
	<h1><b>收获记录</b></h1>
	<h2>
        {{apply.state == 1 ? '等待匹配' : (apply.state == 100 ? '订单已完成' : '已匹配成功')}}
    </h2>
	<ul>
		<div class="main">
			<div class="hd">
				<span>{{apply.state < 100 ? '正在收获' : '收获完成'}}</span>
				<li>
                    <font>收获进度</font>
                    <i :style="{left : (progress - 1) + '%'}">
                        {{progress}}
                    </i>
                    <em>
                        <b :style="{width : progress + '%'}"></b>
                    </em>    
                </li>
			</div>
			<div class="tb">
				<table>
					<tr class="tr1">
						<td>金额</td>
						<td>发起时间</td>
						<td>状态</td>
						<td style="position:relative;">
                            匹配人数
                            <i  v-if="apply.state == 1"
                                class="del_order"
                                data-type="apply" 
                                style="position:absolute;top:-80px;right:10px;color:#ddd;cursor:pointer;">
                                删除
                            </i>
                        </td>
					</tr>
					<tr class="tr2">
						<td class="cccc">{{apply.money | currency '￥'}}</td>
						<td>{{apply.the_time | datetime}}</td>
						<td class="ccc">{{apply.state == 100 ? '已完成' : '进行中...'}}</td>
						<td class="ccc">{{pairs.length}}</td>
					</tr>
				</table>
			</div>
		</div>
		<div v-for="item in pairs" class="main lm">
			<div class="tb">
				<span class="ppz">匹配者{{$index}}</span>
				<li class="bt">
					<table>
						<tr class="tr1">
							<td>金额</td>
							<td>状态</td>
							<td>匹配时间</td>
							<td>打款时间</td>
						</tr>
						<tr class="tr2">
							<td class="cccc">{{item.money | currency '￥'}}</td>
							<td class="ccc">{{item.state | orderstate}}</td>
							<td>{{item.the_time | datetime}}</td>
							<td>{{item.pay_time | datetime}}</td>
						</tr>
					</table>
				</li>
			</div>
			<div class="tb">
				<table>
					<tr class="tr1">
						<td>推荐人</td>
						<td>推荐人手机</td>
						<td>真实姓名</td>
						<td>会员手机</td>
						<td>支付宝</td>
						<td>微信号</td>
						<td>银行信息</td>
					</tr>
					<tr class="tr2">
						<td>{{item.offerMemberParent.nickname}}</td>
						<td>{{item.offerMemberParent.mobile}}</td>
						<td>{{item.offerMember.truename}}</td>
						<td>{{item.offerMember.mobile}}</td>
						<td>{{item.offerMember.alipay}}</td>
						<td>{{item.offerMember.weixin}}</td>
						<td>
							<li>银行名称：{{item.offerMember.bank | bank}}</li>
							<li>开户分行：{{item.offerMember.bank_addr}}</li>
							<li>银行账号：{{item.offerMember.bank_num}}</li>
						</td>
					</tr>
				</table>
			</div>
			<div class="tb">
					<dd class="s2">打款剩余时间<img src="/images/time.jpg">{{remainTime(item.the_time,1)}}</dd>

					<dd class="s3" v-if="item.state == 3">
						<em>收款剩余时间<img src="/images/time.jpg"> {{remainTime(item.pay_time,0)}}</em>
						
                        <span class="edd">对方已打款</span>
						<img class="show_big_img" :src="'images/payment/' + item.img">
						<a href="javascript:;" class="apply_confirm_btn btn">确认收款</a>

                        <span v-if="item.judge == 1">
                            <span style="color:lime;margin-left:15px;">
                                平台处理中......
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="javascript:;" class="to_judge" data-type="no">撤销</a>
                        </span>
                        <span v-if="item.judge == 2">
                            <span style="color:red;">投诉被驳回</span>
                        </span>
                        <span v-if="item.judge > 2">
                            <a href="javascript:;" class="to_judge" data-type="to" title="对方打款凭证为假图，我未收到款，需要平台介入！">我要投诉</a>
                        </span>

					</dd>
					<dd class="s3" v-if="item.state == 4">
						<img class="show_big_img" :src="'images/payment/' + item.img">
                        &nbsp;&nbsp;&nbsp;
						<span class="edd">订单已完成</span>
					</dd>
			</div>
		</div>
	</ul>
</div>

<div id="remark">
	<div>
		<h5>请给XXX的打款诚信评分</h5>
		<ul>

			<img v-for="i in 5" :class="{on: remark == i}" src="/images/xing02.png" @click="remark = i">
		</ul>
		<a href="javascript:;" class="btn" oaid="0">提 交</a>
	</div>
</div>
</div>
</template>

<script>
	import {API} from '../js/api'
	import {alert2} from '../js/utils'
	import * as D from '../js/data'

    export default {
        data(){
            return {
                apply : {},
                pairs : [],
                remark : 1
            }
        },
        route:{
            data(transition){
				let id = transition.to.params.id

				let one = D.Member.applys.find(x=>{
					return x.id == id
				})

				//transition.next({'apply':d.apply,'pairs':d.pairs})

				API.ApplyDetail(id).then(function(data){
					if(data.isSuccess){
                		console.log(data.data)
						let d = data.data
						transition.next({'apply':d.apply,'pairs':d.pairs})					
					}else{
						alert2(data.error.message)
					}
				}).catch(function(err){
					console.log(err)
				})
            }
        },
        computed:{
            progress(){
                let state = this.apply.state
                if(state < 100) return state * 10
                else return 100
            }
        },
        methods:{
            remainTime(start,flag){
				let cfg = flag  ? this.$parent.config.key12 : this.$parent.config.key13
				let time = start
				return cfg * 60 * 60 - (Date.now() - time)
			}
        }
    }
</script>
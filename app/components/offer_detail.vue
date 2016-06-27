<template>
<div class="offer_logC">
	<h1><b>播种记录</b></h1>
	<h2>
        {{offer.state == 1 ? '等待匹配' : (offer.state == 100 ? '订单已完成' : '已匹配成功')}}
    </h2>
	<ul>
		<div class="main">
			<div class="hd">
				<span>{{offer.state < 100 ? '正在播种' : '播种完成'}}</span>
				<li>
                    <font>播种进度</font>
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
						<td>预计收益</td>
						<td>发起时间</td>
						<td>状态</td>
						<td style="position:relative;">
                            匹配人数
                            <i  v-if="offer.state == 1" 
                                class="del_order" 
                                style="position:absolute;top:-80px;right:10px;color:#ddd;cursor:pointer;"
                                @click=""
                                >
                                删除
                            </i>

                        </td>
					</tr>
					<tr class="tr2">
						<td class="cccc">{{offer.money | currency '￥'}}</td>
						<td class="cccc">
                            {{aboutIncome(offer) | currency '￥'}}
                        </td>
						<td>{{offer.the_time | datetime}}</td>
						<td class="ccc">{{offer.state == 100 ? '已完成' : '进行中...'}}</td>
						<td class="ccc">{{pairs.length}}</td>
					</tr>
				</table>
			</div>
		</div>

		<div class="main lm" v-for="item in pairs">
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
						<td>{{item.applyMemberParent.nickname}}</td>
						<td>{{item.applyMemberParent.mobile}}</td>
						<td>{{item.applyMember.truename}}</td>
						<td>{{item.applyMember.mobile}}</td>
						<td>{{item.applyMember.alipay}}</td>
						<td>{{item.applyMember.weixin}}</td>
						<td>
							<li>银行名称：{{item.applyMember.bank | bank}}</li>
							<li>开户分行：{{item.applyMember.bank_addr}}</li>
							<li>银行账号：{{item.applyMember.bank_num}}</li>
						</td>
					</tr>
				</table>
			</div>
			<div class="tb">
					<dd class="s2" v-if="item.state == 2">
						打款剩余时间<img src="/images/time.jpg">{{remainTime(item)}}秒
						<div>
							<div v-if="item.img">
								<a href="javascript:;" class="a_upload">
									<img src="/images/plusFhotoIcon.jpg" style="width:auto;height:60px;"/>
									<input type="file" name="imgfile" class="uploadimgfile"/>
								</a>
								<input type="hidden" name="oaid" value="{{item.id}}">
								<input type="submit" value="确认付款" class="sure">
								<em class="deny_payment">拒绝打款</em>
							</div>
							<div v-else>
								<a href="javascript:;" class="a_upload">
									<img class="show_big_img" :src="'/images/payment/' + item.img " style="max-width:250px;height:160px;"/>
								</a>
							</div>
						</div>
					</dd>
					<dd class="s3" v-if="item.state == 3">
						<span class="edd">已打款成功</span>
						<img class="show_big_img" :src="'images/payment/' + item.img">
					</dd>
					<dd class="s3" v-if="item.state == 4">
						<img class="show_big_img" :src="'images/payment/' + item.img">&nbsp;&nbsp;&nbsp;
						<span class="edd">订单已完成</span>
					</dd>
			</div>
		</div>
	</ul>
</div>

</template>

<script>

	import {API} from '../js/api'
	import {alert2} from '../js/utils'
	import * as D from '../js/data'

    export default {
        data(){
            return {
                offer : {},
                pairs : [],
            }
        },
        route:{
            data(transition){
				let id = transition.to.params.id
				D.OfferLogic.fetchOne(id,1).then(x=>{
					transition.next({'offer':x.offer,'pairs':x.pairs})
				})
            }
        },
        computed:{
            progress(){
                let state = this.offer.state
                if(state < 100) return state * 10
                else return 100
            }
        },
		methods:{
			remainTime(item){
				let cfg12 = D.Config.key12
				let time = item.the_time
				return cfg12 * 60 * 60 - (Date.now() - time)
			},
			aboutIncome(item){
				return D.MemberLogic.about(item)
			}
		}

    }
</script>


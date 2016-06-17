<template>
<div class="rmain">


<div class="incomeC">
	<h1><b>我的资产</b></h1>
	<h2 class="allzichan">
		<i>账户总资产：</i>￥32484.00
		<i>账户冻结总资产：</i>￥31284.00
		<i>账户正在提现总资产：</i>￥0.00
		<i>账户可提现总资产：</i>￥1200.00
	</h2>
	<div class="sad">
		<a href="javascript:;" class="on" data-i="1">本 金</a>
		<a href="javascript:;" data-i="2">利 息</a>
		<a href="javascript:;" data-i="3">团队奖励</a>
		<span style="position:relative;top:90px;float:right;color:#ccc;">提现说明：首先扣除可提团队奖，不够再扣利息，利息不够再扣可提本金。</span>
	</div>
	<ul class="u1">
		<h2>
			<span>本金总额：<b>￥31000.00</b></span>
			<span>本金冻结总额：<b>￥31000.00</b></span>
			<span>本金可提现总额：<b>￥0.00</b></span>
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
							<tr>
					<td>30000.00</td>
					<td>成功播种￥30000.00元，本金将在冻结8天后自动收入现金余额</td>
					<td>2016-06-11 21:50:59</td>
				</tr>
							<tr style="background: rgb(58, 59, 63);">
					<td>1000.00</td>
					<td>成功购买激活币￥1000.00元，本金将在冻结30天后自动收入现金余额</td>
					<td>2016-06-04 22:50:23</td>
				</tr>
						</tbody>
		</table>
	</ul>
	<ul class="u2">
		<h2>
			<span>利息总额：<b>￥1200.00</b></span>
			<span>利息可提现总额：<b>￥1200.00</b></span>
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
							<tr>
					<td>300.00</td>
					<td>2016-06-16，获得利息￥300元。</td>
					<td>2016-06-16 18:43:12</td>
				</tr>
							<tr>
					<td>300.00</td>
					<td>2016-06-15，获得利息￥300元。</td>
					<td>2016-06-15 12:23:37</td>
				</tr>
							<tr>
					<td>300.00</td>
					<td>2016-06-14，获得利息￥300元。</td>
					<td>2016-06-14 20:11:52</td>
				</tr>
							<tr>
					<td>300.00</td>
					<td>2016-06-13，获得利息￥300元。</td>
					<td>2016-06-13 00:03:37</td>
				</tr>
							<tr>
					<td>-2400.00</td>
					<td>成功提现￥2400.00元，从利息余额中扣除￥2400.00元</td>
					<td>2016-06-12 15:39:53</td>
				</tr>
							<tr>
					<td>0.00</td>
					<td>成功提现￥3000.00元，从利息余额中扣除￥0元</td>
					<td>2016-06-12 10:00:54</td>
				</tr>
							<tr>
					<td>300.00</td>
					<td>2016-06-12，获得利息￥300元。</td>
					<td>2016-06-12 00:01:51</td>
				</tr>
							<tr>
					<td>2100.00</td>
					<td>成功播种￥30000.00元，获得￥2100元利息</td>
					<td>2016-06-11 21:50:59</td>
				</tr>
						</tbody>
		</table>
	</ul>
	<ul class="u3">
		<h2>
			<span>团队奖励总额：<b>￥284.00</b></span>
			<span>团队奖励冻结总额：<b>￥284.00</b></span>
			<span>团队奖励可提总额：<b>￥0.00</b></span>
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
							<tr>
					<td>-3000.00</td>
					<td>成功提现￥3000.00元，从奖金余额中扣除￥3000.00元</td>
					<td>2016-06-12 10:00:54</td>
				</tr>
							<tr>
					<td>7.00</td>
					<td>您成功播种￥30000.00元，在5小时内完成700.00的打款，奖励您￥7元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 15:52:00</td>
				</tr>
							<tr>
					<td>55.00</td>
					<td>您成功播种￥30000.00元，在5小时内完成5500.00的打款，奖励您￥55元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 15:48:09</td>
				</tr>
							<tr>
					<td>90.00</td>
					<td>您成功播种￥30000.00元，在4小时内完成9000.00的打款，奖励您￥90元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 15:36:31</td>
				</tr>
							<tr>
					<td>5.00</td>
					<td>您成功播种￥30000.00元，在4小时内完成500.00的打款，奖励您￥5元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 14:55:18</td>
				</tr>
							<tr>
					<td>56.00</td>
					<td>您成功播种￥30000.00元，在4小时内完成5600.00的打款，奖励您￥56元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 14:54:55</td>
				</tr>
							<tr>
					<td>42.00</td>
					<td>您成功播种￥30000.00元，在4小时内完成4200.00的打款，奖励您￥42元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 14:44:02</td>
				</tr>
							<tr>
					<td>24.00</td>
					<td>您成功播种￥30000.00元，在4小时内完成2400.00的打款，奖励您￥24元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 14:43:50</td>
				</tr>
							<tr>
					<td>5.00</td>
					<td>您成功播种￥30000.00元，在4小时内完成500.00的打款，奖励您￥5元。奖金冻结8天后自动计入奖金余额。</td>
					<td>2016-06-11 14:41:03</td>
				</tr>
							<tr>
					<td>3000.00</td>
					<td>您的第1级下属 皇者团队十咖喱 成功播种￥30000.00元，奖励您￥3000元。</td>
					<td>2016-06-11 13:10:50</td>
				</tr>
						</tbody>
		</table>

		<div id="page" page="2">
			<a href="javascritp:;" data-to="prov">上一页</a>
			<a href="javascritp:;" data-to="next">下一页</a>
		</div>

	</ul>
</div>

</div>
</template>

<script>
export default {}
</script>

<style>
.allzichan{text-align:center; position:relative; top:-23px; font-size:16px; color:#FEC107; }
.allzichan i{margin-left:3%; font-size:16px; color:#fff; }
#page{width:800px; margin:auto; margin-top:25px; padding-bottom:25px; text-align:center; }
#page a{font-size:20px; color:#999; margin-left:50px; }
#page a:hover{color:#fff; }
</style>

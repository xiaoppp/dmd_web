<template>
<div class="rmain">
  <div class="applyC">
  	<h1><b>我要收获</b></h1>
  	<h2>请输入收获金额</h2>
  	<ul>
  		<li><input type="number" class="text" id="money" min="500" max="0" step="100"></li>
  		<li class="sm">您的账户总额：0.00元，冻结总额：0.00元，正在提现总额：0.00元，可提现总额：0.00元。</li>
  		<li class="sm">收获金额最少500元，不能大于账户可用总余额，且必须是100的整倍数。</li>
  		<li><input type="button" class="btn" id="apply_help_btn" value=" "></li>
  	</ul>
  </div>	
</div>
</template>

<script>
export default {}
</script>

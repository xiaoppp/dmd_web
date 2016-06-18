<template>
<div class="rmain">
  <div class="shareC">
  	<h1><b>分享注册</b></h1>
  	<ul>
  		<li>
			  <div id="qrcode" style="width:300px;height:300px;margin:auto;padding:20px 5px 0 5px;background:#fff;">

				  </div>
				</li>
  		<li>
  			<em id="link" class="copye">http://114.55.114.236/?act=reg&amp;refer=15834048710</em>
  			<br><br><br>
  			<a href="javascript:void(0);" id="copy_link" class="btn copy_link" data-clipboard-target="#link" aria-label="复制成功！">[点击复制]</a>
  		</li>
  		<li></li>
  	</ul>
  </div>
</div>
</template>
<script>

import {QRCode} from 'qrcodejs';

export default {
	props: ['mobile'],
	// computed: {
	// 	 function() {
	// 		return "http://"+location.host+"/register?mobile="+this.mobile;
	// 	}
	// },
	created:function(){
		new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
	}
}
</script>

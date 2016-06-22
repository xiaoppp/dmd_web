<template>
<div class="rmain">
  <div class="shareC">
  	<h1><b>分享注册</b></h1>
  	<ul>
  		<li>
			 <div id="qrcode" style="width:300px;height:300px;margin:auto;padding:20px 5px 0 5px;background:#fff;">
				 <img v-bind:src=qrcodeUrl style="width:256px;height:256px;"/>
			 </div>
			</li>
  		<li>
  			<em id="link" class="copye">{{regUrl}}</em>
  			<br><br><br>
  			<a href="javascript:void(0);" id="copy_link" class="btn copy_link" data-clipboard-target="#link" aria-label="复制成功！">[点击复制]</a>
  		</li>
  		<li></li>
  	</ul>
  </div>
</div>
</template>
<script>

import {GET_MEMBER_INFO} from '../js/api';
import Clipboard from 'clipboard';

export default {
	data(){
		return {qrcodeUrl:"",regUrl:''}
	},
	created:function(){
		new Clipboard('#copy_link').on('success',function(){
			alert("复制成功！");
		}).on('error',function(){
			alert("复制失败，请手动复制！");
		});
	},
	route:{
		data:function(transition){
			var base = "https://sp0.baidu.com/5aU_bSa9KgQFm2e88IuM_a/micxp1.duapp.com/qr.php";
			var who = GET_MEMBER_INFO();
			var value = window.location.protocol+"//"+window.location.host+'/register.html?refer='+ who.mobile;
			transition.next({'regUrl':value,'qrcodeUrl': base+"?value="+encodeURIComponent(value)});
		}
	}
}
</script>

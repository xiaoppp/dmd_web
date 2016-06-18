<template>
<div class="rmain">
<div class="leavemsgC">
	<h1><b>在线留言</b></h1>
	<div class="sad">
		<a href="javascript:void(0);" :class="{'on': flag}" @click="flag=true">在线留言</a>
		<a href="javascript:void(0);" :class="{'on': !flag}" @click="flag=false">留言反馈</a>
	</div>
	<ul class="u1" v-show="flag">
		<div class="inpwp">
			<form role="form">
				<li>
					<span>留言标题：</span>
					<em><input type="text" class="text til" v-model="model.title" name="title" required="true" maxlength="32"></em>
				</li>
				<li>
					<span>问题类型：</span>
					<em>
						<select name="msgtype" v-model="model.msgtype" class="text selC">	
							<option v-for="item in MsgTypes" value="{{item.value}}">{{item.text}}</option>
						</select>
					</em>
				</li>
				<li>
					<span>上传图片：</span>
					<em>
						<a href="javascript:;" class="fila">选择图片
							<input type="file" name="imgfile" id="uploadimgfile">
						</a>
						<b class="imgb">
							<img class="show_big_img" src="/images/bgblack.png" id="showimg" style="width:auto;max-height:40px;position:relative;top:2px;left:25px;">
						</b>
					</em>
				</li>
				<li class="ctd">
					<span>留言内容：</span>
					<em><textarea class="ctt" v-model="model.content" name="content" required="true" maxlength="360"></textarea></em>
				</li>
				<li>
					<span></span>
					<em><input type="button" @click="submit" class="btn" value="提交留言"></em>
				</li>
			</form>
		</div>
	</ul>
	<ul class="u2" v-show="flag">
	</ul>
</div>

</div>
</template>

<script>

import {MsgTypes} from '../js/constants' 
import {API} from '../js/api';

export default {
	data(){
		return {
			MsgTypes,
			model:{},
			flag:true,
		}
	},
	methods:{
		submit(event){
			API.PostMsg(this.model).then(function(data){
				console.log(data);
			}).catch(function(err){
				console.log(err);
			});
		}
	}
}
</script>

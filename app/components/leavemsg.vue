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
			<form role="form" id="leavemsgForm" name="leavemsgForm" enctype="multipart/form-data">
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
						<a href="javascript:;" @click="preview">预览</a>
						<img id="kknsdkjbgfkjsgdfg">
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
					<em><input type="submit" @click="submit" class="btn" value="提交留言"></em>
				</li>
			</form>
		</div>
	</ul>

	<ul class="u2" v-show=!flag>
		<li class="mymsg" v-for="item in replyModel">
			<h4><img class="lgim" v-bind:src=getSrc>
			{{item.old.title}}<i>{{item.the_time | datetime}}</i></h4>
			<div class="nrd">
				{{item.old.content}}
				<hr style="width:100%;margin-top:10px;margin-bottom:10px;border-bottom:1px dashed #43C328;">
				<div v-if="item.new">
					<h4>
						<img class="lgim" src="/images/logo2.png"> 
							多米多客服
						<i>{{item.new.the_time | datetime}}</i>
					</h4>
					<span style="color:#949CB3">{{item.new.content}}</span>
				</div>
				<div v-if="!item.new">
					<h4>
						<img class="lgim" src="/images/logo2.png"> 
							多米多客服
					</h4>
					<span style="color:#949CB3">没有回复哦</span>
				</div>
			</div>
		</li>
	</ul>

</div>

</div>
</template>

<script>

import {MsgTypes} from '../js/constants'
import {API} from '../js/api'
import * as D from '../js/data'
import {alert2} from '../js/utils'
import $ from 'jquery'

export default {
	data(){
		return {
			MsgTypes,
			model:{ msgtype: 'complaint',title:'',content:''},
			replyModel: [],
			flag: true,
			sex : D.Member.sex
		}
	},
	computed:{
		getSrc: function () {
			return "/images/default"+ this.sex +".jpg";
    	}
	},
	route:{
		data:function(transition){
			API.MessageReplies().then(function(data){
				transition.next({'replyModel': data.data})
			}).catch(function(err){
				console.log(err)
			})
		}
	},
	methods:{
		submit(e){
			e.preventDefault()
			let m = this.model
			m.title = m.title.trim()
			m.content = m.content.trim()
			if(!m.title) return alert2('请填写标题')
			if(!m.content) return alert2('请填写留言内容')
			
			var file = document.getElementById('uploadimgfile').files[0]
			API.PostMsg(this.model,file).then(d=>{
				if(d.isSuccess) alert2('留言成功！')
				else alert2(d.error.message)
			})
		},
		preview(e){
			$("#uploadimgfile").uploadPreview({Img:"kknsdkjbgfkjsgdfg"})
		}
	}
}
</script>

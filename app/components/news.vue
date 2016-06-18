<template>
<div class="rmain">
<div class="news_listC">
	{{GGG}}
	<h1><b>新闻公告</b></h1>
	<ul>
		<h2><span>标 题</span><b>时间</b></h2>
		<li v-for="item in model" style="background: rgb(58, 59, 63);">
			<a v-link="{name:'newssingle',params:{id:item.id}}" href="#">
				◎ {{item.title}}
			</a>
			<time>{{item.the_time|datetime}}</time>
		</li>
	</ul>
</div>

</div>
</template>

<script>

import {API} from '../js/api'; 

export default {
	data(){
		return { 
			model:[],
			now:new Date(),
		 }
	},
	route:{
		data(transition){
			API.News().then(function(data){
				transition.next({"model":data});		
			}).catch(function(err){
				console.log(err);
			});
		}
    },
	created:function(){
	}
}

</script>

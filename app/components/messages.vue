<template>
	<div class="rmain">
		<div class="news_listC">
			<h1><b>消息通知</b></h1>
			<ul>
				<h2><span>标 题</span><b>时间</b></h2>
				<li v-for="item in model" class="row-{{$index%2}}">
						<a v-link="{name:'messagesingle',params:{id:item.id}}" href="">
						<i class="{{item.state}}"></i>{{item.title}}</a>
						<time>{{item.the_time|datetime}}</time>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<script>

import {API} from '../js/api';

export default {
	data(){
		return { 
			model:[]
		 }
	},
	route:{
		data:function(transition){
			API.Messages(1).then(function(data){
				var count = data.count;
				var rows = data.rows;
				rows.forEach(function(item,key){
					if(item.state==0)item.state = "w";
					else item.state = "ed";
				});
				transition.next({'model':rows});
			}).catch(function(err){
				console.log(err);
			});
		}
	}
}
</script>

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
		<pagination urlname="messages" :page="page" :total="total"></pagination>
	</div>
</div>
</template>
<script>

import {API} from '../js/api';
import pagination from './_pagination.vue';

export default {
	data(){
		return { 
			model:[],
			page: 1,
			total: 0,
		 }
	},
	route:{
		data:function(transition){
			var page = transition.to.query.page || this.page;
			API.Messages(page).then(function(data){
				var d = data.data;
				var count = d.count;
				var rows = d.rows;
				if(rows){
					rows.forEach(function(item,key){
						if(item.state==0) item.state = "w";
						else item.state = "ed";
					});
				}
				transition.next({"model": rows,'page': page,'total': count});
			}).catch(function(err){
				console.log(err);
			});
		}
	},
	components:{pagination}
}
</script>

<template>
<div class="rmain">
<div class="news_listC">
	<h1><b>新闻公告</b></h1>
	<ul>
		<h2><span>标 题</span><b>时间</b></h2>
		<li v-for="item in model" class="row-{{$index%2}}">
			<a v-link="{name:'newssingle',params:{id:item.id}}" href="">
				◎ {{item.title}}
			</a>
			<time>{{item.the_time|datetime}}</time>
		</li>
	</ul>
</div>
<pagination urlname="news" :page="page" :total="total"></pagination>

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
		data(transition){
			var page = transition.to.query.page || this.page;
			API.News(page).then(function(data){
				var d = data.data;
				var count = d.count;
				var rows = d.rows;
				transition.next({"model": rows,'page': page,'total': count});
			}).catch(function(err){
				console.log(err);
			});
		}
    },
	components:{pagination}
}

</script>

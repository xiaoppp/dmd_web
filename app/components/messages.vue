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
		<pagination :page="page" :total="total"></pagination>
	</div>
</div>
</template>
<script>

import {API} from '../js/api'
import pagination from './_pagination.vue'

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
			this.load(this.page)
			transition.next()
		}
	},
	methods:{
		load(page){
			let vm = this
			API.News(page).then(function(data){
				var d = data.data

				var count = d.count
				var rows = d.rows
				rows.forEach(function(item,key){
					if(item.state==0) item.state = "w"
					else item.state = "ed"
				});
				vm.$set('model',rows)
				vm.$set('page',page)
				vm.$set('total',count)

			}).catch(function(err){
				console.log(err)
			});
		}
	},
	events:{
		'on-page-changed':function(page){
			this.load(page)
		}
	},
	components:{pagination}
}
</script>

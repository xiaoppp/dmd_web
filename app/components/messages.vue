<template>
	<div class="rmain">
		<div class="news_listC">
			<h1><b>消息通知</b></h1>
			<ul>
				<h2><span>标 题</span><b>时间</b></h2>
				<li v-for="item in model" class="row-{{$index%2}}">
						<a v-link="{name:'messagesingle',params:{id:item.id}}" href="">
						<i class="{{item.state}}"></i>{{item.title}}</a>
						<time>{{item.the_time | datetime}}</time>
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
import * as D from '../js/data'

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
			D.MessageLogic.fetchMany(page).then(x=>{
				let copy = Object.assign({}, D.Messages)
				console.log(copy)
				copy.data.forEach(item=>{
					if(item.state==0) item.state = "w"
					else item.state = "ed"
				})
				vm.$set('model', copy.data)
				vm.$set('page', copy.page)
				vm.$set('total', copy.total)
			})
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

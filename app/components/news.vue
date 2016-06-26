<template>
<div class="rmain">
<div class="news_listC">
	<h1><b>新闻公告</b></h1>
	<ul>
		<h2><span>标 题</span><b>时间</b></h2>
		<li v-for="item in model" class="row-{{$index % 2}}">
			<a v-link="{name:'newssingle',params:{id:item.id}}" href="">
				◎ {{item.title}}
			</a>
			<time>{{item.the_time|datetime}}</time>
		</li>
	</ul>
</div>
<pagination :page="page" :total="total"></pagination>
</div>
</template>

<script>

import {API} from '../js/api'; 
import pagination from './_pagination.vue';
import * as D from './js/data'

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
			this.load(this.page)
			transition.next()
		}
    },
	methods:{
		load(page){
			let vm = this
			D.NewsLogic.fetchMany(page).then(x=>{
				vm.$set('model',d.rows)
				vm.$set('page',page)
				vm.$set('total',d.count)
			}).catch(err=>{
				alert2(err.message)
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

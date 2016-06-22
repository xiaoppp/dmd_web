<template>
    <div class="rmain">
	<div class="news_detailC">
	<h1><b>新闻公告</b></h1>
	<div class="detailC">
		<h3>{{model.title}}</h3>
		<h4>
			<span>来源：</span><b>{{model.the_from}}</b>
			<span>时间：</span><b>{{model.the_time|datetime}}</b>
			<span>阅读次数：</span><b>{{model.vcount}}</b>
		</h4>
		<div class="cententC">
			{{{model.content}}}
		</div>
	
</div>
</div>
</div>
</template>
<script>

	import {API} from '../js/api';
	import {htmlDecode} from 'js-htmlencode';

    export default {
		data(){
			return {model:{}};
		},
		route:{
			data:function(transition){
				var id = transition.to.params.id;
				API.NewsSingle(id).then(function(data){
					var d = data.data;
					d.content = htmlDecode(d.content);
					transition.next({'model': d});
					console.log(d);
				});
			}
		}
    }
</script>
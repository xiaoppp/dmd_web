<template>
    <div class="rmain">
        <div class="news_detailC">
            <h1><b>消息通知</b></h1>
            <div class="detailC">
                <h3>{{model.title}}</h3>
                <h4>
                    <span>来自：</span><b>平台官方客服</b>
                    <span>时间：</span><b>{{model.the_time|datetime}}</b>
                </h4>
                <div style="margin:20px 0;text-align:center;" v-if="{{model.img}}">
                    <img class="show_big_img" style="width:auto;max-height:250px;" v-src="images/message/{{model.img}}">
                </div>
                <div class="cententC">
                    {{model.content}}
                </div>
        </div>
        </div>
    </div>
</template>

<script>
    import {API} from '../js/api';

    export default {
		data(){
			return {model:{}};
		},
		route:{
			data:function(transition){
				var id = transition.to.params.id;
				API.MessageSingle(id).then(function(data){
					transition.next({'model': data});
					console.log(data);
				});
			}
		}
    }
</script>
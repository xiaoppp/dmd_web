<template>
    <div id="pager" v-if="total">
        <ul>
            <li>共 {{total}} 条</li>
            <li>{{page}} / {{pages}} 页</li>
            <li><a href="javascript:void(0);" @click="first" title="第一页">第一页</a></li>
            <li><a href="javascript:void(0);" @click="pre" title="上一页">上一页</a></li>
            <li><a href="javascript:void(0);" @click="next" title="下一页">下一页</a></li>
            <li><a href="javascript:void(0);" @click="last" title="最后一页">最后一页</a></li>
            <li>
                跳转到
                <select class="topage" @change="skip" v-model="page">
                    <option v-for="item in pages" value="{{item+1}}">第{{item+1}}页</option>
                </select>
            </li>
        </ul>
    </div>
</template>

<script>

    import router from '../js/router.config'
    import config from '../js/config'
    
    export default {
        props: {
            total: {
                type:Number,
                required: true,
                default : 0,
                validator: function(val){
                    return val > -1;
                },
                coerce: function (val) {
                    return parseInt(val) // cast the value to string
                }
            },
            page:  {
                type: Number,
                required: true,
                default : 1,
                validator: function(val){
                    return val > 0
                },
                coerce: function (val) {
                    return parseInt(val) // cast the value to string
                }
            },
            eventName: {
                type: String,
                default: 'on-page-changed'
            },
        },
        computed:{
            pages(){
                var t = this.total
                var s = config.pageSize
                return t % s == 0 ? t / s: Math.floor(t / s) + 1
            }
        },
        methods: {
            first(){
                if(this.page == 1) return
                else this.$dispatch(this.eventName, this.page)
            },
            last(){
                if(this.pages == this.page) return
                else this.$dispatch(this.eventName, this.pages)
            },
            pre(){
                if(this.page == 1) return
                else this.page--
                this.$dispatch(this.eventName, this.page)
            },
            next(){
                if(this.pages == this.page) return
                else this.page++
                this.$dispatch(this.eventName, this.page)
            },
            skip(){
                this.$dispatch(this.eventName, this.page)
            }
        }
    }
</script>
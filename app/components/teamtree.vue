<template id="item-template">
    <li>
        <div :class="{bold: isFolder}" class="item-self">
            <i class="{{model.sex == 1 ? 'female':'male'}}"></i>
            <span class="item-name">{{model.truename}} - {{model.mobile}} &nbsp; &nbsp;(下级人数:{{model.teamCount}})</span>
            <span class="item-plus-minus" v-if="isFolder" @click="toggle">[{{open ? ' - ' : ' + '}}]</span>
            <span class="item-plus-minus" v-else  @click="loadChildren(model, $event)">[ + ]</span>
            <a href="javascript:;" class="item-detail" @click="viewDetail(model, $event)">详细</a>
        </div>
        <ul class="item-children" v-show="open" v-if="isFolder">
            <item class="item" v-for="model in model.children" :model="model">
            </item>
        </ul>
    </li>
</template>

<script>
    import Vue from 'vue'
    import { API } from '../js/api'
    import * as D from '../js/data'

    export default Vue.component('item', {
        template: '#item-template',
        props: {
            model: Object,
        },
        data: function() {
            return { open: true }
        },
        computed: {
            isFolder: function() {
                return !!this.model.children
            }
        },
        methods: {
            loadChildren: function(model, e) {
                e.stopPropagation()
                if (model.teamCount == 0 || model.children) return
                Vue.set(model, 'children', [])
                D.TeamLogic.fetchChildren(model.id).then(x=>{
                    model.children = x
                    this.open = true
                })
            },
            toggle: function() {
                console.log('toggle')
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            viewDetail:function(model,e){
                e.stopPropagation()
                this.$dispatch('on-detail-click', model)
            }
        }
    })
</script>

<style>
    .item div {color: white; font-size: 16px; }
    .item-self{ color: #efefef; height: 45px;  line-height: 45px;  }
    .item-name{color:#ddd; padding:0 8px;}
    .item-plus-minus{margin:0 5px;color:#fff;cursor: pointer;}
    .item-children{ padding-left: 3em; line-height: 1.5em;  list-style-type: dot; margin-top: 2px !important;}
    .bold { font-weight: bold; }
    .bold > span {color:#fff;}
    .female,.male{display:inline-block;width:32px;height:32px;}
    .male{background: url('/images/icons/male.png')}
    .female{background: url('/images/icons/female.png')}
    .item-detail{color:#FEC107}
</style>

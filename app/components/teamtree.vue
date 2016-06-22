<template id="item-template">
    <li>
        <div :class="{bold: isFolder}" class="item-self"  @click="toggle">
            <i class="{{model.sex == 1 ? 'female':'male'}}"></i>
            <span class="item-name">{{model.name}} - {{model.mobile}}</span>
            <span class="item-plus-minus" v-if="isFolder">[{{open ? ' - ' : ' + '}}]</span>
            <span class="item-plus-minus" v-else>[ ? ]</span>
            <a href="javascript:;" class="item-detail" @click="viewDetail(model,$event)">详细</a>
        </div>
        <ul class="item-children" v-show="open" v-if="isFolder">
            <item class="item" v-for="model in model.children" :model="model" @click="itemClick(model, $event)">
            </item>
        </ul>
    </li>
</template>

<script>
    import Vue from 'vue';
    import {
        API,
        GET_MEMBER_INFO
    } from '../js/api';

    export default Vue.component('item', {
                template: '#item-template',
                props: {
                    model: Object,
                    from : Number,
                },
                data: function() {
                    return {
                        open: true
                    }
                },
                computed: {
                    isFolder: function() {
                        return this.model.children &&
                            this.model.children.length
                    }
                },
                methods: {
                    itemClick: function(model, e) {
                        e.stopPropagation()

                        console.log('item click')
                        console.log(model.id)

                        if (model.children)
                            return
                        else {

                            Vue.set(model, 'children', [])

                            API.TeamTree(model.id).then(function(data) {
                                    if (data.isSuccess) {
                                        if (data.data.length > 0) {
                                            const children = data.data.map(d => {
                                                return {
                                                    name: d.truename,
                                                    id: d.id,
                                                    sex: d.sex,
                                                    mobile: d.username,
                                                    nickname: d.nickname,
                                                    ok: d.ok
                                                }
                                            })

                                            model.children = children
                                            this.open = true
                                        }
                                    } else {
                                        alert2(data.error.message);
                                    }
                                })
                            }
                    },
                    toggle: function() {
                            console.log('toggle')
                            if (this.isFolder) {
                                this.open = !this.open
                            }
                        },
                    changeType: function() {
                        console.log('change type')
                        if (!this.isFolder) {
                            Vue.set(this.model, 'children', [])
                            this.addChild()
                            this.open = true
                        }
                    },
                    addChild: function() {
                        this.model.children.push({
                            name: 'new stuff'
                        })
                    },
                    viewDetail:function(model,e){
                        e.stopPropagation();
                        console.log(model);
                        this.$dispatch('on-detail-click',model);
                    }
                }
            })
</script>

<style>
    .item {
    }

    .item div {
        color: white;
        font-size: 16px;
    }

    .item-self{
        color: #efefef;
        height: 45px;
        line-height: 45px;
    }

    .item-name{color:#ddd; padding:0 8px;}

    .item-plus-minus{margin:0 5px;color:#fff;cursor: pointer;}

    .item-children{ padding-left: 3em; line-height: 1.5em;  list-style-type: dot; margin-top: 2px !important;}

    .bold { font-weight: bold; }

    .bold > span {color:#fff;}
    .item{}
    .item > ul{}

    .female,.male{display:inline-block;width:32px;height:32px;}
    .male{background: url('/images/icons/male.png')}
    .female{background: url('/images/icons/female.png')}

    .item-detail{color:#FEC107}

</style>

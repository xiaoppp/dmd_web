<template id="item-template">
    <li>
        <div :class="{bold: isFolder}" @click="toggle">
            {{model.name}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <item class="item" v-for="model in model.children" :model="model" @click="itemClick(model, $event)">
            </item>
            <!-- <li @click="addChild">+</li> -->
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
                    model: Object
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
                                                    id: d.id
                                                }
                                            })

                                            // let tree = {
                                            //     name: model.name,
                                            //     children: children
                                            // }
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
                            }
                    }
                })
</script>

<style>
    .item {
        cursor: pointer;
    }

    .item div {
        color: white;
        font-size: 16px;
    }

    .bold {
        font-weight: bold;
    }

    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
</style>

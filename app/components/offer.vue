<template>
    <div>
    <div class="rmain">
        <div class="offerC">
            <h1><b>我要播种</b></h1>
            <h2>请选择播种金额</h2>

            <ul v-if="first">
                <li>
                    <a href="javascript:;" class="money on" @click="select(0)">
                        <span>{{config.key2[0]}}</span>
                        首次购买激活币
                    </a>
                </li>
            </ul>

            <ul v-if="!first">
                <li>
                    <a href="javascript:;" class="money"  :class="{'on': model.i == 0}"  @click="select(0)"><span>{{config.key2[0]}}</span></a>
                </li>

                <li>
                    <a href="javascript:;" class="money" :class="{'on': model.i == 1}"  @click="select(1)"><span>{{config.key2[1]}}</span></a>
                    <a href="javascript:;" class="money" :class="{'on': model.i == 2}"   @click="select(2)"><span>{{config.key2[2]}}</span></a>
                </li>

                <li>
                    <a href="javascript:;" class="money" :class="{'on': model.i == 3}"   @click="select(3)"><span>{{config.key2[3]}}</span></a>
                    <a href="javascript:;" class="money" :class="{'on': model.i == 4}"   @click="select(4)"><span>{{config.key2[4]}}</span></a>
                    <a href="javascript:;" class="money" :class="{'on': model.i == 5}"   @click="select(5)"><span>{{config.key2[5]}}</span></a>
                </li>
            </ul>

            <ul>
                <li class="sm">
                    <strong class="tips">平台提示：</strong>
                    本平台只提供大家一个信息交流的渠道，平台不收取任何费用，资金在会员中流转，闲钱互助，风险自控！请在自愿的前提下完成交易。
                    <br/><br/>
                    <br/>
                    <label class="agree_label"><input type="checkbox" v-model="model.agree" class="agree">我已阅读并同意</label>
                </li>
                <li>
                    <input type="button" class="btn" id="offer_help_btn" @click="submit">
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>

    import {alert2} from '../js/utils'
    import {API} from '../js/api'
    import * as $D from '../js/data'

    export default {
        data(){
            return {
                first: false,
                model : {
                    money : 0,
                    agree : false,
                    i     : 0
                },
                config : $D.Config
            }
        },
        route:{
            data(transition){
                let vm = this
                API.IsNewMember().then(function(data){
                    if(data.isSuccess){
                        transition.next({'first': data.data})
                    } else {
                        alert2(data.error.message)
                    }
                }).catch(function(err){
                    console.log(err)
                })
            }
        },
        methods:{
            submit(){
                let vm = this
                if(!vm.model.agree) alert2('请先阅读平台提示！')
                else {
                    API.Offer(vm.model.money).then(function(data){
                        if(data.isSuccess){
                            alert2('恭喜！ 播种成功')
                        } else {
                            alert2(data.error.message)
                        }
                    }).catch(function(err){
                        console.log(err)
                    })
                }
            },
            select(i){
                let vm = this
                vm.model.i = i
                vm.model.money = vm.config.key2[i]
            }
        }
    }
</script>
<style>
    .tips {
        width: 92%;
        margin: auto;
        margin-bottom: 5px;
        text-align: left;
        font-size: 18px;
        color: #FCC006;
    }

    .agree_label {
        font-size: 18px;
        color: #fff;
    }

    .agree_label .agree {
        width: 20px;
        height: 20px;
    }

    .agree_label .agree:checked {
        -webkit-appearance: none;
        background: #49A2DC url(/images/admin/checkbox_ed.png) no-repeat center center;
        background-size: 100%;
    }
</style>

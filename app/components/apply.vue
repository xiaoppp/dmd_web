<template>
    <div>
        <button @click="changeName">XXXX</button>
        {{getName}}
    <div class="rmain">
        <div class="offerC">
            <h1><b>我要播种</b></h1>
            <h2>请选择播种金额</h2>
            <ul>
                <li>
                    <a href="javascript:;" class="money" data-i="0">
                        <span>1000</span> 首次购买激活币
                    </a>
                </li>
                <dd class="tips">平台提示：</dd>
                <li class="sm">本平台只提供大家一个信息交流的渠道，平台不收取任何费用，资金在会员中流转，闲钱互助，风险自控！请在自愿的前提下完成交易。</li>
                <center>
                    <label class="agree_label">
                        <input type="checkbox" class="agree"> 我已阅读并同意</label>
                </center>
                <br>
                <br>
                <li>
                    <input type="button" class="btn" id="offer_help_btn" value=" ">
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>

    import {getName} from '../js/getters';
    import {changeName} from '../js/actions';

    export default {
        vuex:{
            getters:{
                getName:getName
            },
            actions: {
                changeName: changeName
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

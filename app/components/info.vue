<template>
    <div class="rmain">
        <div class="personalC">
            <h1><b>我的资料</b></h1>
            <div class="sad">
                <a href="javascript:;" :class="{'on':tab == 1}" @click="tab = 1">个人资料</a>
                <a href="javascript:;" :class="{'on':tab == 2}" @click="tab = 2">登录密码</a>
                <a href="javascript:;" :class="{'on':tab == 3}" @click="tab = 3">安全密码</a>
            </div>
            
            <div v-show="tab == 1">
                <validator name="validation">
                <ul class="u1">
                <li>
                    <span>推荐人姓名：</span>
                    <em>{{parent.truename}}</em>
                </li>
                <li>
                    <span>推荐人手机：</span>
                    <em>{{parent.mobile}}</em>
                </li>
                <li>
                    <span>账号/手机：</span>
                    <em>{{model.username}}</em>
                </li>
                <li>
                    <span>昵称：</span>
                    <em><input type="text" class="text" v-model="model.nickname" v-validate:nickname="validationRules.nickname"></em>
                    <validation-errors :field="$validation.nickname"></validation-errors>
                </li>
                <li>
                    <span>真实姓名：</span>
                    <em><input type="text" class="text" v-model="model.truename" v-validate:truename="validationRules.truename"></em>
                    <validation-errors :field="$validation.truename"></validation-errors>
                </li>
                <li>
                    <span>支付宝：</span>
                    <em><input type="text" class="text" v-model="model.alipay" v-validate:alipay="validationRules.alipay"></em>
                    <validation-errors :field="$validation.alipay"></validation-errors>
                </li>
                <li>
                    <span>微信号：</span>
                    <em><input type="text" class="text" v-model="model.weixin" v-validate:weixin="validationRules.weixin"></em>
                    <validation-errors :field="$validation.weixin"></validation-errors>
                </li>
                <li>
                    <span>银行名称：</span>
                    <em>
                        <select class="text sel" v-model="model.bank">
                            <option  v-for="item in Banks" value="{{item.value}}">{{item.text}}</option>
                        </select>
            		</em>
                </li>
                <li>
                    <span>分行名称：</span>
                    <em><input type="text" class="text" v-model="model.bank_addr" v-validate:bank_addr="validationRules.bank_addr"></em>
                    <validation-errors :field="$validation.bank_addr"></validation-errors>
                </li>
                <li>
                    <span>银行卡号：</span>
                    <em><input type="text" class="text" v-model="model.bank_num" v-validate:bank_num="validationRules.bank_num"></em>
                    <validation-errors :field="$validation.bank_num"></validation-errors>
                </li>
                <li>
                    <span>安全密码：</span>
                    <em><input type="password" class="text" v-model="model.pay_pwd" v-validate:pay_pwd="validationRules.pay_pwd"></em>
                    <validation-errors :field="$validation.pay_pwd"></validation-errors>
                </li>
                <li>
                    <!--<span style="color:#fff;">{{$validation|json}}</span>-->
                    <span>&nbsp;</span>
                    <em>
                        <a v-if="$validation.valid" href="javascript:;" @click="submit" class="btn" id="modify_personal_btn">修改资料</a>
                        <a v-else href="javascript:;" class="btn"  style="background-color:#888;cursor:not-allowed">修改资料</a>
                    </em>
                </li>
                <div style="height:8px;"></div>
            </ul>
            </validator>
            </div>
                <div v-show="tab == 2">
                    <validator name="validation1">
                        <ul class="u2">
                        <li>
                            <span>原密码：</span>
                            <em><input type="password" class="text" v-model="pwdModel.old_pwd" v-validate:old_pwd="validationRules.old_pwd"></em>
                            <validation-errors :field="$validation1.old_pwd"></validation-errors>
                        </li>
                        <li>
                            <span>新密码：</span>
                            <em><input type="password" class="text" v-model="pwdModel.pwd" v-validate:pwd="validationRules.pwd"></em>
                            <validation-errors :field="$validation1.pwd"></validation-errors>
                        </li>
                        <li>
                            <span>确认密码：</span>
                            <em><input type="password" class="text" v-model="pwdModel.repwd" v-validate:repwd="validationRules.repwd"></em>
                            <validation-errors :field="$validation1.repwd"></validation-errors>
                        </li>
                        <li>
                            <span>安全密码：</span>
                            <em><input type="password" class="text" v-model="pwdModel.pay_pwd3" v-validate:pay_pwd3="validationRules.pay_pwd3"></em>
                            <validation-errors :field="$validation1.pay_pwd3"></validation-errors>
                        </li>
                        <li>
                            <span>&nbsp;</span>
                            <em>
                                <a v-if="$validation1.valid" href="javascript:;" class="btn" @click="changePwd" id="modify_pwd_btn">修改登录密码</a>
                                <a v-else href="javascript:;" class="btn"  style="background-color:#888;cursor:not-allowed">修改登录密码</a>
                            </em>
                        </li>
                        <li>
                            <span></span>
                            <em></em>
                        </li>
                        </ul>
                    </validator>
            </div>        
            
            <div v-show="tab == 3">
                <validator name="validation2">
            <ul class="u3">
                <li>
                    <span>原安全密码：</span>
                    <em><input type="password" class="text" v-model="payPwdModel.old_pay_pwd" v-validate:old_pay_pwd="validationRules.old_pay_pwd"></em>
                    <validation-errors :field="$validation2.old_pay_pwd"></validation-errors>
                </li>
                <li>
                    <span>新安全密码：</span>
                    <em><input type="password" class="text" v-model="payPwdModel.pay_pwd4" v-validate:pay_pwd4="validationRules.pay_pwd4"></em>
                    <validation-errors :field="$validation2.pay_pwd4"></validation-errors>
                </li>
                <li>
                    <span>确认密码：</span>
                    <em><input type="password" class="text" v-model="payPwdModel.pay_repwd" v-validate:pay_repwd="validationRules.pay_repwd"></em>
                    <validation-errors :field="$validation2.pay_repwd"></validation-errors>
                </li>
                <li>
                    <span>&nbsp;</span>
                    <em>
                        <a v-if="$validation2.valid" href="javascript:;" @click="changePayPwd" class="btn" id="modify_pay_pwd_btn">修改安全密码</a>
                        <a v-else href="javascript:;" class="btn" id="modify_pay_pwd_btn" style="background-color:#888;cursor:not-allowed">修改安全密码</a>
                    </em>
                </li>
                </ul>
                </validator>

                <hr/>

                <validator name="validation3">
                <ul class="ul4">
                <li>
                    <span></span>
                    <em></em>
                </li>
                <li>
                    <span></span>
                    <em></em>
                </li>
                <li>
                    <span>手机号：</span>
                    <em>{{model.mobile}}<input type="hidden" id="mobile" value="{{model.mobile}}"></em>
                </li>
                <li>
                    <span>图形验证码：</span>
                  <em>
                  	<input type="text" class="text" v-model="payPwdModel2.captcha" v-validate:captcha="validationRules.captcha" style="width:150px;">
            				<a href="javascript:void(0);" style="position:relative;" class="validate" title="切换图片" onclick="document.getElementById('captchaImg').src='/core/captcha.php?ImgGetCaptcha=true#'+Math.random();">
            					<img id="captchaImg" style="width:157px; height:44px; box-shadow:0 0 5px #ccc;position:absolute;top:-44px;right:-156px;" src="/core/captcha.php?ImgGetCaptcha=true">
            				</a>
            		</em>
                    <validation-errors :field="$validation3.captcha"></validation-errors>
                </li>
                <li>
                    <span>手机验证码：</span>
                    <em>
		                  <input type="text" v-model="payPwdModel2.mobile_checkcode" v-validate:mobile_checkcode="validationRules.mobile_checkcode" class="text" style="width:150px;">
  				            <input type="button" class="sbtn" data-type="forget" id="send_mobile_checkcode" value="发送验证码" style="border:0;outline:none;width:150px;height:45px;background:#FFC30D;color:#fff;">
  			            </em>
                          <validation-errors :field="$validation3.mobile_checkcode"></validation-errors>
                </li>
                <li>
                    <span>新安全密码：</span>
                    <em><input type="text" class="text" v-model="payPwdModel2.pay_pwd5" v-validate:pay_pwd5="validationRules.pay_pwd5"></em>
                    <validation-errors :field="$validation3.pay_pwd5"></validation-errors>
                </li>
                <li>
                    <span>&nbsp;</span>
                    <em>
                        <a v-if="$validation3.valid" @click="changePayPwd2" href="javascript:;" class="btn" id="reset_pay_pwd_btn">重置安全密码</a>
                        <a v-else href="javascript:;" class="btn" style="background-color:#888;cursor:not-allowed">重置安全密码</a>
                     </em>
                </li>
                <li>
                    <span></span>
                    <em></em>
                </li>
                </ul>
            </validator>
            </div>
            
        </div>
    </div>
  </template>
<script>
    import Vue from 'vue'

    import VueValidator from 'vue-validator'

    import {Banks} from '../js/constants'
    
    import {GET_MEMBER_INFO,API,SET_MEMBER_INFO} from '../js/api'
    import {alert2} from '../js/utils'
    import {ValidatorRules} from  '../js/validation'
    import validationErrors from '../components/_validation_errors.vue'

    Vue.use(VueValidator)

    export default {

        data(){
            return {
                Banks,
                tab : 1 ,//1 info  2  pwd  3  pay_pwd,
                model : {},
                pwdModel : {},
                payPwdModel :{},
                payPwdModel2 : {},
                validationRules: ValidatorRules.Member,
                parent : {truename:'',mobile:''}
            }
        },
        route:{
            data(transition){
                var who = GET_MEMBER_INFO()
                console.log(who)

                let m = {
                    id : who.id,
                    nickname : who.nickname,
                    alipay : who.alipay,
                    weixin : who.weixin,
                    bank : who.bank,
                    bank_num : who.bank_num,
                    bank_addr : who.bank_addr,
                    mobile : who.mobile,
                    username : who.username,
                    truename : who.truename
                }
                
                API.ParentMember(who.parent_id).then(function(data){
                    if(data.isSuccess){
                        transition.next({'parent':data.data,'model':m})
                    } else {
                        alert2(data.error.message)
                    }
                });               
            }
        },
        methods:{
            submit(){
                console.log(this.model);
                API.EditMemberInfo(this.model).then(function(data){
                    if(data.isSuccess){
                        alert2('修改资料成功！')
                        SET_MEMBER_INFO(data.data)
                    } else {
                        alert2(data.error.message)
                    }
                    console.log(data)
                }).catch(function(err){
                    console.log(err)
                });
            },
            changePwd(){
                console.log(this.pwdModel)
                alert2('change pwd')
            },
            changePayPwd(){
                console.log(this.payPwdModel)
                alert2('change pay pwd')
            },
            changePayPwd2(){
                console.log(this.payPwdModel2)
                alert2('change pay pwd 2')
            }
        },
        components:{validationErrors}
    }
</script>

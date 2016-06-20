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
                    <em>赵瑞艮</em>
                </li>
                <li>
                    <span>推荐人手机：</span>
                    <em>15110671687</em>
                </li>
                <li>
                    <span>账号/手机：</span>
                    <em>{{model.username}}</em>
                </li>
                <li>
                    <span>昵称：</span>
                    <em><input type="text" class="text" v-model="model.nickname" v-validation:nickname="validationRules.nickname"></em>
                    <validation-errors :field="$validation.nickname"></validation-errors>
                </li>
                <li>
                    <span>真实姓名：</span>
                    <em><input type="text" class="text" v-model="model.truename" v-validation:nickname="validationRules.truename"></em>
                    <validation-errors :field="$validation.truename"></validation-errors>
                </li>
                <li>
                    <span>支付宝：</span>
                    <em><input type="text" class="text" v-model="model.alipay" v-validation:nickname="validationRules.alipay"></em>
                    <validation-errors :field="$validation.alipay"></validation-errors>
                </li>
                <li>
                    <span>微信号：</span>
                    <em><input type="text" class="text" v-model="model.weixin" v-validation:nickname="validationRules.weixin"></em>
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
                    <em><input type="text" class="text" v-model="model.bank_addr" v-validation:nickname="validationRules.bank_addr"></em>
                    <validation-errors :field="$validation.bank_addr"></validation-errors>
                </li>
                <li>
                    <span>银行卡号：</span>
                    <em><input type="text" class="text" v-model="model.bank_num" v-validation:nickname="validationRules.bank_num"></em>
                    <validation-errors :field="$validation.bank_num"></validation-errors>
                </li>
                <li>
                    <span>安全密码：</span>
                    <em><input type="password" class="text" v-model="model.pay_pwd" v-validation:nickname="validationRules.pay_pwd"></em>
                    <validation-errors :field="$validation.pay_pwd"></validation-errors>
                </li>
                <li>
                   <span style="color:#fff;">{{$validation|json}}</span>
                    <span>&nbsp;</span>
                    <em>
                        <a v-if="$validation.valid" href="javascript:;" @click="submit();" class="btn" id="modify_personal_btn">修改资料</a>
                        <a v-else href="javascript:;" class="btn"  style="background-color:#888;cursor:not-allowed">修改资料</a>
                    </em>
                </li>
            </ul>
            </validator>
            </div>

                <div v-show="tab == 2">
                    <ul class="u2">
                <li>
                    <span>原密码：</span>
                    <em><input type="text" class="text" id="old_pwd" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>新密码：</span>
                    <em><input type="text" class="text" id="pwd" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>确认密码：</span>
                    <em><input type="text" class="text" id="repwd" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>安全密码：</span>
                    <em><input type="text" class="text" id="pay_pwd3" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>&nbsp;</span>
                    <em><a href="javascript:;" class="btn" id="modify_pwd_btn">修改登录密码</a></em>
                </li>
                <li>
                    <span></span>
                    <em></em>
                </li>
            </ul>
            </div>        
            
            <div v-show="tab == 3">
            <ul class="u3">
                <li>
                    <span>原安全密码：</span>
                    <em><input type="text" class="text" id="old_pay_pwd" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>新安全密码：</span>
                    <em><input type="text" class="text" id="pay_pwd4" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>确认密码：</span>
                    <em><input type="text" class="text" id="pay_repwd" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>&nbsp;</span>
                    <em><a href="javascript:;" class="btn" id="modify_pay_pwd_btn">修改安全密码</a></em>
                </li>
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
                    <em>15834048710<input type="hidden" id="mobile" value="15834048710"></em>
                </li>
                <li>
                    <span>图形验证码：</span>
                  <em>
                  	<input type="text" class="text" id="captcha" maxlength="4" style="width:150px;">
            				<a href="javascript:void(0);" style="position:relative;" class="validate" title="切换图片" onclick="document.getElementById('captchaImg').src='/core/captcha.php?ImgGetCaptcha=true#'+Math.random();">
            					<img id="captchaImg" style="width:157px; height:44px; box-shadow:0 0 5px #ccc;position:absolute;top:-44px;right:-156px;" src="/core/captcha.php?ImgGetCaptcha=true">
            				</a>
            			</em>
                </li>
                <li>
                    <span>手机验证码：</span>
                    <em>
		                  <input type="text" id="mobile_checkcode" class="text" maxlength="6" style="width:150px;">
  				            <input type="button" class="sbtn" data-type="forget" id="send_mobile_checkcode" value="发送验证码" style="border:0;outline:none;width:150px;height:45px;background:#FFC30D;color:#fff;">
  			            </em>
                </li>
                <li>
                    <span>新安全密码：</span>
                    <em><input type="text" class="text" id="pay_pwd5" maxlength="32"></em>
                </li>
                <li>
                    <span>&nbsp;</span>
                    <em><a href="javascript:;" class="btn" id="reset_pay_pwd_btn">重置安全密码</a></em>
                </li>
                <li>
                    <span></span>
                    <em></em>
                </li>
            </ul>
            </div>
            
        </div>
    </div>
  </template>
<script>

    import {Banks} from '../js/constants';
    import {GET_MEMBER_INFO} from '../js/api';
    import VRules from  '../js/validation';
    import validationErrors from '../components/_validation_errors.vue';

    export default {

        data(){
            return {
                Banks,
                tab : 1 ,//1 info  2  pwd  3  pay_pwd,
                model : {},
                pwdModel : {},
                payPwdModel :{},
                validationRules: VRules.MemberInfo
            }
        },
        route:{
            data(transition){
                var who = GET_MEMBER_INFO();
                // Object.assign(this.infoModel,who);
                transition.next({'model':who});
            }
        },
        components:{validationErrors}
    }
</script>

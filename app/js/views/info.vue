<template>
    <div class="rmain">
        <div class="personalC">
            <h1><b>我的资料</b></h1>
            <div class="sad">
                <a href="javascript:;" class="on" data-i="1">个人资料</a>
                <a href="javascript:;" data-i="2">登录密码</a>
                <a href="javascript:;" data-i="3">安全密码</a>
            </div>
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
                    <em>15834048710</em>
                </li>
                <li>
                    <span>昵称：</span>
                    <em><input type="text" class="text" id="nickname" value="Wei" maxlength="32"></em>
                </li>
                <li>
                    <span>真实姓名：</span>
                    <em><input type="text" class="text" id="truename" value="" maxlength="32"></em>
                </li>
                <li>
                    <span>支付宝：</span>
                    <em><input type="text" class="text" id="alipay" value="" maxlength="32"></em>
                </li>
                <li>
                    <span>微信号：</span>
                    <em><input type="text" class="text" id="weixin" value="" maxlength="32"></em>
                </li>
                <li>
                    <span>银行名称：</span>
                    <em>
				                  <select id="bankSel" class="text sel">
            									<option value="ccb">中国建设银行</option>
            									<option value="abc">中国农业银行</option>
            									<option value="icbc">中国工商银行</option>
            									<option value="boc">中国银行</option>
            									<option value="psbc">中国邮政银行</option>
            									<option value="bmc">中国交通银行</option>
            									<option value="cmb">中国招商银行</option>
            									<option value="cmbc">中国民生银行</option>
            									<option value="cib">中国兴业银行</option>
            									<option value="ceb">中国光大银行</option>
            									<option value="other">其它银行（写在分行前）</option>
          								</select>
            			</em>
                </li>
                <li>
                    <span>分行名称：</span>
                    <em><input type="text" class="text" id="bank_addr" value="" maxlength="32"></em>
                </li>
                <li>
                    <span>银行卡号：</span>
                    <em><input type="text" class="text" id="bank_num" value="" maxlength="32"></em>
                </li>
                <li>
                    <span>安全密码：</span>
                    <em><input type="text" class="text" id="pay_pwd" onfocus="this.type='password';" maxlength="32"></em>
                </li>
                <li>
                    <span>&nbsp;</span>
                    <em><a href="javascript:;" class="btn" id="modify_personal_btn">修改资料</a></em>
                </li>
            </ul>
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
  </template>
        <script>
            export default {}
        </script>

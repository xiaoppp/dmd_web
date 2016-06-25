

export const ValidatorRules = {

Register :  {
    nickname:{
        required:{ rule:true,message:"昵称不能为空"},
        maxlength:{ rule:15,message:"不能超过15个字符"}
    },
    pwd: {
        required:{ rule:true,message:"密码不能为空"},
        maxlength:{ rule:32,message:"不能超过32个字符"}
    },
    pay_pwd: {
        required:{ rule:true,message:"安全密码不能为空"},
        maxlength:{ rule:32,message:"不能超过32个字符"}
    },
    mobile: {
        required:{ rule:true,message:"会员手机号码不能为空"},
        maxlength:{ rule:11,message:"不能超过11个字符"}
    },
    captcha: {
        required:{ rule:true,message:"图形验证码不能为空"},
        maxlength:{ rule:4,message:"不能超过4个字符"}
    },
    mobile_checkcode: {
        required:{ rule:true,message:"手机验证码不能为空"},
        maxlength:{ rule:6,message:"不能超过6个字符"}
    },
},

Member : {
    nickname:{
        required:{ rule:true,message:"昵称不能为空"},
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
    truename:{
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
    alipay:{
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
    weixin:{
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
    bank:{
        required:{rule:true,message:"请选择银行卡类型"},
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
    bank_num:{
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
    bank_addr:{
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
    pay_pwd:{
        required:{rule:true,message:"请填写安全密码"},
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },

    old_pwd :{
        required:{rule:true,message:"请填写原始密码"}
    },

    pwd: {
        required:{rule:true,message:"请填写新密码"}
    },

    repwd: {
        required:{rule:true,message:"请再次填写新密码"}
    },

    pay_pwd3:{
        required:{rule:true,message:"请输入安全密码"}
    },

    old_pay_pwd:{
        required:{rule:true,message:"请输入原始安全密码"}
    },

    pay_pwd4:{
        required:{rule:true,message:"请输入新的安全密码"}
    },

    pay_repwd:{
        required:{rule:true,message:"请再次输入新的安全密码"}
    },

    captcha:{
        required:{rule:true,message:"请输入图形验证码"}
    },

    mobile_checkcode :{
        required:{rule:true,message:"请输入手机验证码"}
    },

    pay_pwd5:{
        required:{rule:true,message:"请输入新的安全密码"}
    },

}
};


export const Validators = {

};
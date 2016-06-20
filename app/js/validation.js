const VRules = {};

VRules.Register = {
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
};

VRules.MemberInfo = {
    nickname:{
        required:{ rule:true,message:"昵称不能为空"},
        maxlength:{ rule: 32,message:"不能超过32个字符"}
    },
}

export default VRules;
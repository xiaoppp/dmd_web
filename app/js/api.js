import request from 'superagent';
import Q from 'q';
import config from './config'

const API_HOST = 'http://192.168.1.102:3000/api/';
export const LOGIN_KEY = "member.login.information";

export const API = {
    News(page){
        return HTTP_GET(_Combine('news/page/', page));
    },
    NewsSingle(id){
        return HTTP_GET(_Combine('news/',id));
    },
    Messages(page){
        var who = GET_MEMBER_LOGIN_INFO();
        return HTTP_GET(_Combine('messages/page/', who.memberid,'/', page));
    },
    MessageSingle(id){
        return HTTP_GET(_Combine('message/',id));
    },
    MessageReplies(){
        var who = GET_MEMBER_LOGIN_INFO();
        return HTTP_GET(_Combine('messages/reply/',who.memberid));
    },
    PostMsg(model){
        var who = GET_MEMBER_LOGIN_INFO();
        model.member_id = who.memberid;
        model.to_member_id = 0;
        model.state = 0;
        console.log(model);
        return HTTP_POST(_Combine('message/action/leavemsg'), model);
    },
    Login(model){
        console.log(model);
        var deferred = Q.defer();
        config.ajaxRequireToken = false;
        HTTP_POST(_Combine('member/signin'), model,true).then(function(data){
            if (data.isSuccess){
                //data.data   { memberid, token}
                //save the login info in localStorage
                window.localStorage.setItem(LOGIN_KEY, JSON.stringify(data.data));
                config.ajaxRequireToken = true;
            }
            deferred.resolve(data);
        }).catch(function(err){
            deferred.reject(err);
        });
        return deferred.promise;
    },
    Logout(model){
        var deferred = Q.defer();
        HTTP_POST(_Combine('member/signout'),model).then(function(data){
           window.localStorage.removeItem(LOGIN_KEY);
           deferred.resolve(data);
        }).catch(function(err){
            deferred.reject(err);
        });
        return deferred.promise;
    },
    Register(model){
        var deferred = Q.defer();
        config.ajaxRequireToken = false;
        HTTP_POST(_Combine('member/signup'),model).then(function(data){
           window.localStorage.setItem(LOGIN_KEY, data.data);
           config.ajaxRequireToken = true;
           deferred.resolve(data);
        }).catch(function(err){
            deferred.reject(err);
        });
        return deferred.promise;
    },
    Member(username){
        return HTTP_GET(_Combine('member/',username));
    },
    ParentMember(id){
        return HTTP_GET(_Combine('member/info/',id));
    },
    IndexData(){
        var who = GET_MEMBER_LOGIN_INFO();
         return HTTP_GET(_Combine('index/info/', who.memberid));
    },
    EditMemberInfo(model){
        return HTTP_POST(_Combine('member/edit/info'),model);
    },
    EditPwd(model){
        return HTTP_POST(_Combine('member/reset'),model);
    },
    EditPayPwd(model,mode){
        //mode //  0 通过原始安全密码,  1 通过手机验证码
    },
    TeamTree(id){
        //member/children
        return HTTP_GET(_Combine('member/children/',id));
    },
    Offer(money){
        let model = {money : money};
        return HTTP_POST(_Combine('offer'),model);
    }
}

//** Utilities

function _Combine(){
    if(arguments.length===0) return API_HOST;
    else {
        var len = arguments.length;
        var raw = API_HOST;
        for(var i=0;i<len;i++){
            raw += arguments[i];
        }
        return raw;
    }
}

//*** Abstract Tools

export function HTTP_POST(url,data){
    console.log('------------post',url);
    var deferred = Q.defer();
    request
        .post(url)
        .send(data)
        .end(function(err,res){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(res.body);
            }
        });
    return deferred.promise;
}

export function HTTP_GET (url,data){
    console.log('------------get',url);
    var deferred = Q.defer();
    request
        .get(url)
        .timeout(6000)
        .query(data)
        .on('error',function(err){
        })
        .end(function(err,res){
            if(err){
                deferred.reject("error");
            } else {
                deferred.resolve(res.body);
            }
        });
    return deferred.promise;
}

export function HTTP_PUT (url,data){
    console.log('--------------put',url);
    var deferred = Q.defer();
    request
        .put(url)
        .send(data)
        .end(function(err,res){
            if(err){
                deferred.reject("error");
            } else {
                deferred.resolve(res.body);
            }
        });
    return deferred.promise;
}

export function HTTP_DELETE(url,data) {
    console.log('delete',url);
    var deferred = Q.defer();
    request
        .del(url)
        .send(data)
        .end(function(err,res){
            if(err) {
                deferred.reject("error");
            } else {
                deferred.resolve(res.body);
            }
        });
    return deferred.promise;
}

//** LocalStrorage  & Member Info

var MEMBER_INFO = {};

//取会员登录时保存在LocalStorage中的值
export function GET_MEMBER_LOGIN_INFO() {
    var who = window.localStorage.getItem(LOGIN_KEY);
    if(!who) throw "no member login";
    who = JSON.parse(who);
    return who;
}

export function HAS_LOGIN() {
    var who = window.localStorage.getItem(LOGIN_KEY);
    if(!who) return false;
    else return true;
}

//取当前会员信息
export function GET_MEMBER_INFO() {
    if(MEMBER_INFO && MEMBER_INFO.id)
        return MEMBER_INFO;
    else throw "no member info.";
}

export function  SET_MEMBER_INFO(value) {
    MEMBER_INFO = value;
}

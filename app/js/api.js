import request from 'superagent'
import Q from 'q'
import config from './config'
import router from './router.config'

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
                window.localStorage.setItem(config.loginkey, JSON.stringify(data.data));
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
           window.localStorage.removeItem(config.loginkey);
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
           window.localStorage.setItem(config.loginkey, data.data);
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
        let who = GET_MEMBER_LOGIN_INFO()
        let model = {money : money, memberid:who.memberid}
        return HTTP_POST(_Combine('offer/member'), model)
    },
    Apply(money){
        let who = GET_MEMBER_LOGIN_INFO()
        let model = { memberid:who.memberid, money:money }
        return HTTP_POST(_Combine('apply/member'), model)
    },
    TeamScope(id){
        return HTTP_GET(_Combine('member/children/amount/',id));
    },
    IncomeRecords(type,page){
        //type  =  money or  interest or bonus
        let who = GET_MEMBER_INFO()
        return HTTP_GET(_Combine('income/',type,'/',who.id,'/',page))
    },
    DealRecords(type,page){
        // type = offers or applys or unmatches
        let who = GET_MEMBER_INFO()
        return HTTP_GET(_Combine(type,'/', who.id))
    },
    IsNewMember(){
        let who = GET_MEMBER_INFO()
        return HTTP_GET(_Combine('member/check/new/',who.id))
    },
    OfferDetail(id){
        let who = GET_MEMBER_INFO()
        let model = {offerid : id, memberid: who.id}
        return HTTP_POST(_Combine('offer/detail'),model)
    },
    ApplyDetail(id){
        let who = GET_MEMBER_INFO()
        let model = {applyid : id, memberid : who.id}
        return HTTP_POST(_Combine('apply/detail'),model)
    }
}

//** Utilities

function _Combine(...parts){
    let len = parts.length;
    if(len === 0) throw 'no parts provided';
    else {
        let raw = config.host;
        for(let i=0; i < len; i++){
            raw += parts[i];
        }
        return raw;
    }
}

function _HttpErrorHandle_(err) {
    //if(err) window.location.href = '/error.html'
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
        .end(function(err,res){
            if(err){
                _HttpErrorHandle_(err);
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

//** LocalStrorage  & Member Info  auth

var MEMBER_INFO = {};

//取会员登录时保存在LocalStorage中的值
export function GET_MEMBER_LOGIN_INFO() {
    var who = window.localStorage.getItem(config.loginkey);
    if(!who) {
        window.location.href = '/login.html'
    }else{
        who = JSON.parse(who);
        return who;
    }
}

export function HAS_LOGIN() {
    var who = window.localStorage.getItem(config.loginkey);
    if(!who) return false;
    else return true;
}

//取当前会员信息
export function GET_MEMBER_INFO() {
    if(MEMBER_INFO && MEMBER_INFO.id)
        return MEMBER_INFO;
    else throw "no member info provided.";
}

export function  SET_MEMBER_INFO(value) {
    MEMBER_INFO = value;
}

import request from 'superagent';
import Q from 'q';

const API_HOST = 'http://192.168.1.102:3000/api/';

export const API = {
    News(page){
        return HTTP_GET(_Combine('news/page/', page));
    },
    NewsSingle(id){
        return HTTP_GET(_Combine('news/',id));
    },
    Messages(page){
        var who = GET_MEMBER_LOGIN_INFO();
        return HTTP_GET(_Combine('messages/page/', who.id,'/', page));
    },
    MessageSingle(id){
        return HTTP_GET(_Combine('message/',id));
    },
    MessageReplies(){
        var who = GET_MEMBER_LOGIN_INFO();
        return HTTP_GET(_Combine('messages/reply/',who.id));
    },
    PostMsg(model){
        var who = GET_MEMBER_LOGIN_INFO();
        model.member_id = who.id;
        model.to_member_id = 0;
        model.state = 0;
        console.log(model);
        return HTTP_POST(_Combine('message/action/leavemsg'),model);
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
            if(err){
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
            if(err){
                deferred.reject("error");
            } else {
                deferred.resolve(res.body);
            }
        });
    return deferred.promise;
}

//** LocalStrorage

export function GET_MEMBER_LOGIN_INFO(){
    return { id:4132 ,token: '',sex: 1,tel:'18742538743',username:'18742538743'}
}


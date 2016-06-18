import request from 'superagent';
import Q from 'q';

const API_HOST = 'http://192.168.1.102:3000/api/';

export const API = {
    News(){
        return HTTP_GET(_Combine('news'));
    },
    NewSingle(id){
        return HTTP_GET(_Combine('news/'+id));
    },
}

//** Utilities

function _Combine(api){
    return API_HOST + api;
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
                deferred.resolve(res);
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
                deferred.resolve(res);
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
                deferred.resolve(res);
            }
        });
    return deferred.promise;
}



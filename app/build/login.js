webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _api = __webpack_require__(27);

	var _utils = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _vue2.default({
	    el: "#loginApp",
	    data: {
	        message: "Hello,Loing app.",
	        mobile: '',
	        pwd: '',
	        disabled: false
	    },
	    methods: {
	        login: function login(evt) {
	            var model = {
	                username: this.mobile,
	                pwd: this.pwd
	            };
	            _api.API.Login(model).then(function (data) {
	                if (data.isSuccess) {
	                    (0, _utils.alert2)("登录成功！").then(function () {
	                        var url = window.location.protocol + "://" + window.location.host + '/';
	                        console.log(url);
	                        window.location.href = url;
	                    });
	                } else {
	                    var msg = '[' + data.error.code + ']  ' + data.error.message;
	                    (0, _utils.alert2)(msg);
	                }
	            }).catch(function (err) {
	                console.log(err);
	            });
	        },
	        retrievePWD: function retrievePWD(evt) {
	            alert("您是否正的忘记了密码呢？");
	        }
	    }
	});

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.alert2 = alert2;
	exports.queryValue = queryValue;

	var _q = __webpack_require__(9);

	var _q2 = _interopRequireDefault(_q);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function alert2(msg) {

	    var defered = _q2.default.defer();

	    var template = '\n\t    <div>\n\t\t    <h5><b>提示信息！</b></h5>\n\t\t    <p><span>' + msg + '</span></p>\n\t\t    <dd><button>确&nbsp;定</button></dd>\n\t    </div>\n    ';

	    var div = document.createElement('div');
	    div.setAttribute('id', "show_alert");
	    div.style.display = 'block';
	    div.innerHTML = template;
	    var btn = div.children[0].children[2].children[0];

	    if (btn.onclick) btn.onclick = _close;else if (btn.attachEvent) btn.attachEvent('onclick', _close);else if (btn.addEventListener) btn.addEventListener('click', _close);else {
	        throw new Error("no click event handler can be bound.");
	    }

	    document.body.appendChild(div);

	    function _close() {
	        document.body.removeChild(div);
	        defered.resolve('close');
	    }

	    return defered.promise;
	};

	function queryValue(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.API = exports.LOGIN_KEY = undefined;
	exports.HTTP_POST = HTTP_POST;
	exports.HTTP_GET = HTTP_GET;
	exports.HTTP_PUT = HTTP_PUT;
	exports.HTTP_DELETE = HTTP_DELETE;
	exports.GET_MEMBER_LOGIN_INFO = GET_MEMBER_LOGIN_INFO;
	exports.HAS_LOGIN = HAS_LOGIN;
	exports.GET_MEMBER_INFO = GET_MEMBER_INFO;
	exports.SET_MEMBER_INFO = SET_MEMBER_INFO;

	var _superagent = __webpack_require__(28);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _q = __webpack_require__(9);

	var _q2 = _interopRequireDefault(_q);

	var _config = __webpack_require__(34);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var API_HOST = 'http://192.168.1.100:3000/api/';
	var LOGIN_KEY = exports.LOGIN_KEY = "member.login.information";

	var API = exports.API = {
	    News: function News(page) {
	        return HTTP_GET(_Combine('news/page/', page));
	    },
	    NewsSingle: function NewsSingle(id) {
	        return HTTP_GET(_Combine('news/', id));
	    },
	    Messages: function Messages(page) {
	        var who = GET_MEMBER_LOGIN_INFO();
	        return HTTP_GET(_Combine('messages/page/', who.memberid, '/', page));
	    },
	    MessageSingle: function MessageSingle(id) {
	        return HTTP_GET(_Combine('message/', id));
	    },
	    MessageReplies: function MessageReplies() {
	        var who = GET_MEMBER_LOGIN_INFO();
	        return HTTP_GET(_Combine('messages/reply/', who.memberid));
	    },
	    PostMsg: function PostMsg(model) {
	        var who = GET_MEMBER_LOGIN_INFO();
	        model.member_id = who.memberid;
	        model.to_member_id = 0;
	        model.state = 0;
	        console.log(model);
	        return HTTP_POST(_Combine('message/action/leavemsg'), model);
	    },
	    Login: function Login(model) {
	        console.log(model);
	        var deferred = _q2.default.defer();
	        _config2.default.ajaxRequireToken = false;
	        HTTP_POST(_Combine('member/signin'), model, true).then(function (data) {
	            if (data.isSuccess) {
	                //data.data   { memberid, token}
	                //save the login info in localStorage
	                window.localStorage.setItem(LOGIN_KEY, JSON.stringify(data.data));
	                _config2.default.ajaxRequireToken = true;
	            }
	            deferred.resolve(data);
	        }).catch(function (err) {
	            deferred.reject(err);
	        });
	        return deferred.promise;
	    },
	    Logout: function Logout(model) {
	        var deferred = _q2.default.defer();
	        HTTP_POST(_Combine('member/signout'), model).then(function (data) {
	            window.localStorage.removeItem(LOGIN_KEY);
	            deferred.resolve(data);
	        }).catch(function (err) {
	            deferred.reject(err);
	        });
	        return deferred.promise;
	    },
	    Register: function Register(model) {
	        var deferred = _q2.default.defer();
	        _config2.default.ajaxRequireToken = false;
	        HTTP_POST(_Combine('member/signup'), model).then(function (data) {
	            window.localStorage.setItem(LOGIN_KEY, data.data);
	            _config2.default.ajaxRequireToken = true;
	            deferred.resolve(data);
	        }).catch(function (err) {
	            deferred.reject(err);
	        });
	        return deferred.promise;
	    },
	    Member: function Member(username) {
	        return HTTP_GET(_Combine('member/', username));
	    },
	    IndexData: function IndexData() {
	        var who = GET_MEMBER_LOGIN_INFO();
	        return HTTP_GET(_Combine('index/info/', who.memberid));
	    }
	};

	//** Utilities

	function _Combine() {
	    if (arguments.length === 0) return API_HOST;else {
	        var len = arguments.length;
	        var raw = API_HOST;
	        for (var i = 0; i < len; i++) {
	            raw += arguments[i];
	        }
	        return raw;
	    }
	}

	//*** Abstract Tools

	function HTTP_POST(url, data) {
	    console.log('------------post', url);
	    var deferred = _q2.default.defer();
	    _superagent2.default.post(url).send(data).end(function (err, res) {
	        if (err) {
	            deferred.reject(err);
	        } else {
	            deferred.resolve(res.body);
	        }
	    });
	    return deferred.promise;
	}

	function HTTP_GET(url, data) {
	    console.log('------------get', url);
	    var deferred = _q2.default.defer();
	    _superagent2.default.get(url).timeout(6000).query(data).on('error', function (err) {}).end(function (err, res) {
	        if (err) {
	            deferred.reject("error");
	        } else {
	            deferred.resolve(res.body);
	        }
	    });
	    return deferred.promise;
	}

	function HTTP_PUT(url, data) {
	    console.log('--------------put', url);
	    var deferred = _q2.default.defer();
	    _superagent2.default.put(url).send(data).end(function (err, res) {
	        if (err) {
	            deferred.reject("error");
	        } else {
	            deferred.resolve(res.body);
	        }
	    });
	    return deferred.promise;
	}

	function HTTP_DELETE(url, data) {
	    console.log('delete', url);
	    var deferred = _q2.default.defer();
	    _superagent2.default.del(url).send(data).end(function (err, res) {
	        if (err) {
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
	function GET_MEMBER_LOGIN_INFO() {
	    var who = window.localStorage.getItem(LOGIN_KEY);
	    if (!who) throw "no member login";
	    who = JSON.parse(who);
	    return who;
	}

	function HAS_LOGIN() {
	    var who = window.localStorage.getItem(LOGIN_KEY);
	    if (!who) return false;else return true;
	}

	//取当前会员信息
	function GET_MEMBER_INFO() {
	    if (MEMBER_INFO && MEMBER_INFO.id) return MEMBER_INFO;else throw "no member info.";
	}

	function SET_MEMBER_INFO(value) {
	    MEMBER_INFO = value;
	}

/***/ },

/***/ 34:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    ajaxRequireToken: true
	};

/***/ }

});
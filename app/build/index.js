webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _router = __webpack_require__(4);

	var _router2 = _interopRequireDefault(_router);

	var _store = __webpack_require__(82);

	var _store2 = _interopRequireDefault(_store);

	__webpack_require__(84);

	__webpack_require__(26);

	var _api = __webpack_require__(27);

	var _utils = __webpack_require__(8);

	__webpack_require__(204);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = _vue2.default.extend({
	    data: function data() {
	        return {
	            member: {},
	            config6: {},
	            config24: {},
	            bonusFreeze: 0,
	            moneyFreeze: 0,
	            offer: {},
	            offerPairs: 0,
	            applyPairs: 0,
	            showNews: false
	        };
	    },

	    props: {},
	    methods: {
	        gBelieveSrc: function gBelieveSrc(n) {
	            var b = this.member.believe;
	            if (b == undefined) return 'images/xin02.png';
	            var i = n < b ? 1 : 2;
	            return "images/xin0" + i + ".png";
	        }
	    },
	    created: function created() {
	        var vm = this;
	        _api.API.IndexData().then(function (data) {
	            if (data.isSuccess) {
	                var d = data.data;
	                (0, _api.SET_MEMBER_INFO)(d.member);
	                vm.member = (0, _api.GET_MEMBER_INFO)();
	                vm.config6 = d.config6;
	                vm.config24 = d.config24;
	                vm.moneyFreeze = d.moneyFreeze;
	                vm.bonusFreeze = d.bonusFreeze;
	                vm.offer = d.offer;
	                vm.offerPairs = d.offerPairs;
	                vm.showNews = d.showNews;
	                vm.apply = d.apply;
	                console.log(data.data);
	            } else {
	                (0, _utils.alert2)(data.error.message);
	                console.log(data.error.message);
	            }
	        });
	    },

	    components: {},
	    store: _store2.default
	});

	// start app
	_router2.default.start(App, '#app');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(5);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _offer = __webpack_require__(12);

	var _offer2 = _interopRequireDefault(_offer);

	var _apply = __webpack_require__(15);

	var _apply2 = _interopRequireDefault(_apply);

	var _info = __webpack_require__(24);

	var _info2 = _interopRequireDefault(_info);

	var _team = __webpack_require__(40);

	var _team2 = _interopRequireDefault(_team);

	var _income = __webpack_require__(43);

	var _income2 = _interopRequireDefault(_income);

	var _record = __webpack_require__(48);

	var _record2 = _interopRequireDefault(_record);

	var _news = __webpack_require__(51);

	var _news2 = _interopRequireDefault(_news);

	var _newssingle = __webpack_require__(57);

	var _newssingle2 = _interopRequireDefault(_newssingle);

	var _messages = __webpack_require__(61);

	var _messages2 = _interopRequireDefault(_messages);

	var _messagesingle = __webpack_require__(64);

	var _messagesingle2 = _interopRequireDefault(_messagesingle);

	var _leavemsg = __webpack_require__(67);

	var _leavemsg2 = _interopRequireDefault(_leavemsg);

	var _share = __webpack_require__(70);

	var _share2 = _interopRequireDefault(_share);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);

	var router = new _vueRouter2.default({
	    history: false,
	    hashbang: true,
	    root: "app/index.html"
	});

	router.map({
	    '/index': {
	        name: 'index',
	        component: _index2.default
	    },
	    '/offer': {
	        name: 'offer',
	        component: _offer2.default
	    },
	    '/apply': {
	        name: 'apply',
	        component: _apply2.default
	    },
	    '/info': {
	        name: 'info',
	        component: _info2.default
	    },
	    '/team': {
	        name: 'team',
	        component: _team2.default
	    },
	    '/income': {
	        name: 'income',
	        component: _income2.default
	    },
	    '/record': {
	        name: 'record',
	        component: _record2.default
	    },
	    '/news': {
	        name: 'news',
	        component: _news2.default
	    },
	    '/news/:id': {
	        name: "newssingle",
	        component: _newssingle2.default
	    },
	    '/leavemsg': {
	        name: 'leavemsg',
	        component: _leavemsg2.default
	    },
	    '/messages': {
	        name: 'messages',
	        component: _messages2.default
	    },
	    '/message/:id': {
	        name: "messagesingle",
	        component: _messagesingle2.default
	    },
	    '/share': {
	        name: 'share',
	        component: _share2.default
	    }
	});

	router.redirect({
	    '*': '/index'
	});

	router.go({ name: 'index' });

	exports.default = router;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _router = __webpack_require__(4);

	var _router2 = _interopRequireDefault(_router);

	var _utils = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		computed: {
			offer: function offer() {
				return this.$parent.offer;
			},
			apply: function apply() {
				return this.$parent.apply;
			},
			dmd: function dmd() {
				return 0;
			},
			income: function income() {
				return this.$parent.member.money + this.$parent.moneyFreeze;
			},
			bonus: function bonus() {
				return this.$parent.member.bonus + this.$parent.bonusFreeze;
			},
			aboutIncome: function aboutIncome() {
				var p = this.$parent;
				var offer = p.offer;
				if (offer.fst == 0) return offer.money * p.config6.val * p.config24.val;else return 0;
			}
		},
		methods: {
			goApply: function goApply() {
				var o = this.apply;
				if (!o) return;else _router2.default.go({ name: "apply", query: { id: o.id } });
			},
			goOffer: function goOffer() {
				var o = this.offer;
				if (!o) return;else _router2.default.go({ name: "offer", query: { id: o.id } });
			}
		}
	};

/***/ },
/* 8 */
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
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"rmain\" style=\"background:#26272C;\">\r\n\r\n\t<div class=\"nifo\">\r\n\t\t<ul>\r\n\t\t\t<li><b>DMD币</b><span>{{dmd|currency '￥'}}</span></li>\r\n\t\t\t<li><b>本金总额</b><span>{{income|currency '￥'}}</span></li>\r\n\t\t\t<li><b>利息总额</b><span>{{$parent.member.interest|currency '￥'}}</span></li>\r\n\t\t\t<li><b>奖金总额</b><span>{{bonus|currency '￥'}}</span></li>\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t<div class=\"anniu\">\r\n\t\t<a href=\"\" v-link=\"{name:'offer'}\"><img src=\"/images/btn_bozhong.png\"></a>\r\n\t\t<a href=\"\" v-link=\"{name:'apply'}\"><img src=\"/images/btn_shouhuo.png\"></a>\r\n\t</div>\r\n\r\n\t<div class=\"bzsh\">\r\n\t\t<a href=\"javascript:void(0);\" @click=\"goOffer\" class=\"bs bz\" title=\"查看详情\">\r\n\t\t<i>{{offer?\"正在\":\"等待\"}}播种</i>\r\n\t\t\t<ul v-if=\"offer\">\r\n\t\t\t\t<li><span>金额：</span><b class=\"rd\">{{offer.money|currency '￥'}}</b></li>\r\n\t\t\t\t<li><span>匹配人数：</span><b>{{$parent.offerPairs}}人</b></li>\r\n\t\t\t\t<li><span>发起时间：</span><b>{{offer.the_time|datetime}}</b></li>\r\n\t\t\t\t<li><span>预计收益：</span><b>{{aboutIncome}}</b></li>\r\n\t\t\t\t<li><span>状态：</span><b class=\"rd\">{{offer.state==100?\"订单完成\":\"进行中...\"}}</b></li>\r\n\t\t\t</ul>\r\n\t\t</a>\r\n\t\t<a href=\"javascript:void(0);\" @click=\"goApply\" class=\"bs sh\" title=\"查看详情\">\r\n\t\t<i class=\"i\">{{apply?\"正在\":\"等待\"}}收获</i>\r\n\t\t\t<ul v-if=\"apply\">\r\n\t\t\t\t<li><span>金额：</span><b class=\"rd\">{{apply.money}}</b></li>\r\n\t\t\t\t<li><span>匹配人数：</span><b>{{$parent.applyPairs}}人</b></li>\r\n\t\t\t\t<li><span>发起时间：</span><b>{{apply.the_time|datetime}}</b></li>\r\n\t\t\t\t<li><span>状态：</span><b class=\"rd\">{{apply.state==100?\"订单完成\":\"进行中...\"}}</b></li>\r\n\t\t\t</ul>\r\n\t\t</a>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(13)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\offer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./offer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"rmain\">\r\n  <div class=\"applyC\">\r\n  \t<h1><b>我要收获</b></h1>\r\n  \t<h2>请输入收获金额</h2>\r\n  \t<ul>\r\n  \t\t<li><input type=\"number\" class=\"text\" id=\"money\" min=\"500\" max=\"0\" step=\"100\"></li>\r\n  \t\t<li class=\"sm\">您的账户总额：0.00元，冻结总额：0.00元，正在提现总额：0.00元，可提现总额：0.00元。</li>\r\n  \t\t<li class=\"sm\">收获金额最少500元，不能大于账户可用总余额，且必须是100的整倍数。</li>\r\n  \t\t<li><input type=\"button\" class=\"btn\" id=\"apply_help_btn\" value=\" \"></li>\r\n  \t</ul>\r\n  </div>\t\r\n</div>\r\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(16)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\apply.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./apply.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./apply.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./apply.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.tips {\n    width: 92%;\n    margin: auto;\n    margin-bottom: 5px;\n    text-align: left;\n    font-size: 18px;\n    color: #FCC006;\n}\n\n.agree_label {\n    font-size: 18px;\n    color: #fff;\n}\n\n.agree_label .agree {\n    width: 20px;\n    height: 20px;\n}\n\n.agree_label .agree:checked {\n    -webkit-appearance: none;\n    background: #49A2DC url(/images/admin/checkbox_ed.png) no-repeat center center;\n    background-size: 100%;\n}\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getters = __webpack_require__(21);

	var _actions = __webpack_require__(22);

	exports.default = {
	    vuex: {
	        getters: {
	            getName: _getters.getName
	        },
	        actions: {
	            changeName: _actions.changeName
	        }
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getName = getName;
	function getName(state) {
	    return state.name;
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var changeName = exports.changeName = function changeName(_ref) {
	    var dispatch = _ref.dispatch;
	    var state = _ref.state;

	    dispatch('CHANGENAME', 1);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n  <div>\n      <button @click=\"changeName\">XXXX</button>\n      {{getName}}\n  <div class=\"rmain\">\n      <div class=\"offerC\">\n          <h1><b>我要播种</b></h1>\n          <h2>请选择播种金额</h2>\n          <ul>\n              <li>\n                  <a href=\"javascript:;\" class=\"money\" data-i=\"0\">\n                      <span>1000</span> 首次购买激活币\n                  </a>\n              </li>\n              <dd class=\"tips\">平台提示：</dd>\n              <li class=\"sm\">本平台只提供大家一个信息交流的渠道，平台不收取任何费用，资金在会员中流转，闲钱互助，风险自控！请在自愿的前提下完成交易。</li>\n              <center>\n                  <label class=\"agree_label\">\n                      <input type=\"checkbox\" class=\"agree\"> 我已阅读并同意</label>\n              </center>\n              <br>\n              <br>\n              <li>\n                  <input type=\"button\" class=\"btn\" id=\"offer_help_btn\" value=\" \">\n              </li>\n          </ul>\n      </div>\n  </div>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\info.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./info.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueValidator = __webpack_require__(3);

	var _vueValidator2 = _interopRequireDefault(_vueValidator);

	var _constants = __webpack_require__(26);

	var _api = __webpack_require__(27);

	var _utils = __webpack_require__(8);

	var _validation = __webpack_require__(35);

	var _validation_errors = __webpack_require__(36);

	var _validation_errors2 = _interopRequireDefault(_validation_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueValidator2.default);

	exports.default = {
	    data: function data() {
	        return {
	            Banks: _constants.Banks,
	            tab: 1,
	            model: {},
	            pwdModel: {},
	            payPwdModel: {},
	            payPwdModel2: {},
	            validationRules: _validation.ValidatorRules.Member,
	            parent: { truename: '', mobile: '' }
	        };
	    },

	    route: {
	        data: function data(transition) {
	            var who = (0, _api.GET_MEMBER_INFO)();
	            console.log(who);

	            var m = {
	                id: who.id,
	                nickname: who.nickname,
	                alipay: who.alipay,
	                weixin: who.weixin,
	                bank: who.bank,
	                bank_num: who.bank_num,
	                bank_addr: who.bank_addr,
	                mobile: who.mobile,
	                username: who.username
	            };

	            _api.API.ParentMember(who.parent_id).then(function (data) {
	                if (data.isSuccess) {
	                    transition.next({ 'parent': data.data, 'model': m });
	                } else {
	                    (0, _utils.alert2)(data.error.message);
	                }
	            });
	        }
	    },
	    methods: {
	        submit: function submit() {
	            console.log(this.model);
	            _api.API.EditMemberInfo(this.model).then(function (data) {
	                if (data.isSuccess) {
	                    (0, _utils.alert2)('修改资料成功！');
	                } else {
	                    (0, _utils.alert2)(data.error.message);
	                }
	                console.log(data);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        },
	        changePwd: function changePwd() {
	            console.log(this.pwdModel);
	            (0, _utils.alert2)('change pwd');
	        },
	        changePayPwd: function changePayPwd() {
	            console.log(this.payPwdModel);
	            (0, _utils.alert2)('change pay pwd');
	        },
	        changePayPwd2: function changePayPwd2() {
	            console.log(this.payPwdModel2);
	            (0, _utils.alert2)('change pay pwd 2');
	        }
	    },
	    components: { validationErrors: _validation_errors2.default }
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var MsgTypes = exports.MsgTypes = [{ value: 'complaint', text: '意见或建议' }, { value: 'ask', text: '信息咨询' }, { value: 'thaw', text: '申请账号解冻' }, { value: 'report', text: '投诉举报' }];

	var Banks = exports.Banks = [{ value: 'ccb', text: '中国建设银行' }, { value: 'abc', text: '中国农业银行' }, { value: 'icbc', text: '中国工商银行' }, { value: 'boc', text: '中国银行' }, { value: 'psbc', text: '中国邮政银行' }, { value: 'bmc', text: '中国交通银行' }, { value: 'cmb', text: '中国招商银行' }, { value: 'cmbc', text: '中国民生银行' }, { value: 'cib', text: '中国兴业银行' }, { value: 'ceb', text: '中国光大银行' }, { value: 'other', text: '其它银行（写在分行前）' }];

/***/ },
/* 27 */
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

	var API_HOST = 'http://192.168.1.104:3000/api/';
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
	    ParentMember: function ParentMember(id) {
	        return HTTP_GET(_Combine('member/info/', id));
	    },
	    IndexData: function IndexData() {
	        var who = GET_MEMBER_LOGIN_INFO();
	        return HTTP_GET(_Combine('index/info/', who.memberid));
	    },
	    EditMemberInfo: function EditMemberInfo(model) {
	        return HTTP_POST(_Combine('member/edit/info'), model);
	    },
	    EditPwd: function EditPwd(model) {
	        return HTTP_POST(_Combine('member/reset'), model);
	    },
	    EditPayPwd: function EditPayPwd(model, mode) {
	        //mode //  0 通过原始安全密码,  1 通过手机验证码
	    },
	    TeamTree: function TeamTree(id) {
	        //member/children
	        return HTTP_GET(_Combine('member/children/', id));
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
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    ajaxRequireToken: true
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ValidatorRules = exports.ValidatorRules = {

	    Register: {
	        nickname: {
	            required: { rule: true, message: "昵称不能为空" },
	            maxlength: { rule: 15, message: "不能超过15个字符" }
	        },
	        pwd: {
	            required: { rule: true, message: "密码不能为空" },
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        pay_pwd: {
	            required: { rule: true, message: "安全密码不能为空" },
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        mobile: {
	            required: { rule: true, message: "会员手机号码不能为空" },
	            maxlength: { rule: 11, message: "不能超过11个字符" }
	        },
	        captcha: {
	            required: { rule: true, message: "图形验证码不能为空" },
	            maxlength: { rule: 4, message: "不能超过4个字符" }
	        },
	        mobile_checkcode: {
	            required: { rule: true, message: "手机验证码不能为空" },
	            maxlength: { rule: 6, message: "不能超过6个字符" }
	        }
	    },

	    Member: {
	        nickname: {
	            required: { rule: true, message: "昵称不能为空" },
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        truename: {
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        alipay: {
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        weixin: {
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        bank: {
	            required: { rule: true, message: "请选择银行卡类型" },
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        bank_num: {
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        bank_addr: {
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },
	        pay_pwd: {
	            required: { rule: true, message: "请填写安全密码" },
	            maxlength: { rule: 32, message: "不能超过32个字符" }
	        },

	        old_pwd: {
	            required: { rule: true, message: "请填写原始密码" }
	        },

	        pwd: {
	            required: { rule: true, message: "请填写新密码" }
	        },

	        repwd: {
	            required: { rule: true, message: "请再次填写新密码" }
	        },

	        pay_pwd3: {
	            required: { rule: true, message: "请输入安全密码" }
	        },

	        old_pay_pwd: {
	            required: { rule: true, message: "请输入原始安全密码" }
	        },

	        pay_pw4: {
	            required: { rule: true, message: "请输入新的安全密码" }
	        },

	        pay_repwd: {
	            required: { rule: true, message: "请再次输入新的安全密码" }
	        },

	        captcha: {
	            required: { rule: true, message: "请输入图形验证码" }
	        },

	        mobile_checkcode: {
	            required: { rule: true, message: "请输入手机验证码" }
	        },

	        pay_pw5: {
	            required: { rule: true, message: "请输入新的安全密码" }
	        }

	    }
	};

	var Validators = exports.Validators = {};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\_validation_errors.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./_validation_errors.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        field: {
	            type: Object
	        }
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"errors\" v-if=\"field && field.dirty && field.invalid\">\n    <li v-for=\"error in field.errors\">*&nbsp;{{error.message}}</li>\n</ul>\n";

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"rmain\">\n        <div class=\"personalC\">\n            <h1><b>我的资料</b></h1>\n            <div class=\"sad\">\n                <a href=\"javascript:;\" :class=\"{'on':tab == 1}\" @click=\"tab = 1\">个人资料</a>\n                <a href=\"javascript:;\" :class=\"{'on':tab == 2}\" @click=\"tab = 2\">登录密码</a>\n                <a href=\"javascript:;\" :class=\"{'on':tab == 3}\" @click=\"tab = 3\">安全密码</a>\n            </div>\n            \n            <div v-show=\"tab == 1\">\n                <validator name=\"validation\">\n                <ul class=\"u1\">\n                <li>\n                    <span>推荐人姓名：</span>\n                    <em>{{parent.truename}}</em>\n                </li>\n                <li>\n                    <span>推荐人手机：</span>\n                    <em>{{parent.mobile}}</em>\n                </li>\n                <li>\n                    <span>账号/手机：</span>\n                    <em>{{model.username}}</em>\n                </li>\n                <li>\n                    <span>昵称：</span>\n                    <em><input type=\"text\" class=\"text\" v-model=\"model.nickname\" v-validate:nickname=\"validationRules.nickname\"></em>\n                    <validation-errors :field=\"$validation.nickname\"></validation-errors>\n                </li>\n                <li>\n                    <span>真实姓名：</span>\n                    <em><input type=\"text\" class=\"text\" v-model=\"model.truename\" v-validate:truename=\"validationRules.truename\"></em>\n                    <validation-errors :field=\"$validation.truename\"></validation-errors>\n                </li>\n                <li>\n                    <span>支付宝：</span>\n                    <em><input type=\"text\" class=\"text\" v-model=\"model.alipay\" v-validate:alipay=\"validationRules.alipay\"></em>\n                    <validation-errors :field=\"$validation.alipay\"></validation-errors>\n                </li>\n                <li>\n                    <span>微信号：</span>\n                    <em><input type=\"text\" class=\"text\" v-model=\"model.weixin\" v-validate:weixin=\"validationRules.weixin\"></em>\n                    <validation-errors :field=\"$validation.weixin\"></validation-errors>\n                </li>\n                <li>\n                    <span>银行名称：</span>\n                    <em>\n                        <select class=\"text sel\" v-model=\"model.bank\">\n                            <option  v-for=\"item in Banks\" value=\"{{item.value}}\">{{item.text}}</option>\n                        </select>\n            \t\t</em>\n                </li>\n                <li>\n                    <span>分行名称：</span>\n                    <em><input type=\"text\" class=\"text\" v-model=\"model.bank_addr\" v-validate:bank_addr=\"validationRules.bank_addr\"></em>\n                    <validation-errors :field=\"$validation.bank_addr\"></validation-errors>\n                </li>\n                <li>\n                    <span>银行卡号：</span>\n                    <em><input type=\"text\" class=\"text\" v-model=\"model.bank_num\" v-validate:bank_num=\"validationRules.bank_num\"></em>\n                    <validation-errors :field=\"$validation.bank_num\"></validation-errors>\n                </li>\n                <li>\n                    <span>安全密码：</span>\n                    <em><input type=\"password\" class=\"text\" v-model=\"model.pay_pwd\" v-validate:pay_pwd=\"validationRules.pay_pwd\"></em>\n                    <validation-errors :field=\"$validation.pay_pwd\"></validation-errors>\n                </li>\n                <li>\n                    <!--<span style=\"color:#fff;\">{{$validation|json}}</span>-->\n                    <span>&nbsp;</span>\n                    <em>\n                        <a v-if=\"$validation.valid\" href=\"javascript:;\" @click=\"submit\" class=\"btn\" id=\"modify_personal_btn\">修改资料</a>\n                        <a v-else href=\"javascript:;\" class=\"btn\"  style=\"background-color:#888;cursor:not-allowed\">修改资料</a>\n                    </em>\n                </li>\n                <div style=\"height:8px;\"></div>\n            </ul>\n            </validator>\n            </div>\n                <div v-show=\"tab == 2\">\n                    <validator name=\"validation1\">\n                        <ul class=\"u2\">\n                        <li>\n                            <span>原密码：</span>\n                            <em><input type=\"password\" class=\"text\" v-model=\"pwdModel.old_pwd\" v-validate:old_pwd=\"validationRules.old_pwd\"></em>\n                            <validation-errors :field=\"$validation1.old_pwd\"></validation-errors>\n                        </li>\n                        <li>\n                            <span>新密码：</span>\n                            <em><input type=\"password\" class=\"text\" v-model=\"pwdModel.pwd\" v-validate:old_pwd=\"validationRules.pwd\"></em>\n                            <validation-errors :field=\"$validation1.pwd\"></validation-errors>\n                        </li>\n                        <li>\n                            <span>确认密码：</span>\n                            <em><input type=\"password\" class=\"text\" v-model=\"pwdModel.repwd\" v-validate:old_pwd=\"validationRules.repwd\"></em>\n                            <validation-errors :field=\"$validation1.repwd\"></validation-errors>\n                        </li>\n                        <li>\n                            <span>安全密码：</span>\n                            <em><input type=\"password\" class=\"text\" v-model=\"pwdModel.pay_pwd3\" v-validate:old_pwd=\"validationRules.pay_pwd3\"></em>\n                            c\n                        </li>\n                        <li>\n                            <span>&nbsp;</span>\n                            <em>\n                                <a v-if=\"$validation1.valid\" href=\"javascript:;\" class=\"btn\" @click=\"changePwd\" id=\"modify_pwd_btn\">修改登录密码</a>\n                                <a v-else href=\"javascript:;\" class=\"btn\"  style=\"background-color:#888;cursor:not-allowed\">修改登录密码</a>\n                            </em>\n                        </li>\n                        <li>\n                            <span></span>\n                            <em></em>\n                        </li>\n                        </ul>\n                    </validator>\n            </div>        \n            \n            <div v-show=\"tab == 3\">\n                <validator name=\"validation2\">\n            <ul class=\"u3\">\n                <li>\n                    <span>原安全密码：</span>\n                    <em><input type=\"password\" class=\"text\" v-model=\"payPwdModel.old_pay_pwd\" v-validate:old_pay_pwd=\"validationRules.old_pay_pwd\"></em>\n                    <validation-errors :field=\"$validation2.old_pay_pwd\"></validation-errors>\n                </li>\n                <li>\n                    <span>新安全密码：</span>\n                    <em><input type=\"password\" class=\"text\" v-model=\"payPwdModel.pay_pwd4\" v-validate:pay_pwd4=\"validationRules.pay_pwd4\"></em>\n                    <validation-errors :field=\"$validation2.pay_pwd4\"></validation-errors>\n                </li>\n                <li>\n                    <span>确认密码：</span>\n                    <em><input type=\"password\" class=\"text\" v-model=\"payPwdModel.pay_repwd\" v-validate:pay_repwd=\"validationRules.pay_repwd\"></em>\n                    <validation-errors :field=\"$validation2.pay_repwd\"></validation-errors>\n                </li>\n                <li>\n                    <span>&nbsp;</span>\n                    <em>\n                        <a v-if=\"$validation2.valid\" href=\"javascript:;\" @click=\"changePayPwd\" class=\"btn\" id=\"modify_pay_pwd_btn\">修改安全密码</a>\n                        <a v-else href=\"javascript:;\" class=\"btn\" id=\"modify_pay_pwd_btn\" style=\"background-color:#888;cursor:not-allowed\">修改安全密码</a>\n                    </em>\n                </li>\n                </ul>\n                </validator>\n\n                <hr/>\n\n                <validator name=\"validation3\">\n                <ul class=\"ul4\">\n                <li>\n                    <span></span>\n                    <em></em>\n                </li>\n                <li>\n                    <span></span>\n                    <em></em>\n                </li>\n                <li>\n                    <span>手机号：</span>\n                    <em>{{model.mobile}}<input type=\"hidden\" id=\"mobile\" value=\"{{model.mobile}}\"></em>\n                </li>\n                <li>\n                    <span>图形验证码：</span>\n                  <em>\n                  \t<input type=\"text\" class=\"text\" v-model=\"payPwdModel2.captcha\" v-validate:captcha=\"validationRules.captcha\" style=\"width:150px;\">\n            \t\t\t\t<a href=\"javascript:void(0);\" style=\"position:relative;\" class=\"validate\" title=\"切换图片\" onclick=\"document.getElementById('captchaImg').src='/core/captcha.php?ImgGetCaptcha=true#'+Math.random();\">\n            \t\t\t\t\t<img id=\"captchaImg\" style=\"width:157px; height:44px; box-shadow:0 0 5px #ccc;position:absolute;top:-44px;right:-156px;\" src=\"/core/captcha.php?ImgGetCaptcha=true\">\n            \t\t\t\t</a>\n            \t\t</em>\n                    <validation-errors :field=\"$validation3.captcha\"></validation-errors>\n                </li>\n                <li>\n                    <span>手机验证码：</span>\n                    <em>\n\t\t                  <input type=\"text\" v-model=\"payPwdModel2.mobile_checkcode\" v-validate:captcha=\"validationRules.mobile_checkcode\" class=\"text\" style=\"width:150px;\">\n  \t\t\t\t            <input type=\"button\" class=\"sbtn\" data-type=\"forget\" id=\"send_mobile_checkcode\" value=\"发送验证码\" style=\"border:0;outline:none;width:150px;height:45px;background:#FFC30D;color:#fff;\">\n  \t\t\t            </em>\n                          <validation-errors :field=\"$validation3.mobile_checkcode\"></validation-errors>\n                </li>\n                <li>\n                    <span>新安全密码：</span>\n                    <em><input type=\"text\" class=\"text\" v-model=\"payPwdModel2.pay_pwd5\" v-validate:captcha=\"validationRules.pay_pwd5\"></em>\n                    <validation-errors :field=\"$validation3.pay_pwd5\"></validation-errors>\n                </li>\n                <li>\n                    <span>&nbsp;</span>\n                    <em>\n                        <a v-if=\"$validation3.valid\" @click=\"changePayPwd2\" href=\"javascript:;\" class=\"btn\" id=\"reset_pay_pwd_btn\">重置安全密码</a>\n                        <a v-else href=\"javascript:;\" class=\"btn\" style=\"background-color:#888;cursor:not-allowed\">重置安全密码</a>\n                     </em>\n                </li>\n                <li>\n                    <span></span>\n                    <em></em>\n                </li>\n                </ul>\n            </validator>\n            </div>\n            \n        </div>\n    </div>\n  ";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\team.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./team.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _api = __webpack_require__(27);

	var _utils = __webpack_require__(8);

	exports.default = {
		route: {
			data: function data(transition) {
				var who = (0, _api.GET_MEMBER_INFO)();
				var vm = this;
				_api.API.TeamTree(who.id).then(function (data) {
					if (data.isSuccess) {
						transition.next({ 'value': who.id, 'tree': data.data });
					} else {
						(0, _utils.alert2)(data.error.message);
					}
				});
			}
		},
		data: function data() {
			return {
				value: 566,
				tree: []
			};
		},

		methods: {
			findNode: function findNode(id) {}
		},
		events: {
			'treeview_click': function treeview_click(node) {
				console.log(node.model);
				var vm = this;
				_api.API.TeamTree(node.value).then(function (data) {
					if (data.isSuccess) {
						console.log(data.data);
						node.model.nodes = data.data;
					} else {
						(0, _utils.alert2)(data.error.message);
					}
				});
			}
		}

	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"rmain\">\n\t<div class=\"teamC\">\n\t\t<h1><b>我的团队</b></h1>\n\t\t<div class=\"sad\">\n\t\t\t<a href=\"javascript:;\" class=\"on\" data-i=\"1\">我的团队</a>\n\t\t\t<a href=\"javascript:;\" data-i=\"2\">申请升级</a>\n\t\t</div>\n\t\t<ul class=\"u1\">\n\t\t\t<h2>\n\t\t\t<span>团队总人数：<b>0人</b></span>\n\t\t\t<span>直推人数：<b>0人</b></span>\n\t\t\t<span>有效会员人数：<b>0人</b></span>\n\t\t\t<span>无效会员人数：<b>0人</b></span>\n\t\t\t<!--span>团队总挂单金额：<b>0.00元</b></span-->\n\t\t\t<!--span>团队已完成打款金额：<b>0.00元</b></span-->\n\t\t</h2>\n\t\t\t<table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>编号</th>\n\t\t\t\t\t\t<th>会员手机</th>\n\t\t\t\t\t\t<th>会员昵称</th>\n\t\t\t\t\t\t<th>注册时间</th>\n\t\t\t\t\t\t<th>下级人数</th>\n\t\t\t\t\t\t<th>状态</th>\n\t\t\t\t\t\t<th>操作</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</ul>\n\t\t<ul class=\"u2\">\n\t\t\t<li>推荐1位，晋升M1（一级会员），可获1代收益</li>\n\t\t\t<li>推荐2位，晋升M2（二级会员），可获2代收益</li>\n\t\t\t<li>推荐5位，晋升M3（三级会员），可获3代收益</li>\n\t\t\t<li>推荐15位，团队100人，晋升M4（四级会员），可获4代收益</li>\n\t\t\t<li>推荐15位，团队100人，晋升高级经理，可获无限代收益</li>\n\t\t\t<li><a href=\"javascript:;\" class=\"btn\" id=\"team_apply_btn\">申请升级</a></li>\n\t\t\t<li class=\"imgli\">\n\t\t\t\t<br><img src=\"/images/team.png\"></li>\n\t\t</ul>\n\t</div>\n\n\t <treeview :value.sync=\"value\" :model.sync=\"tree\"  labelname=\"truename\" valuename=\"id\"></treeview>\n\n\t {{tree|json}}\n\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(44)
	__vue_script__ = __webpack_require__(46)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\income.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./income.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./income.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./income.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.allzichan{text-align:center; position:relative; top:-23px; font-size:16px; color:#FEC107; }\r\n.allzichan i{margin-left:3%; font-size:16px; color:#fff; }\r\n#page{width:800px; margin:auto; margin-top:25px; padding-bottom:25px; text-align:center; }\r\n#page a{font-size:20px; color:#999; margin-left:50px; }\r\n#page a:hover{color:#fff; }\r\n", ""]);

	// exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getters = __webpack_require__(21);

	exports.default = {
	    vuex: {
	        getters: {
	            getName: _getters.getName
	        }
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"rmain\">\r\n{{getName}}\r\n\r\n<div class=\"incomeC\">\r\n\t<h1><b>我的资产</b></h1>\r\n\t<h2 class=\"allzichan\">\r\n\t\t<i>账户总资产：</i>￥32484.00\r\n\t\t<i>账户冻结总资产：</i>￥31284.00\r\n\t\t<i>账户正在提现总资产：</i>￥0.00\r\n\t\t<i>账户可提现总资产：</i>￥1200.00\r\n\t</h2>\r\n\t<div class=\"sad\">\r\n\t\t<a href=\"javascript:;\" class=\"on\" data-i=\"1\">本 金</a>\r\n\t\t<a href=\"javascript:;\" data-i=\"2\">利 息</a>\r\n\t\t<a href=\"javascript:;\" data-i=\"3\">团队奖励</a>\r\n\t\t<span style=\"position:relative;top:90px;float:right;color:#ccc;\">提现说明：首先扣除可提团队奖，不够再扣利息，利息不够再扣可提本金。</span>\r\n\t</div>\r\n\t<ul class=\"u1\">\r\n\t\t<h2>\r\n\t\t\t<span>本金总额：<b>￥31000.00</b></span>\r\n\t\t\t<span>本金冻结总额：<b>￥31000.00</b></span>\r\n\t\t\t<span>本金可提现总额：<b>￥0.00</b></span>\r\n\t\t</h2>\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>金额</th>\r\n\t\t\t\t\t<th>说明</th>\r\n\t\t\t\t\t<th>时间</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>30000.00</td>\r\n\t\t\t\t\t<td>成功播种￥30000.00元，本金将在冻结8天后自动收入现金余额</td>\r\n\t\t\t\t\t<td>2016-06-11 21:50:59</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr style=\"background: rgb(58, 59, 63);\">\r\n\t\t\t\t\t<td>1000.00</td>\r\n\t\t\t\t\t<td>成功购买激活币￥1000.00元，本金将在冻结30天后自动收入现金余额</td>\r\n\t\t\t\t\t<td>2016-06-04 22:50:23</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t</table>\r\n\t</ul>\r\n\t<ul class=\"u2\">\r\n\t\t<h2>\r\n\t\t\t<span>利息总额：<b>￥1200.00</b></span>\r\n\t\t\t<span>利息可提现总额：<b>￥1200.00</b></span>\r\n\t\t</h2>\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>金额</th>\r\n\t\t\t\t\t<th>说明</th>\r\n\t\t\t\t\t<th>时间</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>300.00</td>\r\n\t\t\t\t\t<td>2016-06-16，获得利息￥300元。</td>\r\n\t\t\t\t\t<td>2016-06-16 18:43:12</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>300.00</td>\r\n\t\t\t\t\t<td>2016-06-15，获得利息￥300元。</td>\r\n\t\t\t\t\t<td>2016-06-15 12:23:37</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>300.00</td>\r\n\t\t\t\t\t<td>2016-06-14，获得利息￥300元。</td>\r\n\t\t\t\t\t<td>2016-06-14 20:11:52</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>300.00</td>\r\n\t\t\t\t\t<td>2016-06-13，获得利息￥300元。</td>\r\n\t\t\t\t\t<td>2016-06-13 00:03:37</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>-2400.00</td>\r\n\t\t\t\t\t<td>成功提现￥2400.00元，从利息余额中扣除￥2400.00元</td>\r\n\t\t\t\t\t<td>2016-06-12 15:39:53</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>0.00</td>\r\n\t\t\t\t\t<td>成功提现￥3000.00元，从利息余额中扣除￥0元</td>\r\n\t\t\t\t\t<td>2016-06-12 10:00:54</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>300.00</td>\r\n\t\t\t\t\t<td>2016-06-12，获得利息￥300元。</td>\r\n\t\t\t\t\t<td>2016-06-12 00:01:51</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>2100.00</td>\r\n\t\t\t\t\t<td>成功播种￥30000.00元，获得￥2100元利息</td>\r\n\t\t\t\t\t<td>2016-06-11 21:50:59</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t</table>\r\n\t</ul>\r\n\t<ul class=\"u3\">\r\n\t\t<h2>\r\n\t\t\t<span>团队奖励总额：<b>￥284.00</b></span>\r\n\t\t\t<span>团队奖励冻结总额：<b>￥284.00</b></span>\r\n\t\t\t<span>团队奖励可提总额：<b>￥0.00</b></span>\r\n\t\t</h2>\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>金额</th>\r\n\t\t\t\t\t<th>说明</th>\r\n\t\t\t\t\t<th>时间</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody id=\"bonus_tbody\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>-3000.00</td>\r\n\t\t\t\t\t<td>成功提现￥3000.00元，从奖金余额中扣除￥3000.00元</td>\r\n\t\t\t\t\t<td>2016-06-12 10:00:54</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>7.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在5小时内完成700.00的打款，奖励您￥7元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 15:52:00</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>55.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在5小时内完成5500.00的打款，奖励您￥55元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 15:48:09</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>90.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在4小时内完成9000.00的打款，奖励您￥90元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 15:36:31</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>5.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在4小时内完成500.00的打款，奖励您￥5元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 14:55:18</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>56.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在4小时内完成5600.00的打款，奖励您￥56元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 14:54:55</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>42.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在4小时内完成4200.00的打款，奖励您￥42元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 14:44:02</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>24.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在4小时内完成2400.00的打款，奖励您￥24元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 14:43:50</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>5.00</td>\r\n\t\t\t\t\t<td>您成功播种￥30000.00元，在4小时内完成500.00的打款，奖励您￥5元。奖金冻结8天后自动计入奖金余额。</td>\r\n\t\t\t\t\t<td>2016-06-11 14:41:03</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>3000.00</td>\r\n\t\t\t\t\t<td>您的第1级下属 皇者团队十咖喱 成功播种￥30000.00元，奖励您￥3000元。</td>\r\n\t\t\t\t\t<td>2016-06-11 13:10:50</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t</table>\r\n\r\n\t\t<div id=\"page\" page=\"2\">\r\n\t\t\t<a href=\"javascritp:;\" data-to=\"prov\">上一页</a>\r\n\t\t\t<a href=\"javascritp:;\" data-to=\"next\">下一页</a>\r\n\t\t</div>\r\n\r\n\t</ul>\r\n</div>\r\n\r\n</div>\r\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(49)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\record.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./record.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"rmain\">\r\n<div class=\"recordC\">\r\n\t<h1><b>交易记录</b></h1>\r\n\t<div class=\"sad\">\r\n\t\t<a href=\"javascript:;\" class=\"on\" data-i=\"1\">播种记录</a>\r\n\t\t<a href=\"javascript:;\" data-i=\"2\">收获记录</a>\r\n\t\t<a href=\"javascript:;\" data-i=\"3\">失败匹配记录</a>\r\n\t</div>\r\n\t<ul class=\"u1\">\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>编号</th>\r\n\t\t\t\t\t<th>金额</th>\r\n\t\t\t\t\t<th>播种时间</th>\r\n\t\t\t\t\t<th>匹配人数</th>\r\n\t\t\t\t\t<th>完成时间</th>\r\n\t\t\t\t\t<th>状态</th>\r\n\t\t\t\t\t<th>操作</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>O100971465735712</td>\r\n\t\t\t\t\t<td>30000.00</td>\r\n\t\t\t\t\t<td>2016-06-12 20:48:32</td>\r\n\t\t\t\t\t<td>0人</td>\r\n\t\t\t\t\t<td>暂无</td>\r\n\t\t\t\t\t<td style=\"color:#FEC107;\">\r\n\t\t\t\t\t\t进行中...\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><a href=\"/?act=offer&amp;op=offer2&amp;id=16435\" class=\"see\">查看</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr style=\"background: rgb(58, 59, 63);\">\r\n\t\t\t\t\t<td>O100971465052090</td>\r\n\t\t\t\t\t<td>30000.00</td>\r\n\t\t\t\t\t<td>2016-06-04 22:54:50</td>\r\n\t\t\t\t\t<td>10人</td>\r\n\t\t\t\t\t<td>2016-06-11 21:50:59</td>\r\n\t\t\t\t\t<td style=\"color:#43C328;\">\r\n\t\t\t\t\t\t已完成\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><a href=\"/?act=offer&amp;op=offer2&amp;id=11421\" class=\"see\">查看</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>O100971465049826</td>\r\n\t\t\t\t\t<td>1000.00</td>\r\n\t\t\t\t\t<td>2016-06-04 22:17:06</td>\r\n\t\t\t\t\t<td>1人</td>\r\n\t\t\t\t\t<td>2016-06-04 22:50:23</td>\r\n\t\t\t\t\t<td style=\"color:#43C328;\">\r\n\t\t\t\t\t\t已完成\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><a href=\"/?act=offer&amp;op=offer2&amp;id=11382\" class=\"see\">查看</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t</table>\r\n\t</ul>\r\n\t<ul class=\"u2\">\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>编号</th>\r\n\t\t\t\t\t<th>金额</th>\r\n\t\t\t\t\t<th>收获时间</th>\r\n\t\t\t\t\t<th>匹配人数</th>\r\n\t\t\t\t\t<th>完成时间</th>\r\n\t\t\t\t\t<th>状态</th>\r\n\t\t\t\t\t<th>操作</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>A100971465696932</td>\r\n\t\t\t\t\t<td>2400.00</td>\r\n\t\t\t\t\t<td>2016-06-12 10:02:12</td>\r\n\t\t\t\t\t<td>1人</td>\r\n\t\t\t\t\t<td>2016-06-12 15:39:53</td>\r\n\t\t\t\t\t<td style=\"color:#43C328;\">\r\n\t\t\t\t\t\t已完成\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><a href=\"/?act=apply&amp;op=apply2&amp;id=13259\" class=\"see\">查看</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t<td>A100971465633645</td>\r\n\t\t\t\t\t<td>3000.00</td>\r\n\t\t\t\t\t<td>2016-06-11 16:27:25</td>\r\n\t\t\t\t\t<td>1人</td>\r\n\t\t\t\t\t<td>2016-06-12 10:00:54</td>\r\n\t\t\t\t\t<td style=\"color:#43C328;\">\r\n\t\t\t\t\t\t已完成\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><a href=\"/?act=apply&amp;op=apply2&amp;id=12746\" class=\"see\">查看</a></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t</table>\r\n\t</ul>\r\n\t<ul class=\"u3\">\r\n\t\t<table>\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>类型</th>\r\n\t\t\t\t\t<th>编号</th>\r\n\t\t\t\t\t<th>匹配金额</th>\r\n\t\t\t\t\t<th>匹配时间</th>\r\n\t\t\t\t\t<th>对方姓名</th>\r\n\t\t\t\t\t<th>对方手机</th>\r\n\t\t\t\t\t<th>主单金额</th>\r\n\t\t\t\t\t<th>主单下单时间</th>\r\n\t\t\t\t\t<th>解除匹配时间</th>\r\n\t\t\t\t\t<th>原因</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t</table>\r\n\t</ul>\r\n</div>\r\n</div>\r\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(52)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\news.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(56)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./news.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _api = __webpack_require__(27);

	var _pagination = __webpack_require__(53);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				model: [],
				page: 1,
				total: 0
			};
		},

		route: {
			data: function data(transition) {
				var page = transition.to.query.page || this.page;
				_api.API.News(page).then(function (data) {
					var d = data.data;
					var count = d.count;
					var rows = d.rows;
					transition.next({ "model": rows, 'page': page, 'total': count });
				}).catch(function (err) {
					console.log(err);
				});
			}
		},
		components: { pagination: _pagination2.default }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(54)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\_pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./_pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _router = __webpack_require__(4);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        total: {
	            type: Number,
	            required: true,
	            default: 0,
	            validator: function validator(val) {
	                return val > -1;
	            },
	            coerce: function coerce(val) {
	                return parseInt(val);
	            }
	        },
	        page: {
	            type: Number,
	            required: true,
	            default: 1,
	            validator: function validator(val) {
	                return val > 0;
	            },
	            coerce: function coerce(val) {
	                return parseInt(val);
	            }
	        },
	        urlname: {
	            type: String,
	            required: true
	        }
	    },
	    computed: {
	        pages: function pages() {
	            var t = this.total;
	            var s = 10;
	            return t % s == 0 ? t / s : Math.floor(t / s) + 1;
	        }
	    },
	    methods: {
	        first: function first() {
	            if (this.page == 1) return;else _router2.default.go({ name: this.urlname, query: { page: 1 } });
	        },
	        last: function last() {
	            if (this.pages == this.page) return;else _router2.default.go({ name: this.urlname, query: { page: this.pages } });
	        },
	        pre: function pre() {
	            if (this.page == 1) return;else this.page--;
	            _router2.default.go({ name: this.urlname, query: { page: this.page } });
	        },
	        next: function next() {
	            if (this.pages == this.page) return;else this.page++;
	            _router2.default.go({ name: this.urlname, query: { page: this.page } });
	        },
	        skip: function skip() {
	            _router2.default.go({ name: this.urlname, query: { page: this.page } });
	        }
	    }
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"pager\" v-if=\"total\">\n    <ul>\n        <li>共 {{total}} 条</li>\n        <li>{{page}} / {{pages}} 页</li>\n        <li><a href=\"javascript:void(0);\" @click=\"first\" title=\"第一页\">第一页</a></li>\n        <li><a href=\"javascript:void(0);\" @click=\"pre\" title=\"上一页\">上一页</a></li>\n        <li><a href=\"javascript:void(0);\" @click=\"next\" title=\"下一页\">下一页</a></li>\n        <li><a href=\"javascript:void(0);\" @click=\"last\" title=\"最后一页\">最后一页</a></li>\n        <li>\n            跳转到\n            <select class=\"topage\" @change=\"skip\" v-model=\"page\">\n                <option v-for=\"item in pages\" value=\"{{item+1}}\">第{{item+1}}页</option>\n            </select>\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"rmain\">\r\n<div class=\"news_listC\">\r\n\t<h1><b>新闻公告</b></h1>\r\n\t<ul>\r\n\t\t<h2><span>标 题</span><b>时间</b></h2>\r\n\t\t<li v-for=\"item in model\" class=\"row-{{$index%2}}\">\r\n\t\t\t<a v-link=\"{name:'newssingle',params:{id:item.id}}\" href=\"\">\r\n\t\t\t\t◎ {{item.title}}\r\n\t\t\t</a>\r\n\t\t\t<time>{{item.the_time|datetime}}</time>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n<pagination urlname=\"news\" :page=\"page\" :total=\"total\"></pagination>\r\n\r\n</div>\r\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(58)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\newssingle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(60)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./newssingle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _api = __webpack_require__(27);

	var _jsHtmlencode = __webpack_require__(59);

	exports.default = {
		data: function data() {
			return { model: {} };
		},

		route: {
			data: function data(transition) {
				var id = transition.to.params.id;
				_api.API.NewsSingle(id).then(function (data) {
					var d = data.data;
					d.content = (0, _jsHtmlencode.htmlDecode)(d.content);
					transition.next({ 'model': d });
					console.log(d);
				});
			}
		}
	};

/***/ },
/* 59 */,
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n    <div class=\"rmain\">\n\t<div class=\"news_detailC\">\n\t<h1><b>新闻公告</b></h1>\n\t<div class=\"detailC\">\n\t\t<h3>{{model.title}}</h3>\n\t\t<h4>\n\t\t\t<span>来源：</span><b>{{model.the_from}}</b>\n\t\t\t<span>时间：</span><b>{{model.the_time|datetime}}</b>\n\t\t\t<span>阅读次数：</span><b>{{model.vcount}}</b>\n\t\t</h4>\n\t\t<div class=\"cententC\">\n\t\t\t{{{model.content}}}\n\t\t</div>\n\t\n</div>\n</div>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(62)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\messages.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(63)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./messages.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _api = __webpack_require__(27);

	var _pagination = __webpack_require__(53);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				model: [],
				page: 1,
				total: 0
			};
		},

		route: {
			data: function data(transition) {
				var page = transition.to.query.page || this.page;
				_api.API.Messages(page).then(function (data) {
					var d = data.data;
					var count = d.count;
					var rows = d.rows;
					if (rows) {
						rows.forEach(function (item, key) {
							if (item.state == 0) item.state = "w";else item.state = "ed";
						});
					}
					transition.next({ "model": rows, 'page': page, 'total': count });
				}).catch(function (err) {
					console.log(err);
				});
			}
		},
		components: { pagination: _pagination2.default }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"rmain\">\n\t\t<div class=\"news_listC\">\n\t\t\t<h1><b>消息通知</b></h1>\n\t\t\t<ul>\n\t\t\t\t<h2><span>标 题</span><b>时间</b></h2>\n\t\t\t\t<li v-for=\"item in model\" class=\"row-{{$index%2}}\">\n\t\t\t\t\t\t<a v-link=\"{name:'messagesingle',params:{id:item.id}}\" href=\"\">\n\t\t\t\t\t\t<i class=\"{{item.state}}\"></i>{{item.title}}</a>\n\t\t\t\t\t\t<time>{{item.the_time|datetime}}</time>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<pagination urlname=\"messages\" :page=\"page\" :total=\"total\"></pagination>\n\t</div>\n</div>\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(65)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\messagesingle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./messagesingle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _api = __webpack_require__(27);

	exports.default = {
		data: function data() {
			return { model: {} };
		},

		route: {
			data: function data(transition) {
				var id = transition.to.params.id;
				_api.API.MessageSingle(id).then(function (data) {
					var d = data.data;
					transition.next({ 'model': d });
					console.log(d);
				});
			}
		}
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"rmain\">\n    <div class=\"news_detailC\">\n        <h1><b>消息通知</b></h1>\n        <div class=\"detailC\">\n            <h3>{{model.title}}</h3>\n            <h4>\n                <span>来自：</span><b>平台官方客服</b>\n                <span>时间：</span><b>{{model.the_time|datetime}}</b>\n            </h4>\n            <div style=\"margin:20px 0;text-align:center;\" v-if=\"{{model.img}}\">\n                <img class=\"show_big_img\" style=\"width:auto;max-height:250px;\" v-src=\"images/message/{{model.img}}\">\n            </div>\n            <div class=\"cententC\">\n                {{model.content}}\n            </div>\n    </div>\n    </div>\n</div>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(68)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\leavemsg.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./leavemsg.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _constants = __webpack_require__(26);

	var _api = __webpack_require__(27);

	exports.default = {
		data: function data() {
			return {
				MsgTypes: _constants.MsgTypes,
				model: { msgtype: 'complaint' },
				replyModel: [],
				flag: true,
				who: {}
			};
		},

		computed: {
			getSrc: function getSrc() {
				return "/images/default" + this.who.sex + ".jpg";
			}
		},
		route: {
			data: function data(transition) {
				_api.API.MessageReplies().then(function (data) {
					console.log(data);
					var d = data.data;
					transition.next({ 'replyModel': d, 'who': (0, _api.GET_MEMBER_INFO)() });
				}).catch(function (err) {});
			}
		},
		methods: {
			submit: function submit(event) {
				_api.API.PostMsg(this.model).then(function (data) {
					alert2("保存成功！");
					console.log(data);
				}).catch(function (err) {
					console.log(err);
				});
			}
		}
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"rmain\">\r\n<div class=\"leavemsgC\">\r\n\t<h1><b>在线留言</b></h1>\r\n\t<div class=\"sad\">\r\n\t\t<a href=\"javascript:void(0);\" :class=\"{'on': flag}\" @click=\"flag=true\">在线留言</a>\r\n\t\t<a href=\"javascript:void(0);\" :class=\"{'on': !flag}\" @click=\"flag=false\">留言反馈</a>\r\n\t</div>\r\n\t<ul class=\"u1\" v-show=\"flag\">\r\n\t\t<div class=\"inpwp\">\r\n\t\t\t<form role=\"form\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<span>留言标题：</span>\r\n\t\t\t\t\t<em><input type=\"text\" class=\"text til\" v-model=\"model.title\" name=\"title\" required=\"true\" maxlength=\"32\"></em>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<span>问题类型：</span>\r\n\t\t\t\t\t<em>\r\n\t\t\t\t\t\t<select name=\"msgtype\" v-model=\"model.msgtype\" class=\"text selC\">\t\r\n\t\t\t\t\t\t\t<option v-for=\"item in MsgTypes\" value=\"{{item.value}}\">{{item.text}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</em>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<span>上传图片：</span>\r\n\t\t\t\t\t<em>\r\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"fila\">选择图片\r\n\t\t\t\t\t\t\t<input type=\"file\" name=\"imgfile\" id=\"uploadimgfile\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<b class=\"imgb\">\r\n\t\t\t\t\t\t\t<img class=\"show_big_img\" src=\"/images/bgblack.png\" id=\"showimg\" style=\"width:auto;max-height:40px;position:relative;top:2px;left:25px;\">\r\n\t\t\t\t\t\t</b>\r\n\t\t\t\t\t</em>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"ctd\">\r\n\t\t\t\t\t<span>留言内容：</span>\r\n\t\t\t\t\t<em><textarea class=\"ctt\" v-model=\"model.content\" name=\"content\" required=\"true\" maxlength=\"360\"></textarea></em>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<span></span>\r\n\t\t\t\t\t<em><input type=\"button\" @click=\"submit\" class=\"btn\" value=\"提交留言\"></em>\r\n\t\t\t\t</li>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</ul>\r\n\t<ul class=\"u2\" v-show=!flag>\r\n\t\t<li class=\"mymsg\" v-for=\"item in replyModel\">\r\n\t\t\t<h4><img class=\"lgim\" v-bind:src=getSrc>\r\n\t\t\t{{item.old.title}}<i>{{item.the_time|datetime}}</i></h4>\r\n\t\t\t<div class=\"nrd\">\r\n\t\t\t\t{{item.old.content}}\r\n\t\t\t\t<hr style=\"width:100%;margin-top:10px;margin-bottom:10px;border-bottom:1px dashed #43C328;\">\r\n\t\t\t\t<div v-if=\"item.new\">\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<img class=\"lgim\" src=\"/images/logo2.png\"> \r\n\t\t\t\t\t\t\t多米多客服\r\n\t\t\t\t\t\t<i>{{item.new.the_time|datetime}}</i>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<span style=\"color:#949CB3\">{{item.new.content}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div v-if=\"!item.new\">\r\n\t\t\t\t\t<h4>\r\n\t\t\t\t\t\t<img class=\"lgim\" src=\"/images/logo2.png\"> \r\n\t\t\t\t\t\t\t多米多客服\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<span style=\"color:#949CB3\">没有回复哦</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\r\n</div>\r\n";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(71)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app\\components\\share.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(81)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./share.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _api = __webpack_require__(27);

	var _clipboard = __webpack_require__(72);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return { qrcodeUrl: "", regUrl: '' };
		},

		created: function created() {
			new _clipboard2.default('#copy_link').on('success', function () {
				alert("复制成功！");
			}).on('error', function () {
				alert("复制失败，请手动复制！");
			});
		},
		route: {
			data: function data(transition) {
				var base = "https://sp0.baidu.com/5aU_bSa9KgQFm2e88IuM_a/micxp1.duapp.com/qr.php";
				var who = (0, _api.GET_MEMBER_INFO)();
				var value = window.location.protocol + "//" + window.location.host + '/register.html?refer=' + who.mobile;
				transition.next({ 'regUrl': value, 'qrcodeUrl': base + "?value=" + encodeURIComponent(value) });
			}
		}
	};

/***/ },
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"rmain\">\r\n  <div class=\"shareC\">\r\n  \t<h1><b>分享注册</b></h1>\r\n  \t<ul>\r\n  \t\t<li>\r\n\t\t\t <div id=\"qrcode\" style=\"width:300px;height:300px;margin:auto;padding:20px 5px 0 5px;background:#fff;\">\r\n\t\t\t\t <img v-bind:src=qrcodeUrl style=\"width:256px;height:256px;\"/>\r\n\t\t\t </div>\r\n\t\t\t</li>\r\n  \t\t<li>\r\n  \t\t\t<em id=\"link\" class=\"copye\">{{regUrl}}</em>\r\n  \t\t\t<br><br><br>\r\n  \t\t\t<a href=\"javascript:void(0);\" id=\"copy_link\" class=\"btn copy_link\" data-clipboard-target=\"#link\" aria-label=\"复制成功！\">[点击复制]</a>\r\n  \t\t</li>\r\n  \t\t<li></li>\r\n  \t</ul>\r\n  </div>\r\n</div>\r\n";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(83);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 告诉 vue “使用” vuex
	_vue2.default.use(_vuex2.default);

	// 创建一个对象来保存应用启动时的初始状态
	var state = {
	  // TODO: 放置初始状态
	  name: "GGG"
	};

	// 创建一个对象存储一系列我们接下来要写的 mutation 函数
	var mutations = {
	  // TODO: 放置我们的状态变更函数

	  CHANGENAME: function CHANGENAME(state, amount) {
	    state.name = state.name + "OK";
	  }
	};

	// 整合初始状态和变更函数，我们就得到了我们所需的 store
	// 至此，这个 store 就可以连接到我们的应用中
	exports.default = new _vuex2.default.Store({
	  state: state,
	  mutations: mutations
	});

/***/ },
/* 83 */,
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _moment = __webpack_require__(85);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.filter('datetime', function (input) {
	    return (0, _moment2.default)(input).format('YYYY-MM-DD hh:mm:ss');
	});

	_vue2.default.filter('level', function (input) {
	    return input + '级会员';
	});

	exports.default = "";

/***/ },
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.component('treeview', _vue2.default.extend({
	    template: '<div class="treeview {{class}}"><div class="node-data" v-for="(index, node) in model"><div class="node" :class="{\'active\': isSelected(index)}" @click.prevent="select(index, node[valuename])"><span class="icon node-parent-toggled" v-show="areValidNodes(node[children]) && isOpened(index)"><svg viewBox="0 0 35 35"><g transform="translate(0,-1017.3621)"><path class="back" d="m 2.1411424,1026.4693 0,23.4146 27.0189286,0 0,-23.4146 -13.937805,0 0,-2.7898 -9.2657958,0 0,2.7898 z"/><path class="front" d="m 1,1051.3621 7,-19 2,0 1,-2 6,0 -1,2 19,0 -4.472399,18.9369 z"/><path class="light" d="m 29.696699,1047.0363 -0.820749,3.0631 -6,0 0.757614,-3"/></g></svg> </span><span class="icon node-parent" v-show="areValidNodes(node[children]) && !isOpened(index)"><svg width="14" height="14" viewBox="0 0 35 35"><g transform="translate(0,-1017.3621)"><path class="fill" d="m 1,1026.1835 0,25.1786 33,0 0,-25.1786 -18.857143,0 0,-3 -10.017857,0 0,3 z"/><path class="light" d="m 32,1046.1625 0,3 -6,0 0,-3 6,0"/></g></svg> </span><span class="icon node" v-if="!areValidNodes(node[children])"><svg width="8" height="8" viewBox="0 0 35 35"><g transform="translate(0,-1017.3622)"><circle cx="17.488264" cy="1034.874" r="16.003242"/></g></svg></span><label>{{{node[labelname]}}}</label></div><div v-if="areValidNodes(node[children])" class="children" v-show="isOpened(index)"><div class="margin"></div><div class="nodes"><treeview :id="id" :value.sync="value" :labelname="labelname" :valuename="valuename" :children="children" :model="node[children]" :parent.once="index" class="inner"></treeview></div></div></div></div>',
	    props: {
	        /**
	         * Unique identifier for treeview.
	         * @since 1.0.0
	         * @var string
	         */
	        id: {
	            Type: String,
	            default: 'tv_' + Math.ceil(Math.random() * 100000)
	        },
	        /**
	         * Value of the selected node in the tree.
	         * @since 1.0.0
	         * @var mixed
	         */
	        value: [String, Number],
	        /**
	         * Initial tree composition.
	         * @since 1.0.0
	         * @since 1.0.2 Renamed to model.
	         * @var array
	         */
	        model: {
	            Type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        /**
	         * Additional CSS class to apply to component.
	         * @since 1.0.0
	         * @var string
	         */
	        class: {
	            Type: String,
	            default: ''
	        },
	        /**
	         * Name of the child nodes property.
	         * @since 1.0.0
	         * @var string
	         */
	        children: {
	            Type: String,
	            default: 'nodes'
	        },
	        /**
	         * Name of the property holding the node name.
	         * @since 1.0.0
	         * @var string
	         */
	        labelname: {
	            Type: String,
	            default: 'label'
	        },
	        /**
	         * Name of the property holding the node value.
	         * @since 1.0.0
	         * @var string
	         */
	        valuename: {
	            Type: String,
	            default: 'value'
	        },
	        node: {
	            Type: Object,
	            default: 'node'
	        },
	        /**
	         * Parent node model index.
	         * @since 1.0.2
	         * @var int
	         */
	        parent: {
	            Type: Number,
	            default: undefined
	        }
	    },
	    methods: {
	        /**
	         * Selects a node from tree view.
	         * @since 1.0.0
	         * @since 1.0.1 Node is passed to event.
	         *
	         * @param int   index Tree index selected.
	         * @param mixed value Value selected.
	         */
	        select: function select(index, value) {
	            // Unselect from current level, children and parents
	            this.toggleOpen(index);
	            this.$set('value', value);
	            // Call to event.
	            this.$dispatch('treeview_click', {
	                label: this.model[index][this.labelname],
	                value: this.model[index][this.valuename],
	                model: this.model[index]
	                // ,
	                // children: this.model[index][this.children]
	            });
	        },
	        /**
	         * Toggles open / close node.
	         * @since 1.0.0
	         *
	         * @param int index Index to open
	         */
	        toggleOpen: function toggleOpen(index) {
	            // Return if no children
	            if (!this.areValidNodes(this.model[index][this.children])) return;
	            // Init
	            if (this.model[index].isOpened == undefined) this.$set('model[' + index + '].isOpened', this.hasSelectedChild(index));
	            // General
	            this.$set('model[' + index + '].isOpened', !this.model[index].isOpened);
	        },
	        /**
	         * Returns flag indicating if nodes are valid or not.
	         * @since 1.0.0
	         * @since 1.0.2 Renamed
	         *
	         * @param array nodes Nodes to validate.
	         */
	        areValidNodes: function areValidNodes(nodes) {
	            return nodes != undefined && Object.prototype.toString.call(nodes) === '[object Array]' && nodes.length > 0;
	        },
	        /**
	         * Returns flag indicating if tree view has a node selected.
	         * @since 1.0.2
	         *
	         * @return bool
	         */
	        hasSelected: function hasSelected() {
	            // Check children
	            for (var i in this.model) {
	                if (this.isSelected(i) || this.hasSelectedChild(i)) return true;
	            }
	            return false;
	        },
	        /**
	         * Returns flag indicating if node at specified index has a child selcted or not.
	         * @since 1.0.2
	         *
	         * @param int index Index to check
	         *
	         * @return bool
	         */
	        hasSelectedChild: function hasSelectedChild(index) {
	            for (var i in this.$children) {
	                if (this.$children[i].parent == index && this.$children[i].hasSelected()) return true;
	            }
	            return false;
	        },
	        /**
	         * Returns flag indicating if node at specified index is selected or not.
	         * @since 1.0.2
	         *
	         * @param int index Index to check
	         *
	         * @return bool
	         */
	        isSelected: function isSelected(index) {
	            return this.value && this.model[index][this.valuename] == this.value;
	        },

	        /**
	         * Returns flag indicating if node is opened or not.
	         * @since 1.0.2
	         *
	         * @param int index Index to check
	         *
	         * @return bool
	         */
	        isOpened: function isOpened(index) {
	            return this.model[index].isOpened != undefined && this.model[index].isOpened || this.hasSelectedChild(index);
	        }
	    }
	})); /**
	      * Tree view.
	      * Vue Component.
	      *
	      * @author Alejandro Mostajo <http://about.me/amostajo>
	      * @copyright 10Quality <http://www.10quality.com>
	      * @license MIT
	      * @version 1.0.2
	      */

/***/ }
]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const weather = __webpack_require__(5).weather;

	const options = {
	  auto: true,
	  city: 'shenyang'
	}

	weather(options);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @version 0.9
	 * @license WTFPL
	 * @module
	 * @description 将自定义的参数与默认参数合并，得到最终使用的参数
	 * @param {any} param     自定义参数
	 * @param {any} defaults  默认参数
	 */

	function getFinalParam(param, defaults) {
	  let finalParam = defaults;

	  if (typeof param === typeof defaults) {
	    if (typeof param !== 'undefined') {
	      if (typeof param === 'object') {
	        for (let key in param) {
	          if  (defaults.hasOwnProperty(key)) {
	            if (param[key] !== undefined && param[key] !== '') {
	              finalParam[key] = param[key];
	            }
	          }
	        }
	      } else {
	        finalParam = param;
	      }
	    }
	  }

	  return finalParam;
	}

	module.exports = {
	  getFinalParam: getFinalParam
	};


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @version 0.9
	 * @license WTFPL
	 * @module
	 * @description 获取天气数据，支持通过IP自动获取位置
	 * @property {object}    options               - 参数
	 * @property {boolean}    options.auto          - 是否通过IP获取位置
	 * @property {string}    options.city          - 城市名的汉语拼音
	 * @property {function}  options.successFunc   - 回调函数
	 */

	const getFinalParam = __webpack_require__(1).getFinalParam;
	const getJSON = __webpack_require__(6).getJSON;

	function weather(options) {
	  const defaults = {
	    auto: true,
	    city: 'shenyang',
	    successFunc: function(data) { console.log(data); }
	  }

	  const weatherParam = getFinalParam(options, defaults);

	  const ipOptions = {
	    url: 'http://ipinfo.io/json',
	    callbackFunc: callbackIP
	  };

	  let weatherOptions = {
	    url: 'http://apis.baidu.com/heweather/weather/free',
	    header: {apikey: 'd6af5c384780b19512bff30032a62f5f'},
	    params: {city: weatherParam.city},
	    callbackFunc: weatherParam.successFunc
	  }

	  function callbackIP(data) {
	    if (weatherParam.auto === true) {
	      weatherOptions.params = {cityip: data.ip}
	    }
	    getJSON(weatherOptions);
	  }

	  getJSON(ipOptions);
	}

	module.exports = {
	  weather: weather
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @version 0.9
	 * @license WTFPL
	 * @module
	 * @description 从URL获取JSON数据，支持header
	 * @property {object}    options               - 参数
	 * @property {string}    options.method        - http方法，默认GET
	 * @property {string}    options.url           - url地址
	 * @property {object}    options.params        - url参数
	 * @property {string}    options.handleAs      - 获取的数据格式，json或text
	 * @property {object}    options.header        - header数据
	 * @property {function}  options.callbackFunc  - 回调函数
	 */

	const getFinalParam = __webpack_require__(1).getFinalParam;

	function getJSON(options) {
	  const defaults = {
	    method: 'GET',
	    url: '',
	    params: {},
	    handleAs: 'json',
	    header: {},
	    callbackFunc: function(data) { console.log(data); }
	  };

	  const finalOptions = getFinalParam(options, defaults);

	  function queryUrl(baseUrl, params) {
	    let url = finalOptions.url;
	    for (let key in params) {
	      if (params.hasOwnProperty(key)) {
	        if (params[key] !== undefined && params[key] !== '') {
	          url = url + '?' + key + '=' + params[key];
	        }
	      }
	    }
	    return url;
	  }

	  const finalUrl = queryUrl(finalOptions.url, finalOptions.params);

	  const req = new XMLHttpRequest();
	  req.open(finalOptions.method, finalUrl, true);
	  for (let key in finalOptions.header) {
	    req.setRequestHeader(key, finalOptions.header[key]);
	  }
	  req.send();

	  req.onreadystatechange = function() {
	    if (req.readyState === 4) {
	      if (finalOptions.handleAs === 'json') {
	        const data = JSON.parse(req.responseText);
	        finalOptions.callbackFunc(data);
	      } else {
	        const data = req.responseText;
	        finalOptions.callbackFunc(data);
	      }
	    }
	  }
	}

	module.exports = {
	  getJSON: getJSON
	};


/***/ }
/******/ ]);
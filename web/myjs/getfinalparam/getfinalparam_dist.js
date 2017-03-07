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

	const getFinalParam = __webpack_require__(1).getFinalParam;

	let testParam = {a: 'aaa'};
	const defaults = {a: 'a-default', b: 'b-default'};

	const finalParam = getFinalParam(testParam, defaults);
	console.log(finalParam);


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


/***/ }
/******/ ]);
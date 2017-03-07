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

	const typing = __webpack_require__(4).typing;

	const options = {
	  text: 'Cupidatat officia Lorem esse reprehenderit pariatur do minim. Mollit ut deserunt consequat cupidatat mollit sunt sit officia nostrud. Consequat do sit velit dolore sunt ullamco proident. Ipsum fugiat non commodo nulla cillum sit deserunt occaecat velit. Eiusmod eiusmod irure sunt eiusmod ad cupidatat veniam elit sit magna dolore in voluptate do labore. Irure labore ea do duis ea eu aute sint reprehenderit in aute tempor ut cupidatat. Incididunt veniam adipisicing magna fugiat occaecat dolore aute ex elit labore cupidatat ad non nostrud voluptate quis.',
	  speed: 300
	}

	typing(options);


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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @version 0.9
	 * @license WTFPL
	 * @module
	 * @description 实现文字以打印机效果显示
	 * @property {object}  options         - 参数
	 * @property {string}  options.text    - 显示的文字
	 * @property {number}  options.speed   - 显示文字的速度，默认100，数值越小显示越快
	 * @property {string}  options.el      - 将文字添加到元素的类名，默认为class='typing'
	 */

	const getFinalParam = __webpack_require__(1).getFinalParam;

	function typing(options) {
	  const defaults = {
	    text: 'typing effect 打字效果',
	    speed: 100,
	    el: 'typing',
	  };

	  const typingParam = getFinalParam(options, defaults);
	  const typingEl = document.querySelector('.' + typingParam.el);
	  const typingText = typingParam.text;
	  const textLength = typingText.length;
	  let strLength = 1;
	  let str = '';

	  function typingWrite() {
	    if (strLength <= textLength) {
	      const strStart = strLength - 1;
	      const strNow = typingText.substring(strStart, strLength);

	      // 跳过html标签的尖括号显示
	      if (strNow === '<') {
	        strEnd = typingText.indexOf('>', strStart) + 1;
	        str = str + typingText.substring(strStart, strEnd);
	        strLength = strEnd + 1;
	      } else {
	        str = str + strNow;
	        strLength = strLength + 1;
	      }

	      strFinal = str + ' |';
	      typingEl.innerHTML = strFinal;

	    } else {
	      clearInterval(timeID);
	    }
	  }

	  const timeID = setInterval(typingWrite, typingParam.speed);
	}

	module.exports = {
	  typing: typing
	};


/***/ }
/******/ ]);
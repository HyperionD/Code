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

	const move = __webpack_require__(2).move;

	const c = 400;
	const speed = 100;
	const b = 0;
	const el = document.querySelector('.linear');
	const elQuadeaseIn = document.querySelector('.quad-easeIn');
	const elQuadeaseOut = document.querySelector('.quad-easeOut');
	move(b, c, speed, el, 'linear');
	move(b, c, speed, elQuadeaseIn, 'quad.easeIn');
	move(b, c, speed, elQuadeaseOut, 'quad.easeOut');


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @version 0.9
	 * @license WTFPL
	 * @module
	 * @description 移动元素
	 * @param {number} beginLength     起始位置
	 * @param {number} changeLength    移动的距离
	 * @param {number} speed           移动速度(/s)
	 * @param {object} element         移动的元素
	 */

	const tween = __webpack_require__(3).tween;

	function move(beginLength, changeLength, speed, element, tweenMethod) {
	  const startTime = new Date();

	  let tweenFunc;

	  if (tweenMethod === 'linear') {
	    tweenFunc = tween.linear;
	  } else if (tweenMethod === 'quad.easeIn') {
	    tweenFunc = tween.quad.easeIn;
	  } else if (tweenMethod === 'quad.easeOut') {
	    tweenFunc = tween.quad.easeOut;
	  } else {
	    tweenFunc = null;
	  }

	  function Timer() {
	    let t = new Date() - startTime;
	    const duringTime = (changeLength / speed) * 1000;

	    if (tweenFunc !== null) {
	      let y = tweenFunc(beginLength, changeLength, t, duringTime);
	      element.style.left = y + 'px';

	      if (y === changeLength) {
	        cancelAnimationFrame(ID);
	      } else {
	        requestAnimationFrame(Timer);
	      }
	    }
	  }

	  const ID = requestAnimationFrame(Timer);
	}

	module.exports = {
	  move: move
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	 * t: current time, 当前时间, timePassed
	 * b: beginning value, 初始值
	 * c: change in value, 变化量
	 * d: duration, 持续时间
	 * p: progress, 经过时间与总时间比值 t / d
	 */

	const tween = {

	  linear: function(b, c, t, d) {
	    let p = t / d;
	    if (t > d) {
	      p = 1;
	    }
	    const y = c * p + b;
	    return y;
	  },

	  quad: {
	    easeIn: function(b, c, t, d) {
	      let p = t / d;
	      if (t > d) {
	        p = 1;
	      }
	      const y = c * p * p + b;
	      return y;
	    },

	    easeOut: function(b, c, t, d) {
	      let p = t / d;
	      if (t > d) {
	        p = 1;
	      }
	      const y = -c * p * (p - 2) + b;
	      return y;
	    }
	  }
	}

	module.exports = {
	  tween: tween
	}


/***/ }
/******/ ]);
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

const tween = require('./tween.js').tween;

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

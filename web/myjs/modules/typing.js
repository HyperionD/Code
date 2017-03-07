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

const getFinalParam = require('./getfinalparam.js').getFinalParam;

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

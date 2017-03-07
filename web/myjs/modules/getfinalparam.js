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

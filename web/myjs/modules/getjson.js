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

const getFinalParam = require('./getfinalparam.js').getFinalParam;

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

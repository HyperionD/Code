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

const getFinalParam = require('./getfinalparam.js').getFinalParam;
const getJSON = require('./getjson.js').getJSON;

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

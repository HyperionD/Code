function getJSON(url, callbackFunc, header) {
  const req = new XMLHttpRequest();

  req.open('GET', url, true);
  if (header !== undefined) {
    for (const key in header) {
      req.setRequestHeader(key, header[key]);
    }
  }
  req.send();

  req.onreadystatechange = function reqDone() {
    if (req.readyState === 4 && req.status === 200) {
      const data = JSON.parse(req.responseText);
      callbackFunc(data);
    }
  }
}


function getWeekByDay(dayValue) {
  const day = new Date(Date.parse(dayValue));
  const weekArray = ['日', '一', '二', '三', '四', '五', '六'];
  const week = weekArray[day.getDay()];
  return week;
}


function weather(options) {
  const defaults = {
    apiUrlBase: 'http://apis.baidu.com/heweather/weather/free?',
    header: { apikey: 'd6af5c384780b19512bff30032a62f5f' },
    IPUrl: 'http://ipinfo.io/json',
    imgDir: './weather-img/heweather/',
    IP: true,
    city: 'shenyang',
    successFunc: function(data) {
      const weatherDiv = document.querySelector('.weather');
      const weatherHTML = '<div class="today">' +
                            '<div class="info">' +
                              '<div class="cityname">' + data.cityname + '</div>' +
                              '<hr />' +
                              '<div class="text">' + data.text + '</div>' +
                              '<div class="temp">' + data.temp + '&degC</div>' +
                            '</div>' +
                            '<div class="img">' +
                              '<img src="' + getOptionsValue('imgDir') + data.code + '.png" />' +
                            '</div>' +
                          '</div>' +
                          '<div class="forecast">' +
                            '<div class="day-one">' +
                              '<img src="' + getOptionsValue('imgDir') + '32x32/' + data.forecast[0].code + '.png" />' +
                              '<span class="week">' + getWeekByDay(data.forecast[0].date) +'</span>' +
                              '<hr />' +
                            '</div>' +
                            '<div class="day-two">' +
                              '<img src="' + getOptionsValue('imgDir') + '32x32/' + data.forecast[1].code + '.png" />' +
                              '<span class="week">' + getWeekByDay(data.forecast[1].date) +'</span>' +
                              '<hr />' +
                            '</div>' +
                            '<div class="day-three">' +
                              '<img src="' + getOptionsValue('imgDir') + '32x32/' + data.forecast[2].code + '.png" />' +
                              '<span class="week">' + getWeekByDay(data.forecast[2].date) +'</span>' +
                            '</div>' +
                          '</div>';
      weatherDiv.innerHTML = weatherHTML;
    },
    errorFunc: function() {
      alert('get weather error');
    },
  };

  if (options === undefined) {
    options = defaults;
    console.log(options);
  }

  function getOptionsValue(opt) {
    let optValue;
    if (options[opt] === undefined) {
      optValue = defaults[opt];
    } else if (options[opt] === '') {
      optValue = defaults[opt];
    } else {
      optValue = options[opt];
    }
    return optValue;
  }

  function callbackWeather(data) {
    const weatherObj = data['HeWeather data service 3.0']['0'];
    if (weatherObj.status !== 'unknown city') {
      console.log(weatherObj);

      const weatherData = {
        cityname: weatherObj.basic.city,
        code: weatherObj.now.cond.code,
        temp: weatherObj.now.tmp,
        text: weatherObj.now.cond.txt,
        forecast: [
          {
            code: weatherObj.daily_forecast[1].cond.code_d,
            text: weatherObj.daily_forecast[1].cond.txt_d,
            min_temp: weatherObj.daily_forecast[1].tmp.min,
            max_temp: weatherObj.daily_forecast[1].tmp.max,
            date: weatherObj.daily_forecast[1].date,
          },
          {
            code: weatherObj.daily_forecast[2].cond.code_d,
            text: weatherObj.daily_forecast[2].cond.txt_d,
            min_temp: weatherObj.daily_forecast[2].tmp.min,
            max_temp: weatherObj.daily_forecast[2].tmp.max,
            date: weatherObj.daily_forecast[2].date,
          },
          {
            code: weatherObj.daily_forecast[3].cond.code_d,
            text: weatherObj.daily_forecast[3].cond.txt_d,
            min_temp: weatherObj.daily_forecast[3].tmp.min,
            max_temp: weatherObj.daily_forecast[3].tmp.max,
            date: weatherObj.daily_forecast[3].date,
          }
        ]
      };

      const successFunc = getOptionsValue('successFunc');
      successFunc(weatherData);
    } else {
      const errorFunc = getOptionsValue('errorFunc');
      errorFunc()
    }
  }

  function callbackIP(data) {
    const cityIP = data.ip;
    let APIUrl;
    const IPValue = getOptionsValue('IP');
    const apiUrlBaseValue = getOptionsValue('apiUrlBase');
    const headerValue = getOptionsValue('header');

    if (IPValue === true) {
      APIUrl = apiUrlBaseValue + 'cityip=' + cityIP;
    } else {
      const cityValue = getOptionsValue('city');
      APIUrl = apiUrlBaseValue + 'city=' + cityValue;
    }

    getJSON(APIUrl, callbackWeather, headerValue);
  }

  const IPUrlValue = getOptionsValue('IPUrl');
  getJSON(IPUrlValue, callbackIP);
}

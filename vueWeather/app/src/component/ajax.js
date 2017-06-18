/**
 * ajax函数 返回 Promise对象
 * @param  {object} opt 参数选项
 * @param  {string} opt.url ajax的请求url
 * @param  {string} opt.method 请求方法 默认为 GET
 * @param  {string} responseType 类型 默认为 json
 * @return {object} 返回 Promise对象
 */
const ajax = function (opt) {
    const method = opt.method || 'GET';
    const url = opt.url;
    const type = opt.type || 'json';

    return new Promise(function (resolve) {
        const req = new XMLHttpRequest();
        req.responseType = type;
        /*
         * readyState 说明
         * 0 UNSENT (未打开) open()方法还未被调用
         * 1 OPENED  (未发送) send()方法还未被调用
         * 2 HEADERS_RECEIVED (已获取响应头) send()方法已经被调用, 响应头和响应状态已经返回
         * 3 LOADING (正在下载响应体) 响应体下载中; responseText中已经获取了部分数据
         * 4 DONE (请求完成) 整个请求过程已经完毕
         */
        req.onreadystatechange = function() {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    console.log(req.statusText);
                }
            }
        };
        req.open(method, url, true);
        req.send();
    });
};

export { ajax };

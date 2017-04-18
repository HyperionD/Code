/**
 * Datetime 时间日期相关函数
 * @type {Object}
 *
 * 使用示例
 * 1. 获取当前日期年月日、星期几
 * const now = Datetime.init();
 * const now_date = now.formatDate();
 * const now_week = now.formatWeek();
 *
 * 2. 获取当前日期前30天年月日、星期几
 * const before = now.stepTime(-30*24*60*60*1000);
 * const before_date = before.formatDate();
 * const before_week = before.formatWeek();
 */

const Datetime = {
    /**
     * 初始化函数
     * @param  {dateString} input_time  表示时间的字符串，不输入则为当前日期
     * @return {object}                 返回this可继续调用Datetime函数
     */
    init: function(input_time) {
        if (input_time !== undefined) {
            this.time_obj = new Date(input_time);
        } else {
            this.time_obj = new Date();
        }
        return this;
    },

    /**
     * 格式化日期（年、月、日）
     * @param  {string} sep 年、月、日的分隔符
     * @return {string}     返回格式化后的字符串
     */
    formatDate: function(sep) {
        sep = sep || '-';
        const year = this.time_obj.getFullYear();
        let month = this.time_obj.getMonth() + 1; //getMonth返回0-11
        if (month < 10) { month = '0' + month; }
        let day = this.time_obj.getDate(); //getDate返回1-31
        if (day < 10) { day = '0' + day; }
        const date_str = year.toString() + sep + month.toString() + sep +day.toString();
        return date_str;
    },

    /**
     * 格式化时间（小时、分钟、秒）
     * @return {string} 返回格式化后字符串
     */
    formatTime: function () {
        const time_str = this.time_obj.getHours() + ':' + this.time_obj.getMinutes() + ':' + this.time_obj.getSeconds();
        return time_str;
    },

    /**
     * 格式化日期（星期日--星期一）
     * @return {string} 返回格式化后字符串
     */
    formatWeek: function() {
        const week_list = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const week_str = week_list[this.time_obj.getDay()]; //getDay返回0-6 从星期日开始
        return week_str;
    },

    /**
     * 计算时间偏移
     * @param  {int} step 偏移的时间以毫秒为单位，向前偏移为负数，例如前一天 step=-24*60*60*1000
     * @return {object}   以偏移后的时间重新调用init()初始化函数，可以直接调用Datetime其它函数
     */
    stepTime: function(step) {
        const time_stamp = this.time_obj.getTime();
        const step_time = new Date(time_stamp + step);
        return this.init(step_time);
    }
};

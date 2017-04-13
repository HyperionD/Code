/**
 * DateTime 时间日期相关操作
 *
 * 使用示例 time.html
 *
 * timeStep函数以偏移后的时间为input_time返回新的new DateTime(input_time)实例可以直接调用格式化时间函数
 *
 * formatDate(sep) 格式化日期,sep不填则使用'-'作为连接符
 * formatTime() 格式化时间
 * formatWeek() 格式化星期
 */

function DateTime(time_input) {
    this.time_input = time_input;
    this.time_obj = new Date(this.time_input);
}

DateTime.prototype = {
    formatDate: function (sep) {
        if (sep === undefined) {
            sep = '-';
        }
        const year = this.time_obj.getFullYear();
        let month = this.time_obj.getMonth() + 1; //getMonth返回0-11
        if (month < 10) { month = '0' + month; }
        let day = this.time_obj.getDate(); //getDate返回1-31
        if (day < 10) { day = '0' + day; }
        const date_str = year.toString() + sep + month.toString() + sep +day.toString();
        return date_str;
    },

    formatTime: function () {
        const time_str = this.time_obj.getHours() + ':' + this.time_obj.getMinutes() + ':' + this.time_obj.getSeconds();
        return time_str;
    },

    formatWeek: function () {
        const week_list = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const week_str = week_list[this.time_obj.getDay()]; //getDay返回0-6 从星期日开始
        return week_str;
    },

    timeStep: function (step) {
        const time_stamp = this.time_obj.getTime();
        const step_time = new Date(time_stamp + step);
        return new DateTime(step_time);
    }
};


/**
 * DateTime 时间日期相关操作
 * const t = new DateTime(time_input) 创建新的实例
 * 格式化日期函数可以链式调用，结果存储在this.output中
 * formatDate(sep) 格式化日期,sep不填则使用'-'作为连接符
 * formatTime() 格式化时间
 * formatWeek() 格式化星期
 * timeStep(step) 计算step偏移的日期，返回new DateTime(step_time)，可以继续链式条用以上格式化日期函数
 */

function DateTime(time_input) {
    this.time_input = time_input;
    this.time_obj = new Date(this.time_input);
    this.output = {};
}

DateTime.prototype = {
    formatDate: function (sep) {
        if (sep === undefined) {
            sep = '-';
        }
        const year = this.time_obj.getFullYear();
        let month = this.time_obj.getMonth() + 1;
        if (month < 10) {month = '0' + month}
        let day = this.time_obj.getDate();
        if (day < 10) {day = '0' + day;}
        const date_str = year.toString() + sep + month.toString() + sep +day.toString();
        this.output['date'] = date_str;
        return this;
    },

    formatTime: function () {
        const time_str = this.time_obj.getHours() + ':' + this.time_obj.getMinutes() + ':' + this.time_obj.getSeconds();
        this.output['time'] = time_str;
        return this;
    },

    formatWeek: function () {
        const week_list = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const week_str = week_list[this.time_obj.getDay()];
        this.output['week'] = week_str;
        return this;
    },

    timeStep: function (step) {
        const time_stamp = this.time_obj.getTime();
        const step_time = new Date(time_stamp + step);
        return new DateTime(step_time);
    }
};


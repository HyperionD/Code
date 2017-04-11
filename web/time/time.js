/**
 * Created by HyperionD on 2017/4/11.
 * DateTime 时间日期相关操作
 * DateTime.format 格式化时间
 * DateTime.format.time(time_input) 格式化时间以':'连接小时、分钟、秒
 * DateTime.format.date(time_input, sep) 格式化日期以sep连接年、月、日
 * DateTime.format.week(time_input) 格式化星期
 * DateTime.timeStep(time_input, step) 计算step间隔的时间日期，可用DateTime.format格式化
 */

const DateTime = {
    format: {
        time: function (time_input) {
            var time_obj = new Date(time_input);
            var time_str = time_obj.getHours()+ ':' + time_obj.getMinutes() + ':' + time_obj.getSeconds();
            return time_str;
        },

        date: function (time_input, sep) {
            var time_obj = new Date(time_input);
            var year = time_obj.getFullYear();
            var month = time_obj.getMonth() + 1;
            if (month < 10) {month = '0' + month}
            var day = time_obj.getDate();
            if (day < 10) {day = '0' + day;}
            return year.toString() + sep + month.toString() + sep +day.toString();
        },

        week: function (time_input) {
            var time_obj = new Date(time_input);
            var weekStr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            return weekStr[time_obj.getDay()];
        }
    },

    timeStep: function (time_input, step) {
        var time_stamp = new Date(time_input).getTime();
        var step_time = new Date(time_stamp + step);
        return step_time;
    }
};

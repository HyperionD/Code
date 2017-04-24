/**
 * Tween 缓动函数
 *
 * s = begin + change * (time / duration)
 *
 * begin: 距离的初始值
 * change: 目标值与初始值的差，即移动距离
 * time: 当前已经运动的时间
 * duration: 运动总时长
 *
 * linear 迅速直线
 * easeIn 先慢后快
 */
const Tween = {
    initTween: function  (time, begin, change, duration) {
        this.time = time;
        this.begin = begin;
        this.change = change;
        this.duration = duration;
        this.progress = time / duration;
        return this;
    },

    linear: function () {
        if (this.progress >= 1) {
            this.progress = 1;
        }
        return this.begin + this.change * this.progress;
    },

    easeIn: function () {
        if (this.progress > 1) {
            this.progress = 1;
        }
        return this.begin + this.change * this.progress * this.progress;
    }
};

function changeStyleToVal(el, style, val, unit) {
    if (el.style[style] === undefined) {
        throw '!Error no style ' + style;
    } else {
        if (unit === undefined) {
            el.style[style] = val;
        } else {
            el.style[style] = val + unit;
        }
    }
}

/**
 * 动画函数
 * @type {Object}
 * animate.pool 为数组，形式为[{}, {}, {}]，存放要执行的动画所需参数
 */
const animate = {
    running: false,
    pool: [],

    /**
     * 隐藏元素
     * @param  {object} opt 参数
     *
     * @param  {object} opt.el 要隐藏的元素
     * @param  {float} opt.change 改变的值 0-1 默认为 1
     * @param  {int} opt.duration 经过的时间 以毫秒为单位，默认为2000ms
     * @param  {string} opt.tween_method 缓动函数方式，默认为'linear'
     */
    hide: function (opt) {
        const el = opt.el;
        let change = opt.change || 1;
        const duration = opt.duration || 2000;
        const tween_method = opt.tween_method || 'linear';

        const begin = parseFloat(window.getComputedStyle(el).opacity);
        if (change > begin) {
            change = begin;
        }
        animate_obj = {
            el: el,
            begin: begin,
            change: -change,
            duration: duration,
            tween_method: tween_method,
            style: 'opacity',
        };
        if (begin > 0) {
            animate.pool.push(animate_obj);
        }
    },

    /**
     * 显示动画
     * @param  {object} opt
     *
     * @param  {object} el           要隐藏的元素
     * @param  {float} change        改变的值 0-1 默认为 1
     * @param  {int} duration        经过的时间 毫秒为单位 默认为2000ms
     * @param  {string} tween_method 缓动函数方式 默认为'linear'
     */
    show: function (opt) {
        const el = opt.el;
        let change = opt.change || 1;
        const duration = opt.duration || 2000;
        const tween_method = opt.tween_method || 'linear';

        const begin = parseFloat(window.getComputedStyle(el).opacity);
        if (begin + change > 1) {
            change = 1 - begin;
        }
        animate_obj = {
            el: el,
            begin: begin,
            change: change,
            duration: duration,
            tween_method: tween_method,
            style: 'opacity',
        };
        if (begin < 1) {
            animate.pool.push(animate_obj);
        }
    },

    /**
     * 横向移动元素
     * @param  {object} opt 参数
     *
     * @param  {object} opt.el 要移动的元素
     * @param  {int} opt.change 移动的距离
     * @param  {int} opt.duration 移动的时间，毫秒为单位 默认值为2000
     * @param  {string} opt.tween_method 移动方法即选择缓动函数，默认为'linear'即匀速运动
     */
    moveX: function (opt) {
        const el = opt.el;
        const change = opt.change;
        const duration = opt.duration || 2000;
        const tween_method = opt.tween_method || 'linear';

        const begin = el.offsetLeft;
        const move_obj = {
            el: el,
            begin: begin,
            change: change,
            duration: duration,
            tween_method: tween_method,
            style: 'left',
            unit: 'px'
        };
        animate.pool.push(move_obj);
    },

    /**
     * 纵向移动元素
     * @param  {object} opt 参数
     *
     * @param  {object} opt.el 要移动的元素
     * @param  {int} opt.change 移动的距离
     * @param  {int} opt.duration 移动的时间，毫秒为单位 默认值为2000
     * @param  {string} opt.tween_method 移动方法即选择缓动函数，默认为'linear'即匀速运动
     */
    moveY: function (opt) {
        const el = opt.el;
        const change = opt.change;
        const duration = opt.duration || 2000;
        const tween_method = opt.tween_method || 'linear';

        const begin = el.offsetLeft;
        const move_obj = {
            el: el,
            begin: begin,
            change: change,
            duration: duration,
            tween_method: tween_method,
            style: 'top',
            unit: 'px'
        };
        animate.pool.push(move_obj);
    },

    /**
     * 开始执行动画
     * 执行requestAnimationFrame时，每一个时间点遍历animate.pool数组，将数组中所有动画要改变的值改变，如：moveX的left值，moveY的top值
     * 当animate.pool.length为0时结束动画，重新设置animate.pool = [], animate.running = false
     */
    start: function () {
        function go(time) {
            for (let i=0; i<animate.pool.length; i++) {
                const animate_item = animate.pool[i];
                const begin = animate_item.begin;
                const change = animate_item.change;
                const duration = animate_item.duration;
                const el = animate_item.el;
                const style = animate_item.style;
                const tween_method = animate_item.tween_method;
                const unit = animate_item.unit;
                const tween = Tween.initTween(time, begin, change, duration);
                const val = tween[tween_method]();
                changeStyleToVal(el, style, val, unit);
                console.log(val);

                if (val <= Math.min(begin, begin+change) || val >= Math.max(begin, begin+change)) {
                    animate.pool.splice(i, 1);
                }
            }
            if (animate.pool.length !== 0) {
                requestAnimationFrame(go);
            } else {
                animate.pool = [];
                animate.running = false;
                cancelAnimationFrame(id);
            }
        }

        let id;
        if (animate.running === false) {
            id = requestAnimationFrame(go);
            animate.running = true;
        } else if (animate.running === true) {
            throw 'animate has running';
        }
    },

    start_step: function () {
        
    }
};

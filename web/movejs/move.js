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


function Tween(begin, change, duration) {
    this.begin = begin;
    this.change = change;
    this.duration = duration;
}

Tween.prototype = {
    linear: function (time) {
        let progress = time / this.duration;
        return this.begin + this.change * progress;
    },

    easeIn: function (time) {
        const progress = time / this.duration;
        return this.begin + this.change * progress * progress;
    },

    test: function () {
        console.log('test');
    }
};


function Move(el) {
    this.el = el;
}

Move.prototype = {
    move_linear_x: function (change, duration) {
        const begin_time = new Date();
        this.el.style.position = 'relative';
        const el = this.el;
        const begin = this.el.offsetLeft;
        const tween = new Tween(begin, change, duration);
        function timer() {
            let time = new Date() - begin_time;
            let s = tween.linear(time);
            console.log(s);
            el.style.left = s + 'px';

            if (s > begin + change) {
                cancelAnimationFrame(id);
            } else {
                requestAnimationFrame(timer);
            }
        }
        const id = requestAnimationFrame(timer);
    },

    move_easeIn_x: function (change, duration) {
        const begin_time = new Date();
        this.el.style.position = 'relative';
        const el = this.el;
        const begin = this.el.offsetLeft;
        const tween = new Tween(begin, change, duration);
        function timer() {
            let time = new Date() - begin_time;
            let s = tween.easeIn(time);
            el.style.left = s + 'px';

            if (s > change) {
                cancelAnimationFrame(id);
            } else {
                requestAnimationFrame(timer);
            }
        }
        const id = requestAnimationFrame(timer);
    },

    test: function () {
        console.log(this.begin, this.change, this.duration);
    }
};

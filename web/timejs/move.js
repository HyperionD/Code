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
    initTween: function  (begin, change, duration) {
        this.begin = begin;
        this.change = change;
        this.duration = duration;
        return this;
    },

    linear: function (time) {
        let progress = time / this.duration;
        if (progress >= 1) {
            progress = 1;
        }
        return this.begin + this.change * progress;
    },

    easeIn: function (time) {
        let progress = time / this.duration;
        if (progress > 1) {
            progress = 1;
        }
        return this.begin + this.change * progress * progress;
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

// const Move = Object.create(Tween);
//
// Move.x = function (el, change, duration, tween_method) {
//     const begin = el.offsetLeft;
//     const start_time = new Date();
//     const tween = this.initTween(begin, change, duration);
//     function go (time) {
//         // const time = new Date() - start_time;
//         let s;
//
//         if (tween_method === 'linear') {
//             s = tween.linear(time);
//         } else if (tween_method === 'easeIn') {
//             s = tween.easeIn(time);
//         } else {
//             throw 'Error! no tween method ' + tween_method;
//         }
//         el.style.left = s + 'px';
//
//         if ( s < Math.min(begin, begin+change) || s > Math.max(begin, begin+change)) {
//             cancelAnimationFrame(id);
//         } else {
//             requestAnimationFrame(go);
//         }
//     }
//     const id = requestAnimationFrame(go);
// };
//
// Move.y = function (el, change, duration, tween_method) {
//     const begin = el.offsetTop;
//     const tween = this.initTween(begin, change, duration);
//     function go (time) {
//         let s;
//         if (tween_method === 'linear') {
//             s = tween.linear(time);
//         } else if (tween_method === 'easeIn') {
//             s = tween.easeIn(time);
//         } else {
//             throw 'Error! no tween method ' + tween_method;
//         }
//         el.style.top = s + 'px';
//         console.log(s);
//         if ( s <= Math.min(begin, begin+change) || s >= Math.max(begin, begin+change)) {
//             cancelAnimationFrame(id);
//         } else {
//             requestAnimationFrame(go);
//         }
//     }
//     const id = requestAnimationFrame(go);
// };
//
// Move.xy = function (el) {
//     const begin_x = el.offsetLeft;
//     const begin_y = el.offsetTop;
//     const tween = this.initTween()
//     function go(time) {
//         const s =
//     }
// };

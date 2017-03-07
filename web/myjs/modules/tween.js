/*
 * t: current time, 当前时间, timePassed
 * b: beginning value, 初始值
 * c: change in value, 变化量
 * d: duration, 持续时间
 * p: progress, 经过时间与总时间比值 t / d
 */

const tween = {

  linear: function(b, c, t, d) {
    let p = t / d;
    if (t > d) {
      p = 1;
    }
    const y = c * p + b;
    return y;
  },

  quad: {
    easeIn: function(b, c, t, d) {
      let p = t / d;
      if (t > d) {
        p = 1;
      }
      const y = c * p * p + b;
      return y;
    },

    easeOut: function(b, c, t, d) {
      let p = t / d;
      if (t > d) {
        p = 1;
      }
      const y = -c * p * (p - 2) + b;
      return y;
    }
  }
}

module.exports = {
  tween: tween
}

/*
 * t: current time, 当前时间, timePassed
 * b: beginning value, 初始值
 * c: change in value, 变化量
 * d: duration, 持续时间
 * p: progress, 经过时间与总时间比值 t / d
 */

function Tween() {
  function stopProgress(p) {
    if (p > 1) {
      p = 1;
    }
    return p;
  }

  function linear(c, t, d, b) {
    let p = t / d;
    p = stopProgress(p);
    const y = c * p + b;
    return y;
  }

  function quad() {
    function easeIn(c, t, d, b) {
      let p = t / d;
      p = stopProgress(p);
      const y = c * p * p + b;
      return y;
    }

    function easeOut(c, t, d, b) {
      let p = t / d;
      p = stopProgress(p);
      const y = - c * p * (p - 2) + b;
      return y;
    }

    const quad = {
      easeIn: easeIn,
      easeOut: easeOut,
    }

    return quad;
  }

  const tween = {
    linear: linear,
    quad: quad
  }

  return tween;
}

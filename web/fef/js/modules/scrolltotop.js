function scrollToTop() {
  const sTop = document.body.scrollTop + document.documentElement.scrollTop;

  const start = new Date();

  function timer() {
    const t = new Date() - start;
    const y = Tween().linear(sTop, t, 1000, 0);
    document.body.scrollTop = sTop - y;
    if (document.body.scrollTop === 0) {
      cancelAnimationFrame(timer);
    } else {
      requestAnimationFrame(timer);
    }
  }
  requestAnimationFrame(timer);
}

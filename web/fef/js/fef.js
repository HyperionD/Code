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

function Menu() {
  const allMenus = document.querySelectorAll('.list-menu');
  alert(allMenus.length);
}

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

function Tab() {
  const tab = document.querySelectorAll('.tab');

  function activeTab(tabTitle, tabContents) {
    const tabTitleId = tabTitle.id;
    tabTitle.classList.add('active');
    for (let i=0; i < tabContents.length; i++) {
      const tabContentFor = tabContents[i].getAttribute('for');
      if (tabContentFor === tabTitleId) {
        tabContents[i].classList.add('active');
        break;
      }
    }
  }

  function removeTabActive(tabEl) {
    const activeTabs = tabEl.querySelectorAll('.active');
    for (let i=0; i<activeTabs.length; i++) {
      activeTabs[i].classList.remove('active');
    }
  }

  function tabInit() {
    if (tab) {
      for (let i=0; i < tab.length; i++) {
        const firstTitle = tab[i].querySelector('.tab-title-item');
        const tabContent = tab[i].querySelectorAll('.tab-content-item');
        activeTab(firstTitle, tabContent);
      }
    }
  }


  function tabClick() {
    if (tab) {
      for (let i=0; i < tab.length; i++) {
        const tabTitles = tab[i].querySelectorAll('.tab-title-item');
        const tabContents = tab[i].querySelectorAll('.tab-content-item');
        for (let j=0; j < tabTitles.length; j++) {
          const tabTitle = tabTitles[j];

          function click() {
            removeTabActive(tab[i]);
            activeTab(tabTitle, tabContents);
          }

          tabTitle.addEventListener('click', click, false);
        }
      }
    }
  }

  tabInit();
  tabClick();
}

function slider() {
  const allsliders = document.querySelectorAll('.slider-item');
  const slidersCount = allsliders.length;
  const sliderContent = document.querySelector('.slider-content');

  const alldots = document.querySelectorAll('.slider ul li');

  let timeID;
  let tweenID;

  function getActiveNumber() {
    const activeSlider = document.querySelector('.slider-item.active');
    const activeNumber = parseInt(activeSlider.getAttribute('slidernumber'), 0);
    return activeNumber;
  }

  function setActiveSlider(sliderNumber) {
    allsliders[sliderNumber].classList.add('active');
    allsliders[sliderNumber].setAttribute('slidernumber', sliderNumber);
    alldots[sliderNumber].classList.add('active');
  }

  function removeActiveSlider() {
    const activeSlider = document.querySelector('.slider-item.active');
    const activeDot = document.querySelector('.slider ul li.active');
    activeSlider.classList.remove('active');
    activeSlider.removeAttribute('slidernumber');
    activeDot.classList.remove('active');
  }


  function bindDotClick() {
    function dotClick(sliderNumber) {
      clearInterval(timeID);
      cancelAnimationFrame(tweenID);
      gotoSlider(sliderNumber, 1000);
      autoSlider();
    }

    for (let i=0; i<slidersCount; i++) {
      alldots[i].addEventListener('click', function(){dotClick(i);}, false);
    }
  }

  function initSlider() {
    setActiveSlider(0);
    bindDotClick();
    autoSlider();
  }


  function tweenSlider(changeDistance, startPosition, durationTime) {
    const start = new Date();

    function timer() {
      const t = new Date() - start;
      const y = Tween().linear(changeDistance, t, durationTime, 0);
      const translateValue = `translate(-${y + startPosition}px, 0)`;
      sliderContent.style.transform = translateValue;

      if (y === changeDistance) {
        cancelAnimationFrame(timer);
      } else {
        tweenID = requestAnimationFrame(timer);
      }
    }
    tweenID = requestAnimationFrame(timer);
  }


  function gotoSlider(sliderNumber, delayTime) {
    const activeNumber = getActiveNumber();
    const sliderWidth = allsliders[activeNumber].clientWidth;
    const startPosition = sliderWidth * activeNumber;
    const changeDistance = sliderWidth * (sliderNumber - activeNumber);
    tweenSlider(changeDistance, startPosition, delayTime);
    removeActiveSlider();
    setActiveSlider(sliderNumber);
  }


  function autoSlider() {
    let activeNumber = getActiveNumber();

    function timer() {
      if (activeNumber === slidersCount - 1) {
        activeNumber = 0;
        gotoSlider(0, 1000);
      } else {
        activeNumber = activeNumber + 1;
        gotoSlider(activeNumber, 3000);
      }
    }
    timeID = window.setInterval(timer, 4000);
  }

  initSlider();
}

slider();

window.addEventListener('load', Menu, false);
window.addEventListener('load', Tab, false);
scrolltotop = document.querySelector('.scrolltotop');
if (scrolltotop) {
    scrolltotop.addEventListener('click', scrollToTop, false);
}

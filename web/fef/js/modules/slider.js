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

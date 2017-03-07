function addZero(timeNumber) {
  if ( timeNumber < 10 ) {
    timeNumber = '0' + timeNumber;
    return timeNumber;
  };
  return timeNumber;
};

function getCurrentTimeString() {
  var currentTime = new Date();

  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  var h = addZero(currentHours);
  var m = addZero(currentMinutes);
  var s = addZero(currentSeconds);

  currentTimeString = [h, m, s].join(":");

  return currentTimeString;
};

window.onload = function() {
  function addTimeToHTML() {
    currentTimeString = getCurrentTimeString();

    clock = document.querySelector("#clock");
    clock.innerHTML = currentTimeString;
  };

  addTimeToHTML();
  setInterval(addTimeToHTML, 1000);
};

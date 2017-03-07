function fadeOut(el) {
    let speed = 0.01;
    let op = 1;
    el.style.opacity = op;

    function timer() {
        op = op - speed;
        if (op <= 0) {
            cancelAnimationFrame(timer);
            el.style.opacity = 0;
        } else {
            el.style.opacity = op;
            requestAnimationFrame(timer);
        }
    }
    requestAnimationFrame(timer);
}

function fadeIn(el) {
    let op = 0;
    let speed = 0.02;
    el.style.opacity = op;

    function timer() {
        op = op + speed;
        if (op >= 1) {
            cancelAnimationFrame(timer);
            el.style.opacity = 1;
        } else {
            el.style.opacity = op;
            requestAnimationFrame(timer);
        }
    }
    requestAnimationFrame(timer);
}

function move(el) {
    let left = 0;
    let start = new Date();
    el.style.left = left + 'px';

    function delta(progress) {
        step = 400 * Math.pow(progress, 2);
        return step;
    }

    function timer() {
        let timePassed = new Date - start;
        let duration = 1000 /*整个动画时间*/
        let progress = timePassed / duration;
        if (progress > 1) {
            progress = 1;
        }
        let step = delta(progress);
        el.style.left = step + 'px';
        if (progress === 1) {
            cancelAnimationFrame(timer);
        } else {
            requestAnimationFrame(timer);
        }
    }
    requestAnimationFrame(timer);
}


test = document.querySelector('.test');
btn = document.querySelector('button');
test.addEventListener('click', function(){move(test)}, false);
//btn.addEventListener('click', function(){fadeIn(test)}, false);

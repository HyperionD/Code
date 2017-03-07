const move = require('../modules/move.js').move;

const c = 400;
const speed = 100;
const b = 0;
const el = document.querySelector('.linear');
const elQuadeaseIn = document.querySelector('.quad-easeIn');
const elQuadeaseOut = document.querySelector('.quad-easeOut');
move(b, c, speed, el, 'linear');
move(b, c, speed, elQuadeaseIn, 'quad.easeIn');
move(b, c, speed, elQuadeaseOut, 'quad.easeOut');

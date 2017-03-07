/*
 * Input 有关的操作函数
 */

function getInputValue() {
    var inputValue =  document.querySelector('.cal-input').value;
    return inputValue;
}

function insertInputValue(insertValue) {
    document.querySelector('.cal-input').value = insertValue;
}

function clearInput() {
    document.querySelector('.cal-input').value = '';
}

function resetInput() {
    document.querySelector('.cal-input').value = '0';
    window.NUM1 = 0;
    window.STATUS = '';
}


/*
 * 按钮相关的操作函数
 */

function insertNumber(number) {
    if ( STATUS === 'result' ) {
        resetInput();
    }

    var oldInputValue = getInputValue();

    if (oldInputValue === "0") {
        clearInput();
    };

    var newInputValue = getInputValue();
    number = newInputValue + number;
    insertInputValue(number);
}

function insertDot() {
    var oldInputValue = getInputValue();

    if (oldInputValue.indexOf('.') < 0) {
        var newInputValue = oldInputValue + '.';
        insertInputValue(newInputValue);
    } else {
        alert('you aleardy have a dot')
    }
}

function delLastChar() {
    var oldInputValue = getInputValue();
    var newInputValue =oldInputValue.substr(0, oldInputValue.length-1);
    insertInputValue(newInputValue);
}

function Add() {
    if ( window.STATUS !== 'result' ) {
        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);

        if ( window.NUM1 === 0 ) {
            window.NUM1 = num2;
        } else {
            window.NUM1 = window.NUM1 + num2;
        };
    };

    clearInput();
    window.STATUS = '+';
}

function Minus() {
    if ( window.STATUS !== 'result' ) {
        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);

        if ( window.NUM1 === 0 ) {
            window.NUM1 = num2;
        } else {
            window.NUM1 = window.NUM1 - num2;
        };
    };
    clearInput();
    window.STATUS = '-';
}

function Times() {
    if ( window.STATUS !== 'result' ) {
        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);

        if ( window.NUM1 === 0 ) {
            window.NUM1 = num2;
        } else {
            window.NUM1 = window.NUM1 * num2;
        };
    };
    clearInput();
    window.STATUS = '*';
}

function Divide() {
    if ( window.STATUS !== 'result' ) {
        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);

        if ( window.NUM1 === 0 ) {
            window.NUM1 = num2;
        } else {
            if ( num2 === 0 ) {
                alert('not zero!!!')
            } else {
                window.NUM1 = window.NUM1 / num2;
            };
        };
    };
    clearInput();
    window.STATUS = '/';
}

function Equal() {
    if ( window.STATUS === '+' ) {

        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);
        window.NUM1 = window.NUM1 + num2;

    } else if ( window.STATUS === '-' ) {

        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);
        window.NUM1 = window.NUM1 - num2;

    } else if ( window.STATUS === '*' ) {

        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);
        window.NUM1 = window.NUM1 * num2;

    } else {

        var oldInputValue = getInputValue();
        var num2 = parseFloat(oldInputValue);

        if ( num2 === 0 ) {
            alert('not zero!!!')
        } else {
            window.NUM1 = window.NUM1 / num2;
        };
    };

    window.STATUS = 'result';
    insertInputValue(window.NUM1);
}

var NUM1 = 0;
var STATUS = '';

/*
 * 获得按钮对象
 */


var testButton = document.querySelector('#test');
var clearButton = document.querySelector('#clear');
var nineButton = document.querySelector('#nine');
var eightButton = document.querySelector('#eight');
var sevenButton = document.querySelector('#seven');
var sixButton = document.querySelector('#six');
var fiveButton = document.querySelector('#five');
var fourButton = document.querySelector('#four');
var threeButton = document.querySelector('#three');
var twoButton = document.querySelector('#two');
var oneButton = document.querySelector('#one');
var zeroButton = document.querySelector('#zero');
var delButton = document.querySelector('#del');
var dotButton = document.querySelector('#dot');
var addButton = document.querySelector('#add');
var minusButton = document.querySelector('#minus');
var timesButton = document.querySelector('#times');
var divideButton = document.querySelector('#divide');
var equalButton = document.querySelector('#equal');


/*
 * 给按钮绑定事件
 */


nineButton.addEventListener('click', function(){insertNumber('9')}, false);
eightButton.addEventListener('click', function(){insertNumber('8')}, false);
sevenButton.addEventListener('click', function(){insertNumber('7')}, false);
sixButton.addEventListener('click', function(){insertNumber('6')}, false);
fiveButton.addEventListener('click', function(){insertNumber('5')}, false);
fourButton.addEventListener('click', function(){insertNumber('4')}, false);
threeButton.addEventListener('click', function(){insertNumber('3')}, false);
twoButton.addEventListener('click', function(){insertNumber('2')}, false);
oneButton.addEventListener('click', function(){insertNumber('1')}, false);
zeroButton.addEventListener('click', function(){insertNumber('0')}, false);

dotButton.addEventListener('click', function(){insertDot('.')}, false);

testButton.addEventListener('click', function(){insertInputValue("777")}, false);
clearButton.addEventListener('click', resetInput, false);
delButton.addEventListener('click', delLastChar, false);

addButton.addEventListener('click', Add, false);
minusButton.addEventListener('click', Minus, false);
timesButton.addEventListener('click', Times, false);
divideButton.addEventListener('click', Divide, false);
equalButton.addEventListener('click', Equal, false);

const getFinalParam = require('../modules/getfinalparam.js').getFinalParam;

let testParam = {a: 'aaa'};
const defaults = {a: 'a-default', b: 'b-default'};

const finalParam = getFinalParam(testParam, defaults);
console.log(finalParam);

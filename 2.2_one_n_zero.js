'use strict'

const binArr = [0, 1, 1, 0, 1, 0, 0, 0, 1];

let str = binArr.join('');
console.log(parseInt(str, 2)); /** parseInt returns integer in the base of the number -has no default base! */
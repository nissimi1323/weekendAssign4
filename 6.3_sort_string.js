'use strict'

let a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";

a = a.concat(b).split('');
a = a.sort((a, b) => a - b);
console.log(a.join(''));

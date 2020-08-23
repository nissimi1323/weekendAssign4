'use strict'

function duplicate(times, stringIn) {
  let reStr = stringIn;
  for (let i = 1; i < times; i++) {
    reStr = reStr.concat(stringIn);
  }
  return reStr;
}

console.log(duplicate(6, 'Hi'));

let str = 'Bye';
console.log(str.repeat(6)); //with method
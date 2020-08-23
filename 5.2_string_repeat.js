'use strict'

function repeat(times, stringIn) {
  let reStr = stringIn;
  for (let i = 1; i < times; i++) {
    reStr = reStr.concat(stringIn);
  }
  return reStr;
}

console.log(repeat(6, 'Hi'));


// console.log(repeat(6, 'Hi'));
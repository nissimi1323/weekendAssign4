'use strict'

function mumbling(str) {
  return [...str].map((a, i) => {
    return a.toUpperCase() + a.toLowerCase().repeat(i);
  }).join('-');
}
console.log(mumbling('good')); 
console.log(mumbling('mode'));

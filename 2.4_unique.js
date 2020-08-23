'use strict'

const uniqueArr = [2, 2, 1, 2, 2,];

// function removeSmallest(arr) {
//   let min = Math.min(...arr);
//   let [uni] = arr.filter(e => e != min ? e = min;
//   console.log(uni)
// }

// console.log(removeSmallest(unique));



// const sumSmall = (arr) => {
//   const [smaller] = arr.filter(x => x).sort((a, b) => a - b);
//   return smaller;
// }

// console.log(sumSmall(unique));

const allEqual = arr => {
  let num = 0;
  arr.forEach(element => {
    if (element !== arr[0]) {
      num += element;
    }
  });
  return num;
}
console.log(allEqual([1.55, 1.55, 0.55, 1.55, 1.55]))  // true

console.log(uniqueNum)
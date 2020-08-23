// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.No floats or non - positive integers will be passed.
// For example, when an array is passed like[19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


const numArr = [1, 5, 6, 7, 4];

const sumSmall = (arr) => {
  const [smaller, small] = numArr.filter(x => x).sort((a, b) => a - b); /*[a,b] - limit the filter return to 2 numbers, sort the numbers by size, a-b means a> - larger (return 1 and b first), b> - larger (-1 and a first), a=b (0)*/
  return smaller + small;
}

console.log(sumSmall(numArr));



'use strict'

//.split - covert each letter to value in arry
//.every - method that check the element we send to callback and return true/false - here sent 2 params first the letter and second is array index
//indexOf - returns the index of char, works on string.


/**case sensative */
// const isogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);

/**case insensative */
const isogram = (str) => {
  str = str.toLowerCase();
  str = str.split("").every((c, i) => str.indexOf(c) == i);
  return str;
}

console.log(isogram('Dermatoglyphics')); //true for isogram
console.log(isogram('dishwaSHer')); // false

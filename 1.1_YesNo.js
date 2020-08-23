// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


'use strict'

let bool = {
  true: true,
  false: false,
};

bool.yesNo = (checkBool) => {
  return checkBool ? 'Yes' : 'No';
}

console.log(bool.yesNo(bool.true));


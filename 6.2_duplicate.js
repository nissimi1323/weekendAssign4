'use strict'

const str = 'hello to t he,,,world';

function getLetters(tempStr) {
  tempStr = tempStr.replace(/[^a-zA-Z]/g, ''); //for whitespace only \s
  // console.log(tempStr);
  tempStr = tempStr.toLowerCase();
  let frChar = {};
  for (let i = 0; i < tempStr.length; i++) {
    let char = tempStr.charAt(i);
    if (frChar[char]) {
      frChar[char]++;
    } else {
      frChar[char] = 1;
    }
  }
  return frChar;
};

//     frChar[char]? frChar[char]++ : frChar[char] = 1; //shorten for if replace line 12 -19
//   }
//   return frChar;
// };

let x = getLetters(str);
console.log(x);
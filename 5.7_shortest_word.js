'use strict'

function findShortestWord(str) {
  var words = str.split(' ');
  var shortest = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length ? currentWord : shortestWord;
  });
  return shortest.length;
}
console.log(findShortestWord("oiuoiu tuyt bruyyown uoiu obfse thyyye lazyyyy dygdd"));
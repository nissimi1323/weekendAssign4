function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1 /** if sq dived in %1 = 0 mean integer, matpow(result+1) is the next   */
}
console.log(findNextSquare(676));
console.log(findNextSquare(101));
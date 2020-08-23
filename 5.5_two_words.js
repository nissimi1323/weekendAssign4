'use strict'


function initials(name) {
  const splitName = name.split(" ");
  console.log(splitName[0])
  const abbrev = (splitName[0].charAt(0) + "." + splitName[1].charAt(0)).toUpperCase();
  return abbrev;
}

console.log(initials('nissim ifergan'));
function rot13(str) { // LBH QVQ VG!

  for (let i = 0; i < str.length; i++) {
    if (/\w/.test(str[i])) {
      str = str.slice(0, i) + decodeChar(str[i]) + str.slice(i+1)
    }
  }

  return str;
}

function decodeChar(char) {
  // the unicode of the capital letter N (letter 14 in the alphabet - just over halfway)
  let unicodeN = 78 

  if (char.charCodeAt(0) < unicodeN) 
    return String.fromCharCode(char.charCodeAt(0) + 13);
  else if (char.charCodeAt(0) >= unicodeN) 
    return String.fromCharCode(char.charCodeAt(0) - 13);
}


// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
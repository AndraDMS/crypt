function coinc(txt) {
  return coinc_(onlyChars(txt))
}

function coinc_(txt) {
  var chars = [];
  var charFreq = [];
  for (var i = 0; i < txt.length; i++) {
    if (chars.indexOf(txt[i]) == -1) {
      chars.push(txt[i])
      charFreq[chars.length-1] = 1; 
    } else {
      charFreq[chars.indexOf(txt[i])]++
    }
  }
  var sigmaK = 0;
  for (var i = 0; i < charFreq.length; i++) {
    sigmaK += charFreq[i]*(charFreq[i]-1);
  }
  return sigmaK/(txt.length*(txt.length-1))
  console.log(chars);
  console.log(charFreq);
}
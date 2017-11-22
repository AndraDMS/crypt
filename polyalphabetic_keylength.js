
function onlyLowChars(txt) {
  var newtxt = "";
  for (var i = 0; i < txt.length; i++) {
    if (charCheck(txt[i]) == "l") {
        newtxt = newtxt + txt[i];
    }
  }
  return newtxt
}

function onlyChars(txt) {
  return onlyLowChars(txt.toLowerCase());
}

function charCheck(l) {
  var notLower = false;
  var notUpper = false;
  if (l.toUpperCase() == l) notLower = true;
  if (l.toLowerCase() == l) notUpper = true;
  
  if (notLower && notUpper) return l;
  else if (notUpper) return "l";
  else if (notLower) return "L";
  return notLower + " " + notUpper;
}

function avgArit(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function checkICs(str, maxn, chars) {
  var ICs = [];
  for (var n = 1; n <= maxn; n++) {
    var strs = [];
    for (var i = 0; i < str.length; i++) {
      if (!strs[i%n]) strs[i%n] = ""; 
      strs[i%n] += str[i];
    } 
    var n_ICs = [];
    for (var i = 0; i < strs.length; i++) {
      n_ICs[i] = coinc(strs[i]);
    }
    ICs[n] = chars*avgArit(n_ICs);
  }
  return ICs;
}

function randomise(str) {
  var n = str.length;
  var newstr = "";
  for (var i = 0; i < n; i++) {
    var r = Math.floor(Math.random()*str.length);
    newstr += str[r];
    str = str.substring(0,r) + str.substring(r+1)
  }
  return newstr;
}

function updateTableICs(txt, maxn, charset){
  var ICs = checkICs(txt, maxn, charset);
  var maxIC = max(ICs);
  document.getElementById("keyLengthTable").innerHTML = "";
  for (var i = 1; i <= maxn; i++) {
    var newbar = document.createElement("DIV");
    newbar.setAttribute("class", "graphBar");
    newbar.style.height = (ICs[i]*100/maxIC) + "%";
    newbar.innerHTML = i;
    document.getElementById("keyLengthTable").appendChild(newbar);
  }
  //console.log(ICs);
}

document.getElementById("KLC_SUBST_ciphertext").addEventListener("keyup", function() {
  var txt = document.getElementById("KLC_SUBST_ciphertext").value;
  if (document.getElementById("KLC_SUBST_removeaz").checked) {
      txt = onlyChars(txt);
  }
  updateTableICs(txt,15,26);
}); 

function max(arr){
  var m = 0;
  for (var i = 0; i < arr.length; i++) {
    if (m < arr[i]) m = arr[i];
  }
  return m
}
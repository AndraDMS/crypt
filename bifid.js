function Bifid(square, n) {
  if (Math.sqrt(square.length)%1 != 0) {
    console.log("Invalid square length");
    return
  }
  this.square = square.toUpperCase();
  this.squareSize = Math.sqrt(square.length);
  this.n = n;
  
  this.encrypt = function(str) {
    var nosstr = ""
    for (var i = 0; i < str.length; i++) {
      if (this.square.indexOf(str[i].toUpperCase()) != -1) {
          nosstr = nosstr += this.letterToNo(str[i].toUpperCase())
      }
    }
    nosstr = bifEncrypt(nosstr, this.n);
    var newstr = "";
    for (var i = 0; i < nosstr.length; i+=2) {
      var x = parseInt(nosstr[i+1]);
      var y = parseInt(nosstr[i]);
      newstr = newstr + this.square[x+y*this.squareSize];
    }
    return newstr;
  }
  
  this.decrypt = function(str) {
    var nosstr = ""
    for (var i = 0; i < str.length; i++) {
      if (this.square.indexOf(str[i].toUpperCase()) != -1) {
          nosstr = nosstr += this.letterToNo(str[i].toUpperCase())
      }
    }
    nosstr = bifDecrypt(nosstr, this.n);
    var newstr = "";
    for (var i = 0; i < nosstr.length; i+=2) {
      var x = parseInt(nosstr[i+1]);
      var y = parseInt(nosstr[i]);
      newstr = newstr + this.square[x+y*this.squareSize];
    }
    return newstr;
  }
  
  this.letterToNo = function(l) {
    var no = this.square.indexOf(l);
    var x = no%this.squareSize
    var y = Math.floor(no/this.squareSize);
    return y + "" + x
  }
}

function bifEncrypt(nos, n) {
  var ns = [];
  var newnos = "";
  for (var i = 0; i < Math.ceil(nos.length/n)/2; i++) {
    ns[ns.length] = (nos.substring(i*2*n,(i+1)*2*n))
  }
  for (var i = 0; i < ns.length; i++) {
    var newns_ = ""
    for (var j = 0; j < ns[i].length; j+=2) {
      newns_ = newns_ + ns[i][j]
    }
    for (var j = 1; j < ns[i].length; j+=2) {
      newns_ = newns_ + ns[i][j]
    }
    ns[i] = newns_
  }
  var new_ = "";
  for (var i = 0; i < ns.length; i++) {
    new_ = new_ + ns[i];
  }
  return new_;
}

function bifDecrypt(nos, n) {
  var ns = [];
  var newnos = "";
  for (var i = 0; i < Math.ceil(nos.length/n)/2; i++) {
    ns[ns.length] = (nos.substring(i*2*n,(i+1)*2*n))
  }
  for (var i = 0; i < ns.length; i++) {
    var newns_ = ""
    for (var j = 0; j < ns[i].length/2; j++) {
      secnd = ns[i][j+Math.ceil(ns[i].length/2)]
      newns_ = newns_ + ns[i][j] + (secnd?secnd:"");
    }
    ns[i] = newns_
  }
  var new_ = "";
  for (var i = 0; i < ns.length; i++) {
    new_ = new_ + ns[i];
  }
  return new_;
}

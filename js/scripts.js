var base = function(binaryString) {
  var binaryArray = binaryString.split("").reverse();
  var decimalNum = 0;
  for(var i = 0; i < binaryArray.length; i++) {
    if(binaryArray[i] == "1") {
      decimalNum += Math.pow(2, i);
    }
  }
  return decimalNum;
}

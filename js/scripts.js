
var charLookup = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15, "g": 16}

var baseConverter = function(input, base) {
  input = input.toLowerCase()
  var baseArray = input.split("").reverse();
  var decimalNum = 0;
  for(var i = 0; i < baseArray.length; i++) {
    decimalNum += Math.pow(base, i) * charLookup[baseArray[i]];
  }
  return decimalNum;
}

var hexToBase64 = function(hexString) {
  debugger;
  decimalNum = baseConverter(hexString, 16);
  var i = 0;
  while(Math.pow(64, i) < decimalNum) {
    i++;
  }
  if(i > 0) {
    i--;
  }

  var base64String = "";

  while(i >= 0) {
    debugger;
    integerQuotient = Math.floor(decimalNum / Math.pow(64, i))
    remainder = decimalNum%(Math.pow(64, i));
    base64String = base64String.concat(getBase64Character(integerQuotient));
    decimalNum -= Math.pow(64, i) * integerQuotient;
    i--;
  }

  return base64String;

}

var base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321+/";
var getBase64Character = function(decimalNum) {
  return base64Alphabet.split("")[decimalNum];
}

$(document).ready(function() {

  $("#base-converter").submit(function(event) {
    event.preventDefault();
    var hex = $("input#input-number").val();
    var output = hexToBase64(hex);
    $(".output").text(output);
  });

});

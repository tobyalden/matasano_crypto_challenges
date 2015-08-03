BigNumber.config({ DECIMAL_PLACES: 1e+9 })
BigNumber.config({ POW_PRECISION: 1e+9 })

var hexChars = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15, "g": 16}
var baseConverter = function(input, base) {
  input = input.toLowerCase()
  var baseArray = input.split("").reverse();
  var decimalNum = new BigNumber(0);
  for(var i = 0; i < baseArray.length; i++) {
    var increment = new BigNumber(base);
    increment = increment.toPower(i).times(hexChars[baseArray[i]]);
    decimalNum = decimalNum.plus(increment);
  }
  return decimalNum;
}

var hexToBase64 = function(hexString) {
  var decimalNum = baseConverter(hexString, 16);
  var i = 0;
  var place = new BigNumber(64);
  place = place.toPower(i);
  while(decimalNum.greaterThan(place)) {
    i++;
    place = new BigNumber(64);
    place = place.toPower(i);
  }
  if(i > 0) {
    i--;
  }

  var base64String = "";

  while(i >= 0) {
    place = new BigNumber(64);
    place = place.toPower(i);
    var integerQuotient = decimalNum.dividedToIntegerBy(place);
    base64String = base64String.concat(getBase64Character(integerQuotient.toNumber()));
    var decrement = place.times(integerQuotient);
    decimalNum = decimalNum.minus(decrement);
    i--;
  }

  return base64String;

}

var base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Character = function(decimalNum) {
  return base64Alphabet.split("")[decimalNum];
}


$(document).ready(function() {
  $("#hex-to-base64").submit(function(event) {
    event.preventDefault();
    var hex = $("#hex-to-base64 #input").val();
    var output = hexToBase64(hex);
    $(".output").text(output);
  });

});

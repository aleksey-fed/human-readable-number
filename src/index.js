module.exports = function toReadable (number) {
  const numbers = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve', 
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
  }
    
  const dozens = {
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
  }
    
  const hundreds = {
    100 : 'one hundred',
    200 : 'two hundred',
    300 : 'three hundred',
    400 : 'four hundred',
    500 : 'five hundred',
    600 : 'six hundred',
    700 : 'seven hundred',
    800 : 'eight hundred',
    900 : 'nine hundred',
  }
    
  let result = [];
  let num = Math.floor(number % 100);
  let dozen = Math.floor((number % 100) / 10) * 10;
  let hundred = Math.floor(number / 100) * 100;

  function getNumber(array, num) {
    for (let key in array) {
      if (key == num) {
        result.push(array[key]);
      }
    }
    return result;
  }

  // get hundreds
  getNumber(hundreds, hundred);
  
  // get dozens 
  if (num > 19) {
    getNumber(dozens, dozen);
    num = Math.floor(number % 10);
    getNumber(numbers, num);
  } else {
    if (num <= 9) {
      num = Math.floor(number % 10);
    }
    getNumber(numbers, num);
  }
  // check zero
  if (number == 0) {
      result.push('zero');
  }

  return result.join(' ');
}

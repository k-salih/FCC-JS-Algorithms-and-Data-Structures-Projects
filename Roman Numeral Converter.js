const combinations = {
  1 : "I",
  2 : "II",
  3 : "III",
  4 : "IV",
  5 : "V",
  6 : "VI",
  7 : "VII",
  8 : "VIII",
  9 : "IX",
  10 : "X",
  20 : "XX",
  30 : "XXX",
  40 : "XL",
  50 : "L",
  60 : "LX",
  70 : "LXX",
  80 : "LXXX",
  90 : "XC",
  100 : "C",
  200 : "CC",
  300 : "CCC",
  400 : "CD",
  500 : "D",
  600 : "DC",
  700 : "DCC",
  800 : "DCCC",
  900 : "CM",
  1000 : "M"
}

function convertToRoman(num) {
  let romanNumeral = ""
  if (num >=1000) {
    const thousands = Math.trunc(num / 1000)
    romanNumeral = romanNumeral + combinations[1000].repeat(thousands)
}
  num = num % 1000
  if ( num/100 > 1) {
    const hundreds = Math.trunc(num / 100)
    romanNumeral = romanNumeral + combinations[hundreds*100]
}
  num = num % 100
  if (num / 10 > 1) {
    const tens = Math.trunc(num / 10)
    romanNumeral = romanNumeral + combinations[tens*10]
}
  num = num % 10
  if (num / 1 >= 1) {
    const ones = Math.trunc(num/1)
    romanNumeral = romanNumeral + combinations[ones*1]
}
  return romanNumeral;
 }
 

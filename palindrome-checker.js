/* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(" ", "");
  str = str.replace(/[^0-9a-z]/gi, '');
  let array = str.split("");
  array = array.reverse();
  let check = array.join("");
  
  return (check == str);

/* 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.
*/

function isPalindrome (text) {
  const cleanedText = text.toLowerCase().replace(' ', '').replace(/[^0-9a-z]/gi, '')
  const reversedText = cleanedText.split('').reverse().join('')
  
  return cleanedText == reversedText
}

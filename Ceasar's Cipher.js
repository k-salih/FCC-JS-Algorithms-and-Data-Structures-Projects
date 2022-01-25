/* 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase.
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */



function rot13(encoded) {
  const alphabet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alphabet2 = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  const letters1 = alphabet1.split("")
  const letters2 = alphabet2.split("")
  let decoded = ""

  for (let i = 0; i < encoded.length; i++) {
    let index = letters1.indexOf(encoded[i])
    if (index == -1) {
      decoded =  decoded + encoded[i]
    } else {
      decoded = decoded + letters2[index]
    }
  }
  return decoded
}
console.log(rot13("SERR PBQR PNZC"));

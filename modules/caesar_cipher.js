function encrypt(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let characterCode = text.charCodeAt(i);
    if (characterCode >= 65 && characterCode <= 90) {
      result += String.fromCharCode(((characterCode - 65 + shift) % 26) + 65);
    } else if (characterCode >= 97 && characterCode  <= 122) {
      result += String.fromCharCode(((characterCode - 97 + shift) % 26) + 97);
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

function decriptionShift(shift) {
  return (26 - shift) % 26;
}

module.exports = { encrypt, decriptionShift };
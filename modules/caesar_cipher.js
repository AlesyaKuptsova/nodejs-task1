function encrypt(text, shift) {
  shift = normalizeShift(shift);
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

function normalizeShift(shift) {
  if(shift >= 26) {
    shift = shift % 26;
  }else if(shift <= -1) {
    shift = (26 + shift % 26);
  }
  return shift;
}

module.exports = { encrypt, decriptionShift, normalizeShift };
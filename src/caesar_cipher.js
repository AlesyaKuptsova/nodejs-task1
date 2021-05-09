const cipherMod = 26;
const firstLowerLetterCharCode = "a".charCodeAt(0);
const lastLowerLetterCharCode = firstLowerLetterCharCode + (cipherMod - 1);
const firstUpperLetterCharCode = "A".charCodeAt(0);
const lastUpperLetterCharCode = firstUpperLetterCharCode + (cipherMod - 1);

function shiftCharacter(charCode, shift, firstLetterCharCode) {
  return (
    ((charCode - firstLetterCharCode + shift) % cipherMod) + firstLetterCharCode
  );
}

function encrypt(text, shift) {
  shift = normalizeShift(shift);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let characterCode = text.charCodeAt(i);
    if (
      characterCode >= firstUpperLetterCharCode &&
      characterCode <= lastUpperLetterCharCode
    ) {
      result += String.fromCharCode(
        shiftCharacter(characterCode, shift, firstUpperLetterCharCode)
      );
    } else if (
      characterCode >= firstLowerLetterCharCode &&
      characterCode <= lastLowerLetterCharCode
    ) {
      result += String.fromCharCode(
        shiftCharacter(characterCode, shift, firstLowerLetterCharCode)
      );
    } else {
      result += text.charAt(i);
    }
  }
  return result;
}

function decriptionShift(shift) {
  return (cipherMod - shift) % cipherMod;
}

function normalizeShift(shift) {
  if (shift >= cipherMod) {
    shift = shift % cipherMod;
  } else if (shift <= -1) {
    shift = cipherMod + (shift % cipherMod);
  }
  return shift;
}

module.exports = { encrypt, decriptionShift, normalizeShift };

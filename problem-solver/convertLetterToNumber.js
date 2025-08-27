// Problem: Convert letter to number (Excel column number)
function convertLetterToNumber(str) {
  str = str.toUpperCase();
  let out = 0, len = str.length;
  for (let pos = 0; pos < len; pos++) {
    const math = Math.pow(26, len - pos - 1);
    const charCode = str.charCodeAt(pos) - 64;
    out += charCode * math;
  }
  return out;
}

module.exports = { convertLetterToNumber };
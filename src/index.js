module.exports = function reverse (n) {
  let str = String(n);
  str = (str[0] === '-') ? str.slice(1) : str;
  return str.split("").reverse().join("");
}

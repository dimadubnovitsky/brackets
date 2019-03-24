module.exports = function check(str, bracketsConfig) {
  // your solution
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let inLine = bracketsConfig[j].join("");
      str = str.replace(inLine, "");
    }
  }

  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}
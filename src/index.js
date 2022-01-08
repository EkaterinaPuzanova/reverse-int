module.exports = function reverse (n) {
    const str = String(Math.abs(n));
    let result = '';
    let i = str.length - 1;
    while (i >= 0) {
        result = `${result}${str[i]}`;
        i -= 1;
    }
    return Number(result);
  }
  
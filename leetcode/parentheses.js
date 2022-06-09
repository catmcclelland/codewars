let result = [];
let finalAnswer = new Set();

var generateParenthesis = function (n) {
  if (finalAnswer.size === 2 * n - 1) {
    return Array.from(finalAnswer);
  }
  const parens = { 1: "(", 2: ")" };

  let pos = 0; //left
  let neg = 0; //right

  while (neg < n) {
    let temp = Math.floor(Math.random() * 2);

    if (temp === 0 && pos < n) {
      result.push(parens[1]);
      pos++;
    } else if (temp === 1 && neg < pos) {
      result.push(parens[2]);
      neg++;
    }
  }
  const str = result.join("");
  if (finalAnswer.has(str)) {
    result = [];
  } else {
    finalAnswer.add(str);
  }

  result = [];

  if (finalAnswer.size < 2 * n - 1) {
    generateParenthesis(n);
  }
  return Array.from(finalAnswer);
};

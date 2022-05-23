function pigIt(str) {
  const words = str.split(" ");
  let piglatin = [];
  const regex = /[A-Za-z]/;
  for (let word of words) {
    const wordArr = word.split("");
    if (wordArr[0].search(regex) !== -1) {
      const first = wordArr.splice(0, 1);
      const str = wordArr.concat(first).concat("ay");

      piglatin.push(str.join(""));
    } else {
      piglatin.push(wordArr.join(""));
    }
  }

  return piglatin.join(" ");
}

function solution(input, markers) {
  const arr = input.split("");
  const newArr = [];
  for (marker of markers) {
    const markerIndex = arr.findIndex((element) => element === marker);
    const lineEndIndex = arr.findIndex((element) => element.startsWith("\n"));
    newArr.push(arr.slice(0, markerIndex));
    arr.splice(0, lineEndIndex);
  }
  let joinedArr = [];
  for (let i = 0; i < newArr.length; i++) {
    joinedArr.push(newArr[i].join("").replace(/\s?$/, ""));
  }

  return joinedArr.join("").trim();
}

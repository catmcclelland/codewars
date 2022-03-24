function isIsogram(str) {
  let low = str.toLowerCase();
  let arr = low.split("");
  console.log(arr);
  for (let i = 0; i <= arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return false;
    }
  }
  return true;
}

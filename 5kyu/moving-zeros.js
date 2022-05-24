function moveZeros(arr) {
  const arr2 = arr.filter((el) => el === 0);
  const arr1 = arr.filter((el) => el !== 0);

  return arr1.concat(arr2);
}

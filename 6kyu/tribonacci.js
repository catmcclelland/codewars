function tribonacci(signature, n) {
  const arr = [...signature];
  ///arr = [1,1,1,3]

  if (n == 0) {
    return [];
  } else if (n < signature.length) {
    return signature.slice(0, n);
  } else {
    for (let i = 0; i < n - 3; i++) {
      const length = arr.length;
      arr.push(arr[length - 1] + arr[length - 2] + arr[length - 3]);
    }
    return arr;
  }
}

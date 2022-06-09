function solution(number) {
  const arr = [];

  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }
  if (arr.length == 0) {
    return 0;
  }
  return arr.reduce((a, b) => a + b);
}

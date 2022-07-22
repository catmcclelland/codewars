const leftCount = (root, count = 0, stop = false) => {
  while (root !== null) {
    if (root.left === null && root.right) {
      return leftCount(root.right, count);
    } else {
      count++;
      return leftCount(root.left, count);
    }
  }
  console.log("leftcount", count);
  return count;
};
const rightCount = (root, count = 0) => {
  while (root !== null) {
    if (root.right === null && root.left) {
      return rightCount(root.left, count);
    } else {
      count++;
      return rightCount(root.right, count);
    }
  }
  console.log("rightcount", count);
  return count;
};

if (Math.abs(rightCount(root) - leftCount(root)) <= 1) {
  return true;
} else {
  return false;
}

var maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      console.log([prices[right], prices[left]]);
      let diff = prices[right] - prices[left];
      if (diff > max) {
        max = diff;
      }
      right++;
      continue;
    }

    left = right;
    right++;
  }
  return max;
};

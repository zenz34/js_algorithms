/*
输入一组整数，求出这组数字子序列和中的最大值，只要求出最大子序列的和，不必求出最大值对应的序列。

最大子序列和：整数序列A1， A2，... An （可能有负数），求A1~An的一个子序列Ai~Aj，使得Ai到Aj的和最大。

例如：

序列：-2, 11, -4, 13, -5, 2, -5, -3, 12, -9，则最大子序列和为21。

序列：0, -3, 6, 8, -20, 21, 8, -9, 10, -1, 3, 6, 5，则最大子序列和为43。
*/

function longestSubArrayMaxVal(nums) {
  //  sliding window
  /*
    if cur >= preSum,
        start from cur
        max = cur
    else
        continue from prev.
        max += cur

    
*/
  if (nums.length === 0) {
    return 0;
  }

  let prevSum = Number.NEGATIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (let cur of nums) {
    if (prevSum < 0) {
      //    -1 -2  0 -1
      prevSum = cur;
      max = Math.max(cur, max);
    } else {
      prevSum += cur;
      max = Math.max(prevSum, max);
    }
  }
  return max;
}

let testcase = [
  [-2, 11, -4, 13, -5, 2, -5, -3, 12, -9],
  [0, -3, 6, 8, -20, 21, 8, -9, 10, -1, 3, 6, 5],
  [-1],
  [-1, -2, 2, -1, 3],
  []
];

for (let index in testcase) {
  //console.log(index);
  console.log(longestSubArrayMaxVal(testcase[index]));
}

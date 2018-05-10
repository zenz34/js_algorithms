/*
Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

    Example:

Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    Output: [startIndex, endIndex]
Explanation: [4, -1, 2, 1] has the largest sum = 6. return [3, 6]
Follow up:

return [4, -1, 2, 1]

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

*/

function maxSumSubArray(nums) {
    if (nums === undefined || nums === null || nums.length === 0) {
        throw "wrong input";
        return NaN;
    }

    let max = nums[0];
    let dp = [];
    dp[0] = nums[0];
    // for ***global*** max sum
    let global_start = 0;
    let global_end = 0;
    //  for max sum sub array including ***current*** position
    let start = 0;
    let end = 0;
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] <= 0) {
            start = i;
            dp[i] = nums[i];
        } else {
            dp[i] = nums[i] + dp[i - 1];
        }

        end = i;

        if (dp[i] > max) {
            global_start = start;
            global_end = end;
            max = dp[i];
        }
    }

    return [global_start, global_end];
}

function maxSumSubArrayDP2(nums) {
    if (nums === undefined || nums === null || nums.length === 0) {
        throw "wrong input";
        return NaN;
    }

    let max = nums[0];
    let curSum;
    let preSum = nums[0];
    // for global
    let global_start = 0;
    let global_end = 0;
    //  for current position
    let start = 0;

    for (let i = 1; i < nums.length; i++) {
        if (preSum <= 0) {
            start = i;
            curSum = nums[i];
        } else {
            curSum = nums[i] + preSum;
        }

        if (curSum > max) {
            global_start = start;
            global_end = i;
            max = curSum;
        }

        preSum = curSum;
    }

    return [global_start, global_end];
}

let arr1 = [1, -2, 3, -1, 1, 4, -2];
console.log(maxSumSubArrayDP2(arr1));

let arr2 = [-1, -2, -3];
console.log(maxSumSubArrayDP2(arr2));

let arr3 = [-1];
console.log(maxSumSubArrayDP2(arr3));

//let arr4 = [];
//console.log(maxSumSubArray(arr4));

let arr5 = [-1, 2, 3, -5, -6, 4];
console.log(maxSumSubArrayDP2(arr5));

/*
总结，在做这道题的时候，当我考虑到global_left，global_right 加上left和right四个变量怎么更新的时候，
头脑就混乱了，不知道怎么得到global的两个数值。
think simple，先 去找 Solution space
其实global的两个变量，不就是在一堆解空间中，最大的那个max值对应的left和right么？
所以，我只需要搞清楚解空间，先把left和right什么时候更新考虑清楚，保证这两个是对的
再挑出其中max最大值对应的那一对left和right就好。

这里的解空间解释下

left和right是local的
对应的是包含当前元素的，sum最大subarray 的起始索引和终止索引
the start index and end index of the max sum sub array which contains the current element
Actually, here, we optimized a little bit.
At first, we can have a list or array to store every start and end index pair along with max value for every elements.
The list or array is actually the solution space.
Then we go through the list to find the max value and return its corresponding start and end indexes.

*/

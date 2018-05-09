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
        throw ("wrong input");
        return NaN;
    }

    let max = Number.NEGATIVE_INFINITY;
    let dp = [];
    dp[0] = {
        "max": nums[0],
        "startIndex": 0,
        "endIndex": 0
    }

    for (let i = 1; i < nums.length; i ++) {
        if (dp[i - 1].max <= 0) {
            dp[i].max = nums[i];
            dp[i].startIndex = i;
            dp[i].endIndex = i;
        } else {
            if (nums[i] <= 0) {
                
            }
        }
    }

    return ;
}

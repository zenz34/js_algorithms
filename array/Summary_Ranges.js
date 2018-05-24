/** 228 Summary`
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let retArr = [];

    for (let i = 0, j = 0; j < nums.length; j++) {
        i = j;
        //  find the range
        while (j < nums.length - 1 && nums[j] + 1 === nums[j + 1]) {
            j++;
        }

        //  push it into the retArr
        if (i === j) {
            retArr.push(nums[i].toString());
        } else {
            retArr.push(nums[i] + "->" + nums[j]);
        }
    }

    return retArr;
};

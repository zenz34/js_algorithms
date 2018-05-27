/** 485
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCNum = 0;
    let curCNum = 0;
    nums.forEach((val, idx, arr) => {
        if (val === 1) {
            curCNum += 1;
        } else {
            maxCNum = Math.max(curCNum, maxCNum);
            curCNum = 0;
        }

        if (idx === arr.length - 1) {
            maxCNum = Math.max(curCNum, maxCNum);
        }
    });

    return maxCNum;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));

console.log(findMaxConsecutiveOnes([]));
console.log(findMaxConsecutiveOnes([0]));
console.log(findMaxConsecutiveOnes([1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1]));

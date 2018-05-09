function closestNum(nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    let low = 0;
    let high = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor((end + start) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid;
        } else {
            high = mid;
        }
    }

    if (Math.abs(target - A[start]) < Math.abs(target - A[end])) {
        return start;
    } else {
        return end;
    }
}

// class Solution {
// public:
//     /**
//      * @param A an integer array sorted in ascending order
//      * @param target an integer
//      * @return an integer
//      */
//     int closestNumber(vector<int>& A, int target) {
//         // Write your code here
//         if (A.size() == 0) {
//              return -1;
//         }

//         int start = 0;
//         int end = A.size() - 1;

//         while (start + 1 < end) {
//             int mid = start + (end - start) / 2;
//             if (A[mid] == target) {
//                 return mid;
//             } else if (A[mid] < target) {
//                 start = mid;
//             } else {
//                 end = mid;
//             }
//         }

//         if (target <= A[start]) {
//             return start;
//         } else if (A[end] <= target) {
//             return end;
//         } else {

//             if (target - A[start] > A[end] - target) {
//                 return end;
//             } else {
//                 return start;
//             }

//         }
//     }
// };

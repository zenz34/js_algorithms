//  let arr2 = [17, 19, 8, 4, 16]; quickSort(arr2, 0, 4)
//  why nlogn on average?  on average, pivot value is the median  of the array
//  what is the worst case?  the pivot happens to be the largest or the smallest
//  why it is O(n^2) in the worst case? process n - 1 times, and every time process n - 1 elements
//  how to prevent the worst case happen?  many ways, 3 / 4 (log 4/3 N  ) or median of first, middle and last index
function quickSort(arr, left, right) {
    let len = arr.length;
    let pivot = 0;
    let partitionIndex = 0;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, pivot, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// test case
// let arr1 = [1, 2, 3, 4, 6, 8, 9, 11, 0, -1];

// let arr2 = [17, 19, 8, 4, 16];

// console.log(quickSort(arr2, 0, 4));

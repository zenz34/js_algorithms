/*
832. Flipping an Image

*/
// using forEach
var flipAndInvertImage = function(A) {
    A.forEach(row => {
        row.reverse().forEach((val, i, arr) => {
            arr[i] = val === 0 ? 1 : 0;
        });
    });

    return A;
};

// not using forEach
function rowFlipAndInvert(arr) {
    for (let start = 0, end = arr.length - 1; start <= end; start++, end--) {
        let tmp = arr[start];
        arr[start] = arr[end] === 0 ? 1 : 0;
        arr[end] = tmp === 0 ? 1 : 0;
    }
}

var flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
        rowFlipAndInvert(A[i]);
    }
    return A;
};

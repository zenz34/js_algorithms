// O(2^(n^2)) O(n^2)
// function numOfPathsToDest(n) {
//     // your code goes here
//     let resArr = [];
//     let tmpArr = [];

//     function backtrackHelper(n, i, j, resArr, tmpArr) {
//         // base case  && constrains
//         if (i === n - 1 && j === n - 1) {
//             resArr.push(new Array(tmpArr));
//             return;
//         }

//         if (i < j || i < 0 || i >= n || j < 0 || j >= n) {
//             return;
//         }

//         // process   up , right
//         tmpArr.push({ i, j });
//         backtrackHelper(n, i, j + 1, resArr, tmpArr);

//         backtrackHelper(n, i + 1, j, resArr, tmpArr);
//         tmpArr.pop();
//         // return
//         return;
//     }

//     backtrackHelper(n, 0, 0, resArr, tmpArr);

//     return resArr.length;
// }

O(n^2) O(1)
function numOfPathsToDest(n) {
    // your code goes here
    let resNum = 0;
    function backtrackHelper(n, i, j) {
        // base case  && constrains
        if (i === n && j === n) {
            resNum++;
        }

        if (i < j || i < 0 || i > n || j < 0 || j > n) {
            return;
        }

        // process   up , right
        backtrackHelper(n, i, j + 1);

        backtrackHelper(n, i + 1, j);
        // return
        return;
    }

    backtrackHelper(n - 1, 0, 0);

    return resNum;
}
3606ms

//  recursion with memorization 497ms
//  O(n^2)  O(n^2)

/*
function numOfPathsToDest(n) {
    // your code goes here
    let rightPaths = [];
    for (let i = 0; i < n; i++) {
        rightPaths.push(new Array(n).fill(-1));
    }

    return backtrackHelper(n - 1, 0, 0, rightPaths);
}
function backtrackHelper(n, i, j, rightPaths) {
    // constrains
    if (i < j || i < 0 || i > n || j < 0 || j > n) {
        return 0;
    }

    // visited before
    if (rightPaths[i][j] != -1) {
        return rightPaths[i][j];
    }

    // base case
    if (i === n && j === n) {
        return 1;
    }

    // process   up , right
    if (rightPaths[i][j] === -1) {
        rightPaths[i][j] =
            backtrackHelper(n, i, j + 1, rightPaths) +
            backtrackHelper(n, i + 1, j, rightPaths);
    }

    return rightPaths[i][j];
}

*/

// dynamic method iterative  481ms
/*
function numOfPathsToDest(n) {
    let helpArr = [];

    for (let i = 0; i < n; i++) {
        helpArr.push(new Array(n).fill(0));
    }

    for (let i = 0; i < n; i++) {
        helpArr[0][i] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i < j) {
                helpArr[i][j] = 0;
            }
            helpArr[i][j] = helpArr[i - 1][j] + helpArr[i][j - 1];
        }
    }

    return helpArr[n - 1][n - 1];
}
*/

// optimal dp solution with 417ms T O(n ^ 2) S O(n)
function numOfPathsToDest(n) {
    let preRow = new Array(n).fill(1);
    let curRow = preRow;

    for (let i = 1; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (i == j) {
                curRow[j] = preRow[j];
            } else {
                curRow[j] = preRow[j] + preRow[j - 1];
            }
        }
    }

    return curRow[n - 1];
}

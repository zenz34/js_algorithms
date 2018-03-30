function spiralCopy(inputMatrix) {
    // your code goes here
    // My name is Zack
    // tell my solution
    // use 4 pointer / index
    // a lot of noise

    let left = 0;
    let right = inputMatrix[0].length - 1;
    let topY = 0;
    let bottomY = inputMatrix.length - 1;

    let res1DArr = [];

    //  topY > bottomY should stop
    //  what about topY === bottomY
    //  [[1], [2]]
    //  topY = 0 b = 1 left = 0 right = 0
    while (topY < bottomY) {
        // first lefttop to right top    [1]
        for (let i = left; i < right; i++) {
            res1DArr.push(inputMatrix[topY][i]);
        }

        // second righttop to right bottom
        // topY = 0 b = 1 left = 0 right = 0
        for (let j = topY; j < bottomY; j++) {
            res1DArr.push(inputMatrix[j][right]);
        }

        // third run  rightbottom to left bottom
        for (let i = right; i > left; i--) {
            res1DArr.push(inputMatrix[bottomY][i]);
        }

        // fourth run left bottom to left top
        for (let i = bottomY; i > topY; i--) {
            res1DArr.push(inputMatrix[i][left]);
        }

        // move the left
        left++;
        right--;
        // move topY
        topY++;
        bottomY--;
    }

    // for the odd length
    if (topY === bottomY) {
        for (let i = left; i <= right; i++) {
            res1DArr.push(inputMatrix[topY][i]);
        }
    }

    return res1DArr;
}

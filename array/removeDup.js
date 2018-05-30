/*
    Remove duplicate ones inside an unsorted array without using Set or
*/

function removeDup(arr) {
    let obj = {};
    // using obj.perperty to remove duplicates
    for (let val of arr) {
        if (obj[val]) {
            //  !! can not use obj.val cause .val is not a virable
            continue;
        }
        // just assign it with any value
        obj[val] = 0; //  !! can not use obj.val cause .val is not a virable
    }

    let resArr = [];
    for (let val of Object.keys(obj)) {
        resArr.push(val);
    }

    return resArr;
}

console.log(removeDup([3, 3, 3, 3, 3, 3, 1]));

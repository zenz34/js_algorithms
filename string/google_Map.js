/*
Given an array and a function

*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function pow2(n) {
    return Math.pow(n, 2);
}

function createMap(arr, callback) {
    let map = new Map();

    for (let item of arr) {
        let val = callback(item);
        map.set(item, val);
    }
    return map;
}

const map = createMap(arr, pow2);
map.forEach((val, index) => {
    console.log("entry: ");
    console.log("key: " + index);
    console.log("val: " + val);
});

const entry = map.entries();

while (1) {
    console.log(entry.next());
}

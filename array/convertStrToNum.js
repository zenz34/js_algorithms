/*
    Given: a = 1 b = 2 c = 3 d = 4 e = 5 f = 6 ...z = 26

abc -> 1 + 2 + 3 = 6
bdc -> 2 + 4 + 3 = 9
fc -> 6 + 3 = 9

Input: "abc cde adb dfb def ee abcd cc"

output: {
    "6": ["abc", "cc"],
    "12": ["cde", "dfb"],
    "7": ["adb"],
    "15": ["def"],
    "10": ["ee", "abcd"]
}

*/

function strToNum(str) {
    let arr = str.split(" ");
    let obj = {};

    arr.forEach(str => {
        let num = 0;
        for (let ch of str) {
            num += ch.charCodeAt(0) - "a".charCodeAt(0) + 1;
        }

        if (!obj[num]) {
            obj[num] = [];
        }
        obj[num].push(str);
    });

    return obj;
}

let obj = strToNum("abc cde adb dfb def ee abcd cc");

console.log(obj);

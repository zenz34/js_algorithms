function isPangram(strings) {
    const alphbetSet = new Set();
    const alpArr = "abcdefghijklmnopqrstuvwxyz".split("");

    console.log("alpArr");
    console.log(alpArr);
    let resArr = new Array(strings.length);

    for (let i = 0; i < 26; i++) {
        alphbetSet.add(alpArr[i]);
    }
    // don't know how to add a alp using a loop  a-z  A-Z
    console.log("alphbetSet");
    console.log(alphbetSet);

    for (let j = 0; j < strings.length; j++) {
        let counterSet = new Set(alphbetSet);

        for (let letter of strings[j]) {
            if (counterSet.has(letter)) {
                counterSet.delete(letter);
            }
        }
        console.log("counterSet");

        console.log(counterSet);

        if (counterSet.size === 0) {
            //  wrong if use Set.length

            resArr[j] = "1";
        } else {
            resArr[j] = "0";
        }
    }

    return resArr;
}

console.log(isPangram(["abcdefghijklmnopqrstuvwxyz"]));

/*
 * Complete the function below.
 */
function isPangram(strings) {
    const alphbetSet = new Set();
    const alpArr = "abcdefghijklmnopqrstuvwxyz".split("");

    let resStr = "";

    for (let i = 0; i < 26; i++) {
        alphbetSet.add(alpArr[i]);
    }

    for (let j = 0; j < strings.length; j++) {
        let counterSet = new Set(alphbetSet);

        for (let letter of strings[j]) {
            if (counterSet.has(letter)) {
                counterSet.delete(letter);
            }
        }

        if (counterSet.size === 0) {
            resStr += "1";
        } else {
            resStr += "0";
        }
    }

    return resStr;
}

var txt =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc";

var txt2 = "p g k l a a, a. s, x. b c d e f b h";

function nthMostCommon(string, amount) {
    let wordsArr = string.split(/,?\.?\s+/gm);
    let res = new Array();
    let wordCounter = {};
    for (let i = 0; i < wordsArr.length; i++) {
        wordCounter[wordsArr[i]] = (wordCounter[wordsArr[i]] || 0) + 1;
    }

    res = Object.keys(wordCounter).reduce((acc, val, index, arr) => {
        // console.log(typeof acc);
        // console.log(Array.isArray(acc));
        // console.log(val);
        // console.log(index);
        // console.log(arr);
        acc.push({ word: val, occurences: wordCounter[val] });
        return acc;
    }, []);

    //  initialValue
    res.sort((a, b) => b.occurences - a.occurences);

    let result = new Array();
    for (let obj of res) {
        result.push(obj.word);

        if (result.length === amount) {
            break;
        }
    }

    return result;
}

//console.log(nthMostCommon(txt, 5));
/*
T: O(nlog(n))
S: O(n)
*/

var txt =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc";

function nthMostCommonFinal(string, ammount) {
    var wordsArray = string.split(/,?\.?\s+/gm);
    var wordOccurrences = {};
    for (var i = 0; i < wordsArray.length; i++) {
        wordOccurrences["_" + wordsArray[i]] =
            (wordOccurrences["_" + wordsArray[i]] || 0) + 1;
    }
    var result = Object.keys(wordOccurrences).reduce(function(acc, currentKey) {
        /* you may want to include a binary search here */
        for (var i = 0; i < ammount; i++) {
            if (!acc[i]) {
                acc[i] = {
                    word: currentKey.slice(1, currentKey.length),
                    occurences: wordOccurrences[currentKey]
                };
                break;
            } else if (acc[i].occurences < wordOccurrences[currentKey]) {
                acc.splice(i, 0, {
                    word: currentKey.slice(1, currentKey.length),
                    occurences: wordOccurrences[currentKey]
                });
                if (acc.length > ammount) acc.pop();
                break;
            }
        }
        return acc;
    }, []);
    return result.splice(0, ammount).map((obj, index) => obj.word);
}

/*
T: O(nk)
S: O(n)
*/
console.log(nthMostCommonFinal(txt, 5));

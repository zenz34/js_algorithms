var longestPalindrome = function(s) {
    let maxLen = 0;
    let dp = new Array(s.length);
    // dp.forEach((val, idx) => {
    //     console.log("come here!");
    //     dp[idx] = new Array(s.length);
    // });

    for (let i = 0; i < s.length; i++) {
        dp[i] = [];
    }

    for (let len = 1; len <= s.length; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            if (len === 1) {
                dp[i][i + len - 1] = true;
            } else if (len === 2) {
                dp[i][i + len - 1] = s.charAt(i) === s.charAt(i + 1);
            } else {
                dp[i][i + len - 1] =
                    dp[i + 1][i + len - 2] &&
                    s.charAt(i) === s.charAt(i + len - 1);
            }

            if (dp[i][i + len - 1] === true) {
                maxLen = Math.max(maxLen, len);
            }
        }
    }

    return maxLen;
};

console.log(longestPalindrome("abcdeabcdf"));

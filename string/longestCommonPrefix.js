/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var i, pre;
    if (strs.length == 0) {
        pre = "";
    } else if (strs.length == 1) {
        pre = strs[0];
    } else {
        pre = strs[0];
        for (i = 0; i < strs.length; i++) {
            while (strs[i].indexOf(pre) != 0) {
                pre = pre.substring(0, pre.length - 1);
            }
        }
    }
    return pre;
};

console.log(longestCommonPrefix(["cccc", ""]));

/** 66
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (i === digits.length - 1) {
            digits[i] += 1;
        } else {
            digits[i] += carry;
        }

        if (digits[i] === 10) {
            carry = 1;
            digits[i] = 0;
        } else {
            carry = 0;
            break;
        }
    }

    carry === 1 ? digits.unshift(carry) : digits;
    return digits;
};

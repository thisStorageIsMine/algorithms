// https://leetcode.com/problems/generate-parentheses/


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const subsets = []
    let string = '';
    let open = n,
        close = n;

    doIt(subsets, string, open, close);

    return subsets
};

function doIt(subsets, string, open, close) {
    if (open === 0 && close === 0) {
        subsets.push(string);
        return;
    }

    if (open > 0) {
        string += '(';
        doIt(subsets, string, open - 1, close)
        string = string.substring(0, string.length - 1);
    }

    if (open < close) {
        string += ')';
        doIt(subsets, string, open, close - 1);
        string = string.substring(0, string.length - 1);
    }
}
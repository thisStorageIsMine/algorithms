// https://leetcode.com/problems/evaluate-reverse-polish-notation/

// O(n) - по памяти и времени


function myEval(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b
    } else if (operation === '/') {
        return Math.trunc(a / b)
    } else if (operation === '*') {
        return a * b
    } else {
        throw new Error('Чё ты передаёшь?')
    }
}


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [tokens.shift()];

    while (tokens.length) {
        console.log(stack)
        const curChar = tokens.shift();

        if (/\d/.test(curChar)) {
            stack.push(curChar);
            continue;
        }

        const lastItem = Number(stack.pop());
        const prevLastItem = Number(stack.pop());

        stack.push(myEval(prevLastItem, lastItem, curChar))
    }

    return stack[0]
};



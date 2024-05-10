// https://leetcode.com/problems/daily-temperatures/description/

// Сложность по времени и памяти - O(n)

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    const result = new Array(temperatures.length).fill(0)
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i];
        const tInfo = { index: i, value: t }

<<<<<<< HEAD
=======
        if (stack.length === 0) {
            stack.push(tInfo);
            continue;
        }

>>>>>>> 87834399c0124adcae7e72cf49665c8b22da9fd2
        while (stack.length && stack[stack.length - 1].value < t) {
            const prevItem = stack.pop();

            result[prevItem.index] = i - prevItem.index
        }

        stack.push(tInfo)
    }
    return result
};

const arr = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(arr))
// https://leetcode.com/problems/next-greater-element-i/

// Сложность - O(n + m); Где n - длина nums1 и m - длина nums2

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const answer = [];
    const map = {}

    const stack = [];

    for (let i of nums2) {
        if (stack.length === 0) {
            stack.push(i);
            continue;
        }

        while (stack.length && i > stack[stack.length - 1]) {
            const prev = stack.pop();
            map[prev] = i;
        }

        stack.push(i);
    }

    for (let i of nums1) {
        let nextGreaterNumber = map[i] || -1;


        answer.push(nextGreaterNumber);
    }

    return answer
};

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

console.log(nextGreaterElement(nums1, nums2));
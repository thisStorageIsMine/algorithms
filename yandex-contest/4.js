//Вход: nums = [10, 15, 3, 7], k = 17
module.exports = function isThereAPairOfNumbers(arr, k) {
    const obj = new Map()
    for (const i of arr) {
        const deff = k - i
        if (obj.has(`${deff}`)) {
            return true
        }

        obj.set(`${i}`, true);
    }
    return false;
};


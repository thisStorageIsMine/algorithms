// Написать функцию, которая из произвольного массива
// Найдёт все комбинации, сумма которых равна N
function subsetsSum(arr, n) {
    const subsets = [];

    const queue = [{ index: 0, subset: [], sum: 0 }];


    while (queue.length > 0) {
        const { index, subset, sum } = queue.shift();

        if (index > arr.length || sum > n) {
            continue;
        }

        if (sum === n) {
            subsets.push(subset)
            continue;
        };
        if (subset.toString() === [].toString()) {
            queue.push({ index: index + 1, subset: [], sum: 0 });
        }

        subset.push(arr[index]);
        queue.push({ index: index + 1, subset: [...subset], sum: sum + arr[index] });



    }

    return subsets;
}

const arr = [1, 2, 4, 3, 5];
console.log(subsetsSum(arr, 3));
function nextGreaterElement(arr) {
    const stack = [];

    for (let i of arr) {
        if (stack.length === 0) {
            stack.push(i);
            continue;
        }

        while (stack.length && stack[stack.length - 1] < i) {
            console.log(`${stack[stack.length - 1]} --> ${i}`);
            stack.pop()
        }

        stack.push(i);
    }

    for (let i of stack) {
        console.log(`${i} --> -1`);
    }
}

const arr = [1, 3, 4, 2];
nextGreaterElement(arr);
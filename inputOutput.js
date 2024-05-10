const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', (line) => {
    const number = (line === '') ? 0 : Number(line);

    inputs.push(number);

    if (inputs.length === 2) rl.close();
});

rl.on('close', () => {
    console.log(inputs.reduce((sum, i) => sum += i, 0))
})


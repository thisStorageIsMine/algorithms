const fs = require('node:fs');

try {
    const data = fs.readFileSync('input.txt', 'utf-8');

    const result = data.split(' ').reduce((sum, i) => sum += Number(i), 0)

    fs.writeFileSync('output.txt', String(result))
} catch (err) {
    console.log(err)
}

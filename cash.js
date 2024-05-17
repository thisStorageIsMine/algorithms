function cashFunction(fn) {
    const cash = {}

    return function (n) {
        if (cash[n]) {
            console.log('Взято из кэша')
            return cash[n]
        }

        console.log("Взято из функции");
        let res = fn(n)
        cash[n] = res
        return res
    }
}

function factorial(n) {
    let fact = n
    while (n != 1) {
        fact *= --n
    }

    return fact
}

const cash = cashFunction(factorial)

console.log(cash(5))
console.log(cash(5))
console.log(cash(4))
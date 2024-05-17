const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
]

function getSum(tree) {
    const q = [...tree];
    let sum = 0

    while (q.length) {
        const cur = q.shift()
        sum += cur.v

        if (cur.c) {
            q.push(...cur.c)
        }
    }

    return sum
}

console.log(getSum(tree))
console.log(getSum([]))
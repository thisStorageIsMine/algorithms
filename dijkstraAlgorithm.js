const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}

function shortPath(graph, start, end) {
    const costs = {},
        processed = []
    let neighbors = {} // Соседние вершины рассматриваемого узла

    Object.keys(graph).forEach(node => {
        if (node === start) return;

        const value = graph[start][node];
        costs[node] = value || Number.POSITIVE_INFINITY;
    })

    let node = findLowestCostNode(costs, processed);

    while (node) {
        const cost = costs[node];
        neighbors = graph[node]

        Object.keys(neighbors).forEach(neighbor => {
            const newCost = cost + neighbors[neighbor]

            costs[neighbor] = newCost < costs[neighbor] ? newCost : costs[neighbor];
        })

        processed.push(node);
        node = findLowestCostNode(costs, processed);
    }

    return costs[end]
}


function findLowestCostNode(costs, processed) {
    // let lowestCost = Number.POSITIVE_INFINITY,
    //     lowestNode;


    // Object.keys(costs).forEach(node => {
    //     const cost = costs[node]
    //     if (cost < lowestCost && !processed.includes(node)) {
    //         lowestNode = node;
    //         lowestCost = cost
    //     }
    // })

    // return lowestNode;

    // Превратим это в нечто более ужасное

    const lowestCost = Object.keys(costs).reduce((acum, key) => {
        if (costs[key] > acum.cost || processed.includes(key)) return acum;

        return { cost: costs[key], node: key }
    }, { cost: Number.POSITIVE_INFINITY, node: null })

    return lowestCost.node
}

console.log(shortPath(graph, "a", 'g'))




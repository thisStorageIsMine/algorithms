// Поиск в ширину в графе

const graph = {}
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthSearch(graph, start, end) {
    const queue = [start];
    let i = 1

    while (queue.length) {
        console.log('--------------------');
        console.log(`${i++}`);
        const current = queue.shift();
        console.log(current)

        if (!graph.current) {
            graph.current = [];
        }

        if (graph[current].includes(end)) {
            return true;
        }

        queue.push(...graph[current]);
    }

    return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
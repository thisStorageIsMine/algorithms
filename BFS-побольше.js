'use strict'
function bfs(grid) {
    const { start, dist } = getStartAndDist(grid)
    const q = [{ row: start.row, col: start.col, distance: 0 }];

    const prev = new Map();
    prev.set(`${start.row}${start.col}`, { ...start })

    let finish = { distance: -1, row: -1, col: -1 };

    while (q.length) {
        const { row, col, distance } = q.shift();
        const item = grid[row][col];

        if (item === 'F') {
            finish = { distance, row, col };
            break;
        }


        if (item === '#') continue;
        dist[row][col] = distance

        let x, y;
        for ([x, y] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const nextRow = row + x,
                nextCol = col + y;
            if (withinGrid(grid, nextRow, nextCol)) {
                if (dist[nextRow][nextCol] !== null) continue
                q.push({ row: nextRow, col: nextCol, distance: distance + 1 });
                prev.set(`${nextRow}${nextCol}`, { row, col })
            }
        }

    }

    if (finish.distance > -1) {
        let lastRow = finish.row,
            lastCol = finish.col;

        while (lastRow !== undefined && lastCol !== undefined) {
            const { row: prevRow, col: prevCol } = prev.get(`${lastRow}${lastCol}`);

            if (prevRow === start.row && prevCol === start.col) break;

            grid[prevRow][prevCol] = '@'

            lastRow = prevRow;
            lastCol = prevCol
        }
    }

    grid.map(row => console.log(row.join(' ')));


    return `Шагов до финиша: ${finish.distance}`
}

function withinGrid(grid, row, col) {
    return 0 <= row && row <= (grid.length - 1) && 0 <= col && col <= (grid[0].length - 1)
}

function getStartAndDist(grid) {
    let start = null;
    let dist = []

    for (let row = 0; row < grid.length; row++) {
        const distRow = []
        for (let col = 0; col < grid[row].length; col++) {
            const item = grid[row][col];

            if (item === 'S') {
                start = { row, col }
                distRow.push(0)
                continue
            }
            distRow.push(null)
        }
        dist.push(distRow)
    }
    dist[start.row][start.col] = 0;

    return {
        dist,
        start
    }

}


const lab = [
    [".", ".", ".", "#", ".", ".", "#", ".", ".", "S",],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ".",],
    [".", ".", ".", "#", "#", "#", ".", "#", "#", "#",],
    [".", ".", ".", ".", ".", ".", ".", ".", ".", ".",],
    ["#", "#", "#", "#", "#", "#", "#", ".", "#", "#",],
    [".", ".", ".", ".", ".", "#", ".", ".", ".", ".",],
    [".", ".", ".", "#", ".", "#", ".", ".", ".", ".",],
    [".", ".", ".", "#", ".", ".", ".", ".", "F", ".",],
]

console.log(bfs(lab))
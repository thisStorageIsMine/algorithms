const arr = [
    [1, 0, 1],
]// Ожидаем на выход {ceil: 0, ﬂoor: 0, both: 2}

function scan(m) {
    const result = {
        ceil: 0,
        floor: 0,
        both: 0
    }
    let processed = []


    for (let row = 0; row < m.length; row++) {
        for (let col = 0; col < m[row].length; col++) {
            if (m[row][col] === 0 || isProcessed(processed, row, col)) continue;
            const q = [];
            q.push({ row: row, col: col });

            let touchCeil = false;
            let touchFloor = false;

            while (q.length > 0) {
                const cur = q.shift();// cur: {row, col }
                // Проверяем, что текущий элемент внутри матрицы
                if (!withinM(m, cur.row, cur.col)
                    || isProcessed(processed, cur.row, cur.col)) continue;

                const value = m[cur.row][cur.col];
                if (value === 0) continue;
                processed.push({ row: cur.row, col: cur.col });

                // Если нашли 1, првоеряем на пол или потолок
                if (cur.row === 0) {
                    touchCeil = true
                }
                if (cur.row === m.length - 1) {
                    touchFloor = true;
                }


                q.push({ row: cur.row + 1, col: cur.col });
                q.push({ row: cur.row - 1, col: cur.col });
                q.push({ row: cur.row, col: cur.col + 1 });
                q.push({ row: cur.row, col: cur.col - 1 });
            }



            if (touchCeil && touchFloor) {
                result.both += 1;
                continue;
            } else if (touchCeil) {
                result.ceil += 1;
                continue;
            } else if (touchFloor) {
                result.floor += 1
            }
        }
    }

    return result
}


// Проверяем, что указанные значения внутри матрицы
function withinM(m, row, col) {
    return 0 <= row && row <= (m.length - 1) && 0 <= col && col <= (m[0].length - 1)
}

function touchedFloor(m, row) {

}

// Проверяем, что указанные значения были обратоны
function isProcessed(processed, row, col) {
    for (let i of processed) {
        if (i.row === row && i.col === col) return true;
    }
    return false;
}

module.exports = { scan };
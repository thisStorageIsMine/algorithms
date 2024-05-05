// Задание 1 
/*
Напишите функцию, которая использует бинарную сортировку для сортировки массива целых чисел. Например, для массива [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] функция должна вернуть отсортированный массив.

*/
let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function merge(left, right) {
    const arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
            continue;
        }

        arr.push(right.shift())
    }

    return [...arr, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const half = Math.floor(arr.length / 2);

    const left = arr.slice(0, half),
        right = arr.slice(half, arr.length);


    return merge(mergeSort(left), mergeSort(right))


}

// console.log(mergeSort(arr))

// Задание 2
/* 
    Реализуйте бинарную сортировку для связного списка. Создайте класс связного списка, добавьте метод для добавления элементов и метод для сортировки списка с использованием бинарной сортировки.
*/

class Node {
    constructor(val, nextNode = null) {
        this.value = val;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    unshift(value) {
        const node = new Node(value);
        if (!this.tail && !this.head) {
            this.head = this.tail = node;
            this.size += 1;

            return;
        }

        this.head.next = node;
        this.head = node;

        this.size += 1;
        return this;
    }

    sort() {
        function merge(left, right) {
            let list = new LinkedList();

            while (left.size || right.size) {
                if (left.size === 0) {
                    list.unshift(right.shift().value);
                    continue;
                }

                if (right.size === 0) {
                    list.unshift(left.shift().value);
                    continue;
                }

                if (left.tail.value < right.tail.value) {
                    list.unshift(left.shift().value);
                } else {
                    list.unshift(right.shift().value);
                }

            }

            return list;
        }

        function mergeSort(list) {
            if (list.size < 2) return list;

            const half = Math.floor(list.size / 2);

            let tempNode = list.tail; // Временный узел списка
            let left = new LinkedList(),
                right = new LinkedList();

            // Левую половину списка в left
            // Правую в right
            for (let i = 0; i < list.size; i++) {
                i < half ? left.unshift(tempNode.value) : right.unshift(tempNode.value);
                tempNode = tempNode.next;
            }



            return merge(mergeSort(left), mergeSort(right));
        }

        return mergeSort(this);

    }

    print() {
        if (!this.tail) return 'Список пуст!';

        let tempNode = this.tail
        let printedList = `${tempNode.value} `;

        while (tempNode.next !== null) {
            tempNode = tempNode.next;
            printedList += `-> ${tempNode.value} `;
        }

        return printedList
    }

    shift() {
        if (!this.tail) return null;

        const currentTail = new Node(this.tail.value); // Сохраняем текущий хвост

        if (this.size === 1) { // Если в списке 1 элемент
            this.tail = this.head = null
            this.size--;
            return currentTail;
        }

        this.tail = this.tail.next;
        this.size--;
        return currentTail;
    }
}

const linkerList = new LinkedList();
linkerList.unshift(122)
linkerList.unshift(7)
linkerList.unshift(8)
linkerList.unshift(-5)
linkerList.unshift(1)
linkerList.unshift(0)


console.log(linkerList.sort().print())


// Это было просто звиздец как сложно
// Будующий я, надеюсь ты будешь читать это и смеяться



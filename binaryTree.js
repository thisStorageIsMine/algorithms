class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = root ? new Node(root) : null
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let tempNode = this.root;
        while (tempNode) {
            if (value < tempNode.value) {
                if (tempNode.left) {
                    tempNode = tempNode.left;
                    continue;
                }
                tempNode.left = newNode;
                return;
            }

            if (tempNode.right) {
                tempNode = tempNode.right
                continue;
            }
            tempNode.right = newNode;
            return;
        }
    }

    reverse() {
        const q = [this.root];

        while (q.length) {
            const cur = q.shift();
            let l = cur.left;
            let r = cur.right;

            cur.left = r;
            cur.right = l;

            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
    }
}

const oleg = new BinaryTree(12);
oleg.add(4);
oleg.add(2);
oleg.add(21);

oleg.add(13);
console.log(oleg)
oleg.reverse()
console.log(oleg)


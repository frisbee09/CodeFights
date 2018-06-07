// Perform an in-order tree search until you hit the k-th node.
// This means a depth search of left to right.

const kthSmallestInBST = (tree, kth) => {
    let k = 0;
    queue = [tree];
    let currentNode = null;

    while (k < kth) {
        // It's important that we choose to pop and not shift.
        // We need to take the nodes that we added to the queue last in order
        // to perform a depth-first search
        currentNode = queue.pop();
        while (!currentNode) {
            currentNode = queue.pop()
        }
        //console.log("The current node is: ", currentNode.value, " and we have found ", k );
        if (currentNode.left || currentNode.right) {
            queue.push(currentNode.right);
            queue.push({
                "value": currentNode.value,
                "left": null,
                "right": null
            });
            queue.push(currentNode.left);

        } else {
            k += 1;
        }
    }
    return currentNode.value;
}

let t = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
};

console.log(kthSmallestInBST(t,4));
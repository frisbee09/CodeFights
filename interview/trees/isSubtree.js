const isSubtree = (tree, subTree) => {

    const compareTrees = (treeOne, treeTwo) => {
        let compareQueue = [[treeOne, treeTwo]];
        let currentNodeOne;
        let currentNodeTwo;
        while (compareQueue.length) {
            
            [currentNodeOne, currentNodeTwo] = compareQueue.shift();

            while (currentNodeOne || currentNodeTwo) {
                if (!currentNodeOne || !currentNodeTwo || currentNodeOne.value != currentNodeTwo.value) {
                    return false;
                }
                //console.log(`Comparing ${currentNodeOne.value} and ${currentNodeTwo.value}!`)
                if (currentNodeOne.left || currentNodeOne.right) {
                    if (currentNodeOne.left && currentNodeOne.right) {
                        compareQueue.push([currentNodeOne.right, currentNodeTwo.right]);
                        currentNodeOne = currentNodeOne.left;
                        currentNodeTwo = currentNodeTwo.left;
                    } else if (currentNodeOne.left) {
                        currentNodeOne = currentNodeOne.left;
                        currentNodeTwo = currentNodeTwo.left;
                    } else {
                        currentNodeOne = currentNodeOne.right;
                        currentNodeTwo = currentNodeTwo.right;
                    }
                } else {
                    if (currentNodeTwo.right || currentNodeTwo.left) {
                        return false;
                    }
                    currentNodeOne = null;
                    currentNodeTwo = null;
                }
            }
        }
        return true;
    }

    if (subTree == null) {
        return true;
    }
    let startingSubValue = subTree.value;
    let queue = [tree];
    let subQueue = [];
    while (queue.length) {
        let currentNode = queue.shift();
        while (currentNode) {
            if (currentNode.value == startingSubValue) {
                subQueue.push(currentNode);
            }
            if (currentNode.left || currentNode.right) {
                if (currentNode.left && currentNode.right) {
                    queue.push(currentNode.right);
                    currentNode = currentNode.left;
                } else if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    currentNode = currentNode.right;
                }
            } else {
                currentNode = null;
            }
        }
        console.log(subQueue.map(tree => tree.value));
        while (subQueue.length) {
            if (compareTrees(subTree, subQueue.shift())) {
                return true;
            }
        }
    }
    return false;
}
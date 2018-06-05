const isTreeSymmetric = (tree) => {
    if ((tree === null) || (tree.left === null && tree.right === null)) {
        return true;
    }
    let queue = [];
    queue.push([tree.left, tree.right]);
    let currentLeft;
    let currentRight;
    while (queue.length) {
        [currentLeft, currentRight] = queue.shift();
        if (!(currentLeft && currentRight)) {
            return false;
        }
        while (currentLeft && currentRight) {
            // If the two values are not equal then return false
            if (currentLeft.value !== currentRight.value) {
                return false;
            }
            // Next we check if there's a left node
            if (currentLeft.left) {
                // But if there isn't a right node we return false
                if(!currentRight.right) {
                    return false;
                } else {
                    // If there IS a right node, we look to see if the other combination exists
                    // and if it does, push it to the queue
                    if (currentLeft.right) {
                        if (!currentRight.left) {
                            // But if the combination doesn't exist, we return false
                            return false;
                        } else {
                            queue.push([currentLeft.right, currentRight.left]);
                            [currentLeft, currentRight] = [currentLeft.left, currentRight.right];
                        }
                    } else if (currentRight.left) {
                        return false;
                    } else {
                        [currentLeft, currentRight] = [currentLeft.left, currentRight.right];
                    }
                }
            } else if (currentRight.right) {
                return false;
            } else if (currentLeft.right) {
                if (!currentRight.left) {
                    return false;
                } else {
                    [currentLeft, currentRight] = [currentLeft.right, currentRight.left];
                }
            } else if (currentRight.left) {
                return false;
            } else {
                [currentLeft, currentRight] = [null, null];
            }
        }
    }
    return true;
};

let testVal = {
    "value": 1,
    "left": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4, 
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 2,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    }
}

console.log(isTreeSymmetric(testVal));
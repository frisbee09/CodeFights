hasPathWithGivenSum = (tree, sum) => {
    if (tree == null) {
        return (sum == 0) ? true : false;
    }
    
    var queue= [];
    var currentBranch;
    var rollingSum = 0;

    queue.push(tree);
    console.log(queue.length);

    while (queue.length) {
        currentBranch = queue.shift();
        rollingSum = currentBranch.value;
        while (currentBranch.left || currentBranch.right) {
            if (currentBranch.left && currentBranch.right) {
                currentBranch.right.value += rollingSum;
                queue.push(currentBranch.right)
                currentBranch.right = null;
            }
            
            currentBranch = currentBranch.left ? currentBranch.left : currentBranch.right;
            rollingSum += currentBranch.value;
        }

        if (rollingSum == sum) {
            return true;
        }
    }
    return false;
}

var testTree = null;

var testSum = 0;

console.log(hasPathWithGivenSum(testTree, testSum));
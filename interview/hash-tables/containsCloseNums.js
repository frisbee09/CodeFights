containsCloseNums = (nums, k) => {
    var numStore = new Map();

    for (i = 0; i < nums.length; i++) {
        if (numStore.has(nums[i]) && i - numStore.get(nums[i]) <= k) {
            return true;
        }
        numStore.set(nums[i], i);
    }

    return false;
}

console.log( containsCloseNums([0,1,2,3,5,2], 3));
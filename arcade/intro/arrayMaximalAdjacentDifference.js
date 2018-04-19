arrayMaximalAdjacentDifference = (inputArray) => {
    diffArr = [];
    for (i = 1; i < inputArray.length; i++) {
        diffArr.push(
            Math.abs(inputArray[i-1]-inputArray[i])
        )
    }
    return Math.max(...diffArr);
}
arrayChange = (inputArray) => {
    var highestVal = inputArray[0];
    var incCount = 0;
    for (i=1; i<inputArray.length; i++) {
        if (inputArray[i] <= highestVal) {
            incCount += highestVal+1-inputArray[i];
            highestVal += 1;
        } else {
            highestVal = inputArray[i];
        }
    }

    return incCount;
}

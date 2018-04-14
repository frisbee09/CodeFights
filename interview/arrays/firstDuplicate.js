function firstDuplicate(array) {
    // Function takes an array and returns the first duplicate

    // To clarify, it returns the duplicate where the second occurance
    // has the lowest index of all reoccurances.

    // We initialise an empty array that will be of the format,
    // [array entry: frequency, array entry: frequency, ...]

    let frequencies = [];

    // We now loop over the array parameter
    for (i = 0; i < array.length; i++) {

        // For every entry in the array we check the frequencies array if it exists
        if (frequencies[array[i]]) {
            // If it does, duplicate found! Return the value.
            return array[i];
        } else {
            // Else, Log the value.
            frequencies[array[i]] = 1;
        }
    }
    // If we get to this point then we have scanned the entire array and not found anything
    return -1
}

console.log(firstDuplicate([1,2,3,4,5,6,7,2,8,9,5]));
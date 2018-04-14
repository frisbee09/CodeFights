function rotateImage(a) {
    
    // We initialise an empty array to construct our rotated array
    let rotatedArr = [];
    for (row = 0; row < a.length; row++) {
        // When starting a new row, we push an empty row to rotated array
        rotatedArr.push([]);

        // Now we loop as many times as required for the length of the array
        for (col = 0; col < a.length; col++) {

            // We find the element via this relationship of indices
            rotatedArr[row].push(a[a.length-1-col][row])
        }
    }

    // console.log(rotatedArr);
    return rotatedArr;
}
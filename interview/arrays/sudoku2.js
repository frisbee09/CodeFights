function sudoku2(grid) {

    // We need to check that the 9x9 grid so far adheres to the rules of sudoku
    // There are three conditions:

    // 1. There must only be one instance of numbers 1-9 in a row
    // 2. There must only be one instance of numbers 1-9 in a column
    // 3. There must only be one instance of numbers 1-9 in the 3x3 subgrids

    // There are 9 rows, 9 columns and 9 sub-grids, so it makes sense to nest all
    // these checks within a single for loop

    // By constraint of the problem, the input is always 9x9

    // We initialise an array to hold the numbers we find in a row/column/subgrid
    let numFound = [];

    // We can now start iterating. We will iterate 9 times.
    for (iter = 0; iter < 9; iter++) {
        // We must reset numFound at the beginning of every loop
        numFound = [];

        // Let's do rows first, as they are the easiest access pattern to track.
        for (number = 0; number < 9; number++) {

            // We need to only analyse the number if it's not a blank space
            if (grid[iter][number] !== '.') {

                // Check if the number exists and if it does we return
                // Else, we push the number into numFound
                if (numFound.findIndex(value => value === grid[iter][number]) > -1) {
                    console.log(`False because Row! numFound: ${numFound} Row: ${iter}, Col: ${number}, Entry: ${grid[iter][number]}`)
                    return false;
                } else {
                    numFound.push(grid[iter][number]);
                }
            }
        }

        // Whilst we could check columns in the same loop, it means we'd have to init
        // another variable to store numbers. Separating them doesn't increase our
        // number of total iterations, but does increase the length of the function.

        numFound = [];
        for (number = 0; number < 9 ; number++) {

            // We can reuse the other for loop almost exactly to check columns
            if (grid[number][iter] !== '.') {

                // Check if the nuber exists and if it does we return
                if (numFound.findIndex(value => value === grid[number][iter]) > -1) {
                    console.log(`False because Col! numFound: ${numFound} Row: ${number}, Col: ${iter}, Entry: ${grid[number][iter]}`)
                    return false;
                } else {
                    numFound.push(grid[number][iter]);
                }
            }
        }

        // Last stop is to check the subgrids.
        numFound = [];

        // We need to iterate in a strange pattern to get to our right indices.
        // Our subRow needs to start at 0, 0, 0, 3, 3, 3, 6, 6, 6
        for (subRow = Math.floor(iter/3)*3; subRow < Math.floor(iter/3)*3 + 3; subRow++) {

            // Our subCol needs to start at 0, 3, 6, 0, 3, 6, 0, 3, 6
            for (subCol = (iter%3)*3; subCol < (iter%3)*3 + 3; subCol++) {

                // Now we're in the right place, we just need to place the same checks in here as before.
                if (grid[subRow][subCol] !== '.') {

                    // Check if the number exists and if it does we return
                    if (numFound.findIndex(value => value === grid[subRow][subCol]) > -1) {
                        console.log(`False because Subgrid! numFound: ${numFound} Row: ${subRow}, Col: ${subCol}, Entry: ${grid[subRow][subCol]}`)
                        return false;
                    } else {
                        numFound.push(grid[subRow][subCol]);
                    }
                }
            }
        }
    }

    // If, after this whole ordeal, we reach this line, the input is potentially a correct
    // sudoku solution. We can return true.
    return true;

}

console.log();
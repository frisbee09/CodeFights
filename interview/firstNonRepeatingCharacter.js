function firstNotRepeatingCharacter(s) {
    // Function takes a string and returns the first non-duplicate letter

    // To clarify, it returns the letter where the only occurance
    // has the lowest index.

    // We initialise two empty arrays that will log letter counts and the order
    // in which they appear.


    let frequencies = [];
    let letters = [];
    let letterIndex = 0;

    // We now loop over the string parameter
    for (i = 0; i < s.length; i++) {
        letterIndex = letters.findIndex(value => value === s.charAt(i));

        // If the letter already exists, we increment it's frequency
        if (letterIndex > -1) {
            frequencies[letterIndex]++

        // Otherwise, we push the letter onto the end of the letters array
        // and log it's first appearance in frequencies
        } else {
            frequencies.push(1);
            letters.push(s.charAt(i));
        }
    }


    // Now we can find the first occurence of a single frequency 
    letterIndex = frequencies.findIndex(value => value === 1);
    
    // We need to filter our solution so that we return an underscore if .findIndex() returned -1
    return letterIndex == -1 ? "_" : letters[letterIndex];
}
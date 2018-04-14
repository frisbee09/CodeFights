function firstNotRepeatingCharacter(s) {
    // Function takes a string and returns the first non-duplicate letter

    // To clarify, it returns the letter where the only occurance
    // has the lowest index.

    // We initialise an empty array that will be of the format,
    // [array entry: frequency, array entry: frequency, ...]


    let frequencies = [];
    let letters = [];
    let letterIndex = 0;
    // We now loop over the string parameter
    for (i = 0; i < s.length; i++) {
        letterIndex = letters.findIndex(value => value === s.charAt(i));
        if (letterIndex > -1) {
            frequencies[letterIndex]++
        } else {
            frequencies.push(1);
            letters.push(s.charAt(i));
        }
    }


    // Now we can find the first occurence of the single frequency 
    letterIndex = frequencies.findIndex(value => value === 1);
    
    // console.log(solution)
    // We need to filter our solution so that we return an underscore if .find() didn't find.
    return letterIndex == -1 ? "_" : letters[letterIndex];
}

console.log(firstNotRepeatingCharacter("efjdrnerujifoejf"));
palindromeRearranging = (inputString) => {
    var lettersFound = [];
    var letterCount = [];
    for (i = 0; i < inputString.length; i++) {
        if (lettersFound.findIndex(val => val == inputString[i]) == -1) {
            lettersFound.push(inputString[i]);
            letterCount.push(1);
        } else {
            letterCount[lettersFound.findIndex(val => val == inputString[i])]++;
        }
    }
    var unevenTolerance = inputString.length%2;
    for (i = 0; i < letterCount.length; i++) {
        if (letterCount[i]%2 == 1) {
            if (unevenTolerance-- == 0) return false;
        }
    }
    return true;
}

console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"));
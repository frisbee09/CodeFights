areSimilar = (a,b) => {
    var errorVal = []
    var errorIndex = [];
    for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i] ) {
            errorVal.push(a[i]);
            errorIndex.push(i);
            if (errorVal.length > 2) return false
        }
    }
    if (errorVal[0] == b[errorIndex[1]] && errorVal[1] == b[errorIndex[0]]) {
        return true;
    } else return false;
}
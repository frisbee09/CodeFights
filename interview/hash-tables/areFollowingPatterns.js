areFollowingPatterns = (strings, pattern) => {
    // We set up a hash tables to save and check strings against the pattern keys
    // I'm using two, to test the relationship both ways.
    var patternStore = new Map();
    var stringStore = new Map();

    // My arrays match in size. No need for checkings
    // My elements are 10 characters or less.

    for (i = 0; i < strings.length; i++) {
        if (patternStore.has(pattern[i])) {
            if (strings[i] !== patternStore.get(pattern[i])) {
                return false;
            }
        } else if (stringStore.has(strings[i])) {
            return false;
        } else {
            patternStore.set(pattern[i], strings[i]);
            stringStore.set(strings[i], pattern[i]);
        }
    }
    return true;
}
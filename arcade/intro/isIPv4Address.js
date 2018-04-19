function isIPv4Address(inputString) {
    var octets = inputString.split(".");
    if (octets.length !== 4) return false;
    console.log(octets);
    for (i = 0; i < octets.length; i++) {
        if (octets[i] == "" || (/([^0-9])+/).test(octets[i]) || octets[i] < 0 || octets[i] > 255) {
            return false;
        }
    }
    return true;
}
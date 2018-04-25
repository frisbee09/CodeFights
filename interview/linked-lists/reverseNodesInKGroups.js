const listNode = require('./listNode.js');

reverseNodesInKGroups = (list, k) => {
    // First, grab the kth element of the list which will be the head of the list
    var Ans = list;
    for (i = 0; i < k - 1; i++) {
        Ans = Ans.next;
    }

    // We need to keep pointers to the start of the next chunk
    // and the chunk after that.

    // First, iterate startNextChunk to the end of the current chunk
    var startNextChunk = list;
    for (i = 0; i < k - 1; i++) {
        startNextChunk = startNextChunk.next;
    }
     // Then set endNextChunk at the end of the current chunk
    var endNextChunk = startNextChunk;

    // Push startNextChunk forward once onto the start of the next chunk.
    startNextChunk = startNextChunk.next;

    // Set up variables for the reversing in the while loop
    var previous = null;
    var current = list;
    var next = null;
    var reversedLastChunk = false;

    // We loop until the chunk after the current one
    // cannot be found.
    while (!reversedLastChunk) {

        // See if there's another chunk after this one.
        for (i = 0; i < k; i++) {
            if (endNextChunk) {
                endNextChunk = endNextChunk.next;
            }
        }


        // The first element needs to link to the end of the next chunk
        // or, if it doesn't exist, the start of the next chunk
        previous = (endNextChunk ? endNextChunk : startNextChunk);

        // Loop over the chunk
        for (i = 0; i < k; i++) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next
            if (startNextChunk) {
                startNextChunk = startNextChunk.next;
            }
        }

        // If there is another chuck, keep going.
        // Otherwise, break the loop.
        if (!endNextChunk) {
            reversedLastChunk = true;
        }
    }
    
    return Ans;
}

const input = setupLinkedList([1,2,3,4,5,6,7,8,9])

const toPrint = reverseNodesInKGroups(input, 4)

console.log(listNode.printLinkedList(toPrint));
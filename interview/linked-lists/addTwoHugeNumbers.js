const listNode = require('./listNode.js');

addTwoHugeNumbers = (a,b) => {
    // First we need to reverse the two input parameters
    var reversedA = reverseList(a);
    var reversedB = reverseList(b);

    // Then we create two pointers to the reversed lists. We will use these
    // to host the iteration along the list
    var currentA = reversedA;
    var currentB = reversedB;

    // These three variables will be used to house the addition and construct
    // the linked list going forwards.
    var Ans = null;
    var overflow = false;
    var temp = null;
    while (currentA && currentB) {
        console.log("--CurrentA:", currentA.value, " --CurrentB:", currentB.value)
        Ans = new listNode.ListNode(currentA.value + currentB.value + (overflow ? 1 : 0) );
        console.log(Ans.value);
        overflow = false;
        if (Ans.value > 9999) {
            overflow = true;
            Ans.value -= 10000;
        }
        Ans.next = temp;
        temp = Ans;
        currentA = currentA.next;
        currentB = currentB.next;
    }

    var current = (currentA ? currentA : currentB);
    while (current) {
        Ans = new listNode.ListNode(current.value + (overflow ? 1 : 0));
        console.log(Ans.value);
        overflow = false;
        if (Ans.value > 9999) {
            overflow = true;
            Ans.value -= 10000;
        }
        Ans.next = temp;
        temp = Ans;
        current = current.next;
    }

    if (overflow) {
        Ans = new listNode.ListNode(1);
        Ans.next = temp;
    }

    return Ans;
}

console.log(addTwoHugeNumbers(setupLinkedList([13,9632,5781,9023]),setupLinkedList([4517,6239,6251])));


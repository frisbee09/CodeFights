const listNode = require('./listNode.js');

mergeTwoLinkedLists = (a,b) => {
    // This function accepts two linked lists in non-dcreasing order and
    // returns a single linked list in non-descending order.

    // We initialise a ListNode as the head of our Linked List.
    // This will be used to stre our merged list.
    var Ans = new listNode.ListNode("placeholder");

    // We also initialise a variable that will reference the final node of the list
    var currentNode = Ans;

    // There are only two cases, where a is bigger than b,
    // or b is bigger than OR EQUAL to a.

    // For efficiency, we only need to make one check. No else-if is required.
    while (a && b) {
        if (a.value > b.value) {
            currentNode.next = new listNode.ListNode(b.value);
            b = b.next;
        } else {
            currentNode.next = new listNode.ListNode(a.value);
            a = a.next;
        }

        currentNode = currentNode.next;
    }

    // Once this loop ends, we will have hit the end of one of our lists.
    // We just tack the rest of whichever list is left over onto the end.
    currentNode.next = (a ? a : b);
    
    return Ans.next;

}

console.log(printLinkedList(mergeTwoLinkedLists(setupLinkedList([1,2,3]), setupLinkedList([0,1,2,4]))));
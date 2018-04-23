require('./listNode.js');


isListPalindrome = (list) => {
 /* The general strategy here is to find the middle point of the linked list
    After that, we can reverse the rest of the list and check to see if the
    nodes from "start" to "finish" are the same as the first half of the list*/   

    var LinkedList = list;
    var currentNode = list;
    var doubleNext = list;

    // First, we find the midpoint of the nested LinkedList
    while (doubleNext != null && doubleNext.next != null) {

        currentNode = currentNode.next;
        doubleNext = doubleNext.next.next;
    }
    if (doubleNext) {
        currentNode = currentNode.next;
    }

    // Now we need to reverse currentNode
    var reversed = reverseList(currentNode);

    while (reversed) {
        if (LinkedList.value !== reversed.value) {
            return false;
        }
        LinkedList = LinkedList.next;
        reversed = reversed.next;
    }

    return true;

}

console.log(isListPalindrome(setupLinkedList([1,2,3,4,2,1])));
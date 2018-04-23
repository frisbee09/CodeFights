class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

setupLinkedList = (arr) => {
    var returnLinked = new ListNode(arr[0]);
    var currentNode = returnLinked;
    for (i=1; i< arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next;
    }
    return returnLinked;
}

reverseList = (list) => {
    var previous = null;
    var currentNode = list;
    var next = null;

    while (currentNode) {
        next = currentNode.next;
        currentNode.next = previous;
        previous = currentNode;
        currentNode = next;
    }

    return previous;
}

module.exports = {
    ListNode,
    setupLinkedList,
    reverseList,
};
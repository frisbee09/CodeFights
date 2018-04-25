class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

setupLinkedList = (arr) => {
    // Form a linked list from an input array.
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

printLinkedList = (linked) => {
    var output = [];
    while (linked) {
        output.push(linked.value);
        linked = linked.next;
    }
    return output;
}

module.exports = {
    ListNode,
    setupLinkedList,
    reverseList,
    printLinkedList,
};
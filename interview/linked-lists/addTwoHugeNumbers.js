require('./ListNode.js');

addTwoHugeNumbers = (a,b) => {
    var reversedA = reverseList(a);
    var reversedB = reverseList(b);
    var currentA = reversedA;
    var currentB = reversedB;
    var Ans = null;
    var overflow = false;
    var temp = null;
    while (currentA && currentB) {
        Ans = new LinkNode(currentA.value + currentB.value + overflow ? 1 : 0 );
        if (Ans.value > 9999) {
            overflow = true;
            Ans.value =- 10000;
        }
        


    }
}


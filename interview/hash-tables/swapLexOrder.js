swapLexOrder = (string, swapArr) => {
    var stringIndex = new Map();
    var swaps = new Map();
    var paths = [];
    var cycles = new Map();

    for (var i = 0; i < string.length; i++) {
        stringIndex.set(i+1, string[i])
    }

    for (var validSwap of swapArr) {
        for (var j = 0; j < 2; j++) {
            if (swaps.has(validSwap[j])) {
                swaps.get(validSwap[j]).push(validSwap[j == 0 ? 1 : 0]);
            } else {
                swaps.set(validSwap[j], [validSwap[j == 0 ?1 : 0]]);
            }
        }
    }

    for (var node of swaps.keys()) {
        if (!cycles.has(node)) {
            var queue = [];
            var visited = [];
            var cycle = [];
            queue.push(node);
            while (queue.length) {
                var current = queue.shift();
                for (var swapIndex of swaps.get(current)) {
                    if (!visited[swapIndex]){
                        visited[swapIndex] = true;
                        queue.push(swapIndex);

                        cycle.push(swapIndex);
                    }
                }
            }

            cycle = cycle.sort((a,b) => {
                if (stringIndex.get(a) > stringIndex.get(b)) {
                    return -1;
                } else if (stringIndex.get(a) < stringIndex.get(b)) {
                    return 1;
                } else {
                    return 0;
                }
            });

            for (var pathNode of cycle) {cycles.set(pathNode, paths.length)};

            paths.push(cycle);
        }
    }

    var answer = "";
    for (var charPos of stringIndex.keys()) {
        if (cycles.has(charPos)) {
            answer += stringIndex.get(paths[cycles.get(charPos)].shift());
        } else {
            answer += stringIndex.get(charPos);
        }
    }
    
    
    return answer;
}


var string = "fixmfbhyutghwbyezkveyameoamqoi";
var swaps = [[8,5], 
[10,8], 
[4,18], 
[20,12], 
[5,2], 
[17,2], 
[13,25], 
[29,12], 
[22,2], 
[17,11]];

console.log(swapLexOrder(string, swaps));
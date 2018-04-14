const l ='a(bcdefghijkl(mno)p)q'

function reverseParentheses(string) {
    const searchBrackets = /[()]/g;
    let results = [];
    let bracketOrder = 0;

    while (match = searchBrackets.exec(string)) {
        results.push({"bracket": match[0], "index":match.index, "order":match[0] == '(' ? bracketOrder : bracketOrder - 1});
        match[0] === '(' ? bracketOrder ++ : bracketOrder--
    }
    results = results.sort((a,b) => {return a.order - b.order})
    console.log(results)
    
    let tempString = "";
    let workingSolution = string;
    for (i = results.length-1; i > -1; i--) {
        if (results[i].bracket === '(') {
            tempString = workingSolution.slice(results[i].index + 1, results[i+1].index);
            console.log(`I have cut out ${tempString}`);
            tempString = tempString.split("").reverse().join("");
            workingSolution = workingSolution.slice(0,results[i].index+1)
                            + tempString
                            + workingSolution.slice(results[i+1].index, string.length);
            
            console.log(workingSolution);
        }
    }

    workingSolution = workingSolution.replace(searchBrackets, '');
    console.log(workingSolution);
    return workingSolution;
}

reverseParentheses(l)
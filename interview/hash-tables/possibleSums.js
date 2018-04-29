possibleSums = (coins, quantities) => {

    var coinQuants = new Map();
    for (var i = 0; i < coins.length; i++) {
        if (coinQuants.has(coins[i])) {
            coinQuants.set(coins[i], coinQuants.get(coins[i]) + quantities[i]);
        } else {
            coinQuants.set(coins[i], quantities[i])
        }
    }

    coins = Array.from(coinQuants.keys());
    quantities = Array.from(coinQuants.values());

    // We define a recursive function that will go and obtain all combinations
    combo = (arr) => {
        // If the array has one element, return it as the only combination
        if (arr.length == 1) {
            return [arr];
        }

        // Define the variable where we will store the combinations and return
        var combinations = [];

        // Iterate over the array given
        for (var i = 0; i < arr.length; i++) {

            // Note the root element
            var rootElement = arr[i];

            // Slice it off the front
            var slicedArr = arr.slice(i+1);

            // Request all combinations of this subArray and then pre-pend our root
            // element onto the front of it. Push the combos to combinations array
            combo(slicedArr).concat("").forEach(subCombo => {
                combinations.push([rootElement].concat(subCombo).filter(num => {
                    return num !== "";
                }));
            })
        }

        // return the combinations array
        return combinations;
    }

    coinCombos = new Map();
    
    combo(coins).forEach((comb) => {
            coinCombos.set(comb.reduce((total, current) => {return total + current}), "Yas")
    });

    coins = coins.filter((coin) => {
        return quantities[coins.indexOf(coin)] > 1;
    });

    quantities = quantities.filter((quant) => {
        return quant > 1;
    });

    // console.log(coins, quantities);

    
    var comboSnapshot;

    for (var coinIndex = 0; coinIndex < coins.length; coinIndex++) {
        comboSnapshot = Array.from(coinCombos.keys());
        // console.log(comboSnapshot);
        for (var coinMultiple = 1; coinMultiple < quantities[coinIndex]; coinMultiple++) {
            for (var comboIndex = 0; comboIndex < comboSnapshot.length; comboIndex++) {
                coinCombos.set(
                    comboSnapshot[comboIndex] + coins[coinIndex]*coinMultiple,
                    "Yas"
                )
            }
        }
    }
    // console.log(coinCombos);
    return coinCombos.size

}
var coins = [17,27,22,18,9,58,50,85,67,50,42,11,60,39,23,37,28,91,81];
var quantity = [1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1];
coins = [10,50,100,500];
quantity = [5,3,2,2]
console.log(possibleSums(coins, quantity));
groupingDishes = (arr) => {

    // Our input is an array of arrays.
    // The first element is the NAME of the dish.
    // The remaining elements are the ingredients of the dish.

    // There will be maximum 500 dishes to log.
    // Each dish will have fewer than 10 ingredients.


    // We need to give the final result in lexicographical order
    // This is easier to do if we sort the array first
    arr.sort((a,b) => {
        const dishA = a[0];
        const dishB = b[0];

        if (dishA < dishB) {
            return -1;
        } else if (dishA > dishB) {
            return 1;
        }

        return 0;
    })

    // This map will house our associative array
    var grpDish = new Map();

    // We loop over the dishes in the array
    for (dish = 0; dish < arr.length; dish++) {

        // Now loop over the ingredients
        for (ing = 1; ing < arr[dish].length; ing++) {
            // console.log(arr[dish][ing]);
            if (grpDish.has(arr[dish][ing])) {
                //console.log(`We've used ${arr[dish][ing]} before in ${grpDish[arr[dish][ing]]} or ${grpDish.get(arr[dish][ing])}.`);
                grpDish.get(arr[dish][ing]).push(arr[dish][0]);
                // console.log(`We added it to the list and now we have ${grpDish.get(arr[dish][ing])}.`);
            } else {
                grpDish.set(arr[dish][ing], [arr[dish][ing], arr[dish][0]]);
            }
        }
    }
    // console.log(grpDish.get('Onions'));
     return Array.from(grpDish.values()).filter(v => v.length>2).sort((a,b) => {
        const ingA = a[0];
        const ingB = b[0];

        if (ingA < ingB) {
            return -1;
        } else if (ingA > ingB) {
            return 1;
        }

        return 0;
     });
    
}

const input =  [["Pasta", "Tomato Sauce", "Onions", "Garlic"],
                ["Chicken Curry", "Chicken", "Curry Sauce"],
                ["Fried Rice", "Rice", "Onions", "Nuts"],
                ["Salad", "Spinach", "Nuts"],
                ["Sandwich", "Cheese", "Bread"],
                ["Quesadilla", "Chicken", "Cheese"]]
console.log(groupingDishes(input));
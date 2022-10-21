// Higher-Order-Functions: functions who operate on other functions by (taking them as arguments, returning them )

// Its benefits:
/*
1- Abstract the details which means, shorter displayed programs, which means less complexity
2- More meaningful program
    instead of loops and counters,etc. we can just use meaningful functions
        sum(range(1, 10)) --> instead of loop and counters, and other non meaningful expressions
*/


// Higher-Order Function to create new functions 
/*
function multiply(num) {
    return (x => num * x);
}

let multiplyBy20 = multiply(20);
console.log(multiplyBy20(2)); // 40

//or 
console.log(multiply(20)(2));
*/

// Higher-Order Function to change control flow
console.log("Unless" + "-".repeat(50));
function unless(test, doThis) {
    if (!test) {
        doThis()
    }
}

repeat(10, (i) => {
    unless(i % 2 == 0, () => {
        console.log(`${i} is odd`);
    })
})


// Making built-in High-Order Function from scratch
console.log("");
console.log("ForEach" + "-".repeat(50));
//ForEach: used to apply some function on each element of the list
let forEachList = ["1", "2", "3"]
function foreach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i], i)
    }
}

foreach(forEachList, (item, index) => {
    console.log(item, index);
})

console.log("");
console.log("Filter" + "-".repeat(50));

//Filter: used to filter(choose) some of the list's elements based on the passed condition
function filter(list, test) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        test(list[i], i) ? newList.push(list[i]) : null;
    }

    return newList
}

let list = [10, 20, 25, 28, 30, 40, 50];
let newList = filter(list, (item, index) => {
    return item > 30;
})

console.log(newList);

let tasks = [
    {
        text: "Buy A New Notebook",
        done: true,
    },
    {
        text: "Call your uncle",
        done: false,
    },
    {
        text: "Visit your aunt",
        done: true,
    }
]

let doneTasks = filter(tasks, (task, index) => {
    return (task.done);
})

console.log(doneTasks);


console.log("");
console.log("Repeat" + "-".repeat(50));
//Repeat Function: used to repeat some passed function for a passed number of iterations 
function repeat(repeatNum, action) {
    for (let i = 0; i < repeatNum; i++) {
        action(i);
    }
}

repeat(10, (index) => {
    console.log(index);
})


console.log("");
console.log("Map" + "-".repeat(50));
//Map Function: used to apply some passed transformation of the each element of the list and create new list with the new edited elements
function map(list, transform) {
    let newList = [];
    repeat(list.length, transform);
    for (let i = 0; i < list.length; i++) {
        newList.push(transform(list[i], i));
    }
    return newList;
}

let oldLest = [1, 2, 3, 4];
let mappedList = map(oldLest, (item, index) => {
    return item * 2;
})

console.log(mappedList);

console.log("");
console.log("Reduce" + "-".repeat(50));
//Reduce Function: used to apply some passed function on the list and return just a single result based on the passed function like (sum of all elements, or multiplication of all)
function reduce(list, calcFun) {
    let result = list[0];
    for (let i = 1; i < list.length; i++) {
        result = calcFun(result, list[i]);
    }
    return result;
}

let oldLest2 = [1, 2, 3, 5];
let reducedItem = reduce(oldLest2, (item1, item2) => {
    return item1 * item2
})

console.log(reducedItem);


console.log("");
console.log("Find" + "-".repeat(50));
//Find Function: it is used to find and return the first element passing the passed condition 
function find(list, test) {
    let foundItem;
    for (let i = 0; i < list.length; i++) {
        if (test(list[i])) {
            foundItem = list[i];
            break;
        }
    }
    return foundItem;
}

let oldLest3 = [
    {
        text: "buy a notebook",
        done: false,
    },

    {
        text: "buy some vegetables",
        done: true,
    },

]

let foundItem = find(oldLest3, (item) => {
    return item.done;
})

console.log((foundItem == undefined) ? "not found" : foundItem);

// Every Function: used to check if each element in the list passes the passed condition like checking if all elements > 20
console.log("");
console.log("Every Function" + "-".repeat(50));

function every(list, test) {
    let isPassed = true;
    for (let i = 0; i < list.length; i++) {
        if (!test(list[i])) {
            isPassed = false;
            break;
        }
    }
    return isPassed;
}

let list6 = [60, 70, 70, 80];
console.log(every(list6, (item) => {
    return (item > 50);
}))

console.log("");



// A way to make a copy version of array built-in functions
let object = {
    list: [],

    foreach: function (action) {
        for (let i = 0; i < this.list.length; i++) {
            action(this.list[i], i)
        }
    },

    filter: function (test) {
        let newList = [];
        for (let i = 0; i < this.list.length; i++) {
            test(this.list[i], i) ? newList.push(this.list[i]) : null;
        }

        return newList
    }
}

object.list = [1, 2, 3, 4];
object.foreach((item, index) => {
    console.log(item);
})

let newList5 = object.filter((item, index) => {
    return (item > 2);
})

console.log(newList5);

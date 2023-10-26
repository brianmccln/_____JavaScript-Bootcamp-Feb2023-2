// Lesson 05.01 - FINAL

// for loops

// 1. Write a for loop with a counter, `i`, that starts at 0, goes up by one each time, and stops when `i` gets to 10:

for (let i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2...9
}

// 2. Try to access `i` outside the loop. We get an error: "i is not defined":

for (let i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2...9
}

console.log(i); // ERROR: i is not defined

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:

for (var i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2...9
}

console.log('outside loop:', i); // outside loop: 10

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.

// 5. Write a loop with a counter that decrements (counts backwards):

for (let i = 10; i > 0; i--) {
    console.log(i) // runs 10 times
}

console.log(i) // 11
// The 11 reminds us that we still have a lingering `var i` which "leaked out" of its loop into the global scope.

// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:

for (let j = 10; j > 0; j--) {
    console.log(j) // runs 10 times
}
// console.log(j) // ERROR: j is not defined

// infinite loop

// 7. Write but do not run this infinite loop, as doing so may freeze your browser. Just study it before commenting it out. 

// infinite loop -- do not attempt
/*
for (let i = 10; i > 0; i++) {
    console.log(i);
}
*/

// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):

for (let i = 0; i <= 100; i+=5) {
    console.log(i); // 0, 5, 10...95, 100
}

// continue

// 9. Output all numbers from 1-10, with the exception of 7:

for(let i = 0; i < 10; i++) {
    if(i == 7) {
        continue; // skip 7
    }
    console.log(i); // 0,1,2,3,4,5,6,8,9
}

// iterating (looping) arrays

// 10. Declare an array:

const fruits = ['apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum'];

// 11. Add a few more items to the end of the array:

fruits.push('apricot');
fruits.push('papaya')
fruits.push('grape');

// 12. Add a few items to the beginning of the array:

fruits.unshift('grapefruit');
fruits.unshift('watermelon');
fruits.unshift('tangerine');

// 13. Output the array and its length:

console.log(fruits, fruits.length);
// ['tangerine', 'watermelon', 'grapefruit', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13

// 14. Starting at index 3, splice out 3 items ('apple', 'blueberry', 'cherry'), and replace them with 'lemon' and 'pear':

fruits.splice(3, 3, 'lemon', 'pear');

console.log(fruits, fruits.length);
// ['tangerine', 'watermelon', 'grapefruit', 'lemon', 'pear', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 12 

// 15. At index 7, 'orange', use splice to insert 4 items without removing any. The new fruits will go in before 'orange':

fruits.splice(7, 0, 'apple', 'blueberry', 'cherry', 'peach');

console.log(fruits, fruits.length); 
//  ['tangerine', 'watermelon', 'grapefruit', 'lemon', 'pear', 'kiwi', 'lime', 'apple', 'blueberry', 'cherry', 'peach', 'orange','plum', 'apricot', 'papaya', 'grape'] 16

// 16. Iterate the array of 16 items with a for loop. Each time through the loop, make a fruit jellybean.

for(let i = 0; i < 16; i++) {
    let bean = fruits[i] + ' jellybean';
    console.log(bean); // tangerine jellybean, etc.
}

// 17. Push in a few more fruits, and then sort the array:

fruits.push('banana');
fruits.push('pineapple');
fruits.push('mango');
fruits.sort();

console.log(fruits); 
// ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'tangerine', 'watermelon']

// 18. Run the loop again:

for(let i = 0; i < 16; i++) {
    let bean = fruits[i] + ' jellybean';
    console.log(bean); 
    // apple jellybean, apricot jellybean, etc.
}

// The last three fruits ('plum', 'tangerine', 'watermelon') are not showing up. The problem is, the loop stops when `i=16`, but we now have 19 items. 

// array.length as loop condition

// 19. Make a new loop with the dynamic condition `i < fruits.length`:

for(let i = 0; i < fruits.length; i++) {
    let bean = fruits[i] + ' jellybean';
    console.log(bean); 
    // apple jellybean, apricot jellybean, etc.
}

// string.length

// 20. Make jellybeans only if the fruit has no more than 5 letters. Btw, we don't really need the bean variable, so just log the string directly:

for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].length <= 5) {
        console.log(fruits[i] + ' jellybean'); 
        // apple jellybean, grape jellybean, etc.
    }
}

// making a new array inside a loop*

// 21. Do another loop that saves the jellybeans by pushing them into a new array, `jellybeans`, declared above the loop:

const jellybeans = [];

for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].length <= 5) {
        jellybeans.push(fruits[i] + ' jellybean');
    }
}

console.log('jellybeans', jellybeans); 
// ['apple jellybean', 'grape jellybean', 'kiwi jellybean', 'lemon jellybean, 'lime jellybean', 'mango jellybean', 'peach jellybean', 'pear jellybean', 'plum jellybean']

// Let's try some if-else if-else logic in a loop:
/*
- `if` the fruit has a max of 5 letters, it goes into the `lilFruits` array.
- `else if` the fruit has 6-8 letters, it goes into the `medFruits` array.
- `else`, the fruit of 9 or more letters it goes into the `bigFruits` array
*/

// 22. Declare the three arrays, all empty:

const lilFruits = [];
const medFruits = [];
const bigFruits = [];

// 23. Run the loop with the conditional logic inside. Each part pushes qualifying fruits into its respective array:

for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].length <= 5) {
        lilFruits.push(fruits[i]);
    } else if(fruits[i].length <= 8) {
        medFruits.push(fruits[i]);
    } else {
        bigFruits.push(fruits[i]);
    }
}

console.log('lilFruits', lilFruits); 
// ['apple', 'grape', 'kiwi', 'lemon', 'lime', 'mango', 'peach', 'pear', 'plum']
console.log('medFruits', medFruits); 
// ['apricot', 'banana', 'cherry', 'orange', 'papaya']
console.log('bigFruits', bigFruits); 
// ['blueberry', 'grapefruit', ' 'pineapple', 'tangerine', 'watermelon']

// loop with nested if-else

// if the "big fruit" is a berry, save it to a `berries` array instead. For this we need a few more berries.

// We will use `splice()` to maintain alphabetical order as we add 'boysenberry', 'raspberry' and 'strawberry'. Here is the current array of 19 items for reference:
/*
    ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'tangerine', 'watermelon']
*/

// 24. We need to put 'boysenberry' needs between 'blueberry' and 'cherry'. Starting at index 4 ('cherry'), remove zero items and add 'boysenberry':

fruits.splice(4, 0, 'boysenberry');

// splice() with negative index values

// The splice method recognizes negative indexes, with the last item at -1. We want to add 'raspberry' and 'strawberry', consecutively, right before 'tangerine', which, as the next to the last item, occupies index -2.

// 25. Add 'raspberry' and 'strawberry' before 'tangerine':

fruits.splice(-2, 0, 'raspberry', 'strawberry');

console.log(fruits, fruits.length);
// ['apple', 'apricot', 'banana', 'blueberry', 'boysenberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'raspberry', 'strawberry', 'tangerine', 'watermelon']

// 26. Declare all new empty arrays for a fresh start:

    const smFruits = [];
    const mdFruits = [];
    const lgFruits = [];
    const berries = [];

// 27. Do the for loop with the nested if-else. To see if a fruit *includes* 'berry', call `includes('berry')` on the item:

for(let i = 0; i < fruits.length; i++) {
    if(fruits[i].length <= 5) {
        smFruits.push(fruits[i]);
    } else if(fruits[i].length <= 8) {
        mdFruits.push(fruits[i]);
    } else {
        if(fruits[i].includes('berry')) {
            berries.push(fruits[i]);
        } else {
            lgFruits.push(fruits[i]);
        }
    }
}

console.log('smFruits', smFruits); 
// ['apple', 'grape', 'kiwi', 'lemon', 'lime', 'mango', 'peach', 'pear', 'plum' ]
console.log('mdFruits', mdFruits); 
// ['apricot', 'banana', 'cherry', 'orange', 'papaya']
console.log('lgFruits', lgFruits); 
// ['grapefruit', ' 'pineapple', 'tangerine', 'watermelon']
console.log('berries', berries); 
// ['blueberry', 'boysenberry', 'raspberry', 'strawberry']



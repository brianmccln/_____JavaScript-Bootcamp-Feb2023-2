// Lesson 04.03 - START
// Array Methods

// Array methods review:

// 1. Declare an array of a few items, and use `push()` to add a couple of items at the end:
const fruits = ['kiwi', 'cherry', 'banana'];
fruits.push('orange', 'grape');
// fruits.push();
console.log(fruits);
// ['kiwi', 'cherry', 'banana', 'orange', 'grape']

// 2. Remove the last item using `pop()`. The method returns the popped item, so save that to a variable:

let poppedItem = fruits.pop();
console.log(fruits);
console.log('poppedItem:', poppedItem);
// ['kiwi', 'cherry', 'banana', 'orange']

// 3. Arrange the items in alphabetical order with `sort()`. The method changes the array rather than returning a new one:
fruits.sort();
console.log(fruits);

// shift() and unshift()
/*
- unshift() adds an item to the beginning of an array.
- shift() removes the first item and returns it. 
*/

// 4. Use unshift() to add an item to the beginning of the fruits array:
fruits.unshift('apple');
console.log(fruits);
// ['apple', 'banana', 'cherry', 'kiwi', 'orange']

// 5. Use **shift()** to remove and return the first item, saving that to a variable:

let shiftedItem = fruits.shift(); // apple
console.log('shiftedItem:', shiftedItem);
console.log(fruits);
// ['banana', 'cherry', 'kiwi', 'orange']

// concat()
// concat() concatentates two or more arrays:

// 6. Declare three arrays, and then concat them into one:
const tropicalFruits = ['mango', 'kiwi', 'banana', 'pineappple'];
const citrusFruits = ['orange', 'lemon', 'lime', 'tangerine'];
const blossomFruits = ['apple', 'peach', 'cherry', 'plum'];

const fruitCocktailArr = tropicalFruits.concat(citrusFruits,
blossomFruits);
console.log('\nfruitCocktailArr\n', fruitCocktailArr);

// ['mango', 'kiwi', 'banana', 'pineappple', 'orange', 'lemon', 'lime', 'tangerine', 'apple', 'peach', 'cherry', 'plum']

// Sort the fruit cocktail array:
fruitCocktailArr.sort();
console.log('\nfruitCocktailArr\n', fruitCocktailArr);
// ['apple', 'banana', 'cherry', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'pineappple', 'plum', 'tangerine']

// alternative to concat() for combining arrays
// ... spread operator for making copies of an array
const tropicalFruitDoubles = [...tropicalFruits, ...tropicalFruits];
console.log('\ntropicalFruitDoubles\n', tropicalFruitDoubles);

const cocktailFruits = [...tropicalFruits, ...citrusFruits, ...blossomFruits];
console.log('\ncocktailFruits\n', cocktailFruits);

// splice()

// splice() removes or swaps out items at a specified index or range of indices. With splice(), you can remove or replace any item, or sequence of items, anywhere in the array. 

// The splice() method takes two arguments: the index of the first item to remove, and the number of items to remove. 

// The splice() method returns the removed item(s). If more than one item was removed, it returns an array.

// 8. Remove the item at index 9, which is 'pineapple':
fruitCocktailArr.splice(9,1);
console.log('\nfruitCocktailArr\n', fruitCocktailArr);
console.log(fruitCocktailArr[10]); // tangerine
// ['apple', 'banana', 'cherry', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'plum', 'tangerine']
// **** CHALLENGE PART A: ****
// make, as concatenated string, a random smoothie of
// two different fruits from the fruitCocktailArr: 
// GOOD: 'kiwi-mango'
// BAD: 'kiwi-kiwi'
// HINT: Use Math.random() and array.splice() methods
let r = Math.floor(Math.random() * fruitCocktailArr.length);
console.log('r:', r); 
let randFruit1 = fruitCocktailArr[r];

// remove fruit at index r so it cannot repeat
fruitCocktailArr.splice(r,1);

// array is 1 item shorter
console.log(fruitCocktailArr.length, fruitCocktailArr);
r = Math.floor(Math.random() * fruitCocktailArr.length);
let randFruit2 = fruitCocktailArr[r];

// remove fruit at index r so it cannot repeat
fruitCocktailArr.splice(r,1);

// array is 1 more item shorter
console.log(fruitCocktailArr.length, fruitCocktailArr);

let smoothie = `${randFruit1}-${randFruit2}`;
console.log('smoothie:', smoothie); 
// every smoothie is a unique pair of fruits
// run it enough times to be sure there are no repeats
// **** END CHALLENGE *****

// 9. Starting at index 2, splice out four consecutive items, saving the result to a new array:

// To swap an item with `splice()`, pass in the new item as additional argument(s). 

// 10. Using splice(), swap 'peach' for 'papaya':
fruitCocktailArr.splice(4, 1, 'peach');
// ['apple', 'banana', 'cherry', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'plum', 'tangerine']
console.log(fruitCocktailArr.length, fruitCocktailArr);

//  To swap more than one item with `splice()`, just add more arguments. 

// 11. Replace 2nd and 3rd fruits w 'blueberry', 'strawberry', 'raspberry', 'cranberry'
fruitCocktailArr.splice(1, 2, 'blueberry', 'strawberry', 'raspberry', 'cranberry');
console.log(fruitCocktailArr.length, fruitCocktailArr);

// splice for avoiding repeats of random array items

// If you keep choosing items at random from an array, you will eventually get repeats. To avoid repeats, splice out each item as you go.

// 12. Pick two random fruits from `fruitCocktailArr`, and log them both:

// 13. Rerun the console.log until you get a repeat fruit. To rerun the console command, hit the Up Arrow and then hit Enter.

// To avoid repeats, each time a random fruit is chosen, splice it out of the array with `splice(r, 1)`. The index, `r`, is the random item and the number of items to remove is 1.

// 14. Choose two random fruits again, but this time splice out the first choice before choosing the second one:

// 15. Rerun the console.log command repeatedly to verify that no repeats occur. Soon, the array will be empty and the results `undefined`:


// slice()

// slice() method is called on an array and takes two arguments: a start and end index. 
/*
- `slice()` returns a new array without affecting the original array. 
- `slice()` end index is exclusive, so *not* included in the new array.
*/

// 16. Starting at index 2 and ending at index 5 (exclusive),
//  make a new array called fruitSlices, consisting of 3 items. 
// fruitCocktailArr.sort();
let fruitSlices = fruitCocktailArr.slice(2,5); 
console.log(fruitSlices);
    
// If you omit the second argument, it slices from the 
// start index (first argument) all the way to the end:

// 17. Starting at index 4 (5th item), go all the way to end:
let slicedFruit = fruitCocktailArr.slice(4);
console.log(slicedFruit);

// 17B. slice() accepts negative values, which start at the
// end of the array
let last5fruits = fruitCocktailArr.slice(-5);
console.log('last5fruits:', last5fruits);

// 17C. negative values can begin and end range:
let nextToLast3Fruits = fruitCocktailArr.slice(-4,-1);
console.log('nextToLast3Fruits:', nextToLast3Fruits);

// 17D. 2 ways to combine arrays:
// 1st way to combine arrays: concat()
let odds = [1,3,5,7,9];
let evens = [0,2,4,6,8];
let digits = odds.concat(evens);
console.log(digits);
// 2nd way to combine arrays: ... spread operator
let myDigits = [...odds, ...evens];
console.log(myDigits);

// a way to copy an array: slice(0)
let mydigits = myDigits.slice(0);
console.log(mydigits);

// ... to copy (not combine)
let numeros = [...digits];
console.log(numeros);

let oddballs = [...odds];
console.log(oddballs);

let oddNums = odds;
console.log(oddNums);

// includes()

// The includes() method is called on an array and returns 
// true if its argument is found in the array, 
// and false if it is not:
let isLemon = fruitCocktailArr.includes('lemon');
console.log('isLemon:', isLemon);
console.log(fruitCocktailArr);

let isBanana = fruitCocktailArr.includes('banana');
console.log('isBanana:', isBanana);
console.log(fruitCocktailArr);

// 18. Call the `includes()` method to get one true and one false result:

// true

// false

// indexOf()

// The indexOf() method is called on an array and returns 
// the index of the first instance of the argument. 
// If it is not found, it returns -1.

// 19. Declare an array of reptiles and run the indexOf() method a few times:
const reptiles = ['iguana', 'snake', 'turtle', 'snake', 'gekko', 'snake', 'lizard', 'gekko', 'iguana'];

console.log('index of 1st snake:', reptiles.indexOf('snake')); // 1

let firstSnakeIndex = reptiles.indexOf('snake');
console.log('index of 2nd snake:', reptiles.indexOf('snake', firstSnakeIndex+1)); // 2

// To specify a starting index, pass in a second argument. This skips earlier instances of the word:

// 20. Starting at index 2, get the position of the first snake after that:

// The lastIndexOf() method returns the index of the last occurrence of the argument. If it is not found, it returns -1:
let lastSnakeIndex = reptiles.lastIndexOf('snake');
console.log('index of last snake:', lastSnakeIndex);

// if the item is not found in array, indexOf() and lastIndexOf()
// return -1
console.log('index of Komodo dragon:', reptiles.indexOf('Komodo dragon')); // -1

// join()
// The join() method is called on an array and returns a 
// string consisting of all the items, separated by commas. 
// It does not change the array:

// 21. Join the reptiles into a long slithering string:

let reptilesStr = reptiles.join();

console.log('reptilesStr', reptilesStr);
// iguana,snake,turtle,snake,gekko,snake,lizard

// The join method can take a *delimiter* argument--character(s) 
// that will appear between the items in the resulting string.
// array.join(' ') returns string with space between each item
reptilesStr = reptiles.join(' ');
console.log('reptilesStr', reptilesStr);

// 22. Put an asterisk surrounded by spaces between each 
// item in the string:
let reptilesStarStr = reptiles.join(' * ');
console.log('reptilesStarStr', reptilesStarStr);
// iguana * snake * turtle * snake * gekko * snake * lizard

// flat() method takes a nested array (matrix) as its argument
// and returns a flat, one-dimensional array. It does not change 
// the original array.

// 23. Declare a 3x3 / 2D / nested array:
const ticTacToe = [
    ['X', 'O', null],
    [null, 'X', 'O'],
    ['O', null, 'X']
];

// get the middle X
console.log('middle X:', ticTacToe[1][1]);

// 24. Flatten the array:
const tttFlattened = ticTacToe.flat();
console.log(tttFlattened);
console.log('middle X:', tttFlattened[4]);

console.log(ticTacToe);

// console.log('flatArr', flatArr); 
// ['X', 'O', null, null, 'X', 'O', 'O', null, 'X']

// copying an array with slice(0)

// An array can be copied in a number of ways. One way is `slice(0)`. Starting at index 0 and going all the way to the end by omitting the second argument, it returns a new array which includes all items in the original.

// 25. Declare an array and make a copy of it:

// ['giraffe', 'leopard', 'ostrich' etc.]

// reverse()

// The reverse() method reverses the order of the items in an array. It is often combined with sort() to flip the sorted order:

// 26. Sort and then reverse the animals array:
const animals = ['giraffe', 'leopard', 'ostrich', 'zebra', 'panda',
'moose', 'bison', 'aardvark', 'baboon', 'rhinoceros'];

animals.sort();
animals.reverse();
console.log(animals);
// ['zebra', 'rhinoceros', 'panda', 'ostrich', 'moose', 'leopard', 'giraffe', 'bison', 'baboon', 'aardvark']

// method chaining
// Methods can be called one after another, on the same line. 
// This is known as methods chaining:
reptiles.push('Komodo dragon', 'bearded dragon', 'tortoise', 'crocodile', 'alligator');
reptiles.sort().reverse();
// 27. In one line of code, sort and then reverse the `reptiles` array:
console.log(reptiles);

// END Lesson 04.03
// NEXT Lesson 04.04

// Lesson 04.04 - START
// string methods

// String methods are actions that are called on strings. 

// string[index]
// With arrays, you get items by index.
// With strings you get *characters* by index:

let fruit = 'cherry';
// get the first and third characters:
console.log(fruit[0]); // c
console.log(fruit[2]); // e

// string.length
// As with arrays, the length property of a string returns the number of items, in this case the number of characters:
console.log(fruit[fruit.length-1]); // y

let pswd = '35ew54hsgdG@1';
console.log(pswd.length);

// use if-statement to check pswd length and if pswd is not at least 8 chars, say "pswd too short!"
if(pswd.length < 8) {
    console.log("pswd too short!");
} else {
    console.log("new pswd set!");
}

// string.replace(a, b)
// The replace() method is called on a string. It takes two arguments: 
// - what you want to replace 
// - what you want to replace with

// It returns a new string, without changing the original. Change 'cherry' to 'berry':

let froot = 'cherry';
let newWord = froot.replace('ch', 'b');
console.log("newWord", newWord);

// you can call string methods directly on the actual string -- does not have to be a variable
let newWd = 'cherry'.replace('y', 'ies');
console.log("newWd", newWd);

// Given a 'banana', make a 'batata' (a kind of sweet potato), BUT you cannot replace the whole word--just the n's.

let food1 = 'banana';
let food2; // batata
food2 = food1.replace('n', 't'); // nope!
console.log("food2", food2);

// Notice that we only got 'batana', which means that the replace() method only changes the first occurrence.

// replace() does not change the original string
console.log("food1", food1);

// To change ALL n's to t's we could use a global replacement, which requires RegEx (Regular Expression) syntax:
food2 = food1.replace(/n/g, 't');
console.log("food2", food2);

// replaceAll()
// To change ALL n's to t's we could also use replaceAll()
// To replace all instances of a character, use replaceAll():
let food3 = food1.replaceAll('n', 't');
console.log("food3", food3); // batata

let sentence1 = "There is a blue car in the driveway of that blue house. The owner must really like the color blue!";

let sentence2 = sentence1.replaceAll('blue', 'green');
console.log("sentence2", sentence2); // There is a green car in the driveway of that green house. The owner must really like the color green!

// The replace() method can replace a space with a word. Turn 'fresh salad' into 'fresh garden salad':
let salad = 'fresh salad';
// let newSalad = 'fresh salad'.replace(' ', ' garden ');
let newSalad = salad.replace(' ', ' garden ');
console.log("newSalad", newSalad);

// Replace all the spaces in a sports headline with hyphens, 
// and add ".html" at the end to make a file name:
// tools you need from your JS toolkit for this one:

// replaceAll()
// toLowerCase()
// concatenation

let sportsHeadline = "Tom Brady Comes out of Retirement";
let filename;
filename = sportsHeadline.replaceAll(' ', '-');
console.log("filename", filename); 
// Tom-Brady-Comes-out-of-Retirement

let lcFileName = filename.toLowerCase();
console.log("lcFileName", lcFileName);
// tom-brady-comes-out-of-retirement

lcFileName += '.html';
console.log("lcFileName", lcFileName);
// tom-brady-comes-out-of-retirement.html

// toLowerCase()
// The toLowerCase() method is called on a string and returns an all-lowercase version of the string, without changing the original

// toUpperCase()
// The toUpperCase() method is called on a string and returns an all-uppercase version of the string, without changing the original:
let speak = 'Where are you?';
let shout = speak.toUpperCase();
console.log("shout", shout); // WHERE ARE YOU?

// includes()
// The includes() method takes a character(s) as its argument and returns true or false, based on whether or not the character(s) are in the string;
// review of array.includes()
let fruitsArr = ['apple', 'banana', 'cherry'];
console.log(fruitsArr.includes('cherry')); // true
console.log(fruitsArr.includes('batata')); // false

// for strings, you are checking for characters, not array items
let bev = 'papaya smoothie';
console.log(bev.includes('pap')); // true
console.log(bev.includes('mop')); // false

// indexOf()
// The indexOf() method takes a character(s) as its argument and returns the index of the first occurrence:
let smoothie = 'papaya-pineapple';
console.log(smoothie.indexOf('p')); // 0

// As with array.indexOf() you can set a start index. Starting at index 1 skips index 0, which is the first 'p'
console.log(smoothie.indexOf('p', 1)); // 2

// lastIndexOf()
// The lastIndexOf() method takes a character(s) as its argument and returns the index of the last occurrence:
console.log(smoothie.lastIndexOf('p')); // 13

// If the char is not found in string, indexOf and lastIndexOf return -1:
console.log(smoothie.indexOf('q')); // -1
console.log(smoothie.lastIndexOf('q')); // -1

// The indexOf() method is useful for finding the space between two words, which combined with slice() lets us select individual words:
let appetizer = 'fresh salad platter';
let firstSpaceIndex = appetizer.indexOf(' '); // 5
console.log('firstSpaceIndex', firstSpaceIndex); // 5

// If you get the second space, now you have isolated the second word:
// use the index of the first space +1 to set the start search position
let secondSpaceIndex = appetizer.indexOf(' ', firstSpaceIndex+1); // 5
console.log('secondSpaceIndex', secondSpaceIndex); // 11

// slice()
// The slice() method returns a substring of the string it is called on, without changing the original string. It takes two arguments: a starting and an ending index. The end index is exclusive, meaning it is not included in the returned string. 
appetizer = 'fresh chesse platter special';

// start with some meaningless slice, just to see how it works:
let someSlice = appetizer.slice(3, 16);
console.log('someSlice', someSlice); // sh salad plat

// get the second word (doesn't matter what the word it--it's just the characters between the 1st and 2nd spaces, and we have those indexes)
let secondWord = appetizer.slice(firstSpaceIndex, secondSpaceIndex);
console.log('secondWord', secondWord); // salad
console.log(secondWord.length); // 6 because it includes the first space

// don't include the first space in the slice
secondWord = appetizer.slice(firstSpaceIndex+1, secondSpaceIndex);
console.log('secondWord', secondWord); // salad
console.log(secondWord.length); // 5

// If the end index is omitted, it slices to the end. 
let name1 = "Robinson";
let partOfName = name1.slice(5);
console.log('partOfName', partOfName); // son

// you can also start counting from the end with negative index
lastFiveChars = name1.slice(-5); // last 5 chars
console.log('lastFiveChars', lastFiveChars); // inson

// get all but first word of phrase
// appetizer = 'delicious chesse platter special';
let allButFirstWord = appetizer.slice(firstSpaceIndex+1);
console.log('allButFirstWord', allButFirstWord); // chesse platter special

// slice()
// given string, use string.slice() method to get all but the last char:
// berry ... berr
let item = 'berry';
let newItem = item.slice(0, -1); // 'berr'
// HINT: remember slice accepts negative index to start from the end
console.log('newItem', newItem); // inson

// given an array of fruits in the singular:
let fruits = ['apple', 'apricot', 'banana', 'blueberry', 'cherry','raspberry', 'strawberry'];
// choose a fruit at random and console log the plural:
// 'apples', 'apricots', 'bananas', 'blueberries'
// STEP 1: choose a random fruit and log it to the console.
//      1a: generate a random integer in range of array: 0-5
let r = Math.floor(Math.random() * fruits.length); // 0-5
//      1b: use the random integer to get the fruit at that index
let randomFruit = fruits[r];

if(randomFruit.slice(-1) == 'y') { // works for 'cherry' AND 'berry'
    randomFruit = randomFruit.slice(0, -1); // drop the "y"
    randomFruit += 'ies'; // and add "ies"
} else { // not a berry
    randomFruit += 's'; // so just add "s"
}
// the reason for doing this is if you had an array of singular words and you needed to use them in the plural form:
// console.log('Would you like some ' + fruits[r]); // original sing.: BAD
console.log('Would you like some ' + randomFruit); // new plural: GOOD

// toUpperCase() + slice() to capitalize a word**
// There is no method for capitalizing a word, but we can get the first character and uppercase that. We  also slice off the rest of the string, and then reconnect that part to the uppercased first letter.

// given a string:
let firstName = 'alexandria';
// make a capitalized version: 'Alexandria';
// STEP 1a: get the first char and uppercase it
let firstCharUC = firstName[0].toUpperCase();
console.log('firstCharUC', firstCharUC); // A
//      1b: get everything except the first char as a separate string
let capitalizedName = firstCharUC + firstName;
console.log('capitalizedName', capitalizedName); // Aalexandria
let allButFirstChar = firstName.slice(1); // 'lexandria';
console.log('allButFirstChar', allButFirstChar); // Aalexandria

capitalizedName = firstCharUC + allButFirstChar;
console.log('capitalizedName', capitalizedName); // Aalexandria

//      1c: concatenate the result of steps 1a and 1b and log it

// Connect the capitalized first letter with the rest of the string:

// split()
// The split() method is called on a string and returns an array.
let movieQuote = 'Show me the money'; 
let movieQuoteArr = movieQuote.split(' '); // split at the spaces
console.log('movieQuoteArr', movieQuoteArr); // Aalexandria

// Notice that there is only one item in the resulting array. To have each word become an array item, pass the split() method the space between the words as its **delimiter**:


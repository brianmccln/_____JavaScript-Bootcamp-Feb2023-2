// Lesson 04.04 - START
// string methods

// String methods are actions that are called on strings. 

// string[index]
// With arrays, you get items by index.
// With strings you get *characters* by index:
let appetizer = '';

let fruit = 'cherry';
// get the first and third characters:
console.log(fruit[0]);
console.log(fruit[2]);

// string.length
// As with arrays, the length prpoerty of a string returns the number of items, in this case characters:

let password = '35khD%ewG@1';
password = '35khD%ew345qagN7dhdG@1';
if(password.length < 15) {
    console.log('Password too short! It\'s only ' + password.length + ' chars');
} else {
    console.log('Password is ' + password.length + ' chars--good enough!');
}

// string.replace(a, b)
// The replace() method is called on a string. It takes two arguments: 
// - what you want to replace 
// - what you want to replace with
let newFruit = fruit.replace('ch', 'b');
console.log(newFruit);
console.log(fruit);
// It returns a new string, without changing the original. Change 'cherry' to 'berry':

// Change 'n' to 't' in an attempt to change 'banana' to 'batata' (a kind of sweet potato):
fruit = 'banana';
let sweetPotato = fruit.replace('n', 't');
console.log(sweetPotato);
console.log(fruit);

// Notice that we only got 'batana', which means that 
// the replace() method only changes the first occurrence 
// of the target character(s).

// The replace() method can replace a space with a word. Turn 'fresh salad' into 'fresh garden salad':

// replaceAll()
// To replace all instances of a character, use replaceAll():
sweetPotato = fruit.replaceAll('n', 't');
console.log(sweetPotato);
console.log(fruit);

// includes()
// The includes() method is called on a string
// it takes a character(s) as its argument and 
// returns if the character(s) are in the string
// returns false if the character(s) are not in the string

let bev = 'papaya smoothie';
console.log(bev.includes('smooth')); // true
console.log(bev.includes('giraffe')); // false

// indexOf()
// The indexOf() method takes a character(s) as its argument 
// and returns the index of the first occurrence
// if char(s) not found, it returns -1
console.log(fruit.indexOf('n')); // 2
console.log(fruit.indexOf('x')); // -1

// lastIndexOf()
// The lastIndexOf() method takes a character(s) as its 
// argument and returns the index of the last occurrence:
console.log(fruit.lastIndexOf('n')); // 4
console.log(fruit.lastIndexOf('x')); // -1

// If the char is not found in the string, indexOf returns -1:

// The indexOf() method is useful for finding the space between two words, which gives the length of the first word:

appetizer = 'fresh salad';
// make 'fresh garden salad'
let freshAppie = appetizer.replace(' ', ' garden ');
console.log(freshAppie);

// charAt()
fruit = 'apple';
console.log(fruit[0]); // a
console.log(fruit.charAt(0)); // a

// slice()
// The slice() method returns a substring of the string 
// it is called on, without changing the original string. 
// It takes two arguments: a starting and an ending index. 
// The end index is exclusive, meaning it is not included 
// in the returned string. If the 2nd arg is omitted, 
// it slices to the end. 
let dynamicDuo = 'Batman and his young ward Robin';
let hero1 = dynamicDuo.slice(0,6);
console.log(hero1);
let hero2 = dynamicDuo.slice(11);
console.log(hero2);
// get the lastIndex
let indexOfLastSpace = dynamicDuo.lastIndexOf(' ');
hero2 = dynamicDuo.slice(indexOfLastSpace+1);
console.log(hero2);


// indexOf() and lastIndexOF() with slice()
// But what if we didn't know the length of the word. We would have to get the index of the first space and then use that as the end index:

let superCouple = 'Superman and Lois Lane';


// To get 'Lois Lane', we could get the index of the first 'L' and then just slice to the end of the string:


// To get the last word of a string, get the index of the last space, and then slice from there to the end:

// split()
// The split() method is called on a string and returns an array.

let movieQuote = 'Show me the money';


// Notice that there is only one item in the resulting array. To have each word become an array item, pass the split() method the space between the words as its **delimiter**:


// toLowerCase()
// The toLowerCase() method is called on a string and returns an all-lowercase version of the string, without changing the original:

let newsFlash = 'Yankees Win World Series';

let news = 'Mets Win World Series';

// ['Mets', 'Win', 'World', 'Series']

// Mets-Win-World-Series.jpg;

// mets-win-world-series.jpg;

// toUpperCase()
// The toUpperCase() method is called on a string and returns an all-uppercase version of the string, without changing the original:

let headline = 'Jets Win Superbowl';

// toUpperCase() + slice() to capitalize a word**
// There is no method for capitalizing a word, but we can get the first character and uppercase that. We  also slice off the rest of the string, and then reconnect that part to the uppercased first letter.

// Get the first letter and uppercase it:

let firstName = 'alexandria';

// Get the rest of the string:

// Connect the capitalized first letter with the rest of the string:



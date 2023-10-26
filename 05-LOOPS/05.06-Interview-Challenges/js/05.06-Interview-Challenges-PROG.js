// Lesson 05.06
// Classic Programming Job Interview Challenges:
// A. Fizz-Buzz
// B. Find nth Fibonacci Number
// C. Check for duplicates in array

// A. Fizz-Buzz

// Output to the console all integers from 1-100 along with "Fizz" and/or "Buzz" according to the following rules:
/*
- If the number is evenly divisible by both 3 and 5, output the number followed by ' Fizz-Buzz'.
- If the number is evenly divisible by 3 (but not 5), output the number followed by ' Fizz'.
- If the number is evenly divisible by 5 (but not 3), output the number followed by ' Buzz'.
- If the number is divisible by neither 3 nor 5, output just the number.

Before tackling "Fizz-Buzz", let's try an example of modulo (%), which returns the remainder of the first number divided by the second number:
*/
let remainder;
console.log('remainder', remainder); // 2

// And now for "Fizz-Buzz"...

// 1. Set up a for loop that goes from 1-100:
for(let i = 1; i <= 100; i++) {

    // If the number is evenly divisible by BOTH 3 and 5, output the number followed by ' Fizz-Buzz'.
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' Fizz-Buzz');
    // If the number is evenly divisible by 3 (but not 5), output the number followed by ' Fizz'.
    } else if(i % 3 === 0) {
        console.log(i + ' Fizz');
    // If the number is evenly divisible by 5 (but not 3), output the number followed by ' Buzz'.
    } else if(i % 5 === 0) {
        console.log(i + ' Buzz');
    // If the number is divisible by neither 3 nor 5, output just the number.
    } else {
        console.log(i);
    }

}
// 2. Use the **&&** (AND) operator to see if the current number returns a remainder of 0 when divided by 3 and 5:


    // 3. If the number is not divisible by both 3 and 5, check if it's divisible by 3 only. If it is, log the number followed by 'Fizz':

    // 4. Add another *else if* to see if the number is divisible by just 5. If it is, log the number followed by 'Buzz':


    // 5. Finally, if the number is divisible by neither 3 nor 5, log just the number:

    
// B. find nth Fibonacci number**

// given array [0, 1], find the nth Fibonacci number
/* 
Another popular coding challenge is to produce a Fibonacci sequence.

"Find the 20th number in the Fibonacci sequence."

It is generally required that programming challenges be implemented as a function.

6. Start by declaring an array with the two starter values, and a number variable for the target. These givens may or may not be provided in code form, as variables:
*/
const fibos = [0, 1]; // start w array of first 2 fibos
let n = 20; // find the 20th fibo

function makeFibos(fibos, finalLen) {
    let fibosLen = fibos.length;
    let iterations = finalLen - fibosLen;
    for(let i = 0; i < iterations; i++) {
        let nextFibo = fibos[i] + fibos[i+1];
        fibos.push(nextFibo);
    }
    return fibos[fibos.length-1]; // return last item in fibos
}

let fibo20th = makeFibos(fibos, n);
console.log('fibo20th:', fibo20th);

// 14. Make a new starter array with a few more "fibos" in it:
// const fiveFibos = [0, 1, 1, 2, 3];

// 7. Set up the function that expects an array and a number.


    // 13. Above the loop, save the target **n** minus the length of the array argument to a variable, **loopTimes**. This lets the starter array can have more than two items:
    // let loopTimes;

    // 8. Set up a loop that runs n-2 times. Again, the reason we use n-2 instead of n is because the starter array [0,1] gives us a two-item headstart:

        // 9. Add the last two numbers together and push the sum into the array:
        // let nextFibo;

    // 10. Return the answer. Console log the full array inside the function as a test and return the last item, which is the 20th item, as stipulated by the challenge:


// 11. Call the function, saving the call to a variable which will capture the return value:

// let fibo20th;

// 12. Log the return value, which is the 20th fibo:
// console.log(fibo20th);

// 15. Call the function, passing in the five-item starter array, saving the return value to a new variable:
let twentiethFibo;
console.log(twentiethFibo);

// C. Find duplicate items in an array

// "Given an array of numbers or strings, find all duplicate items and return them as a new array. If there are no duplicates, return 'none'"

// 16. Assuming nums1 is given, declare three more arrays, to give us more testing scenarios:

const nums1 = [2, 4, 9, 5, 14, 7, 3, 8, 9, 8, 4, 17, 11, 6, 9, 8, 20, 7, 4, 9, 13, 11, 6, 7, 4];
// dups = [7, 6, 11, 9, 4, 7, 8, 4, 8, 9]
const nums2 = [2, 4, 5, 7, 1, 9, 11, 3, 6, 8, 10];
const fruits1 = ['apple', 'banana', 'apple', 'cherry', 'kiwi', 'banana', 'mango', 'pear', 'peach', 'kiwi', 'grape', 'kiwi'];
const fruits2 = ['apple', 'banana', 'cherry', 'mango'];
const symbols = ['$', '#', '$', '&', '@', '%', '^', '@', '!', '%', '?'];

// 17. Define a function that takes an array as its argument:
function findDups(arr) {
    const dups = [];
    while(arr.length > 1) {
        let popped = arr.pop(); // remove 1st item from arr
        console.log(popped);
        console.log(arr);
        // see if what's left in arr includes shifted
        if(arr.includes(popped)) { // if the removed item is still in arr
            if(!dups.includes(popped)) {
                dups.push(popped);
            }
        }
    }
    dups.sort((a,b) => a - b); // sort in asc order
    return dups.length > 0 ? dups : "none";
}

// const nums1 = [4, 5, 7, 8, 9, 4, 6, 6, 8, 7, 9, 6, 7];
console.log('nums1 non-unique values:', findDups(nums1)); // [4,6,7,8,9,11]
console.log('nums2 dups:', findDups(nums2)); // none
console.log('fruits1 dups:', findDups(fruits1)); // ['apple', 'banana', 'kiwi']
console.log('fruits2 dups:', findDups(fruits2)); // none
console.log('symbols dups:', findDups(symbols)); // ['$', '@', '%']

    // 19. Define an object above the loop. Inside the loop, check if the current array item is not (!) already a key; if it is not, make a key for that item:
    // let obj;
    // let dups;

    // 18. Iterate the array:
 

        // 21. Above the if-else, save arr[i] to a variable:
        // let item;

   

        // 20. But if the current array item, **arr[i]** is already a key, we have a duplicate item, so push it into the array of duplicates. Also, declare a new empty array, dups, above the loop for storing the duplicates.

        // 24. We are getting duplicates of duplicates, such as: ['apple', 'kiwi', 'banana', 'kiwi']). Let's add logic so that the duplicate gets pushed into the array only if it is *not* already there:


    // 22. After the loop ends, check if the dups array has any items it it. If it doesn't, return the array. Else, return "none":


// 23. Call the function four times, once for each array. Save the function call to a variable so that we "capture" the return value. Log the results:

// let n1;
// console.log('duplicates:', n1);

// let n2;
// console.log('duplicates:', n2);

// let f1;
// console.log('duplicates:', f1);

// let f2;
// console.log('duplicates:', f2);

// - An ANAGRAM is word whose letters can be rearranged to make another word. 
// Example: PEACH and CHEAP are anagrams.

// - A PALINDROME is a word that is spelled the same forwards and backwards, 
// such as KAYAK or RACECAR.

// Write a function called wordalyze that takes one or two strings as arguments, 
// and returns one of four results:

// 1.) if two strings are passed in, and they are anagrams, it returns a message, 
//     like: "PEACH & CHEAP ARE ANAGRAMS"

// 2.) if two strings are passed in, and they are NOT anagrams, it returns a message, 
//     like: APPLE & PEACH ARE NOT ANAGRAMS"

// 3.) if one string is passed in, and it is a palindrome, it 
//     returns a message, like: KAYAK is a PALINDROME

// 4.) if 1 strings is passed in, and it is NOT a palindrome, it returns a message, 
//     like: APPLE is NOT a PALINDROME

// Assume valid input, that is, assume only strings will be inputted to the function 
// and there will either be one or two strings.

// Brian's solution:
function wordalyze(str1, str2="") {

    // make array of letters from str1:
    const str1Arr = str1.split('');

    // palindrome check:
    if(str2 == "") { // if only one str was passed in, str2 is still ""
        // reverse str1Arr
        const str1ArrRev = str1Arr.reverse();
        // join str1ArrRev into a string, which will be str1 backwards:
        let str2Rev = str1ArrRev.join('');
        // compare if str1 equals itself, backwards:
        if(str1 == str2Rev) {
            return `${str1.toUpperCase()} is a PALINDROME`;
        } else {
            return `${str1.toUpperCase()} is NOT a PALINDROME`;
        }
    // anagram check:
    // else str2 is NOT an empty string, so 2 strings were passed in:
    } else {
        // make array of letters from str2:
        const str2Arr = str2.split('');
        // sort str1Arr and str2Arr; this alphabetizes the arrays, so if
        // str1 and str2 are anagrams, the arrays will be identical:
        str1Arr.sort();
        str2Arr.sort();
        // join the sorted arrays into strings so they can be compared
        // if the strings are equal, then str1 and str2 are anagrams:
        let sortedStr1 = str1Arr.join('');
        let sortedStr2 = str2Arr.join('');
        if(sortedStr1 == sortedStr2) {
            return `${str1.toUpperCase()} and ${str2.toUpperCase()} are ANAGRAMS`;
        } else {
            return `${str1.toUpperCase()} and ${str2.toUpperCase()} are NOT ANAGRAMS`;
        }
    }
}

// Yuli's solution:
// const wordalyze = function(stringA, stringB) {
//     if (arguments.length === 1) {
//       let reversed = '';
//       for (let i = (stringA.length - 1); i >= 0; i--) {
//         reversed = reversed.concat(stringA[i]);
//       }
//       if (reversed === stringA) {
//         return `${stringA.toUpperCase()} is a PALINDROME`;
//       }
//       else {
//         return `${stringA.toUpperCase()} is NOT a PALINDROME`;
//       }
//     }
  
//     if (arguments.length === 2) {
//       if (stringA.length !== stringB.length) {
//         return `${stringA.toUpperCase()} & ${stringB.toUpperCase()} ARE NOT ANAGRAMS`;
//       }
  
//       const parsedA = stringA.split('').sort().join('');
//       const parsedB = stringB.split('').sort().join('');
  
//       if (parsedA === parsedB) {
//         return `${stringA.toUpperCase()} & ${stringB.toUpperCase()} ARE ANAGRAMS`;
//       } else {
//         return `${stringA.toUpperCase()} & ${stringB.toUpperCase()} ARE NOT ANAGRAMS`;
//       }
//     }
//   };
  
  // const result = wordalyze('kayak');
  // const result = wordalyze('apple');
  // const result = wordalyze('ppeach','cheap');
  const result = wordalyze('peach','cheap');
  // const result = wordalyze('apple', 'peach');
  console.log(result);

console.log(wordalyze('cat', 'dog')); // NOT anagrams
console.log(wordalyze('team', 'mate')); // anagrams
console.log(wordalyze('racecar')); // palindrome
console.log(wordalyze('bunny')); // NOT palindrome
console.log(wordalyze('kayak')); // palindrome
console.log(wordalyze('dusty', 'study')); // anagrams
console.log(wordalyze('apple', 'grape')); // NOT anagrams
console.log(wordalyze('radar')); // palindrome
console.log(wordalyze('night', 'thing')); // anagrams
console.log(wordalyze('banana')); // NOT palindrome
console.log(wordalyze('peach', 'cheap')); // anagrams
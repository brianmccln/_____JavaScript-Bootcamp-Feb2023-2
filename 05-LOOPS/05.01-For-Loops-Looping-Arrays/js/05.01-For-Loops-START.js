// Lesson 05.01 - FINAL

// for loops

// 1. Write a for loop which:
/*
- has a counter: `let i = 0`
- goes increases by one each time: `i++`
    - `i--` decreases by 1
- repeats until `i < 10` is false
*/




// 2. Try to access `i` outside the loop. We get an error: "i is not defined":




// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:




// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.




// 5. Write a loop with a counter that decrements (counts backwards):




// 6. Change `i` to `j` and see that `j` ceases to exist once the loop ends:




// infinite loop

// 7. Write but then comment out and do not run this infinite loop. Just look at it and understand. Running it may freeze your browser--or your entire computer.




// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):




// continue

// 9. Output all numbers from 1-10, with the exception of 7:




// iterating (looping) arrays

// 10. Declare an array:




// 11. Add a few more items to the end of the array:




// 12. Add a few items to the beginning of the array:




// 13. Output the array and its length:




// ['tangerine', 'watermelon', 'grapefruit', 'apple', 'blueberry', 'cherry', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 13


// 14. Starting at index 3, splice out 3 items ('apple', 'blueberry', 'cherry'), and replace them with 'lemon' and 'pear':



// ['tangerine', 'watermelon', 'grapefruit', 'lemon', 'pear', 'kiwi', 'lime', 'orange', 'plum', 'apricot', 'papaya', 'grape'] 12 


// 15. At index 7, 'orange', use splice to insert 4 items without removing any. The new fruits will go in before 'orange':



//  ['tangerine', 'watermelon', 'grapefruit', 'lemon', 'pear', 'kiwi', 'lime', 'apple', 'blueberry', 'cherry', 'peach', 'orange','plum', 'apricot', 'papaya', 'grape'] 16

// 16. Iterate the array with a for loop.
/* 
- Each time through the loop, make a fruit jellybean.
-  There are 16 items in the fruits array, so our loop condition is `i < 16`.
*/




// 17. Push in a few more fruits, and then sort the array:




// ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'tangerine', 'watermelon']

// 18. Run the loop again:




// array.length as loop condition

// 19. Make a new loop with the dynamic condition `i < fruits.length`, and run it again:



// string.length

// 20. If the fruit has no more than 5 characters, make "short fruit" jellybeans. We don't really need the bean variable, so just log the string directly:




// iterating an array to make a new array

// 21. Refactor the loop so that it saves the jellybeans by pushing them into a new array, declared above the loop:




// ['apple jellybean', 'grape jellybean', 'kiwi jellybean', 'lemon jellybean, 'lime jellybean', 'mango jellybean', 'peach jellybean', 'pear jellybean', 'plum jellybean']

// Let's try some if-else if-else logic in a loop:
/*
- `if` the fruit has a max of 5 letters, it goes into the `lilFruits` array.
- `else if` the fruit has 6-8 letters, it goes into the `medFruits` array.
- `else`, the fruit of 9 or more letters it goes into the `bigFruits` array
*/

// 22. Declare the three arrays, all empty:




// 23. Run the loop with the conditional logic inside. Each part pushes qualifying fruits into its respective array:




// ['apple', 'grape', 'kiwi', 'lemon', 'lime', 'mango', 'peach', 'pear', 'plum' ]



// ['apricot', 'banana', 'cherry', 'orange', 'papaya']



// ['blueberry', 'grapefruit', ' 'pineapple', 'tangerine', 'watermelon']

// loop with nested if-else

// if the "big fruit" is a berry, save it to a `berries` array instead. For this we need a few more berries.

// We will use `splice()` to maintain alphabetical order as we add 'boysenberry', 'raspberry' and 'strawberry'. Here is the current array of 19 items:
/*
    ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'tangerine', 'watermelon']
*/

// 24. We want to add 'boysenberry' as the 5th item, between 'blueberry' and 'cherry'. So, starting at index 4 ('cherry'), remove zero items and add 'boysenberry':



// splice() with negative index values

// The splice method recognizes negative indexes, with the last item at -1. We want to add 'raspberry' and 'strawberry', consecutively, right before 'tangerine', which is at index -2.

// 25. Starting at the next to the last item ('tangerine'), and removing zero items, add 'raspberry' and 'strawberry':



// ['apple', 'apricot', 'banana', 'blueberry', 'boysenberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'raspberry', 'strawberry', 'tangerine', 'watermelon']

// 26. Declare all new empty arrays for a fresh start:




// 27. Do the for loop with the nested if-else. To see if a fruit *includes* 'berry', call `includes('berry')` on the item:




// ['apple', 'grape', 'kiwi', 'lemon', 'lime', 'mango', 'peach', 'pear', 'plum' ]



// ['apricot', 'banana', 'cherry', 'orange', 'papaya']



// ['grapefruit', ' 'pineapple', 'tangerine', 'watermelon']



// ['blueberry', 'boysenberry', 'raspberry', 'strawberry']

// Lesson 04.02 - PROG
// Objects

// 1. Open 04.02-Objects.html and preview it in the browser. Switch the file being used from FINAL .js to START .js.

// 2. In the JS file, declare a new object variable, and assign it some properties in between its curly braces:
const car = {
  make: 'Ford',
  model: 'Mustang GT',
  year: 1999,
  color: 'red',
  condition: 'excellent',
  miles: 123456,
  onRoad: true,
  forSale: false,
};

// Properties of an object are available only to the object, and are referenced by dot-sytnax: `object.property`. 

// 3. Log the whole object, as well as a few properties. In the console, open the arrow to see the properties.
console.log(car);
console.log(car.year, car.make, car.model);


// Properties are added to an existing object by dot syntax: `object.property = value`. 

// nested objects: objects as object properties

// Object properties can be other objects, including arrays.

// 4. Add two more properties to the car object, 
// one an array, the other a child object:
// and then access them using "dot.dot" square bracket syntax
car.mpg = {city: 18, hwy: 25};
car.options = ['sun roof', 'CD player', 'leather seats'];
console.log(car);

// 5. Access the new properties, using "dot.dot" 
// for the child object and square brackets for array items:
console.log('MPG City:', car.mpg.city);
console.log("Audio:", car.options[1]);

// 6. Update some of the property values of the car object. 
car.miles = 135790;
car.condition = "very good";
car.mpg.city = 17;
car.mpg.hwy = 24;
car.options[0] = 'moon roof';
car.forSale = true;

console.log(car);

// 7. Add three properties having to do 
// with the engine::
car.cylinders = 8;
car.liters = 5.0;
car.horsepower = 260;

console.log(car);

// consolidating related properties into 
// child objects

// Since `cyl` (cylinders), `hp` (horsepower) and `ltr` 
// (liters) all have to do with the engine, 
// we can bundle these into an `engine` property.

// 8. Retool the object by "bundling" `cyl`, `hp` and `ltr` into an `engine` property. This also lets us abbreviate propeterties without obscuring the meaning:
car.engine = {cyl:8, hp:260, ltr:5.0}

// 9. Log both versions of the duplicate engine properties:
console.log(car);

// delete keyword

// 10. Delete `horsepower`, `cylinders` and `liters` and then log `car` to make sure they've been deleted:
delete car.horsepower;
delete car.cylinders;
delete car.liters;
console.log(car);


// keys can have spaces

// While there is generally no upside to having spaces in keys, it is allowed. The key goes in quotes and is accessed with square brackets: `object[key]`.

// 11. Add two properties with spaces in the keys. Log the `car` object to confirm that they got added:
car["consumer reviews"] = 234;
car["star rating"] = 4.7;

// toLocaleString()

// The `number.toLocaleString()` method is called on a number and returns the number with commas, which converts it to a string.

// 12. Convert a number with no commas to a "number-like string" with commas:
let price = 21500;
let priceStr = price.toLocaleString();
console.log(priceStr, typeof(priceStr));


// object methods
// this keyword

// 13. Define a method called `listForSale`. Have it return a "FOR SALE" listing. Refer to various properties using the `this` keyword:
car.listForSale = function() {
  return `FOR SALE!
  ${this.year} ${this.make} ${this.model},
  only ${car.miles.toLocaleString('en-us')} miles,
  ${this.condition} condition. Loaded with options:
  ${this.options[0]}, ${this.options[1]},
  ${this.options[2]}, and much more.
  MPG: ${this.mpg.hwy} highway, ${this.mpg.city} city.
  Powerful ${this.engine.hp} horsepower engine.
  Price negotiable.`;
}
console.log(car.listForSale());

// 13. Call the method in two ways; directly log it and also save it to a variable, and then log the variable:
let listing = car.listForSale();
console.log(listing);

// 14. Get the elements for displaying the car data:
const carTitle = document.getElementById('car-title');
const carMPG = document.getElementById('car-mpg');
const carEngine = document.getElementById('car-engine');
const carOptions = document.getElementById('car-options');
const carListing = document.getElementById('car-listing');
const carReviewsRatings = document.getElementById('car-reviews-ratings');
const carPic = document.getElementById('car-pic');

// 15. Have the body `onload` event call an anonymous function when the document is fully loaded:
document.body.onload = function() {
  carTitle.textContent = `${car.year} ${car.make} ${car.model}`;
  carMPG.textContent = `MPG: City: ${car.mpg.city} - Hwy: ${car.mpg.hwy}`;
  carEngine.textContent = `Engine: ${car.engine.ltr}L V${car.engine.cyl} - ${car.engine.hp} hp`;
  carOptions.textContent = `${car.options[0]}, ${car.options[1]}, ${car.options[2]}`;
  carReviewsRatings.textContent = `${car['consumer reviews']}
customer reviews - ${car['star rating']} stars avg rating`;
  carListing.textContent = car.listForSale();
}

// 17. Open `animals.js` and have a look.
/* 
- It is an object called `animals` with 18 properties, each an individual animal. 
- Each `key` is an animal name, with the two-word keys in quotes.
- Each `value` is an object with four properties:
    - class (string)
    - herbivore (boolean)
    - continent (string)
    - legs (number)
*/

// looking up object property by dynamic key
console.log(animals.anaconda); // {}
console.log(animals.anaconda.continent); // S Am

console.log(animals['American bison']); // {}
console.log(animals['American bison'].continent); // A Am

// 18. Get the elements for displaying the animal data:
const animalsMenu = document.getElementById('animals-menu');
const animalName = document.getElementById('animal-name');
const animalClass = document.getElementById('animal-class');
const continent = document.getElementById('continent');
const herbivore = document.getElementById('herbivore');
const animalPic = document.getElementById('animal-pic');

// 19. Have the menu call a function on 'change' (menu choice):
animalsMenu.addEventListener('change', displayAnimalInfo);

// 20. Write the function, starting with saving the menu choice to a variable:
function displayAnimalInfo() {
    // let chosenAnimal = animalsMenu.value; 
    let chosenAnimal = this.value; // e.g. giraffe, panda
    // 21. Look up the animal in the `animals` object, using 
    // the variable as the key. For this dynamic property
    // accessor, use square brackets, not dot-syntax:
    let animalObj = animals[chosenAnimal];
    // 22. Output the animal properties to their respective tags:
    animalName.textContent = chosenAnimal;
    animalClass.textContent = 'Class: ' + animalObj.class;
    continent.textContent = 'Continent: ' + animalObj.continent;
    herbivore.textContent = 'Herbivore: ' + animalObj.herbivore;
    // 23. Set the souce of the animal image. That completes the function:
    animalPic.src = `images/${chosenAnimal}.jpg`;
}

// 21. Look up the animal in the `animals` object, using the variable as the key. For this dynamic property accessor, use square brackets, not dot-syntax:

// 22. Output the animal properties to their respective tags:

// 23. Set the souce of the animal image. That completes the function:

// Object Destructuring: making "regular" variables from object properties
// 24. Define an object:
const chair = {
  category: "dining",
  style: "Chippendale",
  material: "mahogany",
  isAntique: true,
  forSale: true,
  features: ["carved knees", "cabriole legs", "ball and claw feet"],
  describe: function() {
    let antique = "";
    let forsale = "";
    if(this.isAntique) antique = "Antique";
    if(this.forSale) forsale = "For Sale";
    return `${antique} ${this.style} ${this.category} chair. ${forsale}`;
  }
}

console.log(chair.category);
console.log(chair.style);
console.log(chair.material);
console.log(chair.features);
console.log(chair.describe());

// Destructure the object by listing its keys only in {}, set equal to the object name:
// const {key1, key2, key3} = myObject
// the resulting variables are in the global scope and are referred to by name
// without dot syntax: chair.material becomes just material

const { category, style, material, isAntique, forSale, features, describe } = chair;

console.log("destructured chair object variables:")
console.log(category);
console.log(style);
console.log(material);
console.log(features[0]);
console.log(describe());

// END: Lesson 04.02
// NEXT: LAB 04.02,
// Lesson 04.03

// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {
    make: "Lenovo",
    model: "ThinkPad E16",
    year: 2023,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }

};
laptop.describe();


// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let Laptop = [
    { make: "Lenovo", model: "ThinkPad E16", year: 2023},
    { make: "Lenovo", model: "ThinkPad L460", year: 2016},
    { make: "Apple", model: "MacBook Pro 16", year: 2023}
];

let [laptop1, laptop2, laptop3] = Laptop;
console.log(laptop1)
console.log(laptop2)
console.log(laptop3)

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let pricesSet1 = [900, 1000, 1100];
let pricesSet2 = [800, 1200, 1500];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
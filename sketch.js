// How to make an array and change its values
let names = ["John", "Bob", "Mary", "Graham", "Alex", "Adam"];
console.log(names);

names[1] = "Brian";
console.log(names);

// Adds an item to the end
names.push("Bruno")
console.log("Push: " + names);

// Pop gets rid of the last item from an array
names.pop();
console.log("Pop: " + names);

// Unshift adds an item to the start while shift removes an item from the start
names.unshift("bruno");
console.log("Unshift: " + names);

names.shift()
console.log("Shift: " + names);

// Finds an item in an array and prints a result depending if its in the array or not
console.log(names.indexOf("Mary"))	// 2
console.log(names.indexOf("Tom"))	// -1

// Prints the length of an array (last index of the array + 1)
console.log("Array length: " + names.length)

// copies a part of an array beginning at 1 and ending before it gets to 3
let slice = names.slice(1,3)
console.log(slice)

// removes a part of an array beginning at 1 and ending after it gets to 3. you can also replace this splice with a new item
names.splice(1, 3, "Peter");
console.log(names);

// both loops print out all items in the array one by one into the console
for(let i = 0; i < names.length; i++){
	console.log(names[i])
}

for(let name in names){
	console.log(name)
}

/////////////////////////////////////////////////////

// Exercise: Fruit Basket Manager Tasks
// Read from array
let basket = ["apple", "banana", "orange", "pear"];

console.log(basket[0]);
console.log(basket[basket.length - 1]);

// Modify the basket
let bananaIndex = basket.indexOf("banana");
basket.splice(bananaIndex, bananaIndex, "kiwi");

basket.pop();
basket.unshift("mango");

for(let i = 0; i < basket.length; i++){
	console.log(`Fruit ${i+1}: ${basket[i]}`)
}

// Search for a fruit
let orangeIndex = basket.indexOf("orange")
if( orangeIndex != -1){
	console.log(`Orange found at index ${orangeIndex}` )
} else {
	console.log("Orange not found")
}

// Copy part of the basket
let basketMiddle = Math.floor(basket.length/2)
let citrus = basket.slice((basketMiddle - 1),(basketMiddle + 1))
console.log(citrus)
console.log(basket)

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
	
}

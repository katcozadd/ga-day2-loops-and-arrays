//Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
/*for ( i = 1; i <= 20; i++) {
	console.log(i);
}

//Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
for ( i = 0; i <= 200; i += 2) {
	console.log(i);
}


//Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for ( i = 0; i < 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
}

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
for ( i = 0; i < 20; i += 2) {
	console.log("...why is life so hard? the human made me get up to eat today!");
}

//Fizz Buzz
//1. Write a javascript application that logs all numbers from 1 - 100.
for ( i = 1; i <= 100; i++) {
	console.log(i);
}

//2. If a number is divisible by 3 log "Fizz" instead of the number.
for ( i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log("Fizz");
	} else {

	}
}

//3. If a number is divisible by 5 log "Buzz" instead of the number.
for ( i = 1; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log("Fizz");
	} 
	if (i % 5 === 0 ) {
		console.log("Buzz");
	} 
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else {

	}
}


//Getting to Know You
//1. Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";
console.log(thom);

//2. Karolin just had her birthday; change Karolin's array to reflect her being a year older.
karolin[1] = 17;
console.log(karolin);

//3. Change Matt H's hometown from Philadelphia to "Gotham City".
matt[2] = "Gotham City";
console.log(matt);

//4. Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
kristyn[2] = "Brooklyn";
console.log(kristyn);


//Yell at the Ninja Turtles
//1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

//2. Use a for loop to call toUpperCase() on each of them and print out the result.
for (let i = 0; i < ninjaTurtles.length; i++) {
		let newNinja = ninjaTurtles[i].toUpperCase();
			console.log(newNinja);
}

*/
//Return of the Closets
//1. Alien Attire - Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

kristynsCloset.shift();
console.log(kristynsCloset);

let kristynsShoe = "left shoe";
thomsCloset.push(kristynsShoe);
console.log(thomsCloset);

//2. Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

//Kristyn Outfit 1
console.log("Today, Kristyn will be wearing " + kristynsCloset[1] + " with her " + kristynsCloset[3] + " and " + kristynsCloset[4] + ". That gal has some serious style!");
//Kristyn Outfit 2
console.log("Today, Kristyn will be wearing a " + kristynsCloset[0] + " with her " + kristynsCloset[5] + " and a " + kristynsCloset[2] + ". That gal has some serious style!");
//Kristyn Outfit 3
console.log("Today, Kristyn will be wearing a " + kristynsCloset[3] + " with some " + kristynsCloset[6] + " in hand and a " + kristynsCloset[5] + " upon her head. That gal has some serious style!");

//Thom Outfit 1
console.log("Today, Thom will be wearing a " + thomsCloset[0][0] + " with his " + thomsCloset[1][0] + " and " + thomsCloset[2][0] + ". Damn, he is kinda fly for a white guy!");
//Thom Outfit 2
console.log("Today, Thom will be wearing a " + thomsCloset[0][1] + " with his " + thomsCloset[1][1] + " and a " + thomsCloset[2][1] + ". Damn, he is kinda fly for a white guy!");
//Thom Outfit 3
console.log("Today, Thom will be wearing a " + thomsCloset[0][2] + " with his " + thomsCloset[1][2] + " and " + thomsCloset[2][2] + ". Damn, he is kinda fly for a white guy!");








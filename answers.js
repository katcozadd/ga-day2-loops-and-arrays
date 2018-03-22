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
*/

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








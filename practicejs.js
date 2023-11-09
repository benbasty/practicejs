
var bestColor = "purple";
// the best color on the planet lol
var quote = "You had me at \"hello\"";
console.log("Practice 1: Strings");
console.log(bestColor);
console.log(quote);

const message = "    TASTE THE RAINBOW!  ";
var whisper = message.toLowerCase().trim();
console.log("Practice 2: String methods");
console.log(message);
console.log(whisper);

console.log("Practice 3: More String methods");
const word = "skateboard";
var facialHair = word.slice(5).replace("o","e");
console.log(word);
console.log(facialHair);

console.log("Practice 3: Template Litterals, Undefined & null, random numbers and math objects");
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let firstLine = "die1: " + `${die1}\n`;
let secondLine = "die2: " + `${die2}\n`;
let sum = die1 + die2;
let roll = "roll:\"You rolled a " + `${die1}` + " and a " + `${die2}` + ". They sum to " + `${sum}\"`;
console.log(firstLine + secondLine + roll);

// arrays

let students = ["ben", "karl", "amy", "atta", "dora"];
let nums = [1, 2, 3, 5, 8];
// you can also have a mixed array
// randomly accessing an array
// each elements is assigned an index
console.log(nums[0]);
// push and pop

//foreach method
var days = ["mon","tue","wed","thu","fri","sat","sun"];
function printdays(day){
    console.log(day);
}
days.forEach(printdays);

//the map method

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map(function(names){
    return names.first;
});
console.log(firstNames);

//arrow functions

const add = (a,b) => a + b;
console.log(add(2,3));


//setTimeOut
setTimeout(()=> {
    console.log("Showed off after 5s");
}, 5000);

// setInterval
const id = setInterval(() => {
    console.log("Hey There")
}, 3000);
clearInterval(id);
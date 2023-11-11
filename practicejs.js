
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

// reduce method
// take some array and reduce it to a single value
// 2 parametors
// accumulator, currentvalue

const arr = [1, 3, 2, 8, 9, 5, 4, 2];
const total = arr.reduce((total, elem) =>
    total + elem);
console.log(total);

// find minimum value
const min = arr.reduce((min,elem) => {
    if(elem < min) {
        return min;
    }
    return min;
});
console.log(min);

// default params

function rollDie(numSides = 8) {
    return Math.floor(Math.random() * numSides) + 1;
}
console.log(rollDie());

// spread in function call

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(...numbers);

// spread in array litterals
const drinks = ['cocacola','sprite','soda'];
const coffee = ['cappucino', 'americano','latte'];
const beverages = [...drinks, ...coffee];
console.log(beverages);

// spread with object litterals
const movie = {
    title: 'marvels',
    length: 120,
    rating: '5stars',
    release: 2023
}

const movie2 = {...movie, id:1, comment:'awesome'};
console.log(movie2);

// rest params

function allNums(...nums) {
    return nums.reduce((all,el) => all + el);
}
console.log(allNums(1,2,3,4));


// destructuring arrays

const scores = [1,2,8,6,9,4,7,12,14,10,11];

const [first,second,third, ...restNumbers] = scores;
console.log(restNumbers);

// destructuring obects

const user = {
    email: 'beno@gmail.com',
    password: 'abcd1234567890',
    firstName: 'ben',
    lastName: 'BOROTO',
    born: 1987,
    bio: 'a clever boy',
    city: 'San Antonio',
    state: 'Cacalidor'
}

// destructuring method here consists in renaming each parameters with a const name
const {email, firstName, lastName, city, bio} = user;
console.log(email);
// renaming born to birthYear
const {born: birthYear} = user;
console.log(birthYear);

// destructuring params



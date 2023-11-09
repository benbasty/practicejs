// let arr = [1, 2, 3, 4, 5, 1];


//slice : copy a new array copying all items
// from index start to end not including the end
// let newarr = arr.slice(1, 3);

//concat: creates a new array that includes
//values from other arrays and additional items.
// let newarr = arr.concat([6,7]);

// forEach:  allows to run a function for every
// element of the array.
// arr.forEach( item =>
//     console.log(item)
// );

//searching in array
//indexOf
// console.log(arr.indexOf(1));
//lasIndexOf
// console.log(arr.lastIndexOf(1));
//includes
// console.log(arr.includes(1));



//find and findIndex
// let num = arr.find(item => item > 1);
// console.log(num);

// console.log(arr);

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
//find: looks for a single element
// let user = users.find(item => item.id == 1);
// console.log(user.name);
//findindex
// let user = users.findIndex(user => user.name == 'Pete');
// console.log(users[user].name);
// console.log(user);

//filter: looks for many elements
let betterUsers = users.filter( item => item.id < 3);
betterUsers.forEach(item => console.log(item.name));

//map: return an array of results by using a function
let usernames = users.map(
    item => item.name
)
console.log(usernames);

//sort: sort the array, changing its element order
let arr = [1, 2, 4, 9, 6, 8, 89, 56, 34];
function compare(a,b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(arr.sort(compare));
//reverse
let arreiy = [1, 2, 3, 4, 5];
console.log(arreiy.reverse());

//split and join
//split: splits the string into an array by the given delimiter
let names = 'Alas, Arria, Bebo';
let arraeuy = names.split(', ');
arraeuy.forEach(item => console.log(item));

//join: does the reverse of split
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let additionNums = numbers.join(' + ');
console.log(additionNums);

//reduce
// compared to forEach, for, for ..of, map, reduce
// is a bit more intricate.They are used
// to calculate a single value based on the array.

// 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
let sumWithInitial = numbers.reduce(
    (sum, current) => sum + current
);
console.log(sumWithInitial);



// camelize
const camelize = (str) => {
    return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("background-color"));

const sentence = "i have learned something new today";

const capitalizeWords = (words) => {
    return words
    .split(" ")
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}
console.log(capitalizeWords(sentence));

let arrayStart = [5, 3, 8, 1];

//Filter range
const filterRange = (arr, a, b) => {
    //gets an array
    //looks for elements with values higher or equal to a
    //lower or equal to b
    //and returns as an array

    return arr
    .filter(
        num => num >= a && num <= b
    )
}

let filtered = filterRange(arrayStart, 1, 4);
console.log(filtered);


// Filter range in place

let arrFR = [5, 3, 8, 1];

const filterRangeInPlace = (arrFR, a, b) => {
    for (let i = 0; i < arrFR.length; i++) {
        let val = arrFR[i];
        // remove if outside of the interval
        if (val < a || val > b) {
            arrFR.splice(i, 1);
          i--;
        }
    }
}

filterRangeInPlace(arrFR, 1, 4); // removed the numbers except from 1 to 4
console.log( arrFR ); // [3, 1]


//Sort in decreasing order
let arrsd = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order
function compare(a,b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.log(arrsd.sort(compare));
console.log(arrsd.reverse());

//Copy and sort array

let arrcs = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => {
    let copycs = [...arr];
    function compare(a,b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    return copycs.sort(compare);
}
let sorted = copySorted(arrcs);
console.log(sorted);


// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let allusers = [ john, pete, mary ];

let namesuser = allusers
.map(user => user.name);
console.log(namesuser);


//Map to objects => returning objects with map
let cena = { name: "Ceta", surname: "Smith", id: 1 };
let tote = { name: "Tote", surname: "Hunt", id: 2 };
let esun = { name: "Esun", surname: "Key", id: 3 };

let someusers = [ cena, tote, esun ];
let usersMapped = someusers.map(
    user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    })
);

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ); // John Smith



/// back to js practice - coding 


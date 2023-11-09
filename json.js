//we’d like to convert a complex object into a string,
//to send it over a network,
// or just to output it for logging purposes.

let user = {
    name: "Ben",
    age: 30,
    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};
console.log(user.toString());


// JavaScript provides methods:
// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
let json = JSON.stringify(student);
console.log(json);

//JSON parse
let numbers = "[0, 1, 2, 3, 4, 5]";
numbers = JSON.parse(numbers);
console.log(numbers);

//There’s a special syntax to work with promises
//in a more comfortable fashion, called “async/await”

// The keyword await makes JavaScript wait until
//that promise settles and returns its result.

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve("done!"), 1000)
    });
    let result = await promise;
    console.log(result);
}

f();


//import {produce} from 'immer';

console.log("Redux Starter Project");
/* Function  Programming */

function greeting() {
    console.log('Good Morning');
}

greeting();
let message = greeting;
message();

// pass the function as parameter

function printMessage(anfunction) {
    console.log(anfunction());
}

printMessage(greeting);

//anonymous function javascript 

function greeting2() {
    return function() {
        return 'Good Afternoon';
    }
}

let anfunction1 = greeting2();
let message1 = anfunction1();
console.log(anfunction1());
console.log(message1);
/* In javascript we can handle the functions same as any other variables */

/* higher order function in JS */

let numbers = [1,2,3,4];

numbers.map(number => number * 10);

console.log(numbers);

/* Immutability */

const employee = {name: 'Harley', age: 23,
company: {country: 'Canada', city: 'Toronto'}
};

const newEmployee =  Object.assign({}, employee, {company: {country: 'India', city: 'Banglore'}});


console.log(newEmployee);

console.log(employee);

/* ... spread operator */

const newEmp = {...employee,
company: {...employee.company, city: 'Calgary'}};
console.log(newEmp);

/* Immer */

//produce write a code in mutable format
// const newEmp2 = produce(employee, (draftState) => {
//     draftState.name = 'Steve',
//     draftState.company.city = 'Munich'
// });

// console.log(newEmp2);

const arr = [1,2,3,4];

//immutable way to add item to array

const addedNumbers = [5, ...arr];

console.log(addedNumbers);
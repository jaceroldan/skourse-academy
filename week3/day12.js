const str = 'Hello, everyone!';

console.log(str);

// assignment operation
let a = 3, b = 2;
console.log(a % b);

a = true; // non-zero, truthy values
b = false;  // zero, falsy values

/*
    given a && b (AND operator)
  a = true, b = true => true
  a = false, b = true => false
  a = true, b = false => false
  a = false, b = false => false
*/
// console.log('a && b = ', a && b);

/*
given a || b (OR operator)
  a = true, b = true => true
  a = false, b = true => true
  a = true, b = false => true
  a = false, b = false => false
*/
// ! is a unary operator
// || or && is a binary operator
// console.log('!a || b = ', !a || b);

// console.log(false || false && true || true);

// 1 is a truthy value
// console.log('!1 = ', !1);
// 0 is a falsy value
// console.log('!0 = ', !0);

// console.log('1 || 2 = ', 1 || 2);
// console.log('0 || 2 = ', 0 || 2);

// console.log('\'\' || \'Hello Jace\'', '\'\'' || 'Hello Jace');
// console.log('\'\' || \'Hello Jace\'', '' || 'Hello Jace');

a = 1;
b = 1;
c = -1;

// console.log(a + c);
// console.log('a + b || a + c', a + c || a + b);

// console.log('2 || 1 = ', 2 || 1);
// console.log('2 && 1 = ', 2 && 1);

console.log('!undefined', !undefined);
console.log('!null', !null);

console.log(!undefined && !null);
console.log(!undefined && null);

// functions in javascript 
console.log('this is a function');

1 + 2;
2 + 3;

let name1 = 'Jace';
// jacesHelloFunction(name1);
// Hello, Jace!
let name2 = 'Carlos';
// console.log('Hello, ', name2, '!')
// jacesHelloFunction(name2);
// Hello, Carlos!

// parameter, the value we give to a function
function jacesHelloFunction(name) {
    // encloses a block which has its own scope
    const d = 'Some other greeting I want to say';
    console.log('Hello, ', name, '!');
    console.log(d);
    console.log(a + b);
    // console.log(e);
    var e = 'this is a globally scoped variable';
}

// console.log('accessing e');
// console.log(e);

function giansHelloFunction(name) {
    console.log('hello', name, '!!!');
    let f = 16;
    // console.log(d);
}

// let d = 2;
// console.log(d);

// function call
giansHelloFunction('Jace')
jacesHelloFunction('Jace');
jacesHelloFunction('Carlos');
jacesHelloFunction('Arvin');
// let e = 4;
// console.log(g);
console.log(console);

// properties and methods
// str = "Hello, everyone"
// index == position

// 'H', 'e', 'l', 'l', ...
console.log(str.charAt(1));
console.log(str.indexOf('e'));
// string addition
console.log(str + str);
// concatenation
console.log(str.concat(str))

let jace = "Jace";
console.log('hello ' + jace + '!!!');
// template literal
console.log(`hello ${jace}!!!`);

console.log(Number('123') + Number('123'));

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.log(arr);
console.log(arr[10]);
console.log(arr.at(5));
console.log(arr.concat([1, 2, 3]));
// arr = arr.concat([1, 2, 3]);
// console.log(arr.length);
// console.log(arr);
// arr.length = 7;
console.log(arr);
// (0, 2)
arr2 = arr.slice(1, 3);
console.log(arr);
// stringify
// type coercion
// implicit type coercion
console.log(arr + arr2);
// explicit type coercion
console.log(arr.toString() + arr2.toString());

stringifiedArray = arr.toString();
console.log(stringifiedArray)
console.log(stringifiedArray.split(','));

// objects
console.log(giansHelloFunction);

let a23f = 'a23f variable';
let af2233 = 'af2233 variable';
// compiler errors => e.g. syntax error
// let 23a = '';
// execution errors
// console.log(abcd);

/* Person:
// written in camelcase
firstName: 'Jace'
lastName: 'Roldan'
age: 30
address: Mandaue City Cebu
*/

// prototype 
let person = {
    firstName: 'Jace',
    lastName: 'Roldan',
    age: 30,
    address: 'Mandaue City, Cebu',
    isMale: true
};
console.log(person);
// person.height = 166;
person['height'] = 166;
console.log(person);
delete person.firstName;
console.log(person);

let form = {
    firstName: 'jace',
    lastName: 'roldan',
    citizenship: 'filipino',
};

// "mutability" not the same as "being able to reassign"
const person2 = {
    firstName: 'jose',
    lastName: 'rizal'
};
person2.firstName = 'jace';
console.log(person2);
let d = '3';

// // declaration and definition are different
// var a;
// console.log(a);
// // hoisting
// a = 3;
// function helloJace() {
//     console.log('hello, jace!');
// }

// helloJace();

// function isLeapYear(year) {
//     console.log('this is a leap year');
//     return true;
//     // console.log(2021);
// }

// console.log(isLeapYear);

// let sum = add(1, 2);
// console.log(isLeapYear(2021));

// if a + b is not equal to 3, log 'Good'
// else log 'Bad'

let a = 3;

function checkGoodnessOfNumber(a, b) {
    console.log(a + b);
    // == not strict
    // === very strict
    if (a + b === 3)
        console.log('Good');
    else
        console.log('Bad');
}

// checkGoodnessOfNumber(2, -2);
// checkGoodnessOfNumber(1, 2);
// checkGoodnessOfNumber(true, true);
// checkGoodnessOfNumber('', '3');

// > "greater than"
// < "less than"
// >= "greater than or equal to"
// <= "less than or equal to"

function thisNumberIsBigger(a, b) {
    if (a > b) {
        console.log('Bigger');
        console.log('I\'m better than you!');
    } else {
        console.log('Not bigger');
        console.log('boohoo!')
    }
}

// thisNumberIsBigger(1, 2);
// thisNumberIsBigger(2, 1);
// thisNumberIsBigger(2, 2);

function whoExists(a, b) {
    console.log(a || b);
    console.log(a && b);
    if (a && b) {
        console.log('both exists')
    } else if (a || b) {
        console.log('I exist');
    } else {
        console.log('ghost');
    }
}

// from 1 to 10, print that number times that same number = some product

// let counter = 1;
// while (counter <= 10) {
//     // block of code that gets exec
//     console.log(`${counter} x ${counter} = ${counter * counter++}`);
//     // counter = counter + 1;
//     // counter += 1;
//     // ++counter;
// }

// counter = 0;
// do {
//     // console.log(counter);
    // console.log(
    //     `${++counter} x ${counter} = ${counter * counter}`);
// } while (counter < 10);

// initialization - condition - increment for-loop
// for (let counter = 1; counter <= 10; counter++) {
//     console.log(
//         `${counter} x ${counter} = ${counter * counter}`);
//     console.log('hey');
//     console.log('hello!');
//     console.log('counter ==', counter);
// }

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// how do we push these values programatically, not statically

arr = [];

for (let counter = 1; counter <= 10; counter++) {
    arr.push(counter);
}

// console.log(arr);
// for (let counter = 1; counter <= arr.length; counter++) {
    // array "sub" counter => arr[counter]
//     console.log(arr[counter])
// }
// let a;

// key: value / field: value / property: value
// let obj = {
//     'firstName': 'Jace',
//     lastName: 'Roldan'
// }
// console.log(obj);

// for (let key in obj) {
//     console.log(obj[key]);
// }

// console.log(obj, Object.values(obj))
console.log(arr);
// for (let item of arr) {
//     console.log(item * item);
// }

// functions are first-class citizens in javascript


// arr.forEach(printSquare);

// function forEach(arr, fn) {
//     for (let item of arr) {
//         fn(item);
//     }
// }

// console.log(forEach(arr, printSquare));

// arr = [];
// for (let counter = 1; counter <= 10; counter++) {
//     arr.push(counter);
// }

// arr = arr.forEach(printSquare);
// console.log(arr);

// console.log('---- divider ----');

// arr = [];
// for (let counter = 1; counter <= 10; counter++) {
//     arr.push(counter);
// }

// not in-place, doesn't "mutate"
// arr.map(printSquare);
// console.log(arr);

// function map(arr, fn) {
//     let resultArr = [];
//     for (let item of arr) {
//         resultArr.push(fn(item))
//     }
//     return resultArr;
// }

function printSquare1(item) {
    console.log(item * item);
    return item * item;
}
printSquare1(100);

// anonymous functions
let printSquare2 = (item) => {
    console.log(item * item);
    return item * item;
}

printSquare2(100)

// console.log(arr.map(function printSquare(item) => { 
//     console.log(item * item);
//     return item * item;
// }))

// console.log(arr.map((item1, item2) => { 
//     console.log(item * item);
//     return item * item;
// }))

// 0, 1...
// 1, 2, ...
// for (let item of arr) {
//     // console.log(arr, item);
//     arr[item] = item * item;    
// }



// console.log(arr);


// for... in
// for (let i in arr) {
//     console.log(arr[i]);
//     // console.log(i);
// }

// for... of
// for (let item of arr) {
//     console.log(item);
// }

// whoExists('asdf', 'blahblah');
// whoExists(1, 0);
// whoExists(false, true);
// whoExists(null, undefined);

// let d = 1;
// post-increment (by 1)
// console.log(d++); // return d, d = d+1
// console.log(d); //

// console.log('----divider----');
// let e = 1;
// pre-increment (by 1)
// console.log(++e); // e = e + 1, return e
// console.log(e);
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// blocking code
// single threaded
// javascript has one event loop
// synchronous code ~ blocking code
function drawHorizontalLine(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 75, y + 10);
    ctx.lineTo(x + 50, y + 20);
    ctx.lineTo(x, y + 20);
    ctx.lineTo(x - 25, y + 10);
    ctx.fill();
}

function drawVerticalLine(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 50);
    ctx.lineTo(x + 10, y + 75);
    ctx.lineTo(x + 20, y + 50);
    ctx.lineTo(x + 20, y);
    ctx.lineTo(x + 10, y - 25);
    ctx.fill();
}

const button = document.getElementById('button');

button.addEventListener('click', function() {
    // this funciton is a callback
    const section = document.getElementById('section');
    const p = document.createElement('p');
    p.innerText = 'I got clicked!';
    section.appendChild(p);
})

drawHorizontalLine();
drawVerticalLine();



// function callAlert(count) {
//     if (count == 0)
//         return;

//     return setTimeout(function() {
//         alert('hello world');
//         callAlert(count - 1);
//     }, 5000);
// }

// asynchronous
const timeoutCtrl1 = setTimeout(function() {
    alert('hello from timeout 1');
}, 10000)

const timeoutCtrl2 = setTimeout(function() {
    clearTimeout(timeoutCtrl1);
    alert('blocked!');
}, 5000)

// const intervalCtrl1 = setInterval(function() {
//     alert('hello world from setInterval');
//     callAlert(count - 1);
// }, 3000)

alert('hello');

// clearInterval(intervalCtrl1)

// callAlert(3);


// drawHorizontalLine(75, 25);
// drawHorizontalLine(75, 125);
// drawVerticalLine(35, 60);
// drawVerticalLine(145, 60);
// drawVerticalLine(35, 160);
// drawVerticalLine(145, 160);
// drawHorizontalLine(75, 225);

let x = 75, y = 25;

function drawSegmentA(originX, originY) {
    drawHorizontalLine(originX, originY);
}

function drawSegmentB(originX, originY) {
    drawVerticalLine(originX + 70, originY + 35);
}

function drawSegmentC(originX, originY) {
    drawVerticalLine(originX + 70, originY + 135);
}

// // ...

function drawSegmentF(originX, originY) {
    drawVerticalLine(originX - 40, originY + 35);
}

function drawDigit7(originX, originY) {
    drawSegmentA(originX, originY);
    drawSegmentB(originX, originY);
    drawSegmentC(originX, originY);
}

// HH:mm:ss
// 12:11:30

function drawFirstDigitHour(digit) {
    if (digit === 7) {
        drawDigit7(75, 25);
    }
}

drawFirstDigitHour(7);

let hour = 12, min = 11, seconds = 30;

let hourOnesDigit = hour % 10;
let hourTensDigit = Math.floor(hour / 10) % 10;
// console.log(hourOnesDigit, hourTensDigit);

// asymptotic analysis

// book title: "To Kill a Mockingbird"
// ["The Hunger Games", booksX10000, "The Bible", "To Kill a Mockingbird"]

const searchKey = 'E';
const books = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < books.length; i++) {
    // 1 or 2 operations (depending on how fast array index accessing is)
    if (books[i] === searchKey) {
        // return i;
    }
    // very contrived set of operations, 10 ops
}

const searchNum = 1;
const numbers = [1, 3, 7, 111, 400];

// bubble sort

let numberArrayForSort = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// 1, 9, 8, 7, 6, 5, 4, 3, 2, 10
// 1, 2, 8, 7, 6, 5, 4, 3, 9, 10
// 1, 2, 3, 7, 6, 5, 4, 8, 9, 10
// 1, 2, 3, 4, 6, 5, 7, 8, 9, 10
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// 10 + 9 + 8 + 7 + 6 ... 1

// selection sort, sorted vs unsorted

// selection sort
// (1) 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// looking for the "minimum" that's in the unsorted partition
// (2) 1, 10, 9, 8, 7, 6, 5, 4, 3, 2
// (3) 1, 2, 10, 9, 8, 7, 6, 5, 4, 3
// (4) 1, 2, 3, 10, 9, 8, 7, 6, 5, 4

// insertion sort
// (1) 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// (2) 1, 10, 9, 8, 7, 6, 5, 4, 3, 2
// (3) 1, 2, 10, 9, 8, 7, 6, 5, 4, 3

// bubble sort 
// 1st iteration in the outer loop
// (1) 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// (2) 9, 10, 8, 7, 6, 5, 4, 3, 2, 1
// (3) 9, 8, 10, 7, 6, 5, 4, 3, 2, 1
// (4) 9, 8, 7, 10, 6, 5, 4, 3, 2, 1
// (5) 9, 8, 7, 10, 6, 5, 4, 3, 2, 1
// ....
// (10) 9, 8, 7, 6, 5, 4, 3, 2, 1, 10
// 

let arr = [1, 3, 5, 2, -1];
// quicksort, O(logn) < O(n2)
console.log(arr.sort());

// let sortedArray = [];
// n times
for (let i = 0; i < numberArrayForSort.length; i++) {
    let min_idx = i;
    // n times
    for (let j = i; j < numberArrayForSort.length; j++) {
        // min = 10, jth index = 9
        // min = 9, jth index = 8
        // min = 8
        if (numberArrayForSort[min_idx] > numberArrayForSort[j]) {
            min_idx = j;
        }
    }

    // min_idx = 9
    // i = 0
    // Swap part
    if (i !== min_idx) {
        let tmp = numberArrayForSort[i];
        numberArrayForSort[i] = numberArrayForSort[min_idx];
        numberArrayForSort[min_idx] = tmp;
    }
    console.log(numberArrayForSort);
}

// console.log(numberArrayForSort);
// n * n * n = n3



// function printHello(name) {
//     console.log('Hello ' + name);
// }

// printHello('Jaceeeeeeeee');

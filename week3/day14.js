// "this" in JavaScript

// Default binding
// Window == this
// console.log(this);

var a = 2;

function myFunction() {
    console.log(this.a);
}

// myFunction();
// console.log(this);

// implicit binding


let obj = {
    a: 3,
    callFunction: myFunction
}

let prevObj = {
    a: 4,
    obj: obj
};

// myFunction();
// prevObj.obj.callFunction();

// Explicit binding

// myFunction.call(prevObj);

// "new" constructor

let Obj = function() {
    this.a = 5;
    this.callFunction = myFunction;
    console.log(this);
}

obj = new Obj();
obj.callFunction();

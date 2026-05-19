export const description = "Function in JavaScript";

// function info(message) {
//     console.log(message + "!");
// }
// info("Hi, my friends");

// function sum(a, b) {
//     let result = a + b;
//     console.log(result);
//     info("The sum is " + result);
// }
// sum(5, 10);

// function summa(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;
// }

// let array_1 = [6, 8, 1];
// let array_2 = [6, 85, 1];
// let array_3 = [6, 8, 11];

// let result = summa(array_1);
// let result2 = summa(array_2);
// let result3 = summa(array_3);

// console.log("Result 1:", result);
// console.log("Result 2:", result2);
// console.log("Result 3:", result3);


// Global function

// let globalVariable = "I am global";
// function globalFunction() {
//     console.log(globalVariable);
// }
// globalFunction();

// console.log(globalVariable);

// Local function

// function localFunction() {
//     let localVariable = "I am local";
//     console.log(localVariable);
// }
// localFunction();

// ==================== Function declaration ====================


function showMessage(name, age) { 
    console.log("Hello!, " + name + ", " + age);
};

// showMessage("Alice", 25);

// ==================== Function expression ====================

let userName = "Bob";

const sayHello = function () { 
    let message = "Hello!, " + userName;
    console.log(message);
}

// sayHello();

// ==================== Arrow function ====================

const greet = (name) => {
    console.log("Hi, " + name);
};

// greet("Charlie");

 

const sum = function (a, b) {
    console.log("a:", a);
    console.log("b:", b);
    const c = a + b;
    return c;

};

// sum(5, 8);



const a = function () {
    c();
    console.log("a");
    b();
}

const b = function () {
    console.log("b");
}

const c = function () {
    console.log("c");
}

// a();


export const examples = [
    
];
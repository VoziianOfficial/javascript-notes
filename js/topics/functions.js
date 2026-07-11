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


// function showMessage(name, age) { 
//     console.log("Hello!, " + name + ", " + age);
// };

// showMessage("Alice", 25);

// ==================== Function expression ====================

let userName = "Bob";

// const sayHello = function () { 
//     let message = "Hello!, " + userName;
//     console.log(message);
// }

// sayHello();

// ==================== Arrow function ====================

// const greet = (name) => {
//     console.log("Hi, " + name);
// };

// greet("Charlie");



// const sum = function (a, b) {
//     console.log("a:", a);
//     console.log("b:", b);
//     const c = a + b;
//     return c;

// };

// sum(5, 8);



// const a = function () {
//     c();
//     console.log("a");
//     b();
// }

// const b = function () {
//     console.log("b");
// }

// const c = function () {
//     console.log("c");
// }

// a();



// ==================== Arguments and parameters ====================

// const addName = function (...names) {
//     // const arg = Array.from(arguments);
//     // console.log(arg);
//     console.log(names);

// }

// addName("David", "Eve", "Frank", "Grace");

//===================== Callback functions ====================
//Функция, которая принимакет в качестве аргумента другую функцию и может быть вывана позже или не вызвана вовсе, если действие не произошло.

// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function Showyes() {
//     console.log("Yes!");
// }

// function Showno() {
//     console.log("No!");
// }


// ask("yes or no?", Showyes, Showno);


// const hello = function (name) {
//     console.log(`Hello, ${name}!`);
// }

// const searchName = function (callback) {
// const  name = "Vova";
// callback(name);
// }

// searchName(hello);

// function checkAge(age) {
//     if (age >= 18) {
//         return alert("Hello, you are an adult!");
//     } else {
//         return alert("Sorry, you are too young.");
//     }
// }

// const searchAge = function (callback) {
//     const age = prompt("Please enter your age: ");
//     callback(Number(age));
// }

// searchAge(checkAge);

// ==================== arrow functions ====================
// В отличие от обычных функций, у стрелочных функций нет this, arguments, super и new.target. 
// Они не могут быть использованы как конструкторы и не имеют доступа к объекту arguments. 
// Стрелочные функции всегда анонимные.

// const age = (age) => {
//     if (age >= 18) {
//         return alert("Hello, you are an adult!");
//     } else {
//         return alert("Sorry, you are too young.");
//     }
// }

// age(20);

// const a = () => {
//     console.log("a");
// }

// const b = () => {
//     console.log("b");
// }

// const c = () => {
//     console.log("c");
//     a();
//     b();    
// }

// c();


// ===================== Document ====================

// const addNumber = (number) => {
//  const sum = number + 10;
//  return console.log(sum);
// }

// const numberRef = document.querySelector('input[name="number"]');
// const buttonRef = document.querySelector('.button-input');

// if (buttonRef && numberRef) {
//     buttonRef.addEventListener('click', () => {
//         addNumber(Number(numberRef.value));
//     });
// }


// console.log(buttonRef);

//===================== Замыкания ====================

// function createNewSum(n) {
//     return function () {
//         console.log(10 * n);
//     }
// };

// const calc = createNewSum(5);
// calc();


// function createUrl(domain) {
//     return function (url) {
//        return `https://${url}.${domain}`;
//     }
// };


// const comUrl = createUrl("com");
// console.log(comUrl("google"));


//===================== this ====================


// function helloThis () {
//     console.log("hello", this);
// }

// helloThis();

// const user = {
//     name: "Alice",
//     age: 30,
//     sayHello: helloThis,
// }

// user.sayHello();


// function abc() {
//     console.log(this);
// }

// abc();

// document.querySelector("p").onclick = abc;

// function changeColor() {
//     console.log(this);
//     this.style.background = "red";
// }

// // document.querySelector(".changeColorBlock").onclick = changeColor;
//  let user = document.querySelectorAll(".changeColorBlock");

// user.forEach(function (element) {
//     element.onclick = changeColor;
// }); 


//===================== bind ====================
// function hello() {
//     console.log(this);
// }

// const user = {
//     name: "Alice",
//     age: 30,
//     hello: hello,
//     sayHelloWindow: hello.bind(window),
//     info: function (city) {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`city: ${city}`);
//     }
//     }
// // user.info();

// const Anna = {
//     name: "Anna",
//     age: 39,

//     }

// const Peter = {
//     name: "Peter",
//     age: 29,
// }

// user.info.bind(Anna, "London")();
// user.info.bind(Peter)("Kiev");

//===================== call ====================

// const userInfo = {
//     name: "name",
//     age: 98,
//     logInfo: function (job) {
//         console.group(`${this.name} info:`);
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Job: ${job}`);
//         console.groupEnd();
//     }
// };

// const Nikita = {
//     name: "Nikita",
//     age: 30,
// };

// userInfo.logInfo.call(Nikita, "programmer");

//===================== apply ====================

// const showUserInfo = {
//     name: "name",
//     age: 18,
//     logInfo: function (job, city) {
//             console.group(`${this.name} info:`);
//             console.log(`Name: ${this.name}`);
//             console.log(`Age: ${this.age}`);
//             console.log(`Job: ${job}`);
//              console.log(`City: ${city}`);
//             console.groupEnd();
//         }
// }


// const Nikita = {
//     name: "Nikita",
//     age: 30,
// };

// showUserInfo.logInfo.apply([Nikita, "programmer"]);


/* bind - привязка функции к контексту, он создает новую переменную, 
 которая будет возвращать то что мы внутри нее написали! 
 Но он не вызывает функцию, он просто создает новую переменную которая будет 
 возвращать то что мы внутри нее написали!*/


/* call - привязка функции к контексту, он вызывает функцию, он просто
вызывает функцию, он не создает новую переменную, он просто вызывает функцию!
*/



/* apply - привязка функции к контексту, он вызывает функцию, он просто
вызывает функцию, он не создает новую переменную, он просто вызывает функцию! Передать аргументы нужно в виде массива в  квадратных скобках
*/


// const message = function (name, stars) {
//     console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}!`);
// }


// const Bukovel = {
//     hotel: "Bukovel",
//     stars: 5,
// }

// const Radisson = {
//     hotel: "Radisson",
//     stars: 4,
// }

// const Liberty = {
//     hotel: "Liberty",
//     stars: 3,
// }



// message.call(Bukovel, "Nikita", Bukovel.stars);


// message.apply(Liberty, ["Nikita", Liberty.stars]);


// message.bind(Radisson, "Nikita", Radisson.stars)();



//===================== Tasks ====================



// const cart = {
//     showItems() {
//         console.log('In card:', this.items);
//     },
// };

// const woman = {
//     items: ['dress', 'skirt'],
// };  

// const men = {
//     items: ['shirt', 'pants', 'jacket'],
// };

// const kid = {
//     items: ['socks', 'shoes', 't-shirt'],
// };


// cart.showItems.bind(woman)();
// cart.showItems.bind(men)();
// cart.showItems.bind(kid)();

// document.querySelector('#wom').addEventListener('click', cart.showItems.bind(woman));
// document.querySelector('#men').addEventListener('click', cart.showItems.bind(men));
// document.querySelector('#kid').addEventListener('click', cart.showItems.bind(kid));


////////

// const infoCar = {
//     name: 'BMW',
//     year: 2020,
//     model: 'X6',
//     color: 'black',
//     showInfo() {
//         console.log(`Car: ${this.name}, year: ${this.year}, model: ${this.model}, color: ${this.color}`);
//     }
// };


// const car2 = {
//     name: 'Opel',
//     year: 2026,
//     model: 'Astra',
//     color: 'white',
// }


// infoCar.showInfo.bind(car2)();


//===================== Class ====================
// Процедурное программирование

// const summ = 20000;
// const month = 12;
// const p = 1000;


// const credit = (sum, date, p) => {
//     return sum + p * date;
// }

// console.log(credit(summ, month, p));



// обьектно-ориентированное программирование

// const credit = {
//     summ: 20000,
//     month: 12,
//     p: 1000,
//     result() {
//         return this.summ + this.p * this.month;
//     }
// }

// console.log(credit.result());


//классы
//обьекты
//интерфейс

//инкапсуляция - скрытие внутреннего состояния
//абстракция - скрытие внешнего состояния
//наследование - наследование состояния
//полиморфизм - многообразие позволяет использовать одну и ту же функцию в разных контекстах


// class Credit {

//     static type = "credit";
//     constructor(options) {
//         this.sum = options.sum;
//         this.months = options.months;
//         this.paymentPerMonth = options.paymentPerMonth;
//     }

//     calculate() {
//         console.log(this.sum + this.paymentPerMonth * this.months);
//     }
// }

// const userCredit = new Credit({
//     sum: 90000,
//     months: 6,
//     paymentPerMonth: 1000,
// });

// userCredit.calculate();
// console.log(Credit.type);



// class Bank {
//     static type = "bank";
//     constructor(options) {
//         this.name = options.name;
//         this.ageWorks = options.ageWorks;
//         this.deposit = options.deposit;
//     }
// }


// class newBank extends Bank {
//     constructor(options) {
//         super(options);
//        this.methodPay = options.methodPay;
//    }
// }

// const monobank = new newBank({
//     name: "Monobank",
//     ageWorks: 16,
//     deposit: 1000,
//     methodPay: "card",
// });

// console.log(monobank);



//===================== get and set ====================


//get - получить информацию из обьекта;
//set - изменить информацию внутри обьекта;


// class User {
//     constructor(props) {
//         this.name = props.name;
//     }

//     firstName = "";
//     lastName = "";
//     age = 0;
//     city = "";

//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }

//     get name() {
//         return `First name: ${this.firstName}, Last name: ${this.lastName}`;
//     }
// }

// const Kris = new User({
//     name: "Kris Smith",
// });

// const Maria = new User({
//     name: "John Doe",
// })


// console.log(Kris);


//===================== Pototype =====================


// const a = {
//     x: 1,
//     y: 2,
// };

// const b = Object.create(a);

// console.log(b);


// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;

//     // this.sale = function () {
//     //     this.sales += 1;
//     // }
// };

// const Anna = new Manager("Anna", 5);
// const Bob = new Manager("Bob", 10);


// console.log(Anna.sales);
// Anna.sale();
// console.log(Anna.sales);


// Manager.prototype.sale = function () {
//     this.sales += 1;
// }

// console.log(Anna.sales);
// Anna.sale();
// console.log(Anna.sales);

// console.dir(Manager);


class CoffeeMachine {
    _water = 0;
    constructor(power) {
        this.power = power;
    }

    set waterAmount(value) {
        if (value < 0) {
            value = 0;
        }

        this._water = value;
    }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = 20;
console.log(coffeeMachine);













export const examples = [

];


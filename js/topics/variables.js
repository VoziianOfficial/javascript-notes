// Описание темы
export const description = "Variables in JavaScript: let, const, var";

// в javaScript нет строгой типизации
let num_1 = 22;
let num_2 = "22";

// console.log(num_1 == num_2)
// В переменных можно хранить:
let num = 27;
let string = "Jon";
let bool = true;

export function showVariables() {
    // let — можно менять
    let name = "Bob";
    // const — нельзя менять
    const age = 25;

    // console.log("name: " + name); //вывод переменной в консоль. знак + обьеденяет несколько значений между собой.
    name = "Dima"; //переназначили переменную name
    // console.log(age);
    // console.log("new name: " + name);
    
}

//================== Math in JS ================

// + - % * /
let number_1 = 10;
let number_2 = 15;

let res = number_1 % number_2; //сложение двух переменных

// console.log("Result: " + res);

let number_3 = 5; 
number_3 = number_3 + 20; // добавление к одной переменной
// number_3 += 20; // сокращеная версия
// number_3++ // сокращенная форма добавить единицу 
// number_3-- // сокращенная форма отнять единицу 
// console.log("Result: " + number_3);

// == Добавление строк ==

let str_1 = "40";
let str_2 = "1";
// console.log("Result: " + str_1 + str_2);

// даже если одна переменная будет число а другая строкой то число будет преведено к строке 

let str_3 = "40";
let str_4 = 5;
// console.log("Result: " + str_3 + str_4);

// Встроенный класс Number приводит строку в которой есть числа  "4577" к числу

let string_2 = Number("567");

// ========= Встроенные методы и значения в обьекте Math ========
// console.log("Math: " + Math.E);
// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.min(4, 9, 55, 43, 1));
// console.log("Math: " + Math.max(4, 9, 55, 43, 1));


export const examples = [
    showVariables,
];
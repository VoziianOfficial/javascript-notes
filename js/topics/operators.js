export const description = "Operators in JavaScript:";

/*
== Равно (с приведением типов, лучше не использовать)
=== Строго равно (рекомендуется)
!= Не равно
!== Строго не равно
>/< Больше / Меньше
>=/<= Больше или равно / Меньше или равно
|| Логическое ИЛИ (возвращает true, если верно хотя бы одно условие)
! Логическое НЕ (инвертирует значение: !true станет false)
&& Логическое И (возвращает true, только если оба условия верны)
typeof - Возвращает тип данных (typeof "hello" вернет "string")
instanceof - Проверяет, принадлежит ли объект к определенному классу.
*/

//============================== EXAMPLE IF ELSE =============================
/*
базовая логика (решение "да/нет") 
и используется часто в Регистранции или Авторизации, 
когда нужно проверить правильность введенных данных, 
или в играх для проверки условий победы или поражения.
*/

// let number = 190;
// let isHasHouse = true;

// if (number > 5  || isHasHouse === true) {
//     console.log(number + " is more then 5 or person has house");   
// } else if (number === 5 && isHasHouse === true) {
//     console.log(number + " is not equal 5");
// } else if (number != 12) {
//     console.log(number + " not correct");   
// } else if (number >= 23) {
//     console.log(number + " not correct");
// } else {
//     console.log("all is false"); // выполняется, если все условия не верные 
// } 


//============================== EXAMPLE SWITCH CASE =============================
/*
Switch case - позволяет выполнить определенный блок кода в зависимости от значения переменной. 
Она удобна, когда нужно проверить переменную на множество разных значений и выполнить разные действия для каждого из них. 
Пример: Выбор категории товара.
*/

// let string = "world";

// //удобен когда нужно проверить переменную на множество разных значений
// switch (string) {
//     case "7":
//         console.log("variables is 7");
//         break;
//     case "71":
//         console.log("variables is 71");
//         break;
//     case "Voda":
//         console.log("variables is Voda");
//         break;
//     case "world":
//         console.log("variables is world");
//         break;
//     default:
//         console.log("Default");

// }


// let cost;
// const subscription = 'pro';

// switch (subscription) {
//     case 'free':
//         cost = 0;
//         break;
//     case 'pro':
//         cost = 100;
//         break;
//     case 'premium':
//         cost = 200;
//         break;
//     default:
//         console.log("Invalid subscription");
        
// }

// console.log(cost);


//============================== EXAMPLE TRY CATCH =============================
/*
Try-catch - используется для обработки ошибок, которые могут возникнуть в коде. 
Он позволяет "поймать" ошибку и выполнить определенные действия, чтобы предотвратить сбой программы. 
Пример: Чтение данных из файла или парсинг JSON или запрос к API.
*/

//(1)
// let user = undefined;

// try {
//     console.log(user.name); // код, который может вызвать ошибку
// } catch (error) {
//     console.log("user name undefined"); // что делать, если произошла ошибка
// }

//(2)
// let user; // переменная для хранения результата
// let data = '{"name": "Bob", "age": 25}'; //это строка с базы данных
// // console.log(typeof data); // проверяем тип

// try {
//     user = JSON.parse(data); //переформат в обьект
// } catch (error) {
// console.log("doest correct JSON", error.message);
// } finally {
//     console.log("code finish");   
// }
// console.log(user); //выводим обьект 

/*
💡 Как запомнить:
if → "если это → делай это"
switch → "выбери вариант"
try/catch → "если сломается → не упади"
*/



//============================== Loop operators EXAMPLE: FOR =============================
// for (var i = 100; i > 5; i/= 2) {
// console.log(i);
// }
//============================== Loop operators EXAMPLE: WHILE =============================
// let j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }
//============================== Loop operators EXAMPLE: DO WHILE =============================
// let x = 0;

// do {
//     console.log(x);
//     x ++; 
// } while(x < 10) {
// }
//==================================================================================
//break - используется для выхода из цикла или switch case, когда определенное условие выполнено.
//continue - используется для пропуска итерации цикла,когда определенное условие выполнено.

// let arr = [1, 2, 3, '4', 5, 6, 7, true , 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log("element " + (i+1) + ": " + arr[i]  );
// }

//========================================= TASKS =========================================================

// const minutes = prompt("Enter minutes");


// if (minutes >= 0 && minutes <= 14) {
//     console.log("first quarter");
// } else if (minutes >= 15 && minutes <= 29) {
//     console.log("second quarter");  
// } else if (minutes >= 30 && minutes <= 44) {
//     console.log("third quarter");
// } else if (minutes >= 45 && minutes <= 59) {
//     console.log("fourth quarter");
// }   


// const value = prompt("Enter value").toLocaleLowerCase();
// let prise;

// switch (value) {
//     case "apple":
//         prise = 10;
//         alert(`${value} prise: ${prise} UAH`);
//         break;
//     case "banana":
//         prise = 20;
//         alert(`${value} prise: ${prise} UAH`);
//         break;
//     case "orange":
//         prise = 30;
//         alert(`${value} prise: ${prise} UAH`);
//         break;
//     case "kiwi":
//         prise = 40;
//         alert(`${value} prise: ${prise} UAH`);
//         break;
//     case "lemon":
//         prise = 50;
//         alert(`${value} prise: ${prise} UAH`);
//         break;
//     default:
//         alert("the product ${value} is out of stock");
//         break;
// }















export const examples = [
    
];
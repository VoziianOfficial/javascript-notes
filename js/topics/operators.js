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

//============================== EXAMPLE TRY CATCH =============================

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




export const examples = [
    
];
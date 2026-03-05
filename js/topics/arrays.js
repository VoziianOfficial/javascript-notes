export const description = "Arrays in JavaScript:";

//============================== EXAMPLE ARRAYS =============================

//=============================== ARRAY METHODS============================== 

/*
push() - добавляет элемент в конец 
pop() - удаляет последний элемент 
unshift() - добавляет элемент в начало
shift() - удаляет первый элемент 

indexOf - ищет индекс элемента
lastIndexOf -ищет индекс с конца
includes - проверяет есть ли элемент

forEach() - перебирает массив
map() - создаёт новый массив
filter() - фильтрует элементы
reduce() - сводит массив к одному значению
find() - возвращает первый найденный элемент
findIndex() - возвращает индекс найденного элемента
some() - проверяет есть ли хотя бы один
every() - проверяет все элементы

slice() - копирует часть массива
concat() - объединяет массивы и возвращает новый массив 
splice() - удаляет/добавляет элементы
join() - превращает массив в строку
reverse() - переворачивает массив
toString() - превращает в строку
*/
 

//Одномерный массив
// let arr = [5, "Bob", -10, 5.7, true];

// console.log(arr.length); // проверяем длину массива 

// console.log(arr[3]); // выводит любое значение массива по индексу
// arr[3] = "word"; // меняем значение по индексу
// console.log(arr[3]); // новое значение

//Многомерный массив 
// let matrix = [[4,2,5], [17,8,9], ["string",1,3]]; 
// matrix[2][0] = 90; //переназначаем значение. первий аргумерт индекс какой массив, а второй индекс значения 
// console.log(matrix);

//======================== TASKS ========================

let fruits = ["apple", "banana", "orange", "kiwi"];

console.log(fruits.length); //вывести длину массива
console.log(fruits[0]); //вывести первый элемент
console.log(fruits[fruits.length - 1]); //вывести последний элемент
////////////////////////////////////////////////////
let numbers = [10, 20, 30];

numbers.push(40); //Добавить 40 в конец массива
numbers.unshift(5); //Добавить 5 в начало массива

console.log(numbers); //Вывести результат

////////////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5];

arr.shift(); //удалить первый элемент
arr.pop(); //удалить последний элемент
console.log(arr); //вывести массив

////////////////////////////////////////////////////
let users = ["Bob", "Anna", "John", "Kate"];

console.log(users.includes("Anna")); //проверить есть ли "Anna" в массиве
console.log(users.indexOf("John")); //найти индекс "John"


numbers.forEach((element) => { //вывести каждый элемент через forEach
    console.log(element);
});

////////////////////////////////////////////////////
let num = [2, 4, 6, 8];

const doubles = num.map((el) => el * 2); //создать новый массив, где все числа умножены на 2
console.log(doubles);
////////////////////////////////////////////////////

let numbers_2 = [3, 10, 15, 2, 8, 21];

const new_num = numbers_2.filter((el) => el > 10); //создать новый массив где только числа больше 10
console.log(new_num);
////////////////////////////////////////////////////

let users_2 = [
    { name: "Bob", age: 25 },
    { name: "Anna", age: 30 },
    { name: "John", age: 20 }
];

console.log(users_2.find((user) => user.name === "Anna")); //найти пользователя с именем "Anna"

const names = users_2.map((user) => user.name); //Создать новый массив имен:
console.log(names);
////////////////////////////////////////////////////

let numbers_3 = [5, 10, 15];

let total = numbers_3.reduce((a, b) => a + b) //посчитать сумму всех чисел
console.log(total);
////////////////////////////////////////////////////

let number = [1, 2, 3, 4, 5, 6];

let even_numbers = number.filter((num) => num % 2 === 0).map((num)=> num * 10);
console.log(even_numbers);


export const examples = [

];
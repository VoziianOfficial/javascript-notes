export const description = "Arrays in JavaScript:";

//============================== EXAMPLE ARRAYS =============================

//=============================== ARRAY METHODS============================== 

/*
push() - добавляет элемент в конец 
pop() - удаляет последний элемент 
unshift() - добавляет элемент в начало
shift() - удаляет первый элемент

indexOf(c, 1) - ищет индекс элемента
lastIndexOf(x, 1) -ищет индекс с конца
includes() - проверяет есть ли элемент (true/false) 

forEach() - перебирает массив
map() - создаёт новый массив
filter() - фильтрует элементы
reduce() - сводит массив к одному значению
find() - возвращает первый найденный элемент
findIndex() - возвращает индекс найденного элемента
some() - проверяет есть ли хотя бы один
every() - проверяет все элементы. возвращает true или false

slice(1, 3) - копирует часть массива
concat() - объединяет массивы и возвращает новый массив 
splice(1,3) - удаляет/добавляет элементы
join() - превращает массив в строку
reverse() - переворачивает массив
toString() - превращает в строку
sort() - сортирует массив от большего с меньшему и наоборот
Оператор "Spread" (...) - Три точки перед названием массива как бы «распаковывают» его. Они достают все числа из коробочки-массива и выкладывают их в ряд через запятую.
*/

// Примитивные типы копируются по значению, а объекты (включая массивы) — по ссылке. 

// let a = 5;
// let b = a; // b получает копию значения a
// a = 10; // изменение a не влияет на b
// console.log("a", a); // 10
// console.log("b", b); // 5


// let arr_1 = [1, 2, 3];
// let arr_2 = arr_1; // arr_2 получает ссылку на тот же массив, что и arr_1
// arr_1.push(4); // изменение arr_1 влияет на arr_2, так как они ссылаются на один и тот же массив
// console.log("arr_1", arr_1); // [1, 2, 3, 4]
// console.log("arr_2", arr_2); // [1, 2, 3, 4]

// arr_1.splice(2, 1); // c какого индекса и сколько удалить
// console.log("arr_1", arr_1);

// console.log(arr_1.length);





 
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

// let fruits = ["apple", "banana", "orange", "kiwi"];

// console.log(fruits.length); //вывести длину массива
// console.log(fruits[0]); //вывести первый элемент
// console.log(fruits[fruits.length - 1]); //вывести последний элемент
////////////////////////////////////////////////////
// let numbers = [10, 20, 30];

// numbers.push(40); //Добавить 40 в конец массива
// numbers.unshift(5); //Добавить 5 в начало массива

// console.log(numbers); //Вывести результат

////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4, 5];

// arr.shift(); //удалить первый элемент
// arr.pop(); //удалить последний элемент
// console.log(arr); //вывести массив

////////////////////////////////////////////////////
// let users = ["Bob", "Anna", "John", "Kate"];

// console.log(users.includes("Anna")); //проверить есть ли "Anna" в массиве
// console.log(users.indexOf("John")); //найти индекс "John"


// numbers.forEach((element) => { //вывести каждый элемент через forEach
//     console.log(element);
// });

////////////////////////////////////////////////////
// let num = [2, 4, 6, 8];

// const doubles = num.map((el) => el * 2); //создать новый массив, где все числа умножены на 2
// console.log(doubles);
////////////////////////////////////////////////////

// let numbers_2 = [3, 10, 15, 2, 8, 21];

// const new_num = numbers_2.filter((el) => el > 10); //создать новый массив где только числа больше 10
// console.log(new_num);
////////////////////////////////////////////////////

// let users_2 = [
//     { name: "Bob", age: 25 },
//     { name: "Anna", age: 30 },
//     { name: "John", age: 20 }
// ];

// console.log(users_2.find((user) => user.name === "Anna")); //найти пользователя с именем "Anna"

// const names = users_2.map((user) => user.name); //Создать новый массив имен:
// console.log(names);
////////////////////////////////////////////////////

// let numbers_3 = [5, 10, 15];

// let total = numbers_3.reduce((a, b) => a + b) //посчитать сумму всех чисел
// console.log(total);
////////////////////////////////////////////////////

// let number = [1, 2, 3, 4, 5, 6];

// let even_numbers = number.filter((num) => num % 2 === 0).map((num)=> num * 10); //оставить только чётные числа и умножить их на 10
// console.log(even_numbers);
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// let arr = [10, 20, 30, 40];

// console.log(arr[arr.length - 1]); //Нужно вывести последний элемент массива.
////////////////////////////////////////////////////
// let colors = ["red", "green", "blue"];

// colors.push("black");
// console.log(colors);
// ////////////////////////////////////////////////////
// let numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers);
////////////////////////////////////////////////////
// let array = [5, 6, 7, 8];

// array.pop();
// console.log(array);
////////////////////////////////////////////////////
// let fruits = ["apple", "banana", "orange"];

// console.log(fruits.includes("banana"));
////////////////////////////////////////////////////
// let arr = [10, 20, 30, 40];

// console.log(arr.indexOf(30));
////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4];
//  console.log(arr.reverse());
////////////////////////////////////////////////////
// let a = [1, 2];
// let b = [3, 4];

// console.log(a.concat(b));
////////////////////////////////////////////////////
// let words = ["Hello", "world", "JS"];

// console.log(words.join(", "));
////////////////////////////////////////////////////
// let arr = [10, 20, 30, 40, 50];
// let newArr = arr.slice(1, 4);
// console.log(newArr);
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4];

// let doubles = numbers.map((num) => num * 3);
// console.log(doubles);
////////////////////////////////////////////////////
// let names = ["bob", "anna", "john"];

// let upperName = names.map(name => name.toLocaleUpperCase()); // map создаёт новый массив, применяя функцию к каждому элементу. Внутри функции мы вызываем toUpperCase() уже для строки, а не для массива.
// console.log(upperName);
////////////////////////////////////////////////////
// let words = ["cat", "elephant", "dog"];

// let lengthWord = words.map(word => word.length); //Получить длину слов

// console.log(lengthWord);
////////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4, 5, 6];

// let doubles = numbers.filter((num) => num % 2 === 0);
// console.log(doubles);
////////////////////////////////////////////////////
// let numbers = [5, 12, 8, 20, 3];

// let biggerNum = numbers.filter((num) => num > 10);
// console.log(biggerNum);
////////////////////////////////////////////////////
// let words = ["cat", "house", "tree", "elephant"];

// let lengthWord = words.filter(word => word.length <= 4);
// console.log(lengthWord);
////////////////////////////////////////////////////
// let users = [
//     { name: "Bob", age: 25 },
//     { name: "Anna", age: 30 },
//     { name: "John", age: 20 }
// ];

// let john = users.some(user => user.name === "John");
// console.log(john);

// let nameArrays = users.map((user) => user.name);
// console.log(nameArrays);

// let usersAge = users.filter(user => user.age > 22);
// console.log(usersAge);
////////////////////////////////////////////////////
// let numbers = [10, 20, 30];

// let sum = numbers.reduce((a, b) => a + b); //Найти сумму массива
// console.log(sum);
////////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let newNum = numbers.filter(num => num % 2 === 0).map(num => num * 5).reduce((a, b)=> a + b);

// console.log(newNum);
////////////////////////////////////////////////////
// let numbers = [4, 12, 7, 25, 3];

// let max = Math.max(...numbers); // ... расспиливает массив и все значения становятся отдельными
// console.log(max);
////////////////////////////////////////////////////
// let numbers = [8, 2, 15, 1, 9];
// console.log(Math.min(...numbers));
////////////////////////////////////////////////////
// let numbers = [5, 10, 15, 20];

// let sum = numbers.reduce((a, b) => a + b);
// console.log(sum);
////////////////////////////////////////////////////
// let numbers = [10, 20, 30, 40]; // Найти среднее значение

// let sum = numbers.reduce((a, b) => a + b);
// console.log( sum / numbers.length);
////////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4, 5, 6]; //Посчитать количество чётных чисел
// // 1. Фильтруем чётные
// let evens = numbers.filter(num => num % 2 === 0);
// // 2. Считаем их количество
// console.log(evens.length);

//другой способ:

// let count = numbers.reduce((total, num) => {
//     // Если число чётное, прибавляем 1 к результату, если нет — оставляем как есть
//     return num % 2 === 0 ? total + 1 : total;
// }, 0); // Начинаем считать с нуля
// console.log(count);
////////////////////////////////////////////////////
// let numbers = [1, 2, 2, 3, 4, 4, 5];

// let unique = numbers.filter((num, index) => { // Оставляем число только если его ПЕРВОЕ появление в массиве
//     return numbers.indexOf(num) === index; // совпадает с его ТЕКУЩЕЙ позицией
// })
// console.log(unique);

//========== другой способ: ==========

// let unique = [...new Set(numbers)];
// console.log(unique);
/* 
Как это работает(пошагово):
new Set(numbers): Внутри этого объекта числа перебираются по очереди.Когда очередь доходит до второй «двойки», Set видит, что она уже есть в его коллекции, и просто игнорирует её.То же самое происходит с четвёркой.
[...]: Квадратные скобки создают новый массив, а три точки «рассыпают» в него уникальные значения из Set.
*/
////////////////////////////////////////////////////
// let arr = [1, 2, 3, 4];
// console.log(arr.reverse()); //Развернуть массив
////////////////////////////////////////////////////
// let words = ["cat", "elephant", "tiger", "dog"]; // Найти самое длинное слово

// words.sort((a, b) => b.length - a.length); //Можно просто отсортировать массив по длине слов от большего к меньшему и взять самое первое.
// console.log(words[0]);

//========== другой способ: ==========

// let longesWord = words.reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
// }, "")

/*
В методе .reduce():
Сначала longest — это пустая строка "".
Сравниваем "" и "яблоко". "яблоко" длиннее? Да. Теперь оно — чемпион.
Сравниваем "яблоко" (7 букв) и "ананас" (6 букв). "яблоко" длиннее? Да. Оно остается чемпионом.
Сравниваем "яблоко" и "банан" (5 букв). Снова "яблоко" побеждает.
*/
////////////////////////////////////////////////////
// let numbers = [1, 2, 3, 4]; //Сделать массив квадратов

// let squares = numbers.map(n => n * n);
// console.log(squares);
////////////////////////////////////////////////////
// let numbers = [-5, 10, -2, 7, -1]; // Оставить только положительные числа

// let positiv = numbers.filter(n => n >= 0);

// console.log(positiv);
////////////////////////////////////////////////////
// let users = [
//     { name: "Bob", age: 25 },
//     { name: "Anna", age: 30 },
//     { name: "John", age: 20 }
// ];

// let name = users.find((user) => user.name === "Anna"); //Найти "Anna".
// console.log(name);
// let newArray = users.map((user) => user.name); //Получить массив имён
// console.log(newArray);
// let age = users.filter((user) => user.age > 24);//Найти пользователей старше 24
// console.log(age);
////////////////////////////////////////////////////
// let arr = ["a", 1, "b", 2, "c"]; //Посчитать количество строк

// let string = arr.filter((item => typeof item === 'string')).length;
// console.log(string);
////////////////////////////////////////////////////
// let a = [1, 2, 3]; //Объединить два массива
// let b = [4, 5, 6];

// let newArrays = a.concat(b);
// console.log(newArrays);
//========== другой способ: ==========

// let numbers = [...a, ...b];
// console.log(numbers);
////////////////////////////////////////////////////
// let arr = [1, 2, 3, 5, 6]; // Найти пропущенное число
// let newArr = arr.find((num, index) => num !== index + 1) - 1;
// console.log(newArr);
/*
Этот способ основан на том, что в массиве 
(где ничего не пропущено и всё идет по порядку с единицы) 
число всегда на 1 больше, чем его индекс.
Метод .find() бежит по массиву и ищет первый элемент, 
для которого условие внутри скобок вернет true.
*/
////////////////////////////////////////////////////
// let arr = [6, 1, 3, 8]; // Найти пропущенное число в неотсортированом массиве 
// let max = Math.max(...arr); // Находим самое большое число
// let missing = [];
// console.log(max);

// let numSet = new Set(arr);
// console.log(numSet);

// Проходим циклом от 1 до максимума
// for (let i = 1; i <= max; i++){
//     if (!numSet.has(i)) {
//         missing.push(i); // Если числа нет в Set — оно пропущено
//     }
// }
// console.log("Пропущенные числа:", missing);
//обьеденяем два и сортируем
// let newArr = arr.concat(missing).sort((a, b)=> a - b);
// console.log(newArr);
////////////////////////////////////////////////////
// let numbers = [2, 7, 11, 15, 0]; //Нужно найти числа, сумма которых = 9
// let target = 9;
// let result = {}; //Наша "память"

// for (let n of numbers) {
//     let copmlement = target - n; //Сколько не хватает до цели ? 
    
//     if (result[copmlement] !== undefined) {
//         console.log(`Пара: ${n} и ${copmlement}`);
//         break;
//     }
//     result[n] = n; // Запоминаем текущее число
// }
/*
🔍 Разбор по шагам:
Первый шаг ($n = 2$):
Считаем: $9 - 2 = 7$.
Проверяем: есть ли 7 в объекте result? Нет.
Записываем: result[2] = 2. 
Теперь наш объект: { "2": 2 }.
Второй шаг ($n = 7$):Считаем: $9 - 7 = 2$.
Проверяем: есть ли 2 в объекте result? Да! Мы сохранили её на прошлом шаге.
Выводим результат и останавливаемся.
*/
////////////////////////////////////////////////////
let arr = ["r", "a", "c", "e", "c", "a", "r"]; //Проверить палиндром


////////////////////////////////////////////////////
let fruits = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "orange" },
    { id: 1, name: "apple" },
    { id: 4, name: "kiwi" }]; 

// console.log(fruits.find(fruit => fruit.id === 2));
    
// console.log(fruits.filter(fruit => fruit.name === "apple"));

// let result = fruits.map(fruit => fruit.name.length);
// console.log(result);

// let names = "John, Anna, Bob, Kate";

// let nameArray = names.split(", ")

// console.log(nameArray);

// let newNameArray = nameArray.join(", ");

// console.log(newNameArray);

let numbersArray = [1, 2, 3, 4, 5];

let reduce = numbersArray.reduce((sum, item) => sum + item, 0);

// console.log(reduce);


let arr_1 = [11, 25, 39,10, 5, 17];

let summa = arr_1.reduce((sum, item) => sum + item, 0) / arr_1.length;
// console.log(summa);


export const examples = [

];
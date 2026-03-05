//document.write("Вывод на страницу");
//console.log("Вывод в консоль");
//console.info("(i)	Для важных информационных сообщений");
//console.error("Критическая ошибка. Что-то сломалось.");
// console.warn("Предупреждение. Что-то идет не так");

//Подключаем темы
import * as variables from "./topics/variables.js"; 
import * as functions from "./topics/functions.js";
import * as operators from "./topics/operators.js";
import * as arrays from "./topics/arrays.js";

//Создание объекта topics для быстрого доступа по имени
const topics = {
    variables,
    functions,
    operators,
    arrays,
};

// dataset - Это способ передавать данные из HTML в JS.

// Находим иконки
const icons = document.querySelectorAll(".icon");
// Находим блок для вывода
const content = document.getElementById("content");



// 1️⃣ При клике меняем URL
icons.forEach(icon => {
    icon.addEventListener("click", () => {
        const topicName = icon.dataset.topic;

        // меняем hash (URL)
        window.location.hash = topicName;
    });
});


// 2️⃣ Функция загрузки темы
function loadTopic() {

    // получаем название темы из URL
    const topicName = window.location.hash.replace("#", "");

    const topic = topics[topicName];

    if (!topic) return;

    content.innerHTML = `<h2>${topic.description}</h2>`;

    topic.examples.forEach(fn => fn());
    
}


// 3️⃣ Слушаем изменение URL
window.addEventListener("hashchange", loadTopic);


// 4️⃣ Если страница открылась уже с hash
window.addEventListener("DOMContentLoaded", loadTopic);
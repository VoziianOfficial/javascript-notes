export const description = "Event Handler in JavaScript";
const pushButton = document.querySelector(".push-btn");
const input = document.querySelector(".input");


//============================= event handler =============================
let count = 0;
function onclickButton(el) {
    count++;
    pushButton.textContent = `Clicked ${count}`;
}
pushButton.addEventListener("click", onclickButton);

//============================= event handler for input =============================
function onInput(event) {
    if (event.target.value.toLowerCase() === "hello") {
        alert("Hello to you too!");
        console.log(event.target.value);
    }
}

input.addEventListener("input", onInput);



//============================= attributes for buttons =============================
/*
button.addEventListener("click", handler);      // один клик
button.addEventListener("dblclick", handler);   // двойной клик
button.addEventListener("mouseover", handler);  // навели мышку
button.addEventListener("mouseout", handler);   // убрали мышку
button.addEventListener("mousedown", handler);  // нажали
button.addEventListener("mouseup", handler);    // отпустили
*/

export const examples = [

];
export const description = "Objects and classes in JavaScript";


//============================= object example =============================
// let date = new Date();
// console.log(date);

// let arr = [41, 5, 2, -8, 12, 0];
// console.log(arr);
// console.log(arr.join(", "));
// console.log(arr.sort((a, b) => a - b));
// let string = arr.reverse().join(", ");
// console.log(string.split(", "));

// ============================== class example =============================

class Person {
    constructor(name, age, power) {
        this.name= name;
        this.age = age;
        this.power = power;
    }

    info() {
        console.log("player: " + this.name + ". age: " + this.age + ". power: " + this.power);  
    }
}


let player_1 = new Person('Alex', 20, 100);
player_1.info();

let player_2 = new Person('Steve', 16, 80);
player_2.info();

export const examples = [
];
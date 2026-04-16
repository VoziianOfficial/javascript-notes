export const description = "Objects and classes in JavaScript";


//============================= object and array example =============================
// let date = new Date();
// console.log(date);

// let arr = [41, 5, 2, -8, 12, 0];
// console.log(arr);
// console.log(arr.join(", "));
// console.log(arr.sort((a, b) => a - b));
// let string = arr.reverse().join(", ");
// console.log(string.split(", "));

let user = {
    name: "Alex",
    age: 25,
    work: "developer",
    car: true,
    isMarried: false,
    friends: ["Vasya", "Petya", "Masha"],
    "likes music": true
}

// console.log(user.name);

// delete user.car;
// console.log(user.car);

// console.log(user["likes music"]);

let user_2 = {};
user_2.name = "Bob";
user_2.age = 30;
user_2.work = "designer";
user_2.car = true;
user_2.isMarried = false;
user_2.friends = ["Vova", "Petra", "Misha"];
user_2["likes music"] = false;

// console.log(user_2);

// for (let key in user_2) { 
//     console.log(key);
//     console.log(user_2[key]);
    
// };

// console.log((0.1 * 10 + 0.7 * 10) / 10);
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// =============================== random number ===============================
// let random = Math.floor(Math.random() * (max-min)+min);
let random = Math.floor(Math.random() * (10 - 1) + 1);
// console.log(random);



// ============================== class example =============================

// class Person {
//     constructor(name, age, power) {
//         this.name= name;
//         this.age = age;
//         this.power = power;
//     }

//     info() {
//         console.log("player: " + this.name + ". age: " + this.age + ". power: " + this.power);  
//     }
// }


// let player_1 = new Person('Alex', 20, 100);
// player_1.info();

// let player_2 = new Person('Steve', 16, 80);
// player_2.info();

// export const examples = [
// ];
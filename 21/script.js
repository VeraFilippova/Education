//Логический оператор

// неправдивые значения null,  undefinde

// 1. Оператор && всегда возвращает первое ложное значение, если оно есть
// 2. Если все значения true и код дошел до конца условия, возвращается последнее значение 




// const hamburger = true;
// const fries = null;
// if (hamburger && fries) {
//   console.log("я сыт!");
// } else {
//   console.log("я голоден");
// }

const hamburger = 3;
const fries = 1; // картофель фри
const cola = 0;

console.log(hamburger === 3 && cola && fries)   // логические операторы возвращают значение на котором они остановились

// task1
if (hamburger === 3 && cola === 1 && fries) {
  console.log("all good");
} else {
  console.log("we  move on "); // мы идем дальше
}

// task2

if (hamburger || cola || fries) {
  console.log("all good");
} else {
  console.log("we move on "); 
}

let johnReport, alexReport, samReport, mariaReport ='done';
console.log(johnReport || alexReport || samReport || mariaReport);

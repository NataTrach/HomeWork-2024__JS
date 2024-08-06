// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  Вивести кожну змінну за допомогою: console.log
let string1 = 'hello';
console.log(string1);

let string2 = 'owu';
console.log(string2);

let string3 = 'com';
console.log(string3);

let string4 = 'ua';
console.log(string4);

let number1 = 1;
console.log(number1);

let number2 = 10;
console.log(number2);

let number3 = -999;
console.log(number3);

let number4 = 123;
console.log(number4);

let number5 = 3.14;
console.log(number5);

let number6 = 2.7;
console.log(number6);

let number7 = 16;
console.log(number7);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Natalia';
let middleName = 'Fedorivna';
let lastName = 'Trach';

let pib =`${firstName} ${middleName} ${lastName}`;
console.log(pib);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Та вивести в консоль

let firstName1 =prompt('firstName');
let middleName1 = prompt('middleName');
let age = prompt('age');

let all = `${firstName1} ${middleName1} ${age}`;
console.log(all);


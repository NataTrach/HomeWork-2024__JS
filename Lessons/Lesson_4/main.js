// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function squareRectangle(a, b) {
    return a * b
}

console.log(squareRectangle(8, 12));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle(PI, r) {
    return PI * r * 2
}

console.log(squareCircle(3.14, 6));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function squareCylinder(PI, r, h) {
    return 2 * PI * r * h
}

console.log(squareCylinder(3.14, 4, 7));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = ['apartment', 'auto', 'bicycle'];

// function arrAll(arr) {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// arrAll(arr);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, veritatis.';
//
// function newParagraph(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// newParagraph(text);

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

// function ellementS(text1) {
//     document.write(`<ul>`)
//     document.write(`<li>${text1}</li>`)
//     document.write(`<li>${text1}</li>`)
//     document.write(`<li>${text1}</li>`)
//
//     document.write(`</ul>`)
// }
//
// ellementS('okkkkk')

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write

// function allEllements(e, count) {
//     document.write(`<ul>`)
//
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${e}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// allEllements('text555', 3);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

// let arrMas = [4, 8, 'school', true];
//
// function arrPrDan(arrMas) {
//     document.write(`<ul>`)
//     for (const i of arrMas) {
//         document.write(`<li>${i}</li>`)
//     }
//     document.write(`<ul>`)
// }
//
// arrPrDan(arrMas);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
//     {id: 7, name: 'oleg', age: 28},
//     {id: 8, name: 'andrey', age: 29},
//     {id: 9, name: 'masha', age: 30},
//     {id: 10, name: 'olya', age: 31},
//     {id: 11, name: 'max', age: 31}
// ];
//
// function usersObj(users) {
//
//     for (const user of users) {
//         document.write(`<div>${user.id} . ${user.name}   ${user.age}</div>`)
//
//     }
//
// }
//
// usersObj(users);

//  #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let allNums = [9, 8, 6, 10, 1, -5];

function minNum(allNums) {
    let num = allNums[0];
    for (const e of allNums) {
        if (num > e) {
            num = e
        }
    }
    return num;
}

console.log(minNum(allNums));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13


function sum(arr) {
    let sumNum = 0;
    for (const i of arr) {
        sumNum += i
    }
    return sumNum
}

console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let num1 = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = num1

    return arr
}

console.log(swap([11, 22, 33, 44], 0, 1));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const element of currencyValues) {
        if (element.currency===exchangeCurrency){
            return sumUAH/element.value
        }
    }
}

console.log(exchange(10000,
    [
        {currency: 'USD', value: 25},
        {currency: 'EUR', value: 42}
    ],
    'USD'));

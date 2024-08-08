// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let massif = [100500, true, 'Anna', 'Vova', 'Max', 100, 'Okten', 5, 'music', 'films'];
console.log(massif[0]);
console.log(massif[1]);
console.log(massif[2]);
console.log(massif[3]);
console.log(massif[4]);
console.log(massif[5]);
console.log(massif[6]);
console.log(massif[7]);
console.log(massif[8]);
console.log(massif[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Famous five',
    pageCount: 150,
    genre: 'novels'
};
let book2 = {
    title: 'The love hypothesis',
    pageCount: 300,
    genre: 'family relationships'
};
let book3 = {
    title: 'Marry Poppins',
    pageCount: 200,
    genre: 'action'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title: 'Famous five',
    pageCount: 150,
    genre: 'novels',
    authors: [
        {name: 'Enid Blyton', age: 28},
        {name: 'Julian Tomson', age: 34}
    ]
};
let book12 = {
    title: 'The love hypothesis',
    pageCount: 300,
    genre: 'family relationships',
    authors: [
        {name: 'George Kim', age: 40},
        {name: 'Tom Henk', age: 50}
    ]
};
let book13 = {
    title: 'Marry Poppins',
    pageCount: 200,
    genre: 'action',
    authors: [
        {name: 'Bil Gei', age: 35},
        {name: 'Jim Bom', age: 47}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Ivan', username: 'Babich', password: 'ivba984@0'},
    {name: 'Petro', username: 'Pup', password: 'hg456'},
    {name: 'Max', username: 'Kvas', password: 'mbv578'},
    {name: 'Olena', username: 'Chorna', password: 'khfd467'},
    {name: 'Ira', username: 'Fito', password: 'kj865d'},
    {name: 'Sasha', username: 'Masha', password: 'jc45'},
    {name: 'Misha', username: 'Bilik', password: 'vgh865'},
    {name: 'Vasil', username: 'Kok', password: 'yftdres47787'},
    {name: 'Maria', username: 'Kostiv', password: 'ygd54e46t8'},
    {name: 'Mikola', username: 'Drub', password: 'yt56787'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperature = [
    [{morning: 11, day: 22, evening: 13}],
    [{morning: 10, day: 30, evening: 10}],
    [{morning: 13, day: 32, evening: 12}],
    [{morning: 15, day: 34, evening: 15}],
    [{morning: 16, day: 36, evening: 18}],
    [{morning: 15, day: 33, evening: 16}],
    [{morning: 12, day: 29, evening: 11}]
];

console.log(temperature);

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 59;
if (time > 0 && time <= 15) {
    console.log('1');
} else if (time > 15 && time <= 30) {
    console.log('2');
} else if (time > 30 && time <= 45) {
    console.log('3');
} else if (time > 45 && time < 60) {
    console.log('4');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = 26;
if (day > 0 && day <= 10) {
    console.log('1');
} else if (day > 10 && day <= 20) {
    console.log('2');
} else if (day > 20 && day < 32) {
    console.log('3');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday = 7;
switch (weekday) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 5;
let b = 5;
if (a > b) {
    console.log('a');
} else if (a < b) {
    console.log('b');
} else if (a === b) {
    console.log('рівні');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
// буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xxx = false;
if (!xxx) {
    console.log('default');
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('супер!');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('супер!');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('супер!');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('супер!');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('супер!');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('супер!');
}

// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrUsers = [
    new User(1, 'Anna', 'Kravec', '@ftgyy654433', '0671223454'),
    new User(2, 'Vasya', 'Vgftdtrd', '@ftgy544', '067122354'),
    new User(3, 'Ivan', 'Kravgg', '@ftgyy65443', '0676543454'),
    new User(4, 'Vira', 'Hbvhv', '@ftgyy44333', '067134454'),
    new User(5, 'Anna', 'Ihhvgff', '@ftgyy3', '0671223455'),
    new User(6, 'Anton', 'Ghvhgvgf', '@ftgyy633', '06712234244'),
    new User(7, 'Igor', 'Ghvhgvgf', '@ftgyy63883', '06712234244'),
    new User(8, 'Oleg', 'Ghvhgf', '@ftgyy638', '06712234244'),
    new User(9, 'Andriy', 'Ghvvgf', '@ftgyy6', '067124244'),
    new User(10, 'Olya', 'Ghvhgvf', '@ftgyy6355', '06712234244')
];

// #2ikXsE2WiKZ
// - Взяти з масив User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(arrUsers.filter((u) => !(u.id % 2)));

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(arrUsers.sort((a, b) => (a.id - b.id)));

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order
}

let arrClient = [
    new Client('1', 'Vasya', 'Pup', 'vasao@', 809565443221, ['banana', 'apple', 'garlic', 'pear']),
    new Client('2', 'Max', 'Pupik', 'maximus@', 809565443222, ['banana', 'carrot', 'pear']),
    new Client('3', 'Masha', 'Pupa', 'mashka@', 809565443223, ['banana', 'carrot', 'apple', 'garlic']),
    new Client('4', 'Vanya', 'Ben', 'vano@', 809565443224, ['banana', 'carrot', 'apple']),
    new Client('5', 'Tom', 'Pit', 'tom@', 809565443225, ['carrot', 'apple', 'garlic', 'pear']),
    new Client('6', 'Vova', 'Pupkin', 'vavan@', 809565443226, ['banana', 'pear']),
    new Client('7', 'Natali', 'Pupkina', 'nata@', 809565443227, ['apple', 'garlic', 'pear']),
    new Client('8', 'Vika', 'Ivanova', 'viktori@', 809565443228, ['banana', 'carrot', 'apple', 'garlic', 'pear']),
    new Client('9', 'Oleg', 'Kim', 'olko@', 809565443229, ['pear']),
    new Client('10', 'Vlad', 'Kukurudza', 'vladon@', 809565443220, ['banana', 'carrot', 'apple', 'pear']),
]
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)



// **********
// console.log(arrClient.sort((a, b) => a.order.length - b.order.length));
//**********



// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.

// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.produser = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume
}

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
};
let car1 = new Car('audi', 'Germany', '2016', '225', '3')
car1.drive();

Car.prototype.info = function () {
    console.log(`${this.model},${this.produser},${this.year},${this.maxSpeed},${this.volume}`);
}
car1.info();

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    console.log(this.maxSpeed = newSpeed);
}
car1.increaseMaxSpeed('250');

Car.prototype.changeYear = function (newValue) {
    console.log(this.year = newValue);
}
car1.changeYear('2020');


Car.prototype.addDriver = function () {
    console.log(this.driver = new Driver('Ivan', 'Tkach', '50', '30'));
}


function Driver(name, surname, age, experience) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.experience = experience
}

car1.addDriver();


// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.produser = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`${this.model},${this.produser},${this.year},${this.maxSpeed},${this.volume}`);
    };

    increaseMaxSpeed(newSpeed) {
        console.log(this.maxSpeed = newSpeed);
    };

    changeYear = function (newValue) {
        console.log(this.year = newValue);
    };

    addDriver(driver) {
        console.log(this.driver = new Driver('Ivan', 'Tkach', '50', '30'));
    }

}

let car2 = new Car2('audi', 'Germany', '2016', '225', '3');
car2.drive();
car2.info();
car2.increaseMaxSpeed('250');
car2.changeYear('2020');
car2.addDriver('Ivan', 'Tkach', '50', '30');

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let cinderellas = [
    new Cinderella('Anna', '15', '34'),
    new Cinderella('Inna', '14', '35'),
    new Cinderella('Olya', '16', '37'),
    new Cinderella('Vira', '19', '39'),
    new Cinderella('Inna', '18', '41'),
    new Cinderella('Alioa', '45', '40'),
    new Cinderella('Ilona', '17', '38'),
    new Cinderella('Anna', '35', '40'),
    new Cinderella('Inga', '55', '36'),
    new Cinderella('Karina', '25', '35')
];


class Princ {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }

}

const princ = new Princ('Ivan', '25', '34');

console.log(cinderellas.find(i => i.size === princ.shoe));

// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
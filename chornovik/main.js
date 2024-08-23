// let a = 0;
// while (a < 5) {
//     console.log('okten');
//     a++;
// }
// ***********
//
// let user = {
//     id: 11,
//     name: 'vova',
//     greeting1: function (msg) {
//         console.log('hello', msg, this.name);
//     },
//     greeting2 (msg) {
//         console.log('hello2', msg, this.name);
//     },
//     greeting3: (msg) => {
//         console.log('hello3', msg, user.name);
//     }
// }
// user.greeting1('me');
// user.greeting2('you');
// user.greeting3('us');

// **********
// замикання

// function userBuilder(id, name) {
//     let user = {
//         id: id,
//         name: name
//     }
//     return {
//         getId() {
//             console.log(user.id);
//         },
//         getName: () => {
//             console.log(user.name);
//         },
//         setId(id) {
//             if (id > 0)
//                 user.id = id
//         },
//         setName(name) {
//             if (name)
//                 user.name = name
//         },
//         getCopy() {
//             return {
//                 id: user.id,
//                 name: user.name
//             }
//         }
//     };
// }
//
// let user1 = userBuilder(1, 'Olya');
// let user2 = userBuilder(2, 'Sasha');
// let user3 = userBuilder(3, 'Ira');
//
// user1.getId();
// user1.getName();
// user1.setId(100);
// user1.getId();
// user1.setName('Anna');
// user1.getName();
// let copyUser = user1.getCopy();
// console.log(copyUser);

//**********

let arr = ['o', 'k', 't', 'e', 'n'];

Array.prototype.foreach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(i);
    }
};

arr.foreach((i, index) => `${i},${index + 1}`);

console.log(arr);

// ************

const numbers = [100, 200, 300, 400, 500];

Array.prototype.filter = function (callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(i)) {
            res.push(i);
        }
    }
    return res;
};

const filterNum = numbers.filter(element => element);

console.log(filterNum); // [3, 4, 5]
const crypto = require("crypto");
const array = new Uint32Array(2);
const {
  invert,
  difference
} = require('lodash')

// });
// var byteArray = new Uint8Array(1);

const differencearray = difference(['en-us', 'fr-ca', 'en-ca'], ['fr-ca', 'en-ca'])

console.log('difference', differencearray)
// const data = {
//   browseBy: {
//     'by-dimension': {
//       '_default': 'by-dimension',
//       'fr-ca': 'par-dimension'
//     },
//     'by-diameter': {
//       '_default': 'by-diameter',
//       'fr-ca': 'par-dimension-velo'
//     },
//     'by-cycle-type-and-usage': {
//       '_default': 'by-cycle-type-and-usage'
//     },
//     'by-vehicle': {
//       '_default': 'by-vehicle',
//       'fr-ca': 'par-vehicule'
//     },
//     'by-season': {
//       '_default': 'by-season',
//       'fr-ca': 'recherche-par-saison'
//     },
//     'by-category': {
//       '_default': 'by-category',
//       'fr-ca': 'recherche-par-categorie'
//     },
//     'by-family': {
//       '_default': 'by-family',
//       'fr-ca': 'recherche-par-famille'
//     },
//     'by-usage': {
//       '_default': 'by-usage',
//       'fr-ca': 'recherche-par-usage'
//     },
//     'all-tyres': {
//       '_default': 'all-tyres',
//       'en-ca': 'all-tires',
//       'en-us': 'all-tires',
//       'fr-ca': 'tous-les-pneus'
//     }
//   }
// };

// function getSearchKey(browseBy, word = 'by-family') {
//   for (const searchKey in browseBy) {
//     for (const [, category] of Object.entries(browseBy[searchKey])) {
//       if (category === word)
//         return searchKey
//     }
//   }
// }

// const searchKey = getSearchKey(data.browseBy)
// console.log(searchKey, '<<<<<')
// class Person {
//   constructor(age = 0) {
//     this.age = age;
//   }

//   drink() {
//     return 'drinking';
//   }
//   drive() {
//     return 'driving';
//   }
//   drinkAndDrive() {
//     return 'driving while drunk';
//   }
// }

class ResponsiblePersonProxy {
  constructor(person) {
    this.person = person;
  }

  drink() {
    if (this.person.age > 18) {
      return this.person.drink()
    } else {
      return "too young"
    }
  }
  drive() {
    if (this.person.age > 16) {
      return this.person.drive()
    } else {
      return "too young"
    }
  }

  drinkAndDrive() {
    return "Dead"
  }
}

class Person2 {
  constructor(age) {
    this.age = age;
  }
}

// const person = new Person2(20)
// const rperson = new ResponsiblePerson(person)
// console.log('rperson', rperson)
// console.log(rperson.drink())


// console.log(invert(flattenObject(data.browseBy)))


// class Car {
//   drive() {
//     console.log('Car being driven');
//   }
// }

// class CarProxy {
//   constructor(driver) {
//     this.driver = driver;
//     this._car = new Car();
//   }

//   drive() {
//     if (this.driver.age >= 16)
//       this._car.drive();
//     else
//       console.log('Driver too young');
//   }
// }

// class Driver {
//   constructor(age) {
//     this.age = age;
//   }
// }

// let car = new Car();
// car.drive();

// let car2 = new CarProxy(new Driver(12)); // try 22
// car2.drive();






class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return new Memento(this.balance);
  }

  restore(m) {
    this.balance = m.balance;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

let ba = new BankAccount(100);
let m1 = ba.deposit(50);
let m2 = ba.deposit(25);
console.log(ba.toString());

// restore to m1
ba.restore(m1);
console.log(ba.toString());

// restore to m2
ba.restore(m2);
console.log(ba.toString());




// const id = `w${Math.floor(Math.random() * 1000000000)}${Math.floor(
//   Math.random() * 1000000000
// )}`;
// // console.log(id, "length :", id.length);
// // }

// const generateRandomBytes = () => `${crypto.randomBytes(32).readBigUInt64BE()}`;

// let cnt = true;

// const gRbytes = () => generateRandomBytes();
// // console.log("gRbytes :", gRbytes());
// // const generateWidgetId = () => {
// // console.log(gRbytes(), '<<<<')

// const data = checkError()
// console.log('data returned ->', data)

// function checkError() {
//   const data = 'from catch'
//   try {
//     if (cnt == true) {
//       return checkRandomBytes(gRbytes())
//     } else {
//       return checkRandomBytes(gRbytes() + '111')
//     }
//   } catch (e) {
//     return data
//   }
// }


// function checkRandomBytes(string) {
//   throw new Error('insdie checkRandomBytes')
// }


// throw ('error in function')
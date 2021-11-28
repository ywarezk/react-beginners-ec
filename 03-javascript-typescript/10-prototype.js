/**
 * 
 * inheritance mechanism in javascript
 * 
 */

const stamObject = {
    hello: 'world',
    myFunction: () => {
        console.log('...')
    }
}

class Person {
    myFunction() {

    }
}

const a = {};
// a -> a.__proto__ -> a.__proto__.__proto__

// 36 -> a.__proto__ === Number.prototype, __proto__.__proto__ === Object.prototype
const myAge = 36;
myAge.toString()

// a.__proto__ = stamObject
// Object.setPrototypeOf(a, stamObject);
Object.setPrototypeOf(a, Person.prototype)


debugger;

//
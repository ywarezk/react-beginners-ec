/**
 * destructuring quickly extract values to variables
 */

const myArray = [10, 20, 30, 40]

const [firstElement, secondElement, ...restOfArray] = myArray  

const myObj = {
    hello: 'world',
    foo: 'bar',
    lurem: 'ipsum',
    dogName: 'piglet'
}

let { hello, foo, ...restOfObject } = myObj; 
// let hello = myObj['hello'];
// let foo = myObj['foo'];
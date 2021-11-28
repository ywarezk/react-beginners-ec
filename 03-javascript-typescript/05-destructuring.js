/**
 * destructuring quickly extract values to variables
 */

const myArray = [10, 20, 30, 40]

// const [firstElement, secondElement, ...restOfArray] = myArray  
const [firstElement, secondElement] = myArray  

const myObj = {
    hello: 'world',
    foo: 'bar',
    lurem: 'ipsum',
    dogName: 'piglet'
}

let { hello, foo, ...restOfObject } = myObj; 
// let hello = myObj['hello'];
// let foo = myObj['foo'];

// <Hello hello={'world'} foo={'bar'} />
// { hello: 'world', foo: 'bar' }
function Hello(
{ 
    hello,
    foo = 'some default value',
    ...props 
}
) {
    return (
        <h1>
            hello world {hello}
        </h1>
    )
}


const age = [10, 20, 30, 40];

// const first = age[0];
// const second = age[1];

const [first, second, ...sergei] = age;


function alotOfArgs(...args) {

}

alotOfArgs(10, 20)
alotOfArgs(10, 20, 30)

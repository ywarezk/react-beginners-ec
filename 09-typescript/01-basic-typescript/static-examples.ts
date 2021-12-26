

const hello: string = 'hello world';

let myNumber: number = 42;

// myNumber = 'hello'

function sayHello(msg: string): number {
    return msg.length;
}

sayHello('foo bar');

interface HasName {
    name: string;
}

class Person implements HasName {
    private _age: number = 36;

    constructor(public name: string) {}

    public birthday() {

    }
}

class Student extends Person {
    
}
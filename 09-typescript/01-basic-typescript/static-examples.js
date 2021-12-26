"use strict";
const hello = 'hello world';
let myNumber = 42;
// myNumber = 'hello'
function sayHello(msg) {
    return msg.length;
}
sayHello('foo bar');
class Person {
    constructor(name) {
        this.name = name;
        this._age = 36;
    }
    birthday() {
    }
}
class Student extends Person {
}


class Person {
    static myInstance = null;

    static myFunction = () => {
        
    }

    constructor(age) {
        this.age = age;
    }

    whatIsMyAgePrototype() {
        console.log(this);
        console.log(`my age is: ${this.age}`);
    }

    whatIsMyAgeObject = () => {
        console.log(this);
        console.log(`my age is: ${this.age}`);
    }
}

// const me = new Person(36);
// me.whatIsMyAge();

// const a = {
//     whatIsMyAge: me.whatIsMyAge
// }

// a.whatIsMyAge();

class Student extends Person {

    whatIsMyAgePrototype() {
        super.whatIsMyAgePrototype()
        console.log('another logic');
    }

    whatIsMyAgeObject() {
        super.whatIsMyAgeObject()
        console.log('another logic');
    }


}

const myStudents = new Student(37);

myStudents.whatIsMyAgePrototype();
myStudents.whatIsMyAgeObject();

debugger;
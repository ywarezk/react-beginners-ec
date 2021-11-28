

function sayHello() {
    // undefined
    // this is determined during runtime
    console.log(this)
}

const hello = function() {

}

// lambda functions
const foo = () => {
    // this is constant
    console.log(this)
}

sayHello();

const a = { something: sayHello};

a.something();


/**
 * 
 * variable declarations
 * 
 * const, let, var
 * 
 */

const myString = 'hello world';
let hello;
var foo = 'bar'
foo = true;
myString = true


/**
            scope           number of assignments           

var       functional                infinite

let           {}                    infinite   

const         {}                        1


const are not immutables

 */


function hello() {

    var message = 'hello world';

    if(true) {
        var message = 'another message';
    }

}
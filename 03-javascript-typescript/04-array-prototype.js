/**
 * 
 * 

Array.prototype.map

 */

const myStringArray = [
    'hello',
    'world',
    'foo',
    'bar'
];

const arrayLength = myStringArray.map((itemStr) => {
    return itemStr.length;
})
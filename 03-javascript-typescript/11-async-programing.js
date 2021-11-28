/**
 * 
 * promise
 * 
 * async-await
 * 
 */

// callback that is called in the future

setTimeout(() => {
    console.log('this will be called in the future')
}, 1000);

/**
 * 
 * -----O|------->  
 * 
 * 
 */

// ----o----o----o----o----o--->
setInterval(() => {
    console.log('hello interval');
}, 1000);

// ------R|---------------->
// ------X----->

fetch('https://...', {method: 'POST'}).then((response) => {
    // i can handle the response
});
console.log('this will run before the call back');

document.getElementById('buttonId').addEventListener('click', () => {

})

// Promise
// one api for dealing with async code

// wraps async code to give it unique api
// myPromise -> can release a shout -> listeners will jump
// -------O|--------------->
// -------X--------------->
// Pending ---> Resolved/Rejected
const myPromise = new Promise((resolve, reject) => {
    // wraps async code

    setTimeout(() => {
        console.log('this will be called in the future')
        resolve('this data will be passed to the listeners')
        // reject(new Error('something happened'))
    }, 1000);
});

myPromise.then(
    (msg) => {

    },
    (err) => {

    }
)

myPromise.then((msg) => {
    
})

// Promise
/*
Promise.all([
    fetch(...),
    somethingAsync(...)

    // []
]).then(() => {

})
*/

const hello = new Error();

// throw hello;

/**
 * 
 * async - await
 * this is something we use to deal with async programming with Promise
 * 
 */

/**
 * 
 * @returns {Promise<10>}
 */
async function myAge() {
    // Generator function 
    await Promise.all([
        myPromise,
        fetch('...')
    ])
    // const msg = await myPromise;
    // const response = await fetch('...');
    console.log(msg);
    return 10;
} 

myAge().then((ten) => {

})

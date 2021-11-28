// javascript -> node_modules

/*

export default function sayHello() {}

*/

import axios from 'axios';

// this represents something async
// in the future the promise will have value inside
const promiseWithResponse = axios.get('https://nztodo.herokuapp.com/api/tasks/?format=json');

promiseWithResponse.then((response) => {
    console.log(response.data);
});

async function printData() {
    const response = await axios.get('https://nztodo.herokuapp.com/api/tasks/?format=json');
    console.log(response.data);
}

printData();



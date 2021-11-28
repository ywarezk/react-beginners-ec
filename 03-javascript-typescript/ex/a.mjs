

// someObjWhichNeedPrint => {hello: 'world', foo: 'bar'}
export function printObj(someObjWhichNeedPrint) {
    for (let key of Object.keys(someObjWhichNeedPrint)) {
        console.log(
            `the key is: ${key} and the value is ${someObjWhichNeedPrint[key]}`
        )
    }
}
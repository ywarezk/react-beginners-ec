

function useState() {
    return [
        'hello',
        36
    ]
}

const [ theHelloString, myAge ] = useState()


// props => {...}
function Hello({ hello, foo }) {
    console.log(hello, foo);
}

Hello(
    {
        hello: 'world',
        foo: 'bar'
    }
)
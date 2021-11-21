/**
 * create an hello world h1 with React
 */

// changes handled using vanilla javascript only
// <h1></h1>
// const h1 = document.createElement('h1');
// h1.innerText = 'Hello world with javascript';

const container = document.getElementById('container');
// container.appendChild(h1);

// let create the h1 using React
// react manage dom change

// ReactElement - some drawing in the screen
/*

<h1>
    <strong>...</strong>
</h1>

*/

/*
const h1 = React.createElement(
    'h1',
    null,
    // 'Hello world with React' // children

    React.createElement(
        'strong',
        null,
        React.createElement(
            'u',
            null,
            'hello world with react and underline'
        )
    )
);

*/

/*
const h1 = (
    <h1>
        <strong>
            <u>hello world with JSX</u>
        </strong>
    </h1>
)
*/

// group of React.createElement to draw part of the screen

function HelloWorld() {
    return (
        <h1>
            <strong>
                <u>We create our first React component</u>
            </strong>
        </h1>
    )
}

function App() {
    return (
        <div>
            <nav>
                
            </nav>
            <header>
                <HelloWorld />
            </header>
        </div>
    )
}


ReactDOM.render(
    <HelloWorld />,
    container
)



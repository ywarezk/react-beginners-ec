# JSX

Javascript as XML

We will talk about differences between HTML and JSX

```js
function Header() {
    return (
        <header className="...">
            { /* <!-- this is comment in html --> */ }
            <img src={} />
            <h1>this is jsx</h1>
        </header>
    )
}
```

babel

```js
React.createElement(...)
```

## Rules

different rules of differences between HTML / JSX


```html
<H1></H1>
```

1. lower case upper case

all your components should start with capital letter

```js
import {Login} from './login.js';

function App() {
    return (
        <Login />
    )
}
```

2. Everything wrapped in one element

```html
<div>
    ...
</div>
<div>
    ...
</div>
```

```jsx
function Header() {
    return (
        <>

            <div>
                ...
            </div>
            <div>
                ...
            </div>
        </>
    )
}
```

3. no reserved words in js
4. {}

## EX

```js
function Login() {
    const isLoading = true;
    return ( 
        ...
    )
}

```

## Todo

```js
function Todo() {
    
}
```
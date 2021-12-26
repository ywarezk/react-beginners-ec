# Forms

```html
<form onSubmit={}>
    <input>
</form>
```

- grab user input
- validation
- error
- common action is to send it to server (depends on use case)

## popular libraries

- Formik
- react-hook-forms

## Grab user input without libraries

[Handling forms with Rect](https://reactjs.org/docs/forms.html)

- save the form in the component state

## Login

- send hard code data: yariv@nerdeez.com, 12345678
- grab the user input from the form

## Mobile

react-native

your write your code in javascript

build native application

app -> node.js -> javascript



react + react-dom -> web application
react + react-native -> mobile app

## EX.

function useLogin() {
    useState()
}

```
function Login() {
    // handleLoginSubmit(email, password)
    const [ user, handleLoginSubmit ] = useLogin();
    const handleSubmit = () => {


        fetch(...)
    }
}

function useTodo() {
    
    useState()
}

function Todo() {
    // the api should be this
    const tasks = useTodo()
    useEffect(() => {
        fetch(...)
    }, [])
}
```
# React components

How to update my UI

```js
export function Hello() {
    return (
        <h1>
            hello world
        </h1>
    )
}
```
## Component can be updated from the parent

## Props

passing infromation from the parent to the child.  
whenever props change the component function will be called again and be updated

## State

update the component from within the component

### useState

defines special variables that can transition us form one state to the other

### UI not REact

View 

## EX login from server

on handle submit in the login  
send a `POST` request to the following url:

```
https://academeez-login-ex.herokuapp.com/api/users/login
```

in the request body:

```
{
    email: 'yariv@nerdeez.com',
    password: '12345678'
}
```

the server should return a user object.  

```js
setUser(withServerObject);
```

- fetch
- axios
- `react-query`

## Authentication

Authentication / Authorization

authentication - who am i
authorization - what can I do

- do once
- do every request


- JWT


           Login Request
client ------------------> Server
            token-JWT
client <----------------- Server
             

    Authentication: Bearer <token>
client -------------------> Server

##  EX

`TodoList` grab the tasks from the server:

```
https://nztodo.herokuapp.com/api/tasks/?format=json
```

You will grab the tasks when the component is initiated

```js
useEffect(() => {
    ... call the server
    ... save in state
}, [])
```




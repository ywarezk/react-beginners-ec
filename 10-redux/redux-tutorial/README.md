
## Communication between login and header

after the login is submitted.  
you get a user from the server

header should be aware of the user you are getting.  
and display Hello <user.firstName>

## Header update

- useState

                Action
Header (guest) ---------> Header (yariv)



- useReduxState


s0
{
    user: null
}

s1
{
    user: {firstName: 'yariv' ....}
}

## Redux

A Predictable State Container for JS Apps

## Redux State

```js
// one object
// immutable
// private
let state = {
    user: null
}

state['user'] = {} // wrong

state = {
    user: {...}
}
```

## Store

store is holding the state

## Install Redux

```bash
> npm install redux
```

## React redux

connecting redux to react app

```bash
> npm install react-redux
```

## Redux toolkit

tools, best practices, shortcuts for working with redux

```bash
> npm install @reduxjs/toolkit
```

## Create the store


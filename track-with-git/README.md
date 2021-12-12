# Start a new react app and track with git

- start a new react web application
- track that application with git (source control)

## Commands

0. Install git in your computer

1. start a new react app

```bash
> npx create-react-app todo-app
```

2. cd into the created folder

```bash
> cd todo-app
```

3. track our project using git

those are local commands

```bash
> git init # initiate git locally
> git add . # add all the files in this folder to git
> git commit -m "initiated a new react application" # locally saves the version of the files
> git config ...
```

4. push you commits to a remote server - github

- create a new user for `github.com`
- login with that user
- search for a green button to create a new repository
  - add title, description
- after this some commands are printed...

    ```bash
    > git remote add origin https://... #easier
    > git status # prints the current branch on workspace status
    > git push origin master
    ```

## How do i work


```bash
> code .
```

All your work in this project

- Open the terminal: `View -> Terminal`

```bash
> git add .
> git commit -m "i changed something in my files"
> git status # this should be clean
> git push origin main # this should work
```


# NPM

node package manager

we will use it to install community packages.

## Node.js

install node.js.  
node js ships with npm

verify installation.  
which version of node am i running

```bash
> node -v
> npm -v
```

## How to use npm

### Init

```
> npm init --yes
```

this will create a `package.json`.  
Only run it if there is no `package.json` in the folder

### Npm use cases

- install packages
- uninstall packages
- publish
- version management

### Install packages

- From where to i install the packages

### Registry

server from where im installing my packages

what is the server from which im installing packages

```
> npm get registry
```

what is the address in IEC ?

```bash
> npm set registry <some-address>
```

Install a package:

```
npm install react
```

When you clone a project - usually the `node_modules` are not pushed to source control.

you will see: `package.json, package-lock.json`

Install all the packages:

```
> npm install
```
# Typescript

- programming language
- strognly typed

Javascript + static tools => typescript

## Typescript advantages

- compiler
  - a lot of your errors will be catched during compile time
- Better autocomplete
- better IDE support
- better communication

## who can run typescript

no one

                    compiler
`*.ts, *.tsx` -------------------> `*.js`

## Install typescript

```bash
> npm init --yes # you do not need to run this if created app with create-react-app
> npm install typescript # you do not need to run this if created app with create-react-app
> npx tsc --init # you do not need to run this if created app with create-react-app
> npx tsc -w
```

## TSConfig

tells the typescript compiler how to compile the files

## Create react app with typescript

```bash
> npx create-react-app daniel-app --template=typescript
```
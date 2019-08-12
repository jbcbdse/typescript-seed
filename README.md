# Typescript Seed project

This is a barebones setup for a running application with Typescript and Node.

Features:

- node version specified in .nvmrc
- Typescript installed as dev dependency
- `npm run watch` configured with nodemon and ts-node
- `npm run watch:debug` configured with `--inspect-brk` flag
- tsconfig and tslint configs set up with sensible defaults
- jest configured for unit testing with sensible defaults
- This README

## Using this seed

Fork this repo and start coding adding code to the `src/` directory.

## Developing

Develop and test the running application with `npm run watch` or `npm run watch:debug`

Run unit tests with `npm run test`

## Run your application

Build the app first with `npm run build`

Run the app with `npm start`

## Contributing

Feel free to add more sensible defaults for a basic node application, such as a "prettier" config, if that would
best, or a `npm run tdd` script for running tests in a watch mode.

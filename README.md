# HEB SWE2 Client - Emily Ngo

This is the frontend Angular application for the HEB SWE2 project. It connects to a FastAPI backend server and provides a UI for users to interact with their accounts (e.g., view balances, make deposits/withdrawals).


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Prerequisites

Before you start, make sure you have:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- A running backend (FastAPI) server at `http://127.0.0.1:8000`

## Running the project
1. **Install dependencies**

```bash
npm install
```

2. **Run Local Server**
To start a local development server, run:
```bash
npm run start
```
OR 
```bash
ng serve
```

3. **View Project**
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

--------------------------------------------------

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

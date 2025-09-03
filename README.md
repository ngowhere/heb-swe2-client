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
## Next Steps 
- Auto Log Out
- Auth Guard - ensure users cannot URL surf and visit the actions page without logging in first
- Front End Testing using Jest
- More input validation for withdraws

**Minor Fixes** 
 - Modules for Angular Material Components
 - Fix grammmar for widthdraw vs. Withdrawls
 - CSS formatting 
 - Right hand align error messages for input fields
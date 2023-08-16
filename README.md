# Expense Tracker App

This is a simple Expense Tracker application built using React and the Context API for state management.

## Features

- Add income and expense transactions
- Display the current balance, income, and expenses
- View a list of all transactions

## Technologies Used
* React
* Context API (for state management)
* CSS for styling

## Folder Structure
* src/
* components/: Contains all the components used in the app
* context/: Contains the Global State and Context Provider
* App.js: Main component that renders the app
* index.js: Entry point of the app

## How it Works

The application uses the Context API to manage global state across different components. The central piece of this management is the `GlobalProvider` component defined in the `GlobalState.js` file. It provides the global state and action functions to its child components through the `GlobalContext` context.

### `AppReducer` (AppReducer.js)

The `AppReducer` is a pure function responsible for defining how the application state changes in response to different actions. It takes the current state and an action object as parameters and returns the updated state based on the action type.

### `GlobalContext` and `GlobalProvider` (GlobalState.js)

The `GlobalContext` is created using the `createContext()` function and initialized with an initial state. The `GlobalProvider` component wraps the entire application and uses the `useReducer` hook to manage the state and actions.

The `GlobalProvider` component provides two main action functions:

- `deleteTransaction(id)`: Dispatches an action to delete a transaction based on the provided ID.
- `addTransaction(transaction)`: Dispatches an action to add a new transaction to the state.

These actions are defined in the `AppReducer` and allow components to interact with the global state without directly modifying it.

## Usage

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Start the development server using `npm start`.


## License

This project is licensed under the [MIT License](LICENSE).

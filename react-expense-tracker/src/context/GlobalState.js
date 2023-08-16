import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state for the global context
const initialState = {
  transactions: []
}

// Create a context with the initial state
export const GlobalContext = createContext(initialState);

// Provider component that wraps the app and provides global state and actions
export const GlobalProvider = ({ children }) => {
  // Use the useReducer hook to manage state and actions
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Define actions that modify the state
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION', // Action type for deleting a transaction
      payload: id // Data to be sent with the action (transaction ID to be deleted)
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION', // Action type for adding a transaction
      payload: transaction // Data to be sent with the action (new transaction data)
    });
  }

  // Provide the state and actions to the components through the context
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions, // State data: list of transactions
      deleteTransaction, // Action function to delete a transaction
      addTransaction // Action function to add a transaction
    }}>
      {children} {/* Render the child components */}
    </GlobalContext.Provider>
  );
}

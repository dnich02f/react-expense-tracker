import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20},
        { id: 2, text: 'Salary', amount: 300},
        { id: 3, text: 'Book', amount: -10},
        { id: 4, text: 'Camera', amount: 150},
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component - in order for other components to have access to our Global State, wrap in Provider component in App.js
// Destructuring is the idea. It will provides states and actions to components it's wrapped around
// pass in transactions object in the provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={
            {transactions: state.transactions}
        }>
            { children }
        </GlobalContext.Provider>
    )
}

import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider for the context
export const MyContextProvider = ({ children }) => {
  // Define state or any other context data here
  const [someData, setSomeData] = useState('Initial Value');

  // Example function that updates context data
  const updateData = (newValue) => {
    setSomeData(newValue);
  };

  // Context value containing data and functions
  const contextValue = {
    someData,
    updateData
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

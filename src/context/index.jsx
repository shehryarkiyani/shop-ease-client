import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
export const Inputcontext = createContext();

// Provider component to wrap around parts of the app that need access to the context
export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(""); // This will hold the search value

  return (
    <Inputcontext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </Inputcontext.Provider>
  );
};

// Corrected propTypes
InputProvider.propTypes = {
  children: PropTypes.node.isRequired, // children can be any renderable React element
};

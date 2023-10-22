import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useAuth() {
  return {
    auth: useContext(ThemeContext),
    setAuth: useContext(ThemeUpdateContext),
  };
}

export function ThemeProvider({ children }) {
  const [auth, setAuth] = useState(false);

  return (
    <ThemeContext.Provider value={auth}>
      <ThemeUpdateContext.Provider value={setAuth}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

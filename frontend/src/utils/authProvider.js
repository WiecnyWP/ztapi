import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
const ThemeContextId = React.createContext();
const ThemeUpdateContextId = React.createContext();

export function useAuth() {
  return {
    auth: useContext(ThemeContext),
    setAuth: useContext(ThemeUpdateContext),
    userId: useContext(ThemeContextId),
    setUserId: useContext(ThemeContextId),
  };
}

export function ThemeProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <ThemeContext.Provider value={auth}>
      <ThemeContextId.Provider value={userId}>
        <ThemeUpdateContext.Provider value={setAuth}>
          <ThemeUpdateContextId.Provider value={setUserId}>
            {children}
          </ThemeUpdateContextId.Provider>
        </ThemeUpdateContext.Provider>
      </ThemeContextId.Provider>
    </ThemeContext.Provider>
  );
}

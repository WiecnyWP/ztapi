import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Add } from "./views/Add";
import { Hau } from "./views/Hau";
import { Register } from "./views/Register";
import { Search } from "./views/Search";
import { Workofart } from "./views/Workofart";
import { Layout } from "./Layout";
import { ThemeProvider } from "./utils/authProvider";
import { useAuth } from "./utils/authProvider";
import { setAuthToken } from "./utils/setTokenToAxios";

export default function App() {
  const { auth } = useAuth();

  useEffect(() => {
    if (auth) {
      setAuthToken(auth);
    }
  }, [auth]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route element={<Layout />}>
            <Route path="/add" element={<Add />} />
            <Route path="/hau" element={<Hau />} />
            <Route path="/workofart" element={<Workofart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

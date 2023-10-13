import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/login";
import { Add } from "./views/add";
import { Hau } from "./views/hau";
import { Register } from "./views/register";
import { Search } from "./views/search";
import { Workofart } from "./views/workofart";
import { Layout } from "./Layout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route element={<Layout />}>
            <Route path="/add" element={<Add />} />
            <Route path="/hau" element={<Hau />} />
            <Route path="/workofart" element={<Workofart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

/*export default function App() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/art/getAll');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArtData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Art Data</h1>
      <ul>
        {artData.map((art, index) => (
          <li key={index}>
            Type: {art.artType}, Name: {art.artName}, City: {art.city}
          </li>
        ))}
      </ul>
    </div>
  );
}*/

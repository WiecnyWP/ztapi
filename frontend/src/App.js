import './App.css';
import React, { useState, useEffect } from 'react';

export default function App() {
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
}
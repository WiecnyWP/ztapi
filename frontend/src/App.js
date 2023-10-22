import React, { useState, useEffect } from "react";
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
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (auth) {
      setAuthToken(auth);
    }
  }, []);
  return (
    <>
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
    </>
  );
}

// export default function App() {
//   const [artData, setArtData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/art/getAll");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setArtData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Art Data</h1>
//       <ul>
//         {artData.map((art, index) => (
//           <li key={index}>
//             Type: {art.artType}, Name: {art.artName}, City: {art.city}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function App() {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/users/getAll");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Users Data</h1>
//       <ul>
//         {userData.map((user, index) => (
//           <li key={index}>
//             Name: {user.name}, Surname: {user.surname}, Username:{" "}
//             {user.username}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

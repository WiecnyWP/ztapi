import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/hau.css";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authProvider";
import axios from "axios";
import { setAuthToken } from "../utils/setTokenToAxios";
import unHappyImg from "../assets/unhappy.png";

export const Add = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    } else {
      setAuthToken(auth);
      axios({
        method: "get",
        url: "http://localhost:8080/api/users/getCurrentUserInfo",
      })
        .then(function (response) {
          setIsAdmin(response.data.userRole === "ADMIN");
        })
        .catch((err) => {
          console.log(err);
        });

      axios({
        method: "get",
        url: "http://localhost:8080/api/art/getAll",
      }).then((res) => {
        const onlyCities = res.data.map((e) => e.city.cityName);
        console.log(onlyCities);
        setCities(onlyCities);
      });
    }
  }, [auth]);

  return (
    <>
      {/* <?php if(!isset($_COOKIE["id_user"])){ header("Location: login"); } ?> */}
      <div className="container-add">
        {isAdmin ? <AdminContent cities={cities} /> : <UserContent />}
        {/* <?php if(isset($_COOKIE["id_user_privilege"]) && $_COOKIE["id_user_privilege"] == 1) :?> */}
      </div>
    </>
  );
};

const AdminContent = ({ cities }) => {
  return (
    <div className="content">
      <div className="login-container">
        <form id="add" action="add" method="POST" ENCTYPE="multipart/form-data">
          {/* <?php if(isset($messages)) {
            foreach ($messages as $message){
                echo $message;
            }
        }
        ?> */}

          <input name="city" type="text" placeholder="city" />
          <button type="submit">Add</button>
        </form>
        <form id="add" action="add" method="POST" ENCTYPE="multipart/form-data">
          {/* <?php if(isset($messages)) {
            foreach ($messages as $message){
              echo $message;
            }
          }
        ?> */}
          <input name="type" type="text" placeholder="type" />
          <input name="name" type="text" placeholder="name" />
          <select name="cars" id="cars">
            {cities && cities.map((e) => <option value={e}>{e}</option>)}
          </select>
          <input name="file" type="file" placeholder="image" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="logo">
        <img src={Logo} />
      </div>
    </div>
  );
};

const UserContent = () => {
  return (
    <div className="not-admin">
      <p className="warning">Only administrator can add art!</p>
      <img src={unHappyImg} />
    </div>
  );
};

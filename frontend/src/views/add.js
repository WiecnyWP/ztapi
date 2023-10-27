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
  const [isAdmin, setIsAdmin] = useState("default");
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
        url: "http://localhost:8080/api/city/getAll",
      }).then((res) => {
        const onlyCities = res.data.map((e) => e.cityName);
        setCities(onlyCities);
      });
    }
  }, [auth]);

  return (
    <>
      {/* <?php if(!isset($_COOKIE["id_user"])){ header("Location: login"); } ?> */}
      <div className="container-add">
        {isAdmin === "default" ? (
          <></>
        ) : isAdmin ? (
          <AdminContent cities={cities} />
        ) : (
          <UserContent />
        )}
        {/* <?php if(isset($_COOKIE["id_user_privilege"]) && $_COOKIE["id_user_privilege"] == 1) :?> */}
      </div>
    </>
  );
};

const AdminContent = ({ cities }) => {
  const [cityState, setCityState] = useState("default");
  const [artState, setArtState] = useState("default");
  const submitCityForm = (e) => {
    e.preventDefault();
    const cityInput = e.target.querySelector("input[name=city]");
    const cityValue = cityInput.value;
    const isCityInputEmpty = cityValue === "";

    if (!isCityInputEmpty) {
      setCityState("loading");
      axios({
        method: "post",
        url: "http://localhost:8080/api/city/add",
        data: { cityName: cityValue },
      })
        .then(function (response) {
          console.log(response);
          setCityState("finished");
        })
        .catch((err) => {
          setCityState("error");
          console.log(err);
        });
    }
  };

  const submitFormArt = (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target.querySelectorAll("input"));

    let object = {};
    let isObjectFull = false;
    inputs.forEach((e) => {
      if (e.value !== "") {
        object[e.name] = e.value;
        isObjectFull = true;
      } else {
        isObjectFull = false;
      }
    });

    console.log(object.file);

    if (isObjectFull) {
      // setError(false);
      // axios({
      //   method: "post",
      //   url: "http://localhost:8080/api/auth/register",
      //   data: object,
      // }).then(function (response) {
      //   setAuth(response.data.token);
      //   navigate("/");
      // });
    } else {
      // setError(
      //   !isObjectFull ? "All fields are required" : "Password should match"
      // );
    }
  };

  return (
    <div className="content">
      <div className="login-container">
        <form onSubmit={submitCityForm} id="add">
          {cityState === "loading" && <h2>Loading</h2>}
          {cityState === "finished" ? (
            <>
              <h2>Success</h2>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCityState("default");
                }}
              >
                Add another city
              </button>
            </>
          ) : (
            <>
              <input name="city" type="text" placeholder="city" />
              <button type="submit">Add</button>
            </>
          )}
        </form>
        <form onSubmit={submitFormArt} id="add">
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

import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/hau.css";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authProvider";
import axios from "axios";
import { setAuthToken } from "../utils/setTokenToAxios";
import unHappyImg from "../assets/unhappy.png";
import { convertBase64 } from "../utils/base64Converter";

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
        setCities(res.data);
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
          <AdminContent
            auth={auth}
            setAuthToken={setAuthToken}
            cities={cities}
          />
        ) : (
          <UserContent />
        )}
        {/* <?php if(isset($_COOKIE["id_user_privilege"]) && $_COOKIE["id_user_privilege"] == 1) :?> */}
      </div>
    </>
  );
};

const AdminContent = ({ cities, auth, setAuthToken }) => {
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

  const submitFormArt = async (e) => {
    e.preventDefault();
    const inputs = Array.from(e.target.querySelectorAll("input"));
    const fileInput = e.target.querySelector("input[type='file']");
    const select = e.target.querySelector("select");

    let object = {};
    let isObjectFull = true;

    inputs.forEach((e) => {
      if (e.value !== "") {
        object[e.name] = e.value;
      } else {
        isObjectFull = false;
      }
    });

    if (fileInput.files[0]) {
      const base64 = await convertBase64(fileInput.files[0]);
      object.image = base64.split(",")[1];
    } else {
      isObjectFull = false;
    }

    const file = fileInput.files[0];
    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split(".").pop();
      object.fileExtension = fileExtension;
    } else {
      console.error(
        "Nie można odczytać rozszerzenia pliku, ponieważ nie wybrano pliku."
      );
    }

    object.city = JSON.parse(select.value);

    if (isObjectFull) {
      setArtState("loading");
      setAuthToken(auth);
      axios({
        method: "post",
        url: "http://localhost:8080/api/art/add",
        data: object,
      })
        .then(function (response) {
          setArtState("finished");
          console.log(response);
        })
        .catch((err) => {
          setArtState("error");
          console.log(err);
        });
    }
  };

  return (
    <div className="content">
      <div className="login-container">
        <form onSubmit={submitCityForm} id="add">
          {cityState === "loading" && <h2>Loading</h2>}
          {cityState === "error" && <h2>something wrong</h2>}
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
              <input required name="city" type="text" placeholder="city" />
              <button type="submit">Add</button>
            </>
          )}
        </form>
        <form onSubmit={submitFormArt} id="add">
          {artState === "loading" && <h2>Loading</h2>}
          {artState === "error" && <h2>something wrong</h2>}
          {artState === "finished" ? (
            <>
              <h2>Success</h2>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setArtState("default");
                }}
              >
                Add another city
              </button>
            </>
          ) : (
            <>
              <input required name="artType" type="text" placeholder="type" />
              <input required name="artName" type="text" placeholder="name" />
              <select name="cars" id="cars">
                {cities &&
                  cities.map((e) => {
                    return (
                      <option
                        key={e.cityName}
                        value={JSON.stringify({
                          id: e.id,
                          cityName: e.cityName,
                          zipCode: e.zipCode,
                          country: e.country,
                        })}
                      >
                        {e.cityName}
                      </option>
                    );
                  })}
              </select>
              <input required name="image" type="file" placeholder="image" />
              <button type="submit">Add</button>
            </>
          )}
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

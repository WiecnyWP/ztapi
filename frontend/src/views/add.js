import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/hau.css";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authProvider";
import axios from "axios";
import { setAuthToken } from "../utils/setTokenToAxios";
import unHappyImg from "../assets/unhappy.png";
import { Form } from "../components/Form";

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
      })
        .then((res) => {
          setCities(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [auth]);

  const refreshCities = () => {
    axios({
      method: "get",
      url: "http://localhost:8080/api/city/getAll",
    })
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-add">
      {isAdmin === "default" ? (
        <></>
      ) : isAdmin ? (
        <AdminContent
          auth={auth}
          setAuthToken={setAuthToken}
          cities={cities}
          refreshCities={refreshCities}
        />
      ) : (
        <UserContent />
      )}
    </div>
  );
};

const AdminContent = ({ cities, auth, setAuthToken, refreshCities }) => {
  const [artError, setArtError] = useState();
  const [artFinished, setArtFinished] = useState(false);
  const [cityError, setCityError] = useState();
  const [cityFinished, setCityFinished] = useState(false);
  const submitCityForm = (val) => {
    axios({
      method: "post",
      url: "http://localhost:8080/api/city/add",
      data: { cityName: val.city },
    })
      .then(function () {
        setCityFinished(true);
        refreshCities();
      })
      .catch((err) => {
        setCityError("something wrong");
        console.log(err);
      });
  };

  const submitFormArt = async (val) => {
    setAuthToken(auth);
    axios({
      method: "post",
      url: "http://localhost:8080/api/art/add",
      data: val,
    })
      .then(function (response) {
        setArtFinished(true);
      })
      .catch((err) => {
        setArtError("something wrong");
        console.log(err);
      });
  };

  return (
    <div className="content">
      <div className="login-container">
        <Form
          submit={submitCityForm}
          id="formCity"
          error={cityError}
          onFinished={() => setCityFinished(false)}
          finished={cityFinished}
        >
          <input required name="city" type="text" placeholder="city" />
        </Form>

        <Form
          submit={submitFormArt}
          error={artError}
          onFinished={() => setArtFinished(false)}
          finished={artFinished}
          selectName="city"
          fileName="image"
        >
          <input required name="artType" type="text" placeholder="type" />
          <input required name="artName" type="text" placeholder="name" />
          <select name="cities">
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
        </Form>
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

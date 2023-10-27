import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/style.css";
import axios from "axios";
import { useAuth } from "../utils/authProvider";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../utils/setTokenToAxios";

export const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (auth) {
      setAuthToken(auth);
      navigate("/workofart");
    }
  }, [auth]);

  const submitForm = (e) => {
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

    if (isObjectFull) {
      setError(false);

      axios({
        method: "post",
        url: "http://localhost:8080/api/auth/authenticate",
        data: object,
      })
        .then(function (response) {
          setAuth(response.data.token);
          navigate("/workofart");
        })
        .catch((err) => {
          if (err.response.status === 403) setError("Incorrect credentials");
        });
    } else {
      setError(
        !isObjectFull ? "All fields are required" : "Incorrect credentials"
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <form
            onSubmit={submitForm}
            className="login"
            action="login"
            method="POST"
          >
            <div className="messages">
              {error && error}
              {/* <?php if(isset($messages)) {
                        foreach ($messages as $message){
                            echo $message;
                        }
                    }
                    ?> */}
            </div>
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <a href="register">not started? click here to register</a>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
      </div>
    </>
  );
};

import React, { useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/style.css";
import "../styles/register.css";
import axios from "axios";
import { useAuth } from "../utils/authProvider";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../utils/useFetch";

export const Register = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [error, setError] = useState(false);

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

    const passwordMatch = object.password === object.confirmedPassword;

    if (isObjectFull && passwordMatch) {
      setError(false);

      axios({
        method: "post",
        url: "http://localhost:8080/api/auth/register",
        data: object,
      }).then(function (response) {
        setAuth(response.data.token);
        navigate("/");
      });
    } else {
      setError(
        !isObjectFull ? "All fields are required" : "Password should match"
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <form onSubmit={submitForm} id="register">
            {error && <h1>{error}</h1>}
            {/* <?php if(isset($messages)) {
                    foreach ($messages as $message){
                        echo $message;
                    }
                }
                ?> */}
            <input name="name" type="text" placeholder="name" />
            <input name="surname" type="text" placeholder="surname" />
            <input name="username" type="text" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <input
              name="confirmedPassword"
              type="password"
              placeholder="password"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
      </div>
    </>
  );
};

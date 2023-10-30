import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/style.css";
import axios from "axios";
import { useAuth } from "../utils/authProvider";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../utils/setTokenToAxios";
import { Form } from "../components/Form";

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

  const submitForm = (data) => {
    setError(false);

    axios({
      method: "post",
      url: "http://localhost:8080/api/auth/authenticate",
      data: data,
    })
      .then((response) => {
        setAuth(response.data.token);
        navigate("/workofart");
      })
      .catch((err) => {
        if (err.response.status === 403) setError("Incorrect credentials");
      });
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <Form submit={submitForm} className="login" error={error}>
            <input
              required
              name="username"
              type="text"
              placeholder="username"
            />
            <input
              required
              name="password"
              type="password"
              placeholder="password"
            />
            <a href="register">not started? click here to register</a>
          </Form>
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
      </div>
    </>
  );
};

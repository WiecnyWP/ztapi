import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import "../styles/style.css";
import "../styles/register.css";
import axios from "axios";
import { useAuth } from "../utils/authProvider";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";

export const Register = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [error, setError] = useState(false);

  const submitForm = (data) => {
    const passwordMatch = data.password === data.confirmedPassword;

    if (passwordMatch) {
      setError(false);
      axios({
        method: "post",
        url: "http://localhost:8080/api/auth/register",
        data: data,
      }).then(function (response) {
        setAuth(response.data.token);
        navigate("/");
      });
    } else {
      setError("Password should match");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <Form error={error} submit={submitForm} id="register">
          <input required name="name" type="text" placeholder="name" />
          <input required name="surname" type="text" placeholder="surname" />
          <input required name="username" type="text" placeholder="username" />
          <input
            required
            name="password"
            type="password"
            placeholder="password"
          />
          <input
            required
            name="confirmedPassword"
            type="password"
            placeholder="password"
          />
        </Form>
      </div>
      <div className="logo">
        <img src={Logo} />
      </div>
    </div>
  );
};

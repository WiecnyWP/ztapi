import React from "react";
import Logo from "../assets/logo.svg";
import "../styles/style.css";
import "../styles/register.css";

export const Register = () => {
  return (
    <>
      <div className="container">
        <div className="login-container">
          <form
            id="register"
            action="registerAdd"
            method="POST"
            ENCTYPE="multipart/form-data"
          >
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

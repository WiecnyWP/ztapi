import React from "react";
import Logo from "../assets/logo.svg";
import "../styles/style.css";

export const Login = () => {
  return (
    <>
      <div className="container">
        <div className="login-container">
          <form className="login" action="login" method="POST">
            <div className="messages">
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

import React from "react";
import Logo from "../assets/logo.svg";
import "../styles/hau.css";

export const Hau = () => {
  return (
    <>
      <div className="content">
        <div className="text">
          <p>
            History Around Us is a web application for lovers of history, it
            contains a collection of sculptures, paintings and antiques from
            various eras. Users from all over the world can rate visited
            facilities and share their impressions.
          </p>
        </div>
        <div className="logo">
          <img src={Logo} />
        </div>
      </div>
    </>
  );
};

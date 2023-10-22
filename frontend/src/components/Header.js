import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faH,
  faPaintbrush,
  faMagnifyingGlass,
  faPlus,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Hau from "../assets/hau.png";
import { useAuth } from "../utils/authProvider";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../utils/setTokenToAxios";

export const Header = () => {
  const navigation = useNavigate();
  const { setAuth } = useAuth();
  const logOut = () => {
    setAuth(false);
    setAuthToken(false);
    // navigation("/");
  };

  return (
    <header>
      <div className="navigation">
        <Link to={"hau"}>
          <div className="item">
            <img src={Hau} />
          </div>
        </Link>
        <div className="item">
          <Link to={"workofart"}>Work of art</Link>
        </div>
        <div className="item">
          <Link to={"search"}>Search</Link>
        </div>
        <div className="item">
          <Link to={"add"}>Add</Link>
        </div>
        <div className="item">
          <button onClick={() => logOut()} id="logout">
            Logout
          </button>
        </div>
      </div>
      <div className="navigation-mobile">
        <div className="item">
          <a href="hau">
            <FontAwesomeIcon icon={faH} />
          </a>
        </div>
        <div className="item">
          <a href="workofart">
            <FontAwesomeIcon icon={faPaintbrush} />
          </a>
        </div>
        <div className="item">
          <a href="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
        </div>
        <div className="item">
          <a href="add">
            <FontAwesomeIcon icon={faPlus} />
          </a>
        </div>
        <div className="item" onClick={() => logOut()}>
          <a id="logoutMobile">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </a>
        </div>
      </div>
    </header>
  );
};

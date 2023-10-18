import React from "react";
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

export const Header = () => {
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
          <button id="logout">Logout</button>
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
        <div className="item">
          <a id="logoutMobile">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </a>
        </div>
      </div>
    </header>
  );
};
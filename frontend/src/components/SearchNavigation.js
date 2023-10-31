import React from "react";
import Hau from "../assets/hau.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faH, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchNavigation = ({ search, setSearch }) => {
  return (
    <>
      <div className="navigation">
        <Link to={"/hau"}>
          <div className="item">
            <img src={Hau} />
          </div>
        </Link>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            name="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="navigation-mobile">
        <div className="item">
          <Link to={"/hau"}>
            <FontAwesomeIcon icon={faH} />
          </Link>
        </div>
        <div className="search">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
          <input
            name="name"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

import { useState, useEffect } from "react";
import Hau from "../assets/hau.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faH, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/hau.css";
import "../styles/search.css";
import { SearchItem } from "../components/SearchItem";
import { useFetch } from "../utils";

export const Search = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:8080/api/art/getAll"
  );
  const [search, setSearch] = useState("");

  console.log(data);
  return (
    <>
      <div className="search-container">
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
            <a href="hau">
              <FontAwesomeIcon icon={faH} />
            </a>
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
        <section className="projects">
          {loading && <h1>Loading...</h1>}
          {data &&
            data
              .filter((e) => {
                if (search === "") {
                  return e;
                } else {
                  const searchToLowerCase = search.toLocaleLowerCase();
                  if (
                    e.artName.toLowerCase().includes(searchToLowerCase) ||
                    e.artType.toLowerCase().includes(searchToLowerCase) ||
                    e.city.toLowerCase().includes(searchToLowerCase)
                  ) {
                    return e;
                  }
                }
              })
              .map((data) => (
                <SearchItem
                  imgSrc={data.image}
                  text1={data.artType}
                  text2={data.artName}
                  text3={data.city}
                />
              ))}
        </section>
      </div>
    </>
  );
};
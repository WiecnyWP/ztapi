import { useState, useEffect } from "react";
import Hau from "../assets/hau.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faH, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/hau.css";
import "../styles/search.css";
import { SearchItem } from "../components/SearchItem";
import { useFetch } from "../utils/useFetch";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authProvider";
import { setAuthToken } from "../utils/setTokenToAxios";
import axios from "axios";

export const Search = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    if (!auth) {
      navigate("/");
    } else {
      setAuthToken(auth);
      axios({
        method: "get",
        url: "http://localhost:8080/api/users/getCurrentUserInfo",
      })
        .then(function (response) {
          console.log(response.data.userData.id);
          setUserId(response.data.userData.id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [auth]);

  const { data, error, loading } = useFetch({
    url: "http://localhost:8080/api/art/getAll",
  });
  const [search, setSearch] = useState("");

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
                    e.city.cityName.toLowerCase().includes(searchToLowerCase)
                  ) {
                    return e;
                  }
                }
              })
              .map((data) => {
                return (
                  <SearchItem
                    key={data.id}
                    imgSrc={data.image}
                    text1={data.artType}
                    text2={data.artName}
                    city={data.city}
                    userId={userId}
                    artId={data.id}
                  />
                );
              })}
        </section>
      </div>
    </>
  );
};

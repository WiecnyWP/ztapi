import { useState, useEffect } from "react";
import "../styles/hau.css";
import "../styles/search.css";
import { SearchItem } from "../components/SearchItem";
import { useFetch } from "../utils/useFetch";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authProvider";
import { setAuthToken } from "../utils/setTokenToAxios";
import axios from "axios";
import { SearchNavigation } from "../components/SearchNavigation";

export const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { auth } = useAuth();
  const [userId, setUserId] = useState(null);
  const { data, loading } = useFetch({
    url: "http://localhost:8080/api/art/WithImage",
  });
  useEffect(() => {
    if (!auth) {
      navigate("/");
    } else {
      setAuthToken(auth);
      axios({
        method: "get",
        url: "http://localhost:8080/api/users/CurrentUserInfo",
      })
        .then(function (response) {
          setUserId(response.data.userData.id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [auth]);

  return (
    <div className="search-container">
      <SearchNavigation search={search} setSearch={setSearch} />
      <section className="projects">
        {loading && <h1>Loading...</h1>}
        {data &&
          data
            .filter((item) => {
              if (search === "") {
                return item;
              } else {
                const searchToLowerCase = search.toLowerCase();
                const matchesSearch = (field) =>
                  field.toLowerCase().includes(searchToLowerCase);

                if (
                  matchesSearch(item.artName) ||
                  matchesSearch(item.artType) ||
                  matchesSearch(item.city.cityName)
                ) {
                  return item;
                }
              }
            })
            .map(({ averageRating, id, image, artType, artName, city }) => {
              return (
                <SearchItem
                  averageRate={averageRating}
                  key={id}
                  imgSrc={image}
                  text1={artType}
                  text2={artName}
                  city={city}
                  userId={userId}
                  artId={id}
                />
              );
            })}
      </section>
    </div>
  );
};

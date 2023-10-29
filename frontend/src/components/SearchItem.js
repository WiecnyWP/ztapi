import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useAuth } from "../utils/authProvider";
import axios from "axios";
import { setAuthToken } from "../utils/setTokenToAxios";

export const SearchItem = ({ imgSrc, text1, text2, city, userId, artId }) => {
  const [initialRate, setInitialRate] = useState(4);
  const { auth } = useAuth();

  const handleRating = (e) => {
    setInitialRate(e);
    console.log("userId");
    console.log(userId);
    console.log("artId");
    console.log(artId);
    console.log("ocena");
    console.log(e);
    console.log("auth");
    console.log(auth);

    setAuthToken(auth);
    axios({
      method: "post",
      url: "http://localhost:8080/api/rate/add",
      data: {
        userId: userId,
        artId: artId,
        rate: e,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div id="project-1">
      <img src={imgSrc} />
      <div className="description">
        <p>{text1.charAt(0).toUpperCase() + text1.slice(1).toLowerCase()}</p>
        <p>{text2}</p>
        <p>{city.cityName}</p>
        <Rating initialValue={initialRate} onClick={handleRating} />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useAuth } from "../utils/authProvider";
import axios from "axios";
import { setAuthToken } from "../utils/setTokenToAxios";

export const SearchItem = ({
  imgSrc,
  text1,
  text2,
  city,
  userId,
  artId,
  averageRate,
}) => {
  const [initialRate, setInitialRate] = useState(0);
  const { auth } = useAuth();
  const handleRating = (e) => {
    setInitialRate(e);

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
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="project-1">
      <img src={`data:image/jpeg;base64,${imgSrc}`} />
      <div className="description">
        <p>{text1?.charAt(0).toUpperCase() + text1?.slice(1).toLowerCase()}</p>
        <p>{text2}</p>
        <p>{city.cityName}</p>
        <p>{averageRate}</p>
        <Rating initialValue={initialRate} onClick={handleRating} />
      </div>
    </div>
  );
};

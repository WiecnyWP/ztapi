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
  const [averageRateState, setAverageRateState] = useState(averageRate);
  const { auth } = useAuth();
  const handleRating = async (e) => {
    setInitialRate(e);

    setAuthToken(auth);
    try {
      await axios({
        method: "post",
        url: "http://localhost:8080/api/rate/",
        data: {
          userId: userId,
          artId: artId,
          rate: e,
        },
      });

      const responseRating = await axios({
        method: "get",
        url: "http://localhost:8080/api/art/WithImage",
      });
      const correctArt = responseRating.data.find((e) => e.id === artId);
      setAverageRateState(correctArt.averageRating);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="project-1">
      <img src={`data:image/jpeg;base64,${imgSrc}`} />
      <div className="description">
        <p>{text1?.charAt(0).toUpperCase() + text1?.slice(1).toLowerCase()}</p>
        <p>{text2}</p>
        <p>{city.cityName}</p>
        <p>{averageRateState.toFixed(2)}</p>
        <Rating initialValue={initialRate} onClick={handleRating} />
      </div>
    </div>
  );
};

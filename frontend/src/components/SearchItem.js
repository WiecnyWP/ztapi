import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export const SearchItem = ({ imgSrc, text1, text2, text3, rate }) => {
  const [initialRate, setInitialRate] = useState(4);

  const handleRating = (e) => {
    //ocena na backend
    setInitialRate(e);
  };
  return (
    <div id="project-1">
      <img src={imgSrc} />
      <div className="description">
        <p>{text1.charAt(0).toUpperCase() + text1.slice(1).toLowerCase()}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <Rating initialValue={initialRate} onClick={handleRating} />
      </div>
    </div>
  );
};

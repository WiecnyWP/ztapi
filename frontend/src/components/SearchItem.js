import React from "react";

export const SearchItem = ({ imgSrc, text1, text2, text3, rate }) => {
  return (
    <div id="project-1">
      <img src={imgSrc} />
      <div className="description">
        <p>{text1.charAt(0).toUpperCase() + text1.slice(1).toLowerCase()}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{rate}</p>
      </div>
    </div>
  );
};

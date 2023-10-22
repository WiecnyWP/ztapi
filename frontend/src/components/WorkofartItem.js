import React from "react";

export const WorkofartItem = ({ description, imgSrc }) => {
  return (
    <div className="object">
      <div className="describe">
        <p>{description}</p>
      </div>
      <div className="photo">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

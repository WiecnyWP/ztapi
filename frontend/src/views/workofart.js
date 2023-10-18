import React from "react";
import Sculpture from "../assets/sculpture.jpg";
import Painting from "../assets/painting.jpg";
import Car from "../assets/car.jpg";
import "../styles/hau.css";
import "../styles/workofart.css";

export const Workofart = () => {
  return (
    <>
      {/* <?php if(!isset($_COOKIE["id_user"])){ header("Location: login"); } ?> */}
      <div className="content-workofart content">
        <div className="object">
          <div className="describe">
            <p>
              Sculpture, an artistic form in which hard materials are worked
              into three-dimensional art objects.
            </p>
          </div>
          <div className="photo">
            <img src={Sculpture} />
          </div>
        </div>
        <div className="object">
          <div className="describe">
            <p>
              Painting, the expression of ideas and emotions, with the creation
              of certain aesthetic qualities, in a two-dimensional visual
              language.
            </p>
          </div>
          <div className="photo">
            <img src={Painting} />
          </div>
        </div>
        <div className="object">
          <div className="describe">
            <p>
              Antique, a relic or old object having aesthetic, historic, and
              financial value.
            </p>
          </div>
          <div className="photo">
            <img src={Car} />
          </div>
        </div>
      </div>
    </>
  );
};

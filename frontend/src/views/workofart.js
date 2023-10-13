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
      <div class="content-workofart content">
        <div class="object">
          <div class="describe">
            <p>
              Sculpture, an artistic form in which hard materials are worked
              into three-dimensional art objects.
            </p>
          </div>
          <div class="photo">
            <img src={Sculpture} />
          </div>
        </div>
        <div class="object">
          <div class="describe">
            <p>
              Painting, the expression of ideas and emotions, with the creation
              of certain aesthetic qualities, in a two-dimensional visual
              language.
            </p>
          </div>
          <div class="photo">
            <img src={Painting} />
          </div>
        </div>
        <div class="object">
          <div class="describe">
            <p>
              Antique, a relic or old object having aesthetic, historic, and
              financial value.
            </p>
          </div>
          <div class="photo">
            <img src={Car} />
          </div>
        </div>
      </div>
    </>
  );
};

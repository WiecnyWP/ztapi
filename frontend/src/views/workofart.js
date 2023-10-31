import React, { useEffect } from "react";
import Sculpture from "../assets/sculpture.jpg";
import Painting from "../assets/painting.jpg";
import Car from "../assets/car.jpg";
import "../styles/hau.css";
import "../styles/workofart.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authProvider";
import { WorkofartItem } from "../components/WorkofartItem";

export const Workofart = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth]);

  return (
    <div className="content-workofart content">
      <WorkofartItem
        description={
          "Sculpture, an artistic form in which hard materials are worked into three-dimensional art objects."
        }
        imgSrc={Sculpture}
      />
      <WorkofartItem
        description={
          "Painting, the expression of ideas and emotions, with the creation of certain aesthetic qualities, in a two-dimensional visual language."
        }
        imgSrc={Painting}
      />
      <WorkofartItem
        description={
          "Antique, a relic or old object having aesthetic, historic, and financial value."
        }
        imgSrc={Car}
      />
    </div>
  );
};

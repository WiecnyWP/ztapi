import React from "react";
import Hau from "../assets/hau.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faH, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/hau.css";
import "../styles/search.css";

export const Search = () => {
  return (
    <>
      {/* <?php if(!isset($_COOKIE["id_user"])){ header("Location: login"); } ?> */}
      <div className="search-container">
        <div className="navigation">
          <Link to={"/hau"}>
            <div class="item">
              <img src={Hau} />
            </div>
          </Link>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input name="name" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navigation-mobile">
          <div className="item">
            <a href="hau">
              <FontAwesomeIcon icon={faH} />
            </a>
          </div>
          <div className="search">
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            <input name="name" type="text" />
          </div>
        </div>
        <section className="projects">
          {/* <?php foreach ($arts as $a): ?> */}
          <div id="project-1">
            <img src="public/uploads/<?= $a->getImage() ?>" />
            <div className="description">
              {/* <p><?= $a->getType() ?></p>
                        <p><?= $a->getName() ?></p>
                        <p><?= $a->getCity() ?></p>
                        <p><?= $a->getAvg()['avg'] ? round($a->getAvg()['avg'], 2) : '0'; ?></p> */}
            </div>
            <div
              className="star-wrapper"
              // style="<?= $a->getCurrentUserRate() !== null ? 'pointer-events: none' : ''?>"
            >
              <input type="hidden" name="id_art" value="<?= $a->getId(); ?>" />
              <input
                type="hidden"
                name="id_user"
                // value="<?= $_COOKIE['id_user']; ?>"
              />
              <a
                href="#"
                data-rate="5"
                className="fas fa-star s1 <?= $a->getCurrentUserRate() !== null && $a->getCurrentUserRate() > 4 ? 'active' : '' ?>"
              ></a>
              <a
                href="#"
                data-rate="4"
                className="fas fa-star s2 <?= $a->getCurrentUserRate() !== null && $a->getCurrentUserRate() > 3 ? 'active' : '' ?>"
              ></a>
              <a
                href="#"
                data-rate="3"
                className="fas fa-star s3 <?= $a->getCurrentUserRate() !== null && $a->getCurrentUserRate() > 2 ? 'active' : '' ?>"
              ></a>
              <a
                href="#"
                data-rate="2"
                className="fas fa-star s4 <?= $a->getCurrentUserRate() !== null && $a->getCurrentUserRate() > 1 ? 'active' : '' ?>"
              ></a>
              <a
                href="#"
                data-rate="1"
                className="fas fa-star s5 <?= $a->getCurrentUserRate() !== null ? 'active' : '' ?>"
              ></a>
            </div>
          </div>
          {/* <?php endforeach; ?> */}
        </section>
      </div>
      <template id="project-template">
        <div id="">
          <img src="" />
          <div className="description">
            <p id="p1">type</p>
            <p id="p2">name</p>
            <p id="p3">city</p>
          </div>
          <div className="star-wrapper">
            <input type="hidden" name="id_art" />
            <input
              type="hidden"
              name="id_user"
              value="<?= $_COOKIE['id_user']; ?>"
            />
            <a href="#" data-rate="5" className="fas fa-star s1"></a>
            <a href="#" data-rate="4" className="fas fa-star s2"></a>
            <a href="#" data-rate="3" className="fas fa-star s3"></a>
            <a href="#" data-rate="2" className="fas fa-star s4"></a>
            <a href="#" data-rate="1" className="fas fa-star s5"></a>
          </div>
        </div>
      </template>
    </>
  );
};

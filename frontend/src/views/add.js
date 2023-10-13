import React from "react";
import Logo from "../assets/logo.svg";
import "../styles/hau.css";
import "../styles/style.css";

export const Add = () => {
  return (
    <>
      {/* <?php if(!isset($_COOKIE["id_user"])){ header("Location: login"); } ?> */}
      <div className="container-add">
        {/* <?php if(isset($_COOKIE["id_user_privilege"]) && $_COOKIE["id_user_privilege"] == 1) :?> */}
        <div className="content">
          <div className="login-container">
            <form
              id="add"
              action="add"
              method="POST"
              ENCTYPE="multipart/form-data"
            >
              {/* <?php if(isset($messages)) {
                    foreach ($messages as $message){
                        echo $message;
                    }
                }
                ?> */}
              <input name="type" type="text" placeholder="type" />
              <input name="name" type="text" placeholder="name" />
              <input name="city" type="text" placeholder="city" />
              <input name="file" type="file" placeholder="image" />
              <button type="submit">Add</button>
            </form>
          </div>
          <div class="logo">
            <img src={Logo} />
          </div>
        </div>
        {/* <?php else :?>
            <div class="not-admin">
                <p class="warning">Only administrator can add art!</p>
                <img src="public/img/unhappy.png">
            </div>
        <?php endif; ?> */}
      </div>
    </>
  );
};

import React from "react";
import { PATH_IMAGES } from "../../helpers";
import { NavLink } from "react-router-dom"

const Slider = () => {
  const style = {
    backgroundImage: `url("${PATH_IMAGES}/slider/work-table.jpg")`,
    height: window.innerHeight
  }

  return (
    <section id="slider" style={style}>
      <div className="overlay dark-4">
        {/* dark overlay [0 to 9 opacity] */}
      </div>
      <div className="display-table">
        <div className="display-table-cell vertical-align-middle">
          <div className="container">
            <div className="slider-featured-text text-center">
              <h1 className="text-white wow fadeInUp" data-wow-delay="0.4s">
                Bienvenido a distapp
              </h1>
              <h2
                className="weight-300 text-white wow fadeInUp"
                data-wow-delay="0.8s"
              >
                Un blog de contenido sobre aplicaciones distribuidas
              </h2>
              <NavLink
                to="blog/posts"
                className="btn btn-primary btn-lg wow fadeInUp"
                data-wow-delay="1s"
              >
                VER POSTS
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

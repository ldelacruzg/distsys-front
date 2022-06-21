import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data";
import CustomSidebar from "./components/SidebarRight";

const PostDetail = () => {
  const { postId } = useParams();

  const { title, date, weekNumber, unitsNumber, content } = posts.find(
    ({ id }) => id === Number.parseInt(postId)
  );

  useEffect(() => {
    /**
     * Idea
     * Convertir los parrafos en componentes, y en la configuración
     * de una página coloco como contenido un componente de parrafo
     */
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* LEFT */}
        <div className="col-md-9 col-sm-9">
          <h1 className="blog-post-title">{title}</h1>
          <ul className="blog-post-info list-inline">
            <li>
              <i className="fa fa-clock-o" />
              <span className="font-lato">{date}</span>
            </li>
            <li>
              <i className="fa fa-list-ol" />
              <span className="font-lato">Semana {weekNumber}</span>
            </li>
            <li>
              <i className="fa fa-book" />
              <span className="font-lato">Unidad {unitsNumber}</span>
            </li>
          </ul>

          {/* article content */}
          <div id="article-content">{content}</div>

          <div className="divider">{/* divider */}</div>
          <ul className="pager">
            <li className="previous">
              <a className="noborder" href="#">
                ← Anterior Post
              </a>
            </li>
            <li className="next">
              <a className="noborder" href="#">
                Siguiente Post →
              </a>
            </li>
          </ul>
          <div className="divider">{/* divider */}</div>
        </div>
        {/* RIGHT */}
        <CustomSidebar />
      </div>
    </div>
  );
};

export default PostDetail;

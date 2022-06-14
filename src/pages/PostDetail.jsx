import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data";


const PostDetail = () => {
  const { postId } = useParams();
  const { title, date, weekNumber, content } = posts.find(({ id }) => id === postId);

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
          </ul>
          {/* article content */}
          <div id="article-content">
            {content}
          </div>
          {/* /article content */}

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
        <div className="col-md-3 col-sm-3">
          {/* INLINE SEARCH */}
          <div className="inline-search clearfix margin-bottom-30">
            <form action="#" method="get" className="widget_search">
              <input
                type="search"
                placeholder="Start Searching..."
                id="s"
                name="s"
                className="serch-input"
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
          {/* /INLINE SEARCH */}
          <hr />
          {/* side navigation */}
          <div className="side-nav margin-bottom-60 margin-top-30">
            <div className="side-nav-head">
              <button className="fa fa-bars" />
              <h4>CATEGORÍAS</h4>
            </div>
            <ul className="list-group list-group-bordered list-group-noicon uppercase">
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(12)</span>{" "}
                  MEDIA
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(8)</span>{" "}
                  MOVIES
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(32)</span>{" "}
                  NEW
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(16)</span>{" "}
                  TUTORIALS
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(2)</span>{" "}
                  DEVELOPMENT
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(1)</span>{" "}
                  UNCATEGORIZED
                </a>
              </li>
            </ul>
            {/* /side navigation */}
          </div>
          {/* JUSTIFIED TAB */}
          <div className="tabs nomargin-top hidden-xs margin-bottom-60">
            {/* tabs */}
            <ul className="nav nav-tabs nav-bottom-border nav-justified">
              <li className="active">
                <a href="#tab_1" data-toggle="tab">
                  Popular
                </a>
              </li>
              <li>
                <a href="#tab_2" data-toggle="tab">
                  Reciente
                </a>
              </li>
            </ul>
            {/* tabs content */}
            <div className="tab-content margin-bottom-60 margin-top-30">
              {/* POPULAR */}
              <div id="tab_1" className="tab-pane active">
                <div className="row tab-post">
                  {/* post */}
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <a href="blog-sidebar-left.html" className="tab-post-link">
                      Maecenas metus nulla
                    </a>
                    <small>June 29 2014</small>
                  </div>
                </div>
                {/* /post */}
                <div className="row tab-post">
                  {/* post */}
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <a href="blog-sidebar-left.html" className="tab-post-link">
                      Curabitur pellentesque neque eget diam
                    </a>
                    <small>June 29 2014</small>
                  </div>
                </div>
                {/* /post */}
                <div className="row tab-post">
                  {/* post */}
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <a href="blog-sidebar-left.html" className="tab-post-link">
                      Nam et lacus neque. Ut enim massa, sodales
                    </a>
                    <small>June 29 2014</small>
                  </div>
                </div>
                {/* /post */}
              </div>
              {/* /POPULAR */}
              {/* RECENT */}
              <div id="tab_2" className="tab-pane">
                <div className="row tab-post">
                  {/* post */}
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <a href="blog-sidebar-left.html" className="tab-post-link">
                      Curabitur pellentesque neque eget diam
                    </a>
                    <small>June 29 2014</small>
                  </div>
                </div>
                {/* /post */}
                <div className="row tab-post">
                  {/* post */}
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <a href="blog-sidebar-left.html" className="tab-post-link">
                      Maecenas metus nulla
                    </a>
                    <small>June 29 2014</small>
                  </div>
                </div>
                {/* /post */}
                <div className="row tab-post">
                  {/* post */}
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <a href="blog-sidebar-left.html" className="tab-post-link">
                      Quisque ut nulla at nunc
                    </a>
                    <small>June 29 2014</small>
                  </div>
                </div>
                {/* /post */}
              </div>
              {/* /RECENT */}
            </div>
          </div>
          {/* JUSTIFIED TAB */}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

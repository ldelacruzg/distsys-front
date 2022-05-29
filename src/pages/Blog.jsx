import React from 'react'
import PostItem from '../components/PostItem'

const Blog = () => {
  return (
    <div className="container">
      <div className="row">
        {/* LEFT */}
        <div className="col-md-3 col-sm-3">
          {/* INLINE SEARCH */}
          <div className="inline-search clearfix margin-bottom-30">
            <form method="get" className="widget_search">
              <input
                type="search"
                placeholder="Buscar..."
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
                  <span className="size-11 text-muted pull-right">(12)</span>
                  MEDIA
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(8)</span>
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
                  <span className="size-11 text-muted pull-right">(16)</span>
                  TUTORIALS
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(2)</span>
                  DEVELOPMENT
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="size-11 text-muted pull-right">(1)</span>
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
        {/* RIGHT */}
        <div className="col-md-9 col-sm-9">
          <div className="row">
            <PostItem
              id={1}
              urlImage="10-min.jpg"
              title="BLOG IMAGE POST"
              date="June 29, 2015"
              numComments={25}
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words which don't look even slightly
              believable There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour."
            />
            <PostItem
              id={2}
              title="BLOG IMAGE POST"
              date="April 27, 2019"
              numComments={0}
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words which don't look even slightly
              believable There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour."
            />
          </div>
          {/* PAGINATION */}
          <div className="text-left">
            {/* Pagination Default */}
            <ul className="pagination nomargin">
              <li>
                <a href="#">«</a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">»</a>
              </li>
            </ul>
            {/* /Pagination Default */}
          </div>
          {/* /PAGINATION */}
        </div>
      </div>
    </div>
  );
}

export default Blog
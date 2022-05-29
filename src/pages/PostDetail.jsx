import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();

  return (
    <div className="container">
      <div className="row">
        {/* LEFT */}
        <div className="col-md-9 col-sm-9">
          <h1 className="blog-post-title">BLOG POST TITLE HERE {postId} </h1>
          <ul className="blog-post-info list-inline">
            <li>
              <a href="#">
                <i className="fa fa-clock-o" />
                <span className="font-lato">June 29, 2015</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-comment-o" />
                <span className="font-lato">28 Comments</span>
              </a>
            </li>
          </ul>
          {/* OWL SLIDER */}
          {/* <div
            className="owl-carousel buttons-autohide controlls-over"
            data-plugin-options='{"items": 1, "autoPlay": 4500, "autoHeight": false, "navigation": true, "pagination": true, "transitionStyle":"fadeUp", "progressBar":"false"}'
          >
            <a
              className="lightbox"
              href="../assets/images/demo/1200x800/10-min.jpg"
              data-plugin-options='{"type":"image"}'
            >
              <img
                className="img-responsive"
                src="../assets/images/demo/content_slider/10-min.jpg"
                alt="image"
              />
            </a>
            <a
              className="lightbox"
              href="../assets/images/demo/1200x800/3-min.jpg"
              data-plugin-options='{"type":"image"}'
            >
              <img
                className="img-responsive"
                src="../assets/images/demo/content_slider/3-min.jpg"
                alt="image"
              />
            </a>
            <a
              className="lightbox"
              href="../assets/images/demo/1200x800/21-min.jpg"
              data-plugin-options='{"type":"image"}'
            >
              <img
                className="img-responsive"
                src="../assets/images/demo/content_slider/21-min.jpg"
                alt="image"
              />
            </a>
          </div> */}
          {/* /OWL SLIDER */}
          {/* IMAGE */}
          {/*
							<figure class="margin-bottom-20">
								<img class="img-responsive" src="../assets/images/demo/content_slider/10-min.jpg" alt="image"="img" />
							</figure>
							*/}
          {/* /IMAGE */}
          {/* VIDEO */}
          {/*
							<div class="margin-bottom-20 embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src="http://player.vimeo.com/video/8408210" width="800" height="450"></iframe>
							</div>
							*/}
          {/* /VIDEO */}
          {/* article content */}
          <p className="dropcap">
            Aliquam fringilla, sapien eget scelerisque placerat, lorem libero
            cursus lorem, sed sodales lorem libero eu sapien. Nunc mattis
            feugiat justo vel faucibus. Nulla consequat feugiat malesuada. Ut
            justo nulla, <strong>facilisis vel molestie id</strong>, dictum ut
            arcu. Nunc ipsum nulla, eleifend non blandit quis, luctus quis orci.
            Cras blandit turpis mattis nulla ultrices interdum. Mauris pretium
            pretium dictum. Nunc commodo, felis sed dictum bibendum, risus justo
            iaculis dui, nec euismod orci sem eget neque. Donec in metus metus,
            vitae eleifend lorem. Ut vestibulum gravida venenatis. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Pellentesque suscipit tincidunt magna non mollis.
            Fusce tempus tincidunt nisi, in luctus elit pellentesque quis. Sed
            velit mi, ullamcorper ut tempor ut, mattis eu lacus. Morbi rhoncus
            aliquet tellus, id accumsan enim sollicitudin vitae.
          </p>
          <p>
            Vivamus <a href="#">magna justo</a>, lacinia eget consectetur sed,
            convallis at tellus. Cras ultricies ligula sed magna dictum porta.
            Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus
            nibh. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
            aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan
            tincidunt.
          </p>
          {/* BLOCKQUOTE */}
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <cite>Source Title</cite>
          </blockquote>
          <p>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus.Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus
            magna justo, lacinia eget consectetur sed, convallis at tellus.
            Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut
            libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet
            et, porttitor at sem.
          </p>
          <p>
            Proin eget tortor risus. Cras ultricies ligula sed magna dictum
            porta. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla porttitor
            accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          {/* /article content */}
          <div className="divider divider-dotted">{/* divider */}</div>

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
          {/* COMMENTS */}
          <div id="comments" className="comments">
            <h4 className="page-header margin-bottom-60 size-20">
              <span>3</span> COMENTARIOS
            </h4>
            {/* comment item */}
            <div className="comment-item">
              <div className="media-body">
                <h4 className="media-heading bold">John Doe</h4>
                <small className="block">June 29, 2014 - 11:23</small>
                Proin eget tortor risus. Cras ultricies ligula sed magna dictum
                porta. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            {/* comment item */}
            <div className="comment-item">
              <div className="media-body">
                <h4 className="media-heading bold">Diana Doe</h4>
                <small className="block">June 29, 2014 - 11:23</small>
                Proin eget tortor risus. Cras ultricies ligula sed magna dictum
                porta. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <h4 className="page-header size-20 margin-bottom-60 margin-top-100">
              DEJA UN <span>COMENTARIO</span>
            </h4>
            {/* Form */}
            <form action="#" method="post">
              <div className="row">
                <div className="form-group">
                  <div className="col-md-4">
                    <label>NAME</label>
                    <input
                      required="required"
                      type="text"
                      defaultValue={""}
                      maxLength={100}
                      className="form-control input-lg"
                      name="author"
                      id="author"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>EMAIL</label>
                    <input
                      required="required"
                      type="email"
                      defaultValue={""}
                      maxLength={100}
                      className="form-control input-lg"
                      name="contact_email"
                      id="contact_email"
                    />
                  </div>
                  <div className="col-md-4">
                    <label>WEBSITE</label>
                    <input
                      type="email"
                      defaultValue={""}
                      maxLength={100}
                      className="form-control input-lg"
                      name="url"
                      id="url"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <div className="col-md-12">
                    <label>COMMENT</label>
                    <textarea
                      required="required"
                      maxLength={5000}
                      rows={5}
                      className="form-control"
                      name="comment"
                      id="comment"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-3d btn-lg btn-reveal btn-black">
                    <i className="fa fa-check" />
                    <span>ENVIAR MENSAJE</span>
                  </button>
                </div>
              </div>
            </form>
            {/* /Form */}
          </div>
          {/* /COMMENTS */}
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

import React from "react";

export default () => (
  <div className="blog-post" style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1 className="blog-post__title">Richard Hamming on Luck</h1>
    <div>
      <p className="blog-post__text">
        From Richard Hamming’s classic and must-read talk, “<a className="blog-post__link" href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
          You and Your Research
        </a>”.
      </p>
      <blockquote className="blockquote">
        <p className="blockquote__text">
          There is indeed an element of luck, and no, there isn’t. The prepared
          mind sooner or later finds something important and does it. So yes, it
          is luck.{" "}
          <em>
            The particular thing you do is luck, but that you do something is
            not.
          </em>
        </p>
      </blockquote>
    </div>
    <p className="blog-post__text">Posted April 09, 2011</p>
  </div>
);

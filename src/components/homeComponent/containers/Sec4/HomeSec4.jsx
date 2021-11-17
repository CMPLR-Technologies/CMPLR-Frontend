import React from "react";

export default function HomeSec4() {
  return (
    <>
      <section
        data-testid="home-sec4"
        id="You already know how this works."
        className="fourth-page"
      >
        <div className="fourth-page-content">
          <div className="fourth-page-post">
            <img src="" alt="" />
          </div>
          <div className="fourth-page-info">
            <h1 data-testid="sec4-heading" className="sec-page-heading">
              You already know how this works.
            </h1>
            <p data-testid="sec4-paragraph" className="sec-page-para">
              Once you follow a blog, all of its posts show up in your
              dashboard, just like you’d expect. See something great? Reblog it
              to your own blog. Add commentary if you like. Make it your own.
              Other people will do the same to your posts. That’s how you meet
              people here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

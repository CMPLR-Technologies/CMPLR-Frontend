import React from "react";
import Audio from "./Audio.svg";
import Chat from "./Chat.svg";
import Link from "./Link.svg";
import Photo from "./Photo.svg";
import PostType from "./PostType";
import Quote from "./Quote.svg";
import Text from "./Text.svg";
import Video from "./Video.svg";

export default function HomeSec5() {
  return (
    <>
      <section
        id="Seriously, put anything you want here."
        className="fifth-page"
        data-testid="home-sec5 section"
      >
        <div className="fifth-page-container">
          <div className="fifth-page-content">
            <div className="fifth-page-posts-type">
              <PostType dataTestid="svg-text" SVG={<Text />} type="Text" />
              <PostType dataTestid="svg-photo" SVG={<Photo />} type="photo" />
              <PostType dataTestid="svg-qoute" SVG={<Quote />} type="Quote" />
              <PostType dataTestid="svg-link" SVG={<Link />} type="Link" />
              <PostType
                dataTestid="svg-chat"
                SVG={<Chat />}
                type="Chat"
                secondRow={true}
              />
              <PostType dataTestid="svg-auto" SVG={<Audio />} type="Audio" />
              <PostType dataTestid="svg-video" SVG={<Video />} type="Video" />
            </div>
            <h1 data-testid="sec5-heading" className="sec-page-heading">
              Seriously, put anything you want here.
            </h1>
            <p data-testid="sec5-paragraph" className="sec-page-para">
              Seven post types to get you started. Your brain can do the rest.
              This thing is yours. Use it however you like.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

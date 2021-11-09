import React from "react";

const SideNav = () => {
  return (
    <nav class="side-nav">
      <ul>
        <li>
          <a href="/#Get started">
            <div class="nav-circle active"></div>
          </a>
        </li>
        <li>
          <a href="/#Easy to use">
            <div class="nav-circle"></div>
            <span class="text-hidden">Easy to use</span>
          </a>
        </li>
        <li>
          <a href="/#Cmplr is blogs.">
            <div class="nav-circle"></div>
            <span class="text-hidden">Tumblr is blogs.</span>
          </a>
        </li>
        <li>
          <a href="/#You already know how this works.">
            <div class="nav-circle"></div>
            <span class="text-hidden">You already know how this works.</span>
          </a>
        </li>
        <li>
          <a href="/#Seriously, put anything you want here.">
            <div class="nav-circle"></div>
            <span class="text-hidden">
              Seriously, put anything you want here.
            </span>
          </a>
        </li>
        <li>
          <a href="/#Okay, it’s not actually hard to explain.">
            <div class="nav-circle"></div>
            <span class="text-hidden">
              Okay, it’s not actually hard to explain.
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;

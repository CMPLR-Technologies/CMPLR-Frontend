import React from "react";

export default function CircledNavLink(props) {
  const { href, activeSectionNum, activeSection, dataTestid, className } =
    props;
  return (
    <li data-testid={dataTestid}>
      <a className={className} href={`/#${href}`}>
        <div
          className={`nav-circle ${
            activeSection === activeSectionNum ? "active" : ""
          } `}
          data-testid={`div${activeSectionNum}`}
        ></div>
        <span className="text-hidden">{href}</span>
      </a>
    </li>
  );
}

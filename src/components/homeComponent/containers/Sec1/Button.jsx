import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  const { href, className, title, children, dataTestid } = props;
  return (
    <Link data-testid={dataTestid} to={href} className={className}>
      {title}
      {children}
    </Link>
  );
}

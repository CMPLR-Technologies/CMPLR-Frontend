import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function MockedComponent(props) {
  const { component } = props;
  return <BrowserRouter>{component}</BrowserRouter>;
}

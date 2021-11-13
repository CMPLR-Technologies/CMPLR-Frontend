import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homeComponent/View";

export default function MainComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import React  from "react";
import MockedComponent from '../partials/MockedComponent.jsx';
import CreateModal from "./containers/PopupContainer/View";

describe("testcases for title input post", () => {
    render(
      <MockedComponent component={<CreateModal/>}/>
    );
  
    const inputTitle = screen.getByTestId(/title-postInput/i);
    const inputContent = screen.getByTestId(/content-postInput/i);
    const cancelBtn = screen.getByTestId(/cancel-postBtn/i);
    const postBtn = screen.getByTestId(/post-postBtn/i);
  
    test("checking input is rendered correctly", () => {
      expect(inputTitle).toBeInTheDocument();
      expect(inputTitle).toBeEnabled();

      expect(inputContent).toBeInTheDocument();
      expect(inputContent).toBeEnabled();

      expect(cancelBtn).toBeInTheDocument();
      expect(cancelBtn).toBeEnabled();

      expect(postBtn).toBeInTheDocument();
      expect(postBtn).toBeDisabled();
    });

  });
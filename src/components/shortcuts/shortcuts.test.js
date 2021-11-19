import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ShortcutsPageOverlay from "./ShortcutsPageOverlay";

describe("test shortcuts", () => {
  it("test Responsivity: should only show up in Desktop width", () => {
    render(<ShortcutsPageOverlay />);
    const inputElement =
      screen.getByPlaceholderText("Search Tumblr").childElementCount;
    fireEvent.change(inputElement, { target: { value: "gaser" } });
    expect(inputElement.value).toBe("gaser");
  });

  it("test search bar to hide results show when no type", () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText("Search Tumblr");
    fireEvent.change(inputElement, { target: { value: "gaser" } });
    fireEvent.change(inputElement, { target: { value: "" } });
    const searchBarResultDev = screen.queryByTestId("search-result");
    expect(searchBarResultDev).toBeNull();
  });
});

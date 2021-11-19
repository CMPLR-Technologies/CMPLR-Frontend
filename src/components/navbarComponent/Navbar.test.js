/* eslint-disable no-undef */
import { render, screen, fireEvent} from "@testing-library/react";
import React from "react";
import MessageItem from "./containers/navbarLinks/MessagesPopup/MessageItem";
import SearchBar from './containers/searchBar/SearchBar';
import MessagesContainer from './containers/navbarLinks/MessagesPopup/MessagesContainer';
describe("test searchbar", () => {
  it("test type in the searchbar", () => {
    render(
      <SearchBar
      />
    );
    const inputElement = screen.getByPlaceholderText("Search Tumblr");
    fireEvent.change(inputElement,{target:{value:"gaser"}});
    expect(inputElement.value).toBe("gaser");
  });


  it("test search bar to hide results show when no type", () => {
    render(
      <SearchBar
      />
    );
    const inputElement = screen.getByPlaceholderText("Search Tumblr");
    fireEvent.change(inputElement,{target:{value:"gaser"}});
    fireEvent.change(inputElement,{target:{value:""}});
    const searchBarResultDev=screen.queryByTestId("search-result");
    expect(searchBarResultDev).toBeNull();
  });

});

describe("test message drop down", () => {

 
  it("new message button", () => {
    render(
      <MessagesContainer
      />
    );
    const newMessageButton = screen.getByText("new message");
    expect(newMessageButton).toBeInTheDocument();
  });
  it("should have text", () => {
    render(
      <MessageItem
        sender={"gaser"}
        receiver={"twix"}
        message={"hello"}
        chat={true}
      />
    );
    const sender = screen.getByText("twix");
    expect(sender).toBeInTheDocument();
  });
  it("should have text in paragraph", () => {
    render(
      <MessageItem
        receiver={"twix"}
        shortParagrah={"hello"}
        chat={false}
      />
    );
    const sender = screen.getByText("twix");
    expect(sender).toBeInTheDocument();
  });
});

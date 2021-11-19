/* eslint-disable no-undef */
import { render, screen, fireEvent  } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import LoginCard from "./containers/LoginCard";

const MockLoginCard = () => {
    return (
        <BrowserRouter>
          <LoginCard/>
        </BrowserRouter>
    );
};

describe("Login Card Render Tests", ()=>{

    it("Login card should has a field for email", ()=>{
        render(<MockLoginCard />);
        const emailField = screen.getByPlaceholderText("Email");
        expect(emailField).toBeVisible();
    });

    it("Login card should has a field for password", ()=>{
        render(<MockLoginCard />);
        const passField = screen.getByPlaceholderText("Password");
        expect(passField).toBeVisible();
        
    });

    it("Login card should has a login button", ()=>{
        render(<MockLoginCard />);
        const btn = screen.getByText("Log in");
        expect(btn).toBeVisible();
    });

    it("checking state managment is working onChange", ()=>{
        render(<MockLoginCard />);
        const emailField = screen.getByPlaceholderText("Email");
        const passField = screen.getByPlaceholderText("Password");

        fireEvent.change(emailField,  { target: { value: "test@g.com" } });
        expect(emailField).toHaveValue("test@g.com");

        fireEvent.change(passField,  { target: { value: "pass" } });
        expect(passField).toHaveValue("pass");
    });

    it("should display an error message for empty email", ()=>{
        render(<MockLoginCard />);
        const btn = screen.getByText("Log in");
        fireEvent.click(btn);
        const errorMsg = screen.getByText("Please Enter Your Email");
        expect(errorMsg).toBeInTheDocument();
    });

    it("should display an error message for empty password", ()=>{
        render(<MockLoginCard />);
        const btn = screen.getByText("Log in");
        const emailField = screen.getByPlaceholderText("Email");
        fireEvent.change(emailField,  { target: { value: "test@g.com" } });
        fireEvent.click(btn);
        const errorMsg = screen.getByText("Please Enter Your Password");
        expect(errorMsg).toBeInTheDocument();
    });
});

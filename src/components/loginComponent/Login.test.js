import { render, screen, fireEvent  } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import LoginCard from "./containers/LoginCard"

const MockLoginCard = () => {
    return (
        <BrowserRouter>
          <LoginCard/>
        </BrowserRouter>
    )
}

describe("Login Card Tests", ()=>{

    it("Login card has a field for email", ()=>{
        render(<MockLoginCard />)
        const emailField = screen.getByPlaceholderText("Email");
        fireEvent.change(emailField,  { target: { value: "test@g.com" } });
        expect(emailField).toHaveValue("test@g.com")
    })

    it("Login card has a field for password", ()=>{
        render(<MockLoginCard />)
        const passField = screen.getByPlaceholderText("Password");
        fireEvent.change(passField,  { target: { value: "pass123" } });
        expect(passField).toHaveValue("pass123")
    })

})
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../firebase-setup/Signup";
import Signin from "../firebase-setup/Signin";
import userEvent from "@testing-library/user-event";

describe("Testing Signup", () => {
    test("Button to Sign Up", () => {
        render(
            <MemoryRouter initialEntries={["/signup"]}>
                <Signup />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("button", { name: /Sign Up/i })
        ).toBeInTheDocument();
    });
    test("Textbox to Signup", () => {
        render(
            <MemoryRouter initialEntries={["/signup"]}>
                <Signup />
            </MemoryRouter>
        );
        const emailText = screen.getByLabelText("Email");
        userEvent.type(emailText, "1234email@gmail.com");
        expect(emailText).toHaveValue("1234email@gmail.com");
        const pswdText = screen.getByLabelText("Password");
        userEvent.type(pswdText, "123456789");
        expect(pswdText).toHaveValue("123456789");
    });
    test("Button to Signin", () => {
        render(
            <MemoryRouter initialEntries={["/signin"]}>
                <Signin />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("button", { name: /Sign In/i })
        ).toBeInTheDocument();
    });
    test("Textbox to Signin", () => {
        render(
            <MemoryRouter initialEntries={["/signin"]}>
                <Signin />
            </MemoryRouter>
        );
        const emailText = screen.getByLabelText("Email");
        userEvent.type(emailText, "1234email@gmail.com");
        expect(emailText).toHaveValue("1234email@gmail.com");
        const pswdText = screen.getByLabelText("Password");
        userEvent.type(pswdText, "123456789");
        expect(pswdText).toHaveValue("123456789");
    });
});

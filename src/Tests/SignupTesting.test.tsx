import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../components/Signup";
import Signin from "../firebase-setup/Signin";

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
        expect(screen.getByRole("textbox")).toBeInTheDocument();
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
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
});

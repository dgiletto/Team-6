import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { EditStock } from "../components/EditStock";
import { ShoppingCartContext } from "../context/shoppingCartContext";
import products from "../data/products.json";
import userEvent from "@testing-library/user-event";

type cartItem = {
    name: string;
    quantity: number;
};
const item: cartItem = {
    name: "Intel I9-13900K",
    quantity: 1
};
const providerProps = {
    cartItems: [item],
    cartQuantity: 1,
    openCart: jest.fn(),
    closeCart: jest.fn(),
    getItemQty: jest.fn(),
    increaseItemQty: jest.fn(),
    decreaseItemQty: jest.fn(),
    removeFromCart: jest.fn(),
    decreaseCartQty: jest.fn(),
    increaseCartQty: jest.fn()
};

describe("Testing Admin", () => {
    beforeEach(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn()
            }))
        });
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/admin"]}>
                    <EditStock />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
    });
    test("Field to enter quantity displays and allows input", () => {
        expect(screen.getByLabelText("Enter Quantity:")).toBeInTheDocument();
        const use = screen.getByLabelText("Enter Quantity:");
        userEvent.type(use, "12");
        expect(use).toHaveValue(12);
    });
    test("Change Buttons all appear and exist", () => {
        expect(screen.getAllByRole("button", { name: "Change" })).toHaveLength(
            products.length
        );
    });

    test("text will change stock (has to be refreshed)", () => {
        const change = screen.getAllByRole("button", { name: "Change" });
        const field = screen.getByLabelText("Enter Quantity:");
        userEvent.type(field, "493");
        expect(field).toHaveValue(493);
        change.forEach((entry) => {
            userEvent.click(entry);
        });
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/admin"]}>
                    <EditStock />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.getByText(493)).toBeInTheDocument;
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Cart } from "../components/Cart";
import { ShoppingCartContext } from "../context/shoppingCartContext";
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
    removeFromCart: jest.fn(),
    decreaseCartQty: jest.fn(),
    increaseCartQty: jest.fn()
};

describe("Testing Checkout", () => {
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
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
    });
    test("Checkout has required fields and total", () => {
        expect(screen.queryByText("Intel I9-13900K")).toBeInTheDocument();
        const use = screen.getByRole("button", {
            name: "Checkout"
        });
        use.click();
        expect(screen.getAllByRole("textbox")).toHaveLength(5);
        expect(screen.getByText("Total: $580.00")).toBeInTheDocument();
    });
    test("Checkout has working textbox fields", () => {
        expect(screen.queryByText("Intel I9-13900K")).toBeInTheDocument();
        const use = screen.getByRole("button", {
            name: "Checkout"
        });
        use.click();
        const cardholder = screen.getByLabelText("Cardholder Name");
        userEvent.type(cardholder, "1234email@gmail.com");
        expect(cardholder).toHaveValue("1234email@gmail.com");
        const cardNumb = screen.getByLabelText("Card Number");
        userEvent.type(cardNumb, "1234 5432 9123 8111");
        expect(cardNumb).toHaveValue("1234 5432 9123 8111");
        const cvv = screen.getByLabelText("CVV");
        userEvent.type(cvv, "475");
        expect(cvv).toHaveValue("475");
        const expir = screen.getByLabelText("Expiration Date");
        userEvent.type(expir, "02/18");
        expect(expir).toHaveValue("02/18");
        const zip = screen.getByLabelText("Zip Code");
        userEvent.type(zip, "19703");
        expect(zip).toHaveValue("19703");
    });
    test("Checkout has cancel and Submit", () => {
        expect(screen.queryByText("Intel I9-13900K")).toBeInTheDocument();
        const use = screen.getByRole("button", {
            name: "Checkout"
        });
        use.click();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
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

describe("Testing Cart", () => {
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
                    <Cart isOpen={false} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
    });
    test("Cart is and item are not displayed", () => {
        expect(screen.queryByText("Cart")).not.toBeInTheDocument();
        expect(screen.queryByText("Intel I9-13900K")).not.toBeInTheDocument();
    });
    test("Cart is displayed", () => {
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.queryByText("Cart")).toBeInTheDocument();
    });
    test("Cart has items", () => {
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.queryByText("Intel I9-13900K")).toBeInTheDocument();
    });
    test("Checkout Opens", () => {
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.queryByText("Intel I9-13900K")).toBeInTheDocument();
        const use = screen.getByRole("button", {
            name: "Checkout"
        });
        use.click();
        expect(
            screen.getByRole("button", { name: "Submit" })
        ).toBeInTheDocument();
    });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Cart } from "../components/Cart";
import { ShoppingCartContext } from "../context/shoppingCartContext";
import products from "../data/products.json";
import { DisplayProducts } from "../components/DisplayProducts";
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
                    <DisplayProducts />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
    });
    test("All products are displayed", () => {
        expect(screen.getAllByRole("img")).toHaveLength(products.length);
    });
    test("Buttons add to cart", () => {
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.getByText("Corsair Vengeance 8GB RAM")).not
            .toBeInTheDocument;
        const use = screen.getAllByRole("button", { name: "+" });
        use.forEach((entry) => {
            userEvent.click(entry);
        });
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.getByText("Corsair Vengeance 8GB RAM")).toBeInTheDocument;
        expect(screen.getByText("Dell Poweredge r720")).toBeInTheDocument;
        expect(screen.getByText("Seagate BarraCuda 8TB HDD")).toBeInTheDocument;
        expect(screen.getByText("Thermaltake Versa H18")).toBeInTheDocument;
    });
    test("Buttons remove from cart", () => {
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.getByText("Corsair Vengeance 8GB RAM")).not
            .toBeInTheDocument;
        const use = screen.getAllByRole("button", { name: "+" });
        use.forEach((entry) => {
            userEvent.click(entry);
        });
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.getByText("Corsair Vengeance 8GB RAM")).toBeInTheDocument;
        const remove = screen.getAllByRole("button", { name: "Remove" });
        remove.forEach((entry) => {
            userEvent.click(entry);
        });
        render(
            <ShoppingCartContext.Provider value={providerProps}>
                <MemoryRouter initialEntries={["/homepage"]}>
                    <Cart isOpen={true} />
                </MemoryRouter>
            </ShoppingCartContext.Provider>
        );
        expect(screen.getByText("Corsair Vengeance 8GB RAM")).not
            .toBeInTheDocument;
        expect(screen.getByText("Dell Poweredge r720")).not.toBeInTheDocument;
        expect(screen.getByText("Seagate BarraCuda 8TB HDD")).not
            .toBeInTheDocument;
        expect(screen.getByText("Thermaltake Versa H18")).not.toBeInTheDocument;
    });
});

import React, { ReactNode, createContext, useContext, useState } from "react";
import { Cart } from "../components/Cart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type cartItem = {
    name: string;
    quantity: number;
};

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type shoppingCartContext = {
    openCart: () => void;
    closeCart: () => void;
    getItemQty: (name: string) => number;
    increaseCartQty: (name: string) => void;
    decreaseCartQty: (name: string) => void;
    removeFromCart: (name: string) => void;
    cartQuantity: number;
    cartItems: cartItem[];
};

const ShoppingCartContext = createContext({} as shoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<cartItem[]>(
        "shoppingCart",
        []
    );
    const [isOpen, setIsOpen] = useState(false);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function getItemQty(name: string) {
        return cartItems.find((item) => item.name == name)?.quantity || 0;
    }

    function increaseCartQty(name: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.name == name) == null) {
                return [...currItems, { name, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.name == name) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function decreaseCartQty(name: string) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.name == name) == null) {
                return currItems.filter((item) => item.name !== name);
            } else {
                return currItems.map((item) => {
                    if (item.name == name) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    function removeFromCart(name: string) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.name !== name);
        });
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                openCart,
                closeCart,
                getItemQty,
                increaseCartQty,
                decreaseCartQty,
                removeFromCart,
                cartItems,
                cartQuantity
            }}
        >
            {children}
            <Cart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
}

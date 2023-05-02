import React, { ReactNode, createContext, useContext, useState } from "react";

type cartItem = {
    name: string;
    quantity: number;
};

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type shoppingCartContext = {
    getItemQty: (name: string) => number;
    increaseCartQty: (name: string) => void;
    decreaseCartQty: (name: string) => void;
    removeFromCart: (name: string) => void;
};

const ShoppingCartContext = createContext({} as shoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<cartItem[]>([]);

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
                getItemQty,
                increaseCartQty,
                decreaseCartQty,
                removeFromCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

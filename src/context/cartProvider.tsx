import React, { useMemo, useReducer, createContext, ReactElement } from "react";

export type cartItemType = {
    name: string;
    image: string;
    price: number;
    qty: number;
    in_stock: boolean;
    type: string;
};

type cartStateType = { cart: cartItemType[] };

const initCartState: cartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANTITY: "QUANTITY",
    SUBMIT: "SUBMIT"
};

export type reducerActionType = typeof REDUCER_ACTION_TYPE;

export type reducerAction = {
    type: string;
    payload?: cartItemType;
};

const reducer = (
    state: cartStateType,
    action: reducerAction
): cartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload missing in ADD action");
            }

            const { name, image, price, in_stock, type } = action.payload;

            const filteredCart: cartItemType[] = state.cart.filter(
                (item) => item.name != name
            );

            const itemExists: cartItemType | undefined = state.cart.find(
                (item) => item.name == name
            );

            const qty: number = itemExists ? itemExists.qty + 1 : 1;
            return {
                ...state,
                cart: [
                    ...filteredCart,
                    { name, image, price, qty, in_stock, type }
                ]
            };
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload missing in REMOVE action");
            }
            const { name } = action.payload;

            const filteredCart: cartItemType[] = state.cart.filter(
                (item) => item.name != name
            );

            return { ...state, cart: [...filteredCart] };
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if (!action.payload) {
                throw new Error("action.payload missing in QUANTITY action");
            }
            const { name, qty } = action.payload;

            const itemExists: cartItemType | undefined = state.cart.find(
                (item) => item.name == name
            );

            if (!itemExists) {
                throw new Error("Item must exist in order to update quantity");
            }

            const updatedItem: cartItemType = { ...itemExists, qty };

            const filteredCart: cartItemType[] = state.cart.filter(
                (item) => item.name != name
            );
            return { ...state, cart: [...filteredCart, updatedItem] };
        }

        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] };
        }

        default:
            throw new Error("Unidentified recucer action type");
    }
};

const useCartContext = (initCartState: cartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    }, []);

    const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.qty;
    }, 0);

    const totalPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(
        state.cart.reduce((previousValue, cartItem) => {
            return previousValue + cartItem.qty * cartItem.price;
        }, 0)
    );

    const cart = state.cart.sort((a, b) => {
        const itemA = Number(a.name);
        const itemB = Number(b.name);
        return itemA - itemB;
    });

    return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type useCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: useCartContextType = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: "",
    cart: []
};

export const cartContext =
    createContext<useCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
    return (
        <cartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </cartContext.Provider>
    );
};

export default cartContext;

import React from "react";
import { ChangeEvent, memo } from "react";
import { cartItemType } from "../context/cartProvider";
import { reducerAction } from "../context/cartProvider";
import { reducerActionType } from "../context/cartProvider";

type PropsType = {
    item: cartItemType;
    dispatch: React.Dispatch<reducerAction>;
    REDUCER_ACTIONS: reducerActionType;
};

const CartPage = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
    const lineTotal: number = item.qty * item.price;

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QUANTITY,
            payload: { ...item, qty: Number(e.target.value) }
        });
    };

    const onRemoveFromCart = () =>
        dispatch({
            type: REDUCER_ACTIONS.REMOVE,
            payload: item
        });
    const content = (
        <li className="cart__item">
            <div aria-label="Item Name">{item.name}</div>
            <div aria-label="Price Per Item">
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(item.price)}
            </div>

            <label htmlFor="itemQty" className="offscreen">
                Item Quantity
            </label>
            <select
                name="itemQty"
                id="itemQty"
                className="cart__select"
                value={item.qty}
                aria-label="Item Quantity"
                onChange={onChangeQty}
            />

            <div
                className="cart__item-subtotal"
                aria-label="Line Item Subtotal"
            >
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(lineTotal)}
            </div>

            <button
                className="cart__button"
                aria-label="Remove Item From Cart"
                title="Remove Item From Cart"
                onClick={onRemoveFromCart}
            >
                ❌
            </button>
        </li>
    );
    return content;
};
export function Cart(): JSX.Element {
    return <div>This the page for Cases</div>;
}

function areItemsEqual(
    { item: prevItem }: PropsType,
    { item: nextItem }: PropsType
) {
    return Object.keys(prevItem).every((key) => {
        return (
            prevItem[key as keyof cartItemType] ===
            nextItem[key as keyof cartItemType]
        );
    });
}

const MemoizedCartPage = memo<typeof CartPage>(CartPage, areItemsEqual);

export default MemoizedCartPage;

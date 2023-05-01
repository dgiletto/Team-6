import React, { useState } from "react";
import useCart from "../hooks/useCart";
import Cart from "../pages/CartPage";

const CartComp = () => {
    const [confirm, setConfirm] = useState<boolean>(false);
    const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } =
        useCart();
    const onSubmitOrder = () => {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT });
        setConfirm(true);
    };

    const pageContent = confirm ? (
        <h2>Thank you for your order</h2>
    ) : (
        <>
            <h2 className="offscreen">Cart</h2>
            <ul className="cart">
                {cart.map((item) => {
                    return (
                        <Cart
                            key={item.name}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                    );
                })}
            </ul>
            <div className="cartTotals">
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <button
                    className="cartSubmit"
                    disabled={!totalItems}
                    onClick={onSubmitOrder}
                ></button>
            </div>
        </>
    );
    const content = <main className="main main--cart">{pageContent}</main>;
    return content;
};
export default CartComp;

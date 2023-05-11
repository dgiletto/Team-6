import { Offcanvas, Stack, Button, Modal } from "react-bootstrap";
import React from "react";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItem } from "./cartItem";
import { formatCards } from "../extras/formatMoney";
import products from "../data/products.json";

type CartProps = {
    isOpen: boolean;
};

export function Cart({ isOpen }: CartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map((item) => (
                        <CartItem key={item.name} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {formatCards(
                            cartItems.reduce((total, cartItem) => {
                                const item = products.find(
                                    (i) => i.name == cartItem.name
                                );
                                return (
                                    total +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}
                    </div>
                    <Button onClick={handleOpen}>Checkout</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Checkout</Modal.Title>
                        </Modal.Header>
                    </Modal>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

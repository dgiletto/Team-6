import {
    Offcanvas,
    Stack,
    Button,
    Modal,
    Form,
    Row,
    Col
} from "react-bootstrap";
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
    const showButton =
        cartItems.reduce((total, cartItem) => {
            const item = products.find((i) => i.name == cartItem.name);
            return total + (item?.price || 0) * cartItem.quantity;
        }, 0) !== 0;
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
                    {showButton && (
                        <Button onClick={handleOpen}>Checkout</Button>
                    )}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Checkout</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Total:{" "}
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
                            <Form>
                                <Form.Group id="cardholder name">
                                    <Form.Label>Cardholder Name</Form.Label>
                                    <Form.Control
                                        type="cardholder name"
                                        placeholder="John Doe"
                                    />
                                </Form.Group>
                                <Form.Group id="card number">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control
                                        type="card number"
                                        placeholder="1234 5678 9101 1121"
                                    />
                                </Form.Group>
                                <Row>
                                    <Form.Group as={Col} id="cvv">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control
                                            type="cvv"
                                            placeholder="123"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} id="expiration">
                                        <Form.Label>Expiration Date</Form.Label>
                                        <Form.Control
                                            type="expiration"
                                            placeholder="01/24"
                                        />
                                    </Form.Group>
                                </Row>
                                <Form.Group id="zip code">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="zip code" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Sumbit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

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
        <Offcanvas show={isOpen} onHide={closeCart} placement="end" role="cart">
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
                                    <Form.Label htmlFor="cardholder">
                                        Cardholder Name
                                    </Form.Label>
                                    <Form.Control
                                        type="cardholder name"
                                        placeholder="John Doe"
                                        id="cardholder"
                                    />
                                </Form.Group>
                                <Form.Group id="card number">
                                    <Form.Label htmlFor="cardnumb">
                                        Card Number
                                    </Form.Label>
                                    <Form.Control
                                        type="card number"
                                        placeholder="1234 5678 9101 1121"
                                        id="cardnumb"
                                    />
                                </Form.Group>
                                <Row>
                                    <Form.Group as={Col} id="cvv">
                                        <Form.Label htmlFor="CVV">
                                            CVV
                                        </Form.Label>
                                        <Form.Control
                                            type="cvv"
                                            placeholder="123"
                                            id="CVV"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} id="expiration">
                                        <Form.Label htmlFor="Expiration">
                                            Expiration Date
                                        </Form.Label>
                                        <Form.Control
                                            type="expiration"
                                            placeholder="01/24"
                                            id="Expiration"
                                        />
                                    </Form.Group>
                                </Row>
                                <Form.Group id="zip code">
                                    <Form.Label htmlFor="Zip">
                                        Zip Code
                                    </Form.Label>
                                    <Form.Control type="zip code" id="Zip" />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

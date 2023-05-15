import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { useShoppingCart } from "./context/shoppingCartContext";

export function ModalView(props: ModalProps) {
    const {
        getItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart,
        increaseItemQty,
        decreaseItemQty
    } = useShoppingCart();
    const amount = getItemQty(props.name);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        padding: "50px"
                    }}
                >
                    <img src={props.image}></img>
                    <div>
                        <h4>Price: ${props.price}</h4>
                        <h6>{props.description}</h6>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div
                    className="d-flex align-items-center justify-content-left"
                    style={{ gap: ".5rem" }}
                >
                    <Button
                        onClick={() => {
                            increaseItemQty(props.name, 1);
                            amount > 1
                                ? decreaseCartQty(props.name)
                                : removeFromCart(props.name);
                        }}
                    >
                        -
                    </Button>
                    {amount} in cart
                    <Button
                        onClick={() => {
                            increaseCartQty(props.name);
                            decreaseItemQty(props.name);
                        }}
                    >
                        +
                    </Button>
                </div>
                <Button
                    variant="outline-danger"
                    onClick={() => {
                        removeFromCart(props.name);
                        increaseItemQty(props.name, amount);
                    }}
                >
                    Remove
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

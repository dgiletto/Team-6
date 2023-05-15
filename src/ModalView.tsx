import React from "react";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";

export function ModalView(props: ModalProps) {
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
                        <h4>Quantity: {props.quantity}</h4>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button> Add To Cart</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

import React from "react";
import { Card, Button } from "react-bootstrap";
import { formatCards } from "./extras/formatMoney";
import { ModalView } from "./ModalView";

type Product = {
    name: string;
    image: string;
    price: number;
    quantity: number;
    stock: number;
    in_stock: boolean;
    type: string;
};

export function ProductCards({
    name,
    image,
    price,
    quantity,
    stock,
    in_stock,
    type
}: Product) {
    const amount = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    stock = 10;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    in_stock = true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type = "item";
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                height="200px"
                src={image}
                alt="Product img"
                style={{ objectFit: "cover" }}
                onClick={() => setModalShow(true)}
            />
            <ModalView
                name={name}
                image={image}
                price={price}
                quantity={quantity}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">
                        {formatCards(price)}
                    </span>
                </Card.Title>
                <div className="mt-auto">
                    {amount < 1 ? (
                        <Button className="w-100">Add to Cart</Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button>-</Button>
                                <div>
                                    added{" "}
                                    <span className="fs-3">{quantity}</span>
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button variant="danger" size="sm">
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

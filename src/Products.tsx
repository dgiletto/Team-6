import React from "react";
import { Card, Button } from "react-bootstrap";
import { formatCards } from "./extras/formatMoney";
import { ModalView } from "./ModalView";
import { useShoppingCart } from "./context/shoppingCartContext";

type Product = {
    name: string;
    image: string;
    price: number;
    quantity: number;
    stock: number;
    in_stock: boolean;
    type: string;
    description: string;
};

export function ProductCards({
    name,
    image,
    price,
    quantity,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    stock,
    in_stock,
    type,
    description
}: Product) {
    const {
        getItemQty,
        increaseItemQty,
        decreaseItemQty,
        increaseCartQty,
        decreaseCartQty,
        removeFromCart
    } = useShoppingCart();
    const amount = getItemQty(name);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    quantity = 0;
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
                stock={stock}
                description={description}
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
                        <Button
                            className="w-100"
                            style={{ backgroundColor: "#829fda" }}
                            disabled={amount >= stock}
                            onClick={() => {
                                decreaseItemQty(name);
                                increaseCartQty(name);
                            }}
                        >
                            Add to Cart
                        </Button>
                    ) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{ gap: ".5rem" }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{ gap: ".5rem" }}
                            >
                                <Button
                                    style={{ backgroundColor: "#829fda" }}
                                    onClick={() => {
                                        increaseItemQty(name, 1);
                                        decreaseCartQty(name);
                                    }}
                                >
                                    -
                                </Button>
                                <div>
                                    <span className="fs-3">{amount}</span> in
                                    cart
                                </div>
                                <Button
                                    style={{ backgroundColor: "#829fda" }}
                                    disabled={amount >= stock}
                                    onClick={() => {
                                        increaseCartQty(name);
                                        decreaseItemQty(name);
                                    }}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                style={{ backgroundColor: "#cc5237" }}
                                onClick={() => {
                                    increaseItemQty(name, amount);
                                    removeFromCart(name);
                                }}
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

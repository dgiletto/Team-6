import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import products from "../data/products.json";
import React from "react";
import { formatCards } from "../extras/formatMoney";
import { images } from "../images";

type cartItemProps = {
    name: string;
    quantity: number;
};

export function CartItem({ name, quantity }: cartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const { increaseCartQty } = useShoppingCart();
    const { decreaseCartQty } = useShoppingCart();
    const { increaseItemQty } = useShoppingCart();
    const { decreaseItemQty } = useShoppingCart();

    const item = products.find((i) => i.name == name);

    if (item == null) {
        return null;
    }

    return (
        <Stack
            direction="horizontal"
            gap={2}
            className="d-flex align-items-center"
        >
            <img
                src={images[item.image]}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 1 && (
                        <span className="text-muted"> x{quantity}</span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: "1rem" }}>
                    {formatCards(item.price)}
                </div>
                <div>{formatCards(item.price * quantity)}</div>
                <div
                    className="d-flex align-items-center justify-content-left"
                    style={{ gap: ".5rem" }}
                >
                    <Button
                        className="w-25"
                        style={{ backgroundColor: "#829fda" }}
                        onClick={() => {
                            increaseItemQty(name, 1);
                            quantity > 1
                                ? decreaseCartQty(name)
                                : removeFromCart(item.name);
                        }}
                    >
                        -
                    </Button>
                    <Button
                        className="w-25"
                        style={{ backgroundColor: "#829fda" }}
                        disabled={item.stock <= 0}
                        onClick={() => {
                            increaseCartQty(name);
                            decreaseItemQty(item.name);
                        }}
                    >
                        +
                    </Button>
                    <Button
                        variant="outline-danger"
                        onClick={() => {
                            increaseItemQty(name, item.quantity);
                            removeFromCart(item.name);
                        }}
                    >
                        &times;
                    </Button>
                </div>
            </div>
        </Stack>
    );
}

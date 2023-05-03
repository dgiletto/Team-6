import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import products from "../data/products.json";
import React from "react";
import { formatCards } from "../extras/formatMoney";

type cartItemProps = {
    name: string;
    quantity: number;
};

export function CartItem({ name, quantity }: cartItemProps) {
    const { removeFromCart } = useShoppingCart();
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
                src={item.image}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    (item.name)
                    {quantity > 1 && (
                        <span className="text-muted">{quantity}x</span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: "3rem" }}>
                    {formatCards(item.price)}
                </div>
                <div>{formatCards(item.price * quantity)}</div>
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(item.name)}
                >
                    &times;
                </Button>
            </div>
        </Stack>
    );
}

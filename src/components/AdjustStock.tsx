import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import products from "../data/products.json";

export function AdjustStock(name: string): JSX.Element {
    const [numAdd, setNumAdded] = useState<string>("");
    const val = parseInt(numAdd) || 0;
    function changeStock(name: string, amount: number) {
        products.map((product) => {
            if (product.name === name) {
                product.stock = amount;
            }
        });
    }
    return (
        <div>
            <Form.Group controlId="formEditStock">
                <Form.Label>Enter Quantity:</Form.Label>
                <Form.Control
                    type="number"
                    value={numAdd}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumAdded(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={() => changeStock(name, val)}>Change</Button>
        </div>
    );
}

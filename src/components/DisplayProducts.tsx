import { Product } from "../interfaces/products";
import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import prodsList from "../data/products.json";
import { images } from "../images";

const { PRODUCTS }: Record<string, Product[]> = prodsList as Record<
    string,
    Product[]
>;

export function DisplayProducts(): JSX.Element {
    const [allProducts, setAllProducts] = useState<Product[]>(PRODUCTS);
    const [cart, setCart] = useState<Product[]>([]);
    function add2Cart(item: Product) {
        if (!cart.includes(item)) {
            const newCart: Product[] = [...cart, item];
            setCart(newCart);
        }
        setAllProducts(allProducts);
    }

    /*function clearCart() {
        const newCart: Product[] = [];
        setCart(newCart);
    }*/

    return (
        <div>
            <h3>Choose Products</h3>
            <Row>
                {allProducts.map((product: Product) => (
                    // eslint-disable-next-line react/jsx-key
                    <Col>
                        <div key={product.name} style={{ marginBottom: "4px" }}>
                            <div>
                                <img
                                    src={images[product.image]}
                                    alt="Product Image"
                                />
                                <div>{product.name}</div>
                            </div>
                            <Button
                                className="button"
                                onClick={() => add2Cart(product)}
                                size="sm"
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

/*<Col> 
    <strong>Cart:</strong>
        {cart.map((product: Product) => (
            <li key={product.name}>{product.name}</li>
        ))}
    <Button onClick={clearCart}>Clear Cart</Button>
</Col> After line 53
*/

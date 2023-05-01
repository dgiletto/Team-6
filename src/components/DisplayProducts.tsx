import { ProductCards } from "../Products";
import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../data/products.json";
import { images } from "../images";
//import useCart from "../hooks/useCart";
//import useProducts from "../hooks/useProducts";

export function DisplayProducts(): JSX.Element {
    // const { dispatch, REDUCER_ACTIONS, cart } = useCart();
    // const { products } = useProducts();

    //const pageContent: ReactElement | ReactElement[] = <p>Loading</p>;

    return (
        <div>
            <Row md={2} xs={1} lg={3} className="g-3">
                {products.map((product) => (
                    <Col key={product.name}>
                        <ProductCards
                            {...product}
                            image={images[product.image]}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

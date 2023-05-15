import { ProductCards } from "../Products";
import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../data/products.json";
import { images } from "../images";

export function DisplayProductsType(type: string): JSX.Element {
    return (
        <div>
            <Row md={2} xs={1} lg={3} className="g-3">
                {products
                    .filter((product): boolean => product.type === type)
                    .map((product) => (
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

import { ProductCards } from "../Products";
import React from "react";
// import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
// import { Button, Row, Col } from "react-bootstrap";
import products from "../data/products.json";

export function DisplayProducts(): JSX.Element {
    return (
        <div>
            <Row md={2} xs={1} lg={3} className="g-3">
                {products.map((product) => (
                    <Col key={product.name}>
                        <ProductCards {...product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

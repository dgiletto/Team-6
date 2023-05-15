import React from "react";
import { Table } from "react-bootstrap";
import products from "../data/products.json";
import { AdjustStock } from "./AdjustStock";

export function EditStock(): JSX.Element {
    return (
        <div>
            <Table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Change Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i: number) => (
                        <tr key={product.name}>
                            <th scope="row">{i + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.stock}</td>
                            <td>{AdjustStock(product.name)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

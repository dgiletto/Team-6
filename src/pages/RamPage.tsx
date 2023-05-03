import React from "react";
import { DisplayProductsType } from "../components/DisplayProductType";

export function Ram(): JSX.Element {
    return <div>{DisplayProductsType("RAM")}</div>;
}

export default Ram;

import React from "react";
import { DisplayProductsType } from "../components/DisplayProductType";

export function GCards(): JSX.Element {
    return <div>{DisplayProductsType("GPU")}</div>;
}

export default GCards;

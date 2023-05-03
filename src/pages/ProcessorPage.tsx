import React from "react";
import { DisplayProductsType } from "../components/DisplayProductType";

export function Processors(): JSX.Element {
    return <div>{DisplayProductsType("CPU")}</div>;
}

export default Processors;

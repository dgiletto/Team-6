import React from "react";
import { EditStock } from "../components/EditStock";
//import { GetUsers } from "../firebase-setup/GetUsers";

export function Admin(): JSX.Element {
    return (
        <div>
            <h1>Item Stock:</h1>
            <EditStock></EditStock>
        </div>
    );
}

export default Admin;

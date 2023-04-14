import React from "react";
import "./App.css";
import { DisplayProducts } from "./components/DisplayProducts";
//import { Product } from "./interfaces/products";
//import { Order } from "./interfaces/orders";
//import { Account } from "./interfaces/accounts";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Website-name">Website Name</div>
                {/*<Cart></Cart>*/}
            </header>
            <hr></hr>
            <DisplayProducts></DisplayProducts>
            <hr></hr>
        </div>
    );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./components/Home";
import Cart from "./components/Cart";

import "./App.css";
//import { DisplayProducts } from "./components/DisplayProducts";
//import { Product } from "./interfaces/products";
//import { Order } from "./interfaces/orders";
//import { Account } from "./interfaces/accounts";

/*
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <DisplayProducts></DisplayProducts>
            <hr></hr>
        </div>
    );
}
*/

const App = () => {
    {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Routes>
                        <Route path="/" Component={Home} />
                        <Route path="/cart" Component={Cart} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
};

export default App;

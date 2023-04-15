import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./Home";
import Processors from "./ProcessorPage";
import GraphicsCards from "./GraphicsCardPage";
import Rams from "./RamPage";
import MBoards from "./MBoardPage";
import Storage from "./StoragePage";
import Cases from "./CasesPage";
//import { Product } from "./interfaces/products";
//import { Order } from "./interfaces/orders";
//import { Account } from "./interfaces/accounts";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Website-name">Website Name</div>
                <div className="Cart">{/*<Cart><Cart>*/}</div>
            </header>
            <div>
                <BrowserRouter>
                    <Navigation />
                    <Routes>
                        <Route path="/Home" Component={Home} />
                        <Route path="/processors" Component={Processors} />

                        <Route
                            path="/graphics-cards"
                            Component={GraphicsCards}
                        />
                        <Route path="/Rams" Component={Rams} />
                        <Route path="/MBoards" Component={MBoards} />
                        <Route path="/Storage" Component={Storage} />
                        <Route path="Cases" Component={Cases} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;

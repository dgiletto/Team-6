import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Processors } from "./pages/ProcessorPage";
import { GCards } from "./pages/GraphicsCardPage";
import { Ram } from "./pages/RamPage";
import { MBoards } from "./pages/MBoardPage";
import { Storage } from "./pages/StoragePage";
import { Cases } from "./pages/CasesPage";
import { SignIn } from "./pages/SignInPage";
//import { Product } from "./interfaces/products";
//import { Order } from "./interfaces/orders";
//import { Account } from "./interfaces/accounts";

import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Website-name">Website Name</div>
            </header>
            <ShoppingCartProvider>
                <BrowserRouter>
                    <Navigate />
                    <Container className="mb-4">
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/processors"
                                element={<Processors />}
                            />
                            <Route path="/gcards" element={<GCards />} />
                            <Route path="/rams" element={<Ram />} />
                            <Route path="/mboards" element={<MBoards />} />
                            <Route path="/storage" element={<Storage />} />
                            <Route path="/cases" element={<Cases />} />
                            <Route path="/login" element={<SignIn />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </ShoppingCartProvider>
        </div>
    );
}

export default App;

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
import { SignupPage } from "./pages/SignupPage";
import { SigninPage } from "./pages/SignInPage";
import { Admin } from "./pages/AdminPage";
import AuthDetails from "./firebase-setup/AuthDetails";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <div className="flex-container">
                    <div className="Website-name">PCMart</div>
                    <AuthDetails></AuthDetails>
                </div>
            </header>
            <ShoppingCartProvider>
                <BrowserRouter>
                    <Navigate />
                    <Container className="mb-4">
                        <Routes>
                            <Route path="/homepage" element={<Home />} />
                            <Route
                                path="/processors"
                                element={<Processors />}
                            />
                            <Route path="/gcards" element={<GCards />} />
                            <Route path="/rams" element={<Ram />} />
                            <Route path="/mboards" element={<MBoards />} />
                            <Route path="/storage" element={<Storage />} />
                            <Route path="/cases" element={<Cases />} />
                            <Route path="/signin" element={<SigninPage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </ShoppingCartProvider>
        </div>
    );
}

export default App;

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
//import { Admin } from "./pages/AdminPage";
//import { Product } from "./interfaces/products";
//import { Order } from "./interfaces/orders";
//import { Account } from "./interfaces/accounts";
import { Container, Button } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { auth } from "./firebase-setup/firebase";

function App(): JSX.Element {
    //const navigate = useNavigate();
    const user = auth.currentUser;
    let uid = "no user";
    if (user) {
        uid = user.uid;
    }
    /*     {
        uid === "l2c8ViQj35RaGm06xy0MVJ82wQk2" && (
            <Route path="/admin" element={<Admin />} />
        );
    } */
    return (
        <div className="App">
            <header className="App-header">
                <div className="Website-name">PCMart</div>
            </header>
            {/*<Button onClick={() => console.log("uid is " + uid)}>Click</Button>*/}
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
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/signin" element={<SigninPage />} />
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

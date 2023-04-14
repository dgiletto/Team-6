import React from "react";
import "./Home.css";
import { DisplayProducts } from "./DisplayProducts";

const Home = () => {
    return (
        <div>
            <header>UD CISC275 with React Hooks and TypeScript</header>
            <hr></hr>
            <DisplayProducts></DisplayProducts>
            <hr></hr>
        </div>
    );
};

export default Home;

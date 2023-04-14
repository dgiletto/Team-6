import React from "react";
import { NavLink } from "react-router-dom";
//import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="Navigation-bar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/processors">Processors</NavLink>
            <NavLink to="/graphics-cards">Graphics Cards</NavLink>
        </div>
    );
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";
//import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="Navigation-bar">
            <NavLink
                className="NavLinks"
                style={({ isActive }) =>
                    isActive ? { color: "#326bdc" } : { color: "#829fda" }
                }
                to="/home"
            >
                <div>Home</div>
            </NavLink>
            <NavLink
                className="NavLinks"
                style={({ isActive }) =>
                    isActive ? { color: "#326bdc" } : { color: "#829fda" }
                }
                to="/processors"
            >
                Processors
            </NavLink>
            <NavLink
                className="NavLinks"
                style={({ isActive }) =>
                    isActive ? { color: "#326bdc" } : { color: "#829fda" }
                }
                to="/graphics-cards"
            >
                Graphics Cards
            </NavLink>
            <NavLink
                className="NavLinks"
                style={({ isActive }) =>
                    isActive ? { color: "#326bdc" } : { color: "#829fda" }
                }
                to="/Rams"
            >
                Rams
            </NavLink>
            <NavLink
                className="NavLinks"
                style={({ isActive }) =>
                    isActive ? { color: "#326bdc" } : { color: "#829fda" }
                }
                to="/MBoards"
            >
                Motherboards
            </NavLink>
            <NavLink
                className="NavLinks"
                style={({ isActive }) =>
                    isActive ? { color: "#326bdc" } : { color: "#829fda" }
                }
                to="/Storage"
            >
                Storage
            </NavLink>
            <NavLink
                className="NavLinks"
                style={({ isActive }) =>
                    isActive ? { color: "#326bdc" } : { color: "#829fda" }
                }
                to="/Cases"
            >
                Cases
            </NavLink>
        </div>
    );
};

export default Navigation;

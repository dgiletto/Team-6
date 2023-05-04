import React from "react";
import Signup from "../components/Signup";
import { Container } from "react-bootstrap";

export function SignIn(): JSX.Element {
    return (
        <Container
            className="d-flex align-items-center  justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup></Signup>
            </div>
        </Container>
    );
}

export default SignIn;

import React from "react";
import Signin from "../firebase-setup/Signin";
import { Container } from "react-bootstrap";

export function SigninPage(): JSX.Element {
    return (
        <Container
            className="d-flex align-items-center  justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signin></Signin>
            </div>
        </Container>
    );
}

export default SigninPage;

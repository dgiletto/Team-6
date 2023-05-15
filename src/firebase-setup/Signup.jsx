import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { auth } from "./firebase";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/homepage");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };
    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={signUp}>
                    <Form.Group id="email">
                        <Form.Label htmlFor="emailing">Email</Form.Label>
                        <Form.Control
                            id="emailing"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group id="passwd">
                        <Form.Label htmlFor="pswd">Password</Form.Label>
                        <Form.Control
                            id="pswd"
                            type="password"
                            placeholder="Password"
                            value={pwd}
                            onChange={(e) => {
                                setPwd(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <div>
                        <Button className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

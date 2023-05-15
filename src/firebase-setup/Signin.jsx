import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

export default function Signin() {
    const [email, SetEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate();
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pwd)
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
                <h2 className="text-center mb-4">Sign In</h2>
                <Form onSubmit={signIn}>
                    <Form.Group id="email">
                        <Form.Label htmlFor="emailing">Email</Form.Label>
                        <Form.Control
                            required
                            id="emailing"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                SetEmail(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group id="passwd">
                        <Form.Label htmlFor="pswd">Password</Form.Label>
                        <Form.Control
                            required
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
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

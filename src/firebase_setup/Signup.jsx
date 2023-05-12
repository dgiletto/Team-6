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
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group id="passwd">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
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

{
    /*
    This would go after </Card>
    <div className="w-100 text-center mt-2">Already have an account? Log In</div>; 
    */
}

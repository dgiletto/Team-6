import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
//import { useAuth } from "../context/AuthContext";

export default function Signup() {
    //const emailRef = useRef();
    //onst passwdRef = useRef();
    //const passwdConfRef = useRef();

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwdRef = useRef<HTMLInputElement | null>(null);
    const passwdConfRef = useRef<HTMLInputElement | null>(null);
    //const { signup } = useAuth();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    /*     function handleSubmit(e) {
        e.preventDefault();
        signup(emailRef.current.value, passwdRef.current.value);
    } */
    return (
        <>
            <Card>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="passwd">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            ref={passwdRef}
                            required
                        />
                    </Form.Group>
                    <Form.Group id="psswd-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            ref={passwdConfRef}
                            required
                        />
                        <Button className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form.Group>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
        </>
    );
}

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { auth } from "./firebase";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);
    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("user signed out");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            {authUser ? (
                <>
                    <p>Signed In as {authUser.email}</p>
                    <Button onClick={userSignOut}>Sign Out</Button>
                </>
            ) : (
                <p>You are not signed in</p>
            )}
        </div>
    );
};

export default AuthDetails;

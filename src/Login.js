import React from "react"
import "./Login.css"
import { Button } from "@material-ui/core";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import {  provider } from "./firebase"
import { login } from "./features/appSlice";


function Login() {
    const dispatch = useDispatch();
    const SignIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
            })
            );
        })
        .catch((error) => console.log(error.message))
    }
    return(
        <div className="login">
            <div className="login_container">
                <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt=""/>
                <Button variant ='outlined' onClick={SignIn}>Sign in</Button>
            </div>
        </div>
    )
}

export default Login;
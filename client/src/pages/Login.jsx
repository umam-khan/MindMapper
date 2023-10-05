import React from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css"
// import Nav from "../components/Nav"
import logo from "../components/assets/logo.png"

export default function Login() {
    return (
        <>
            <div className="Login">
                <div className="loginMain">
                    <div className="loginMainLeft">
                        <img src={logo} alt="" />
                    </div>
                    <div className="loginMainRight">
                        <div className="loginForm">
                            <h2>LOGIN</h2>
                            {/* <label for="email">Email:</label> */}
                            <input type="text" name="email" placeholder="Enter Your Email Address"/>
                            {/* <label for="email">Password:</label> */}
                            <input type="text" name="password" placeholder="Enter Your Password"/>
                            <div className="newUser">
                                New User ? <Link to="/register">Register Here</Link>
                            </div>
                            <button type="submit" className="submitBTN">LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
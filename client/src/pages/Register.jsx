import React from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css"
// import Nav from "../components/Nav"
import logo from "../components/assets/logo.png"

export default function Register() {
    return (
        <>
            <div className="Register">
                <div className="registerMain">
                    <div className="registerMainLeft">
                        <img src={logo} alt="" />
                    </div>
                    <div className="registerMainRight">
                        <div className="registerForm">
                            <h2>REGISTER</h2>
                            {/* <label for="email">Email:</label> */}
                            <input type="text" name="email" placeholder="Enter Your Email Address" />
                            {/* <label for="email">Password:</label> */}
                            <input type="text" name="password" placeholder="Enter Your Password" />
                            <input type="text" name="conpassword" placeholder="Confirm Password" />
                            <div className="newUser">
                                Already a User ? <Link to="/login">Login</Link>
                            </div>
                            <button type="submit" className="submitBTN">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
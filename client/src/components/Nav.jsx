import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import './Nav.css'
import logo from './assets/logo.png'

export default function Nav(){

    return (
        <>
            <nav style={{padding : '0px 20px'}}  className="navbar">
                <div className="navbar__logo">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                
                <ul  style={{marginBottom : "0px", paddingLeft: "0"}} className={"navbar__list"}>
                    <li>
                        <NavLink to="/community">Community</NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="/education">Education</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/helplines">Helplines</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact us</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
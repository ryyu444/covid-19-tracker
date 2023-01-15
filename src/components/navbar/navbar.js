import React from "react";
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import './navbar.css'

const NavBar = () => {
    return (
        <ul className="nav-bar">
            <li className="nav-button">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-button">
                <NavLink to="/overview">COVID-19 Overview</NavLink>
            </li>
            <li className="nav-button">
                <NavLink to="/search">Search By Country</NavLink>
            </li>
            <li className="nav-button">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="logo">
                <img src={logo} 
                alt="logo" width={"50"} height={"50"} />
            </li>
        </ul>
    )
}

export default NavBar
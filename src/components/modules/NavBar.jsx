import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/films" activeClassName="active">Films</NavLink>
                </li>
                <li>
                    <NavLink to="/peoples" activeClassName="active">Peoples</NavLink>
                </li>
                <li>
                    <NavLink to="/planets" activeClassName="active">Planets</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;

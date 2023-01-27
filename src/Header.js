import React from "react";
import logo from "./images/react-logo.svg";

function Header(){
    return(
        <>
            <header>
                <nav className="nav--main">
                    <img src={logo} className="img-logo" alt="react logo"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
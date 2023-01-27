import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import logo from "./images/react-logo.svg";

function Header(){
    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="react logo" style={{ width: '40px'}}/>
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
function MainContent(){
    return(
        <>
            <h1>Why I started learning react</h1>
            <ol>
                <li>I wanted to learn a new skill</li>
                <li>I want to make money with it</li>
                <li>React is currently a very popular front-end framework</li>
                <li>It also seems very cool</li>
            </ol>
        </>
        
    )
}
function Footer(){
    return(
        <>
            <footer>
                <small>© 2023 Nonyelu development. All rights reserved.</small>
            </footer>
        </>
    )
}

function Page(){
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);


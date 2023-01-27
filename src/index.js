import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Header.js"; //./ denotes a file in my project while if it doesn't have ./ it means its a package in my dependencies

function MainContent(){
    return(
        <>
            <h1 className="title">Why I started learning react</h1>
            <ol className="main-list">
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
            <footer className="footer">
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


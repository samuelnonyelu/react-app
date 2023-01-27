import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Header.js"; //./ denotes a file in my project while if it doesn't have ./ it means its a package in my dependencies
import MainContent from "./MainContent";
import Footer from "./Footer";



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


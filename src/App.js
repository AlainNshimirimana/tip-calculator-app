import React, {useState} from "react";
import Form from "./components/Form";
import Output from "./components/OutputForm";
import Title from "./components/images/logo.svg";
import "./css/App.css";

function App(){
    return <>
    <header><img src={Title}/></header>
        <div className="main-container">
            <Form/>
            <Output/>
        </div>
    </>
}

export default App;
import React, {useState} from "react";
import Form from "./components/Form";
import Title from "./components/images/logo.svg";
import "./css/App.css";
import "./css/Form.css";

function App(){
    return <>
    <header><img src={Title}/></header>
        <div className="main-container">
            <div className="form-container">
            <Form/>
            </div>
        </div>
    </>
}

export default App;
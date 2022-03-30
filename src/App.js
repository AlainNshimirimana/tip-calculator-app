import React, {useState} from "react";
import Form from "./components/Form";
import Title from "./components/images/logo.svg"

function App(){
    return <>
    <header><img src={Title}/></header>
        <Form/>
    <h1>Hello World</h1>
    </>
}

export default App;